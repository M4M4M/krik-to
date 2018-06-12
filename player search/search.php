<?php

	header("Content-type: text/event-stream");
    //data shall be driven by here


    $connection = mysqli_connect("localhost","root","","kriketo") or die("Error " . mysqli_error($connection));
    extract($_GET);

    //fetch table rows from mysql db
    $sql = "select * from players where fname=$player";
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

    //create an array
    $dataarray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $dataarray[] = $row;
    }
    echo json_encode($dataarray);

    //close the db connection
    mysqli_close($connection);
?>
?>
