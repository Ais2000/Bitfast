<?php 
    session_start();
    include ('../../db_connect.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="../css/login_css/style.css" />
    <title>Bitshares</title>
</head>

<body>
    <div class="container">
        <div class="forms-container">
            <div class="signin-signup" id="registrationform">
                <form action="login.php" class="sign-in-form" method="get">
                    <h2 class="title">Sign in</h2>
                    <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="text" id="Username" name="username" placeholder="Username" value="<?php if (isset($_COOKIE["user"])){echo $_COOKIE["user"];}?>" required/>
                    </div>
                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password" id="Password" name="password" required/>
                    </div>
                    <span>
                        <?php
                          if (isset($_SESSION['message'])){
                             echo $_SESSION['message'];
                          }
                              unset($_SESSION['message']);
                        ?>
                    </span>
                    <input type="checkbox" name="remember" id="remembermeCB" <?php if (isset($_COOKIE["user"]) && isset($_COOKIE["pass"])){ echo "checked";}?>>
                    <label for="remembermeCB" id="rememberme">Remember Me <span style="margin-left:2%"></span></label>
                    <input type="submit" value="Login" class="btn solid" name="login" />
                </form>

                <form class="sign-up-form" id="registrationForm" onsubmit="return false">
                    <h2 class="title">Sign Up</h2>
                    <div class="input-field">
                        <i class="fas fa-address-card"></i>
                        <input type="text" placeholder="Full Name" id="fullname" name="fullname" />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Username" id="new-username" name="username" required />
                    </div>
                    <div class="input-field">
                        <i class=""></i>
                        <input type="email" id="Email" placeholder="Email" name="email" />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-phone"></i>
                        <input type="number" placeholder="Phone Number" id="phonenumber" placeholder="Phone Number" name="phone-number" />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password" id="new-password" name="new-password" required />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Confirm Password" id="confirm-password" name="confirm-password" required />
                    </div>
                    <input type="checkbox" name="" id="acceptCB">
                    <label for="acceptCB" id="accept">Accept Terms of Use & Privacy Policy <span style="margin-left:-15%"></span></label>
                    <div id="regitererror" style="color: red;"></div>
                    <input type="submit" class="btn" value="Register" name="submit" onclick="validateform()" />
                </form>
            </div>
        </div>

        <div class="panels-container">
            <div class="panel left-panel">
                <div class="content">
                    <h3>Don't Have An Account ?</h3>
                    <p>
                        Experience fast money transaction with B-Cash Wallet
                    </p>
                    <button class="btn transparent" id="sign-up-btn">
                        Register
                    </button>
                </div>
                <img src="../images/log.png" class="image" alt="" />
            </div>
            <div class="panel right-panel">
                <div class="content">
                    <h3>One Of Us ?</h3>
                    <p>
                        Experience fast money transaction with B-Cash Wallet
                    </p>
                    <button class="btn transparent" id="sign-in-btn">
                        Log in
                    </button>
                </div>
                <img src="../images/register.svg" class="image" alt="" />
            </div>
        </div>
    </div>

    <!---SCRIPT--->
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script type="text/javascript" src="../script/btsdex.js"></script>
    <script src="../script/app.js"></script>
    <script src="../script/register.js"></script>

</body>

</html>