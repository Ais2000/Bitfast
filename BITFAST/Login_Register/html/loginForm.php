
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <script
      src="https://kit.fontawesome.com/64d58efce2.js"
      crossorigin="anonymous"
    ></script>

    <!--tab logo-->
    <link rel="shortcut icon" href="\dashboard\icons\logo1.png" type="image/x-icon">

    <link rel="preload" href="../css/style.css" as="style" onload="this.rel='stylesheet'" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
    <title>Login</title>
</head>

<body>

    <div class="header">
        <img src="..\images\icons\logo with name.png">
    </div>

    <div class="container">
        <div class="center" id="loginform">
            <h2>Welcome</h2>
            <form method="post" action="login.php">
                <!-- <h5>Username</h5> -->
                <input value="<?php if (isset($_COOKIE["user"])){echo $_COOKIE["user"];}?>" type="text" id="Username" placeholder="Username" name="username"><br>
                <!-- <h5>Password</h5> -->
                <input type="password" id="Password" placeholder="Password" name="password"><br>
                <input type="checkbox" name="" id="remembermeCB">
                <label for="remembermeCB" id="rememberme">Remember Me <span style="margin-left:2%"></span></label>
                <div id="loginerror" style="color:red;"></div>
                <input type="submit" id="submit" value="Login" name="login"> <br />
                <button type="button" onclick="window.location.replace('register.html');" id="signup">Sign up</button>
            </form>
            <span>
                <?php
		          if (isset($_SESSION['message'])){
			         echo $_SESSION['message'];
		          }
		              unset($_SESSION['message']);
	            ?>
            </span>
        </div>
        <div class="vector">
            <div class="vectorwithtext">
                <img src="..\images\abi2.png">
                <h3 style="font-weight: 300;">Bitshares<span style="font-weight: 700;"> Express</span></h3>
            </div>
        </div>
    </div>
</body>

<!--Backend Process-->
<script src="http://code.jquery.com/jquery-latest.js"></script>
<script type="text/javascript" src="../script/btsdex.js"></script>

</html>