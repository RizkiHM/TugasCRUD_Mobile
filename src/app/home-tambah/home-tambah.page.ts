import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Http } from "@capacitor-community/http";
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-home-tambah',
  templateUrl: './home-tambah.page.html',
  styleUrls: ['./home-tambah.page.scss'],
})
export class HomeTambahPage implements OnInit {
  kode: any;
  email: any;
  nama: any;
  password: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,

  ) { }

  ngOnInit() {
  }

  addPengguna() {
    let url = this._apiService.apiURL() + "/tambah.php";
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
      this.kode = '';
      this.nama = '';
      this.email = '';
      this.password = '';
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Input data Pengguna',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/Pengguna');
    }, (error) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Input data Pengguna',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
    })
  }

}