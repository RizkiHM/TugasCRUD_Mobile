import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
  ) {

  }

  //link API
  apiURL() {
    return "http://localhost/api";
  }

  getPengguna() {
    return this.http.get(this.apiURL() + '/tampil.php');
  }

  deletePengguna(id) {
    return this.http.delete(this.apiURL() + '/hapus.php?kode=' + id);
  }

  ambilPengguna(id) {
    return this.http.get(this.apiURL() + '/lihat.php?kode=' + id);
  }


}
