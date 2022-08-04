

function login() {


}

function validate() {

	var password = document.getElementById("new-password").value;
	var confirmPassword = document.getElementById("password2").value;
	if (password != confirmPassword) {
		document.getElementById("regitererror").innerHTML = "Password do not match!";
		document.getElementById("regitererror").style.color = "red";
	} else if(password.length < 11){
		document.getElementById("regitererror").innerHTML = "Password must have atleast 12 characters!";
		document.getElementById("regitererror").style.color = "red";
	}
	
	else {
		document.getElementById("regitererror").innerHTML = "Account creation failed!!";
		console.log("submitted");
		register()

	}
}

async function register() {

	addLoadingScreen("Registering...");

	//get credentials
	var account_name = document.getElementById("new-username").value;
	var genPassword = "P5 " + document.getElementById("new-password").value;
	var rawPassword =  document.getElementById("new-password").value;
	var fullName = document.getElementById("fullname").value;
	var userEmail = document.getElementById("Email").value;
	var phoneNumber = document.getElementById("phonenumber").value;

	//pass data to to dbConn for database
	console.log(account_name, rawPassword, fullName, userEmail, phoneNumber);
	try{
		const xhr = new XMLHttpRequest();   
		xhr.onload = function(){
			console.log(this.responseText);
		};   
		xhr.open("POST", "dbConn.php");
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send("username="+account_name+"&password="+rawPassword+"&name="+fullName+"&email="+userEmail+"&number="+phoneNumber);
	}
	catch(e){
		console.log(e);
	}

	// Account to authorize create account
	var accntName = 'asd-chad';
	var pass = 'P5HxoQwu7jbL6Ure87XsEqJxmYEU9tFjDqCFgg5276wh2';
	var privateActiveKey = '5KcHYUn84iaE7ykA7JjfnuSE5shgxVjE3tb8pkXWN8RXgiiMgEE';
	var ref_id = '1.2.23960';

	//GENERATE KEYS FOR KEY_AUTHS
	var genKeys = await BitShares.generateKeys(account_name, genPassword);
	var GKactive = genKeys.pubKeys.active;
	var GKowner = genKeys.pubKeys.owner;
	var GKmemo = genKeys.pubKeys.memo;

	var account = new BitShares(accntName, privateActiveKey);

	var params = {
		fee: {
			amount: 0,
			asset_id: "1.3.0"
		},
		name: account_name,
		registrar: ref_id,
		referrer: ref_id,
		referrer_percent: 5000,
		owner: {
			weight_threshold: 1,
			account_auths: [],
			key_auths: [
				[GKowner, 1]
			],
			address_auths: []
		},
		active: {
			weight_threshold: 1,
			account_auths: [],
			key_auths: [
				[GKactive, 1]
			],
			address_auths: []
		},
		options: {
			memo_key: GKmemo,
			voting_account: ref_id,
			num_witness: 0,
			num_committee: 0,
			votes: []
		},
		extensions: []
	};

	var tx = account.newTx()
	tx.account_create(params)

	tx.broadcast().then(function (result) {

		removeLoadingScreen();
		//What happens when success
		document.getElementById('regitererror').innerHTML = "Your account has been successfully created!";
		console.log(result);
	}).catch(function (err) {

		removeLoadingScreen();
		console.log(err);
		document.getElementById('regitererror').innerHTML = String(err).substr(106, 27 + account_name.length);

	});

}


