import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: any;
  password: any;
  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) { }
  ngOnInit() {
  }
  prosesLogin(): void {
    if (this.email != null && this.password != null) {
      const data = {
        email: this.email,
        password: this.password,
      };
      this.authService.postMethod(data, 'proses_login.php').subscribe({
        next: (hasil) => {
          if (hasil.status_login == 'berhasil') {
            this.authService.saveData('token', hasil.token);
            this.authService.saveData('email', hasil.email);
            this.email = null;
            this.password = null;
            this.router.navigateByUrl('/home');
          } else {
            this.authService.notifikasi('email dan Password Salah');
          }
        },
        error: (e) => {
          this.authService.notifikasi('Gagal Login, periksa koneksi internet');
        }
      });
    } else {
      this.authService.notifikasi('email dan Password Tidak Boleh Kosong');
    }
  }
}
