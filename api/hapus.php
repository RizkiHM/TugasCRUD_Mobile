<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$pesan = [];

$kode = $_GET['kode'];
$query = mysqli_query($koneksi,"delete from pengguna where kode = '$kode'");
if ($query) {
	http_response_code(201);
	$pesan['status'] = 'sukses';
}else{
	http_response_code(422);
	$pesan['status'] = 'gagal';
}

echo json_encode($pesan);
echo mysqli_error($koneksi);
?>