<?php include "../db_connect.php"; 
    session_start();
    $query=mysqli_query($conn,"select * from tb_users where id='".$_SESSION['id']."'");
	$row=mysqli_fetch_assoc($query);
 ?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bitfast Wallet</title>

    <link rel="icon" href="../Login_Register/images/icons/bitfast.png" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!--tab logo-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/style_convert_popup.css">

    <script type="text/javascript" src="js/btsdex.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous">
    </script>
    <link rel="stylesheet" href="style.css">

    <script src="./js/dash.js"></script>



</head>

<body onload="getDashboardContent()">
    <div class="sidebar">
        <div class="logo">
            <img src="../Login_Register/images/bfast.png" width="" height="">
        </div>

        <div class="profile">
            <form class="form" id="form" action="" enctype="multipart/form-data" method="post">
                <div class="upload">
                    <?php
                        $id = $row["id"];
                        $name = $row["name"];
                        $image = $row["image"];
                    ?>
                    <img src="img/<?php echo $image; ?>" width=125 height=125 title="<?php echo $image; ?>">
                    <div class="round">
                        <input type="hidden" name="id" value="<?php echo $id; ?>">
                        <input type="hidden" name="name" value="<?php echo $name; ?>">
                        <input type="file" name="image" id="image" accept=".jpg, .jpeg, .png">
                        <i class="fa fa-camera" style="color: #fff;"></i>
                    </div>
                </div>
            </form>
            <p id="Username"><?php echo $row['name']; ?></p>
            <a href="" id="profile_username"><?php echo $row['username']; ?></a>
        </div>

        <div class="buttons">
            <div class="nonlogoutbtns">
                <button class="sidebar_btn" onclick="convert_process()"> <img src="icons/1.png" width="5%">
                    Dashboard</button>
                <button onclick="togglePopup('2')" class="sidebar_btn"> <img src="icons/4.png" width="5%">
                    Deposit</button>
                <button onclick="myFunction('1')" class="sidebar_btn"> <img src="icons/3.png" width="5%">
                    Withdraw</button>
                <button class="sidebar_btn" onclick="toggleSend('3')"> <img src="icons/2.png" width="5%">
                    Send</button>
                <button class="sidebar_btn" onclick="togglePaybills('4')"><img src="icons/5.png" width="5%">Pay Bills</button>

            </div>
            <a href="../ajax.php?action=logout"><button>logout</button></a>
        </div>
    </div>

    <div class="right">
        <div class="greetings">
            <h1 id="greetings">Hello There!</h1>
        </div>
        <div class="wallets">
            <h1 id="title">Wallets</h1>
            <div class="wallet">
                <h3>Peso Wallet</h3>
                <h3 id="phpamount" class="walletamount">PHP 0</h3>
            </div>
            <div class="wallet">
                <h3>Bitshares Wallet</h3>
                <h3 id="btsamount" class="walletamount bts-balance">Loading...</h3>
            </div><button onclick="convert_process()"><img src="./icons/convert-icon.png">Convert</button>
            <div class="miniconverter">
                <h1>Currency Converter</h1><input type="text" id="phpinput" oninput="calculateBTS()"><label for="phpinput">PHP</label><img src="./icons/convert-icon.png" alt=""><input type="text" id="btsinput" oninput="calculatePHP()"><label for="btsinput">BTS</label>
            </div>
        </div>
        <div class="convertionRate">
            <h1 style="background-color: red; border-top-left-radius: 25px; border-bottom-left-radius: 25px;" id="exchangerateBTS">? BTS</h1><img src="./icons/convert-icon.png" alt="">
            <h1>PHP 1</h1>
        </div>
        <div class="transaction" id="transaction">
            <h1>Transactions</h1>
        </div>
    </div>

    <div class="popup" id="popup-1">
        <div class="content">
            <div class="close close-btn" onclick="myFunction('1')">&times;</div>
            <h1>Withdraw</h1>
            <div class="box">
                <div class="item1">
                    <div class="peso">Peso Wallet</div>
                    <div class="php">PHP</div>
                </div>
            </div>

            <div class="raze">
                <div class="rad">
                    <p>Choose Method:
                    <p>
                    <div class="radio-container">
                        <input type="radio" id="windows" name="os" />
                        <label for="windows">Paypal</label>

                        <input type="radio" id="mac" name="os" />
                        <label for="mac">G-Cash</label>

                        <input type="radio" id="linux" name="os" />
                        <label for="linux">Bank Transfer</label>
                    </div>
                </div>
                <div class="box">
                    <div class="sh">
                        <form action="">
                            <div class="input-box">
                                <input type="text" required>
                                <label for=""><img src="icons/6.png" width="5%"> Input Amount:</label>
                            </div>

                            <div class="otp">
                                <p>We will send you an OTP</p>
                                <p>Enter Email or Phone Number</p>
                                <input placeholder="" class="num">
                            </div>
                            <button class="with-button">CONFIRM</button>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    </div>


    <div class="popup" id="popup-2">
        <div class="content">
            <div class="close close-btn" onclick="togglePopup('2')">&times;</div>

            <h1>Deposit</h1>
            <div class="box">
                <div class="item1">
                    <div class="peso">Peso Wallet</div>
                    <div class="php">PHP</div>
                </div>
                <div class="item2">
                    <p>
                        Bitshares Wallet <br>
                        <span class="bts-balance">Loading...</span>
                    </p>
                </div>
            </div>

            <div class="raze">
                <div class="rad">
                    <p>Choose Method:
                    <p>
                    <div class="radio-container">
                        <input type="radio" id="windows" name="os" />
                        <label for="windows">Paypal</label>

                        <input type="radio" id="mac" name="os" />
                        <label for="mac">G-Cash</label>

                        <input type="radio" id="linux" name="os" />
                        <label for="linux">Bank Transfer</label>
                    </div>
                </div>
                <div class="box">
                    <div class="sh">
                        <form action="">
                            <div class="input-box">
                                <label for=""><img src="icons/6.png" width="5%"> Input Amount:</label>
                                <input type="text" required>
                            </div>
                            <div class="otp">
                                <p>We will send you an OTP</p>
                                <p>Enter Email or Phone Number</p>
                                <input placeholder="" class="num">
                            </div>
                            <button class="dep-button">CONFIRM</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <!-- send money form -->
    <div id="btsModal" class="popup2">
        <div class="modal-content">

            <div class="close close-btn" onclick="toggleSend('3')">&times;</div>

            <h2>Send</h2>

            <div class="wallet-balance">
                <p>
                    Bitshares Wallet <br>
                    <span class="bts-balance1">Loading...</span>
                </p>

            </div>
            <div class="wallet-balance">
                <p>Peso Wallet <br>
                    <span>
                    </span>
                </p>
            </div>

            <p class="method-label">Choose Method</p>

            <div class="radio-methods">
                <label for="bts-option" class="options">
                    <input type="radio" id="bts-option" tabindex="1" name="selector" checked>
                    <span class="radio-span">BTS</span>
                </label>
                <label for="php-option" class="options">
                    <input type="radio" id="php-option" tabindex="2" name="selector">
                    <span class="radio-span">PHP</span>
                </label>
            </div>

            <form method="post">
                <div class="form" id="bts-form">
                    <div class="input-amount">
                        <img src=".\icons\icon5.png" width='40vw'>
                        <label for="bts-amount"><b><i class="fas fa-coins form-icons"></i> Input Amount in BTS</b> </label>
                        <input type="number" id='bts-amount' placeholder="ex. 0.0001" step="0.00001" required name="amount">
                    </div>

                    <div class="input-receiver">
                        <img src=".\icons\profile%2520icon.png" width='35vw'>
                        <label for="bts-receiver"><b><i class="fas fa-user form-icons"></i> Input Receiver Account
                                Name</b></label>
                        <input type="text" id='bts-receiver' placeholder="ex. bts-user-test" required name="reciever">

                    </div>

                    <div class="input-privateKey">
                        <label for="privateKey"><b><i class="fas fa-user form-icons"></i> Input Private Key</b></label>
                        <input type="text" id='privateKey' required>
                    </div>
                    <p id="error"></p>
                    <div class="center">
                        <button class="send-btn" id="send-bts" type="submit">Confirm</button>
                    </div>
                </div>
            </form>

            <div class="form" id="php-form">
                <form method="POST">
                    <div class="input-amount">
                        <label for="php-amount"><b><i class="fas fa-coins form-icons"></i> Input Amount in
                                PHP</b></label>
                        <input type="number" id='php-amount' name="peso" placeholder="ex. 100,000" required>
                    </div>

                    <div class="input-receiver">
                        <label for="php-receiver"><b><i class="fas fa-user form-icons"></i> Input Receiver Account
                                Name</b></label>
                        <input type="text" id='php-receiver' name="receiver" placeholder="ex. bts-user-test" required>
                    </div>


                    <p></p>

                    <div class="center">
                        <button type="submit" name="update" class="send-btn" id="send-php">Confirm</button>
                    </div>
                </form>
            </div>

        </div>
    </div>

    <div id="successModal" class="popup2">
        <div class="modal-content2">
            <div class="form-heading">
                <span class="close close-btn">&times;</span>
                <h2>Successful</h2>
            </div>
        </div>
    </div>

    <!--<script src="paybills.js"></script>-->
    <div class="form-popup" id="myForm">
        <form action="submission.html" class="form-container">
            <div class="close close-btn" onclick="togglePaybills('4')">&times;</div>
            <h3>Pay Bills</h3>
            
            <div class="walter">
                <div class="wallet-info">
                    <h3>Peso Wallet</h3>
                    <p id="amount"> </p>
                    <div class="progress"></div>
                </div>
            </div>
            <br>
            Bill Type <br>

            <select name="subject" id="subject" class="biller" required>
                <option value="" selected="selected">Select Biller</option>
            </select>
            <br>
            <br>
            Company Name <br>

            <select name="topic" id="topic" class="payer" required>
                <option value="" selected="selected">Please select Biller first</option>
            </select>
            <br>
            <br>

            <label for="account-num">Customer Account Number</label>
            <input type="text" placeholder="Customer Account Number" name="account-num" id="custnum" required>
            <br>
            <label for="payment-amount">Payment Amount</label>
            <input type="text" placeholder="PHP 0" name="payment-amount" id="amount" required>

            <button type="submit" class="btn" id="paybillers">Pay Bills</button>
            <!-- <button type="button" class="btn cancel" onclick="closeForm()">Close</button> -->

        </form>
    </div>

    <!-----------------------------------------------------------
    <div id="convert_overlay">
        <div id="convert_popup">
            <div id="convert_title">
                <h3>CONVERT</h3><span id="close" onclick="closePopup(convert_overlay)">×</span>
                <div>
                </div>
            </div>
            <div id="convert_wallet">
                <h3 id="convert_walletType">Peso Wallet</h3>
                <h2 id="convert_walletAmount">Loading..</h2>
            </div>
            <div id="conversion_content">
                <h5>Conversion</h5>
                <div class="input">
                    <h4 id="currentwalletbtn">PHP</h4>
                    <span class="divider">|</span>
                    <input type="number" placeholder="Input Amount" oninput="calculateotherwallet()" id="inputamount">
                </div>
                <div class="convert_btn"><img src="icons/convert-icon.png" onclick="displayswitchwallet()"><span id="convert_exchangerate">Exchange rate is loading...</span></div>
            </div>
            <div class="input">
                <h4 id="otherwallet">BTS</h4><span class="divider">|</span><input type="number" id="calculatedamount" disabled>
            </div>
            <button id="convert_now" onClick="convertnow()">CONVERT</button>
            <span>Please keep in mind that digital currency values are volitile. Price might change ay any time</span>
        </div>
    </div> ------------------->


    <script src="./js/transaction.js"></script>
    <script type="text/javascript">
        document.getElementById("image").onchange = function() {
            document.getElementById("form").submit();
        };
    </script>
    <?php
    if(isset($_FILES["image"]["name"])){
      $id = $_POST["id"];
      $name = $_POST["name"];

      $imageName = $_FILES["image"]["name"];
      $imageSize = $_FILES["image"]["size"];
      $tmpName = $_FILES["image"]["tmp_name"];

      // Image validation
      $validImageExtension = ['jpg', 'jpeg', 'png'];
      $imageExtension = explode('.', $imageName);
      $imageExtension = strtolower(end($imageExtension));
      if (!in_array($imageExtension, $validImageExtension)){
        echo
        "
        <script>
          alert('Invalid Image Extension');
          document.location.href = 'dashboard.php;
        </script>
        ";
      }
      elseif ($imageSize > 1200000){
        echo
        "
        <script>
          alert('Image Size Is Too Large');
          document.location.href = 'dashboard.php';
        </script>
        ";
      }
      else{
        $newImageName = $name . " - " . date("Y.m.d") . " - " . date("h.i.sa"); // Generate new image name
        $newImageName .= '.' . $imageExtension;
        $query = "UPDATE tb_users SET image = '$newImageName' WHERE id = $id";
        mysqli_query($conn, $query);
        move_uploaded_file($tmpName, 'img/' . $newImageName);
        echo
        "
        <script>
        document.location.href = 'dashboard.php';
        </script>
        ";
      }
    }
    ?>

</body>


</html>