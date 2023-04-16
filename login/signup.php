<?php 
header('Location: login.html');
if(isset($_POST['email'])){
	$server = "localhost";
	$username = "root";
	$password = "";
    $dbname = "quizapp";
	$con = mysqli_connect($server,$username,$password,$dbname);
	if(!$con){
		die("connection to this database failed due to" . mysqli_connect_error());
    }
		$email = $_POST['email'];
		$username = $_POST['username'];
		$password = $_POST['password'];
		$sql = "INSERT INTO `quizapp`.`users`(`email`,`name`,`password`) VALUES('$email','$username','$password')";

		if($con->query($sql)==true){
			$insert = true;
		}
		else{
			echo "ERROR:$sql <br> $con->error";
			$con->close();
		}
}
		?>
