<?php
	include 'connect.php';
	//$page_no = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;
	
//  $page_no = 2;
//	$page = 1;
//	
//	//查询数据
//	$sql = 'select username,email,age from user order by age desc limit '. ($page-1)*2 .',2';
    //$sql = 'select * from goodlist order by id limit 0,4';
	//$sql = 'select * from goodlist order by id limit '. ($page_no-1)*12 .',12';
	$sql = 'select * from goods';
	
	//查询前设置编码，放置输出乱码
	$result = $conn->query('set names utf8');
	
	//查询数据库获取数据
	$result = $conn->query($sql);
	
	//使用查询结果集
	$row = $result->fetch_all(MYSQLI_ASSOC);
	
//	$result->clonse();
	
	echo json_encode($row,JSON_UNESCAPED_UNICODE);
	
//	$conn->clonse();
?>