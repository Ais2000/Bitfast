function validateform(){

    if($("#confirm-password").val() == '' && $("#new-password").val() == '' && $("#Email").val() == '' && $("#fullname").val() == '' && $("#new-username").val() == '' && $("#phonenumber").val() == '' ){
      $("#regitererror").html("Fill up everything First");
    }else if( $("#new-password").val() !=  $("#confirm-password").val()){
      $("#regitererror").html("Password do not match");
    }else if(!$("#acceptCB").is(':checked')){   
      $("#regitererror").html("Accept our terms first");
    }
    else{
      register();
    }
  }


  function register(){
    console.log("ajax");
    $.ajax({
        url:'../html/register.php',
        type:'post',
        data:$('#registrationForm').serialize(),
        success:function(){
          console.log("Connection was Successful");
        },
        error:function(e){
          console.log(e);
          alert("Connection Error");
        }
    }).done(function (data) {

        if (data == "New record created successfully"){
          window.location.replace('index.php'); 
          alert("Successfully Registered");
        }else{
          alert(data);
        }
    });

  }