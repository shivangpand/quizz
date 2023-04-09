<?php
    $server ="localhost";
    $username = "root";
    $password="";
    $dbname = "quizapp";
    $con = mysqli_connect($server,$username,$password,$dbname);
    if(!$con){
        die("abc error");
        mysqli_connect_error();
    }
    $result = $con-> query("select * from quizquestions");
    // $x = $result->fetch_assoc();
    $data1 = array();
    while($row = $result->fetch_assoc()) {
        array_push($data1,$row);
        // echo "Question:" . $row["question"]. "optionA:" . $row["optionA"]. " - optionB: " . $row["optionB"]. "optionC" . $row["optionC"]. "<br>";
      }

        // Convert the data to JSON format
        $json_data = json_encode($data1);

        // Send the JSON data back to the client
        echo $json_data;
    ?>
