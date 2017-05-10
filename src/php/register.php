<?php


include 'DBHelper.php';
	
	$uname = $_POST["uname"];
	$password = $_POST["password"];
	// $phone = $_POST["phone"];
	//判断当前 email 是否已存在数据表中
	$emailCheck = "select * from username where `uname` ='$uname'";
	$result = query($emailCheck);

	//当前 email 不存在，执行插入操作
	if(count($result) < 1){
		$sql = "insert into username(uname, password) values('$uname', '$password')";
		// echo $sql;
		$excute = excute($sql);
		if($excute){
			echo "{state: true}";
		} else {
			echo "{state: false, message: '插入失败！！！'}";
		}
	} else {
		echo "{state: false, message: 'uname 已被注册！！！'}";
	}

?>