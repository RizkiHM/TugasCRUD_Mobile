import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Http } from "@capacitor-community/http";


@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.page.html',
  styleUrls: ['./home-edit.page.scss'],
})
export class HomeEditPage implements OnInit {
  kode: any;
  nama: any;
  email: any;
  password: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public LoadingController: LoadingController,
  ) {
    this.route.params.subscribe((param: any) => {
      this.kode = param.kode;
      console.log(this.kode);
      this.ambilPengguna(this.kode);
    })
  }

  ngOnInit() {
  }


  ambilPengguna(kode) {
    this._apiService.ambilPengguna(kode).subscribe((res: any) => {
      console.log('sukses', res);
      let pengguna = res;
      //console.log(pengguna);
      this.nama = pengguna.nama;
      this.email = pengguna.email;
      this.password = pengguna.password;
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    })
  }


  editPengguna() {
    let url = this._apiService.apiURL() + "/edit.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        kode: this.kode,
        nama: this.nama,
        email: this.email,
        password: this.password
      },
    }).then((data) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Edit Data Pengguna',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/pengguna');
    }, (err) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Edit Data Pengguna',
        buttons: ['OK']
      }).then(res => {
        res.present()
      });
    })
  }

}
