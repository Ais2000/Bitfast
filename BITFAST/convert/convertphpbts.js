
var exchangerate;

var updateexchangerate = setInterval(async function(){

    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=PHP&ids=bitshares&sparkline=false';
    let obj = await(await fetch(url)).json();
    exchangerate = obj[0].current_price;
    console.log('Price Updated to ' + exchangerate);
    document.getElementById('convert_exchangerate').innerHTML = '<h4>1 PHP =  '+ exchangerate +'  BTS</h4>';

}, 5000);

function convert_process(){

    //import design(css)
    document.body.innerHTML += '<link rel="stylesheet" href="popup.css">';
    //set the overlay
    document.body.innerHTML += '<div id="convert_overlay"></div>';
    setPopup();
    
}


function setPopup(){

    document.getElementById('convert_overlay').innerHTML = '<div id="convert_popup"></div>';
    const popup = document.getElementById('convert_popup');

    popup.innerHTML += '<div id="convert_title"><h3>CONVERT</h3><span id="close" onclick="closePopup(convert_overlay)">×</span><div>'; 

    popup.innerHTML += '<div id="convert_wallet"></div>';
    insertWallet('convert_wallet');
    popup.innerHTML += '<div id="conversion_content"><div>';
    insertConversion();

}

//TODO: get data from the user account
function insertWallet(id){
    const wal = document.getElementById(id);
    wal.innerHTML += '<h3 id="convert_walletType">Peso Wallet</h3><h2 id="convert_walletAmount">PHP 00.00</h2>'
    //getWalletAmount(PHP/BTS);
}

function insertConversion(){
    const content = document.getElementById('conversion_content');

    content.innerHTML += "<h5>Convesion</h5>";
    content.innerHTML += '<div class="input"><h4 id="currentwalletbtn">PHP</h4><span class="divider">|</span><input type="number" placeholder="Input Amount" oninput="calculateotherwallet()" id="inputamount"></input></div>';
    content.innerHTML += '<div class="convert_btn"><img src="images/convert-icon.png"  onclick="displayswitchwallet()"><span id="convert_exchangerate">Exchange rate is loading...</span></div>';
    content.innerHTML += '<div class="input"><h4 id="otherwallet">BTS</h4><span class="divider">|</span><input type="number" id="calculatedamount" disabled></input></div>';
    content.innerHTML += '<button id="convert_now" onClick="convertnow()">CONVERT</button>';
    content.innerHTML += '<span>Please keep in mind that digital currency values are volitile. Price might change ay any time</span>';

}

//TODO: get data from the user account
function displayswitchwallet(){

    const btn = document.getElementById('currentwalletbtn');
    const wallettype = document.getElementById('convert_walletType');
    const walletamount = document.getElementById('convert_walletAmount');

    var wallet = btn.innerText;
    
    document.getElementById('otherwallet').innerText = wallet;
    
        switch (wallet){

            case 'PHP' : 
                
                btn.innerText = 'BTS';
                wallettype.innerText = 'Bitshares Wallet';
                walletamount.innerText = 'BTS 0.0';
            break;

            case 'BTS' : 
            
                btn.innerText = 'PHP';
                wallettype.innerText = 'Peso Wallet';
                walletamount.innerText = 'PHP 00.00';

            break;

            default : alert('An Error has occur');
            window.location.reload();
        }

    calculateotherwallet()

}

function calculateotherwallet(){

    switch (document.getElementById('currentwalletbtn').innerText){

        case 'PHP' : document.getElementById('calculatedamount').value = exchangerate * document.getElementById('inputamount').value; break;
        case 'BTS' : document.getElementById('calculatedamount').value = document.getElementById('inputamount').value / exchangerate; break;

    }
    
    

}

function convertnow(){

    var balance = parseFloat( document.getElementById('convert_walletAmount').innerText.split(' ')[1] );
    var input = parseFloat( document.getElementById('inputamount').value );

    if(balance < input){
        makeapopup("not enough balance");
    } else {
        makeapopup("conversion complete");
    }
}

//TODO: when clicked the CONVERT BTN
function closePopup(theoverlay){
    document.body.removeChild(theoverlay);
    console.log('Popup has been closed');
    return false;
}


function makeapopup(text){
    document.body.innerHTML += '<div id="popup_topest"><div id="popup_message"><h4>' + text +'</h4><button onclick="closePopup(popup_topest)">Okay</button></div></div>';
}
