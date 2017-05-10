<?php
	include "DBHelper.php";
	
	//记得SQL的变量拼接要用引号圈住，下面两种方式拼接都可以
	$uname = $_POST["uname"];
	$password = $_POST["password"];
	$sql = "select * from username where uname='$uname' and password='$password'";
	// $sql = "select * from username where email='" .  $_POST["email"] . "' and password='" . $_POST["password"] . "'";
	$result = query($sql);
	//当前 email 不存在，执行插入操作
	if(count($result) < 1){
		// echo "{state: false, message: '登录失败！！！'}";
		echo '{"state": false, "message": "登录失败！！！"}';
	} else {
		// echo "{state: true, message: '登录成功！！！'}";
		echo '{"state": true, "message": "登录成功！！！"}';
		
	}


?>