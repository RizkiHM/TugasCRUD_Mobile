<?php
require 'koneksi.php';
$data = [];
$kode = $_GET['kode'];
$query = mysqli_query($koneksi,"select * from pengguna where kode = '$kode'");
$jumlah = msqli_num_rows($query);
if ($jumlah == 1){
	$row = mysqli_fetch_object($query);
	$data = $row;
}

echo json_encode($data);
echo mysqli_error($koneksi);
?>