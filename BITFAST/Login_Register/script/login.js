function login(){

    var username = $("#Username").val();
    var password = $("#Password").val();

    $.ajax({
        url:'login.php',
        type:'get',
        data: {username:username,password:password},
        success:function(){
            console.log("Connection was Successful");
        },
        error:function(){
            alert("Connection Error");
        }
        }).done(function (data) {
            console.log(data);
            switch (data){
                case "Sucessfully Log in" : {
                    window.location.replace('../../dashboard/dashboard.php');
                    break;
                }
                default: $("#loginerror").html(data);

            }
        });


}