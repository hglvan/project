<?php


include 'DBHelper.php';
	
	$iphone = $_POST["iphone"];
	$password = $_POST["password"];
	// $phone = $_POST["phone"];
	//判断当前 email 是否已存在数据表中
	$emailCheck = "select * from username where `iphone` ='$iphone'";
	$result = query($emailCheck);

	//当前 email 不存在，执行插入操作
	if(count($result) < 1){
		$sql = "insert into username(iphone, password) values('$iphone', '$password')";
		// echo $sql;
		$excute = excute($sql);
		if($excute){
			echo "{state: true}";
		} else {
			echo "{state: false, message: '插入失败！！！'}";
		}
	} else {
		echo "{state: false, message: 'iphone 已被注册！！！'}";
	}

?>