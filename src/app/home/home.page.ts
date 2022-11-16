import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from "../api.service";
@Component({
  selector: 'app-Home',
  templateUrl: './Home.page.html',
  styleUrls: ['./Home.page.scss'],
})
export class HomePage {
  kode: any;
  nama: any;
  email: any;
  password: any;
  Pengguna: any[];
  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) {
    this.getPengguna();
  }

  ngOnInit() {
    console.log('cek fungsi halaman event init jalan');
  }

  ionViewDidEnter() {
    console.log("jika selesai loading");
    this.getPengguna();
  }

  getPengguna() {
    this._apiService.getPengguna().subscribe((res: any) => {
      console.log("sukses", res);
      this.Pengguna = res;
    }, (error: any) => {
      console.log("gagal", error);
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal memuat data Pengguna',
        buttons: ['OK']
      }).then(res => {
        res.present();
      })
    })
  }



  deletePengguna(kode) {

    this.alertController.create({
      header: 'perhatian',
      subHeader: 'Yakin menghapus data ini?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('dibatalkan', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any) => {
            //jika tekan yakin
            this._apiService.deletePengguna(kode).subscribe((res: any) => {
              console.log("sukses", res);
              this.getPengguna();
            }, (error: any) => {
              console.log("error", error);
              this.alertController.create({
                header: 'Notifikasi',
                message: 'gagal memuat data Pengguna',
                buttons: ['OK']
              }).then(res => {
                res.present();
              })
            })
          }
        }
      ]
    }).then(res => {
      res.present();
    })
  }

}
