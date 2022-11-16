<?php
require 'koneksi.php'

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];
$kode = trim($data['kode'];
$nama = trim($data['nama'];
$email =  trim($data['email'];
$password = trim($data['password'];

if ($kode != '' and $nama != '' and $email != '' and $password != '') {
	$query = mysqli_query($koneksi,"insert into pengguna(kode,nama,email,password) values('$kode','$nama','$email','$password')");

}else{
	$query = mysqli_query($koneksi,"delete from pengguna where kode='$kode'");
}

/*
if ($query) {
	http_response_code(201);
	$pesan['status'] = 'sukses';
}else{
	http_response_code(422);
	$pesan['status'] = 'gagal';
}
*/

echo json_encode($pesan);
echo mysqli_error($koneksi);
?>