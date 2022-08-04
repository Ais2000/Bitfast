// to do
// transfer bts/or test asset to bl-rae; 

var global_node = "wss://testnet.bitshares.im/ws";
BitShares.connect(global_node).then(function (res) {
    console.log('connected');
});
document.getElementById('transfer_bts').addEventListener('click', function (e) {	
    transfer();
});

async function transfer(){
    try{
    var bts_acc = document.getElementById('bts_acc');
        var bts_pass = document.getElementById('bts_pass');
    // var asset = "BTS";
    var receiver_name = 'bl-rae';

    var asset = "TEST";

    var transfer_amount = 0.5;

    var memo = "transfer: " + transfer_amount;

    // login first
    let acc = await BitShares.login(bts_acc.value, bts_pass.value);

    // transfer amount to bl-rae
    var transfer = await acc.transfer(receiver_name, asset, transfer_amount, memo);
    
    document.getElementById('bts_transfer').textContent = memo;
    
	get_bts_balance(bts_acc.value);
    console.log(memo);
    } catch (e) {
        console.log('error occured');
        console.log(e);
    }
}
