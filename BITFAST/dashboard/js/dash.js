function getDashboardContent() {

    var btsModal = document.getElementById("btsModal");
    var successModal = document.getElementById("successModal");

    var phpOption = document.getElementById("php-option");
    var btsOption = document.getElementById("bts-option");

    var phpForm = document.getElementById("php-form");
    var btsForm = document.getElementById("bts-form");

    var send_bts = document.getElementById("send-bts");
    


    //user credentials


    phpOption.onclick = function () {
        btsForm.style.display = "none";
        phpForm.style.display = "block";
    }

    btsOption.onclick = function () {
        phpForm.style.display = "none";
        btsForm.style.display = "block";
    }



    //var username = 'asd-chad';
    //var userpassword = 'P5HxoQwu7jbL6Ure87XsEqJxmYEU9tFjDqCFgg5276wh2';



    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    //set cookie
    var userNameCookie = getCookie("user");
    console.log(userNameCookie);

    BitShares.connect('wss://testnet.bitshares.im/ws').then(function (res) {
        console.log(res);
        get_bts_balance(userNameCookie);
    }).catch(function (err) {
        console.log(err);
        BitShares.reconnect('wss://testnet.bitshares.im/ws');
    });

    //view user BTS balance
    async function get_bts_balance(bts_acc_name) {
        // bts_acc_name = username;

        console.log('balance of: ' + bts_acc_name);
        console.log('checking user bts bal.. ');
        var getaccount = await BitShares.db.get_account_balances(bts_acc_name, ['1.3.0']);
        var getasset = await BitShares.db.get_assets(['1.3.0']);

        var amount = getaccount[0].amount;
        var precision = getasset[0].precision;
        var final = amount / Math.pow(10, precision);

        var bts_balance = document.getElementsByClassName("bts-balance1");
        for (let i = 0; i < 11; i++) {
            bts_balance[i].innerHTML = "<span>BTS " + final + "</span>";

            var bts_balance = document.getElementsByClassName("bts-balance");
            for (let i = 0; i < 11; i++) {
                bts_balance[i].innerHTML = "<span>BTS " + final + "</span>";
                var bts_balance = document.getElementsByClassName("walletamount bts-balance");
                for (let i = 0; i < 11; i++) {
                    bts_balance[i].innerHTML = "<span>BTS " + final + "</span>";

                   // var bts_balance = document.getElementsById("convert_walletAmount");
                    for (let i = 0; i < 11; i++) {
                        bts_balance[i].innerHTML = "<span>BTS " + final + "</span>";

                        console.log(' balance: ' + final);

                        return final;
                    }
                }
            }
        }
    }

    send_bts.onclick = function () {
        var privateKey = document.getElementById("privateKey").value;
        BitShares.login(userNameCookie, privateKey).then(function (res) {
            console.log(res);
            var amount = document.getElementById("bts-amount").value;
            var receiver = document.getElementById("bts-receiver").value;

            send_bts.style.border = "2px solid #888888";
            send_bts.innerHTML = "Sending...";
            send_bts.disabled = true;
            send_bts.style.cursor = "not-allowed";
            res.transfer(receiver, "TEST", amount, "Memo: Thank you for sending").then(function (trans_res) {
                    console.log(trans_res);
                    var fee = trans_res[0].trx.operations[0][1].fee.amount;
                    console.log(fee);
                    console.log("Transaction Success!");

                    btsModal.style.display = "none";
                    successModal.style.display = "block";

                    let keys = Object.keys(trans_res[0]);
                    console.log('Keys: ', keys);

                    let entries = Object.entries(trans_res[0]);

                    // get transaction id
                    var transUID = "";
                    transUID = entries[0][1];
                    console.log('UID: ', transUID);

                    // get block number
                    var transBlockNumber = "";
                    transBlockNumber = entries[1][1];
                    console.log('BLOCK NUMBER: ', transBlockNumber);

                    //get expiration
                    var transExpiration = "";
                    transExpiration = entries[3][1].expiration;;
                    console.log('Expiration: ', transExpiration);
                
                    //post data to php     
                    const xhr = new XMLHttpRequest();
                    /*
                    xhr.onload = function(){
                        const serverResponse = document.getElementById("uid");
                        serverResponse.innerHTML = this.responseText;
                    };    
                    */
                    xhr.open("POST", "../../db_connect.php");
                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr.send("uid=" + transUID + "&block_num=" + transBlockNumber + "&expiration=" + transExpiration + "&sender=" + userNameCookie + "&receiver=" + receiver);

                })
                .catch(function (err) {
                    console.log(err);
                    send_bts.style.border = "2px solid #e098f3";
                    send_bts.innerHTML = "Confirm";
                    send_bts.disabled = false;
                    send_bts.style.cursor = "pointer";
                    send_bts.style.border = "2px solid #e098f3";
                    send_bts.innerHTML = "Confirm";
                    send_bts.disabled = false;
                    send_bts.style.cursor = "pointer";
                    if (receiver == "" || amount == "") {
                        error.innerHTML = "Please fill out all fields";
                    } else if (err.message.includes("Amount equal 0!") || err.message.includes("amount.amount > 0")) {
                        error.innerHTML = "Invalid Amount";
                    } else if (err.message.includes("insufficient_balance")) {
                        error.innerHTML = "Insufficient Balance";
                    } else if (err.message.includes("Not found account")) {
                        error.innerHTML = "User does not exist";
                    } else if (err.message.includes("Assert Exception: from !=")) {
                        error.innerHTML = "You cannot send to yourself";
                    } else {
                        alert(err.message);
                    }
                })
        }).catch(function (err) {
            console.log(err);
        })


    }


    window.onclick = function (event) {
        if (event.target == btsModal) {
            btsModal.style.display = "none";
        }
        if (event.target == successModal) {
            successModal.style.display = "none";
            window.location.reload();
        }
    }


}



var updateConversion = setInterval(async function () {

    var d = new Date();
    var n = d.toTimeString().split(':')[0];
    console.log(n);

    if (n > 2 & n < 12) {
        document.getElementById('greetings').innerText = "Good Morning!";
    } else if (n > 11 & n < 17) {
        document.getElementById('greetings').innerText = "Good Afternoon!";
    } else {
        document.getElementById('greetings').innerText = "Good Evening!";
    }

    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=PHP&ids=bitshares&sparkline=false';
    let obj = await (await fetch(url)).json();
    exchangerate = obj[0].current_price;
    console.log('Price Updated to ' + exchangerate);
    document.getElementById('exchangerateBTS').innerText = exchangerate + ' BTS';

}, 15000);

function calculatePHP() {
    document.getElementById('phpinput').value = document.getElementById('btsinput').value / exchangerate;
}

function calculateBTS() {
    document.getElementById('btsinput').value = document.getElementById('phpinput').value * exchangerate;
}

function myFunction() {
    document.getElementById("popup-1").classList.toggle("active");
}

function togglePopup() {
    document.getElementById("popup-2").classList.toggle("active");
}

function toggleSend() {
    document.getElementById("btsModal").classList.toggle("active2");
}

function togglePaybills() {
    document.getElementById("myForm").classList.toggle("active3");
}


function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function openForm2() {

    alert("successfully paid your bill!");
    //ito yung hindi navavalidate yung empty fields pero lumalabas yung second pop-up
    // if(document.getElementById("custnum") != "" ){
    //   document.getElementById("myForm2").style.display = "flex";
    // }else{
    //   alert("fields requied");
    // }

    //ito yung navavalidate yung empty fields pero di lumalabas yung second pop-up
    // var a = document.getElementById("custnum");
    // var b = doccument.getElementById("amount");
    // var c = doccument.getElementById("payer");
    // var d = doccument.getElementById("biller");
    // var inputs = document.getElementById(a,b,c,d);
    // for (var i = 0; i < inputs.length; i++) {
    //     // only validate the inputs that have the required attribute
    //     if(inputs[i].hasAttribute("required")){
    //         if(inputs[i].value == ""){
    //             // found an empty field that is required
    //             alert("Please fill all required fields");
    //             return false;
    //         }else{
    //           alert("are you sure?");
    //         }
    //     }
    // }return true;

}



function closeForm2() {
    document.getElementById("myForm2").style.display = "none";
}


function dropList() {

}
var subjectObject = {
    "Electric Utilities": {
        "Meralco": ["Links", "Images", "Tables", "Lists"],
        "Beneco": ["Borders", "Margins", "Backgrounds", "Float"],
        "Cenpelco": ["Variables", "Operators", "Functions", "Conditions"]
    },
    "Water Utilities": {
        "Binmaley City Water District": ["Variables", "Strings", "Arrays"],
        "Baguio Water District": ["SELECT", "UPDATE", "DELETE"],
        "Dagupan City Water District": [],
        "Alaminos City Water District": [],


    }
}
window.onload = function () {
    var subjectSel = document.getElementById("subject");
    var topicSel = document.getElementById("topic");
    for (var x in subjectObject) {
        subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function () {
        //empty Chapters- and Topics- dropdowns
        topicSel.length = 1;
        //display correct values
        for (var y in subjectObject[this.value]) {
            topicSel.options[topicSel.options.length] = new Option(y, y);
        }
    }
    topicSel.onchange = function () {

    }
}

/*function subChange() {

    var changeSub = document.getElementById("subject");
    var changesSub = changeSub.options[changeSub.selectedIndex].value;
    var tops = document.getElementById("BName");

    var total = tops + changesSub;

}

subChange();*/


//JS for the popup convert code
var exchangerate;

var updateexchangerate = setInterval(async function () {

    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=PHP&ids=bitshares&sparkline=false';
    let obj = await (await fetch(url)).json();
    exchangerate = obj[0].current_price;
    document.getElementById('convert_exchangerate').innerHTML = '<h4>1 PHP =  ' + exchangerate + '  BTS</h4>';

}, 15000);

function convert_process() {

    //import design(css)
    document.body.innerHTML += '<link rel="stylesheet" href="./css/style_convert_popup.css">';
    //set the overlay
    document.body.innerHTML += '<div id="convert_overlay"></div>';
    setPopup();

}


function setPopup() {

    document.getElementById('convert_overlay').innerHTML = '<div id="convert_popup"></div>';
    const popup = document.getElementById('convert_popup');

    popup.innerHTML += '<div id="convert_title"><h3>CONVERT</h3><span id="close" onclick="closePopup(convert_overlay)">×</span><div>';

    popup.innerHTML += '<div id="convert_wallet"></div>';
    insertWallet('convert_wallet');
    popup.innerHTML += '<div id="conversion_content"><div>';
    insertConversion();

}

//TODO: get data from the user account
function insertWallet(id) {
    const wal = document.getElementById(id);
    wal.innerHTML += '<h3 id="convert_walletType">Peso Wallet</h3><h2 id="convert_walletAmount">Loading..</h2>'
    //getWalletAmount(PHP/BTS);
}

function insertConversion() {
    const content = document.getElementById('conversion_content');

    content.innerHTML += "<h5>Convesion</h5>";
    content.innerHTML += '<div class="input"><h4 id="currentwalletbtn">PHP</h4><span class="divider">|</span><input type="number" placeholder="Input Amount" oninput="calculateotherwallet()" id="inputamount"></input></div>';
    content.innerHTML += '<div class="convert_btn"><img src="icons/convert-icon.png"  onclick="displayswitchwallet()"><span id="convert_exchangerate">Exchange rate is loading...</span></div>';
    content.innerHTML += '<div class="input"><h4 id="otherwallet">BTS</h4><span class="divider">|</span><input type="number" id="calculatedamount" disabled></input></div>';
    content.innerHTML += '<button id="convert_now" onClick="convertnow()">CONVERT</button>';
    content.innerHTML += '<span>Please keep in mind that digital currency values are volitile. Price might change ay any time</span>';

}

//TODO: get data from the user account
function displayswitchwallet() {

    const btn = document.getElementById('currentwalletbtn');
    const wallettype = document.getElementById('convert_walletType');
    const walletamount = document.getElementById('convert_walletAmount');

    var wallet = btn.innerText;

    document.getElementById('otherwallet').innerText = wallet;

    switch (wallet) {

        case 'PHP':

            btn.innerText = 'BTS';
            wallettype.innerText = 'Bitshares Wallet';
            walletamount;
            break;

        case 'BTS':

            btn.innerText = 'PHP';
            wallettype.innerText = 'Peso Wallet';
            walletamount;

            break;

        default:
            alert('An Error has occur');
            window.location.reload();
    }

    calculateotherwallet();

}

function calculateotherwallet() {

    switch (document.getElementById('currentwalletbtn').innerText) {

        case 'PHP':
            document.getElementById('calculatedamount').value = exchangerate * document.getElementById('inputamount').value;
            break;
        case 'BTS':
            document.getElementById('calculatedamount').value = document.getElementById('inputamount').value / exchangerate;
            break;

    }



}

function convertnow() {

    var balance = parseFloat(document.getElementById('convert_walletAmount').innerText.split(' ')[1]);
    var input = parseFloat(document.getElementById('inputamount').value);

    if (balance < input) {
        makeapopup("not enough balance");
    } else {
        makeapopup("conversion complete");
    }
}

//TODO: when clicked the CONVERT BTN
function closePopup(theoverlay) {
    document.body.removeChild(theoverlay);
    console.log('Popup has been closed');
    return false;
}


function makeapopup(text) {
    document.body.innerHTML += '<div id="popup_topest"><div id="popup_message"><h4>' + text + '</h4><button onclick="closePopup(popup_topest)">Okay</button></div></div>';
}
