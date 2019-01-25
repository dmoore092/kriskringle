<?php
    
    //echo "test";

    $db_host = "localhost";
    $db_user = "root";
    $db_pass = "root";
    $db_name = "kriskringle";

    $mysqli = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

    if(!$mysqli){
        echo "connection error: " . mysqli_connect_error();
        die();
    }
    else{
        if(isset($_POST['who'])){
            $query = "SELECT * FROM preferences WHERE name ='". $_POST['name']."';";
            $result = mysqli_query($mysqli, $query);
            if($result){
                //echo $result["name"];
                while($row = mysqli_fetch_assoc($result)){
                    //echo $row["name"] ." ". $row["pref1"] ." ".  $row["pref2"] ." ".  $row["pref3"];
                    $name = $row["name"];
                    $pref1 = $row["pref1"];
                    $pref2 = $row["pref2"];
                    $pref3 = $row["pref3"];
                    $pronoun1 = $row["pronoun1"];
                    $pronoun2 = $row["pronoun2"];
                }
            }
        }
    }
    $mysqli = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

    if(!$mysqli){
        echo "connection error: " . mysqli_connect_error();
        die();
    }
    else{
        if(isset($_POST["give-prefs"])){
            //block cross-site scripting, html entities(apersand etc), trim white space
            $pref1 =  htmlentities(strip_tags(trim($_POST["pref1"])));
            $pref2 =  htmlentities(strip_tags(trim($_POST["pref2"])));
            $pref3 =  htmlentities(strip_tags(trim($_POST["pref3"])));
    
            //block sql injections
            $pref1 = mysqli_real_escape_string($mysqli, $_POST["pref1"]);
            $pref2 = mysqli_real_escape_string($mysqli, $_POST["pref2"]);
            $pref3 = mysqli_real_escape_string($mysqli, $_POST["pref3"]);
    
            //$name = $_POST["name"];
            //build the database query
            $query   = "UPDATE preferences 
                        SET pref1 = '".$pref1."',
                            pref2 = '".$pref2."',
                            pref3 = '".$pref3."'
                        WHERE name = '".$_POST['name']."';";
            //echo $query;
            $result = mysqli_query($mysqli, $query);
            header("Location: http://localhost:3000/Main/");
            die();

            //$num_rows = mysqli_affected_rows($mysqli);
        }
    }

?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="mysql.css">
    <title>Kris Kringle 2019!</title>
  </head>
  <body>
      <img src="../frontend/img/santa.png" id = "santa1">
      <a href="http://localhost:3000/Main/"><p class="home-nav" id="back" >Back</p></a>
      <a href="http://localhost:3000/"><span class="home-nav" id="home" >Home</span></a>
      <img src="../frontend/img/frosty.png"/ id = "frosty">
      <h1 id="kk2019">Kris Kringle 2019</h1>
        <div class="login-wrapper">
            <div id="results">
                <?php   if(!$pref1){
                            echo "<p>Aww, {$name} hasn't added {$pronoun1} preferences yet, go bug {$pronoun2} to add them here!</p>";
                        }
                        else{
                            echo "<h2>Gift Ideas</h2>";
                            echo "<hr />";
                            echo "<h3>$name wants...</h3>";
                            echo "<p>$pref1</p>";
                            echo "<p>$pref2</p>";
                            echo "<p>$pref3</p>";
                        }
                ?>
            </div>
        </div><!-- end of login-wrapper -->
      </div>
  </body>
</html>