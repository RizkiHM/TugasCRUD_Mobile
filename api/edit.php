<?php
require 'koneksi.php'
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$pesan = [];
$kode = ($data['kode'];
$nama = ($data['nama'];
$email =  ($data['email'];
$password = ($data['password'];

$query = mysqli_query($koneksi,"update pengguna set nama='$nama',email='$email',password='$password' where kode='$kode'");

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