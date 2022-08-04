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
  
  
  function dropList(){
    
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
    subjectSel.onchange = function() {
     //empty Chapters- and Topics- dropdowns
   topicSel.length = 1;
      //display correct values
      for (var y in subjectObject[this.value]) {
        topicSel.options[topicSel.options.length] = new Option(y, y);
      }
    }
    topicSel.onchange = function() {
  
    }
  }

function subChange(){

  var changeSub = document.getElementById("subject");
  var changesSub = changeSub.options[changeSub.selectedIndex].value;
  var tops = document.getElementById("BName");

  var total = tops+changesSub;

}

subChange();