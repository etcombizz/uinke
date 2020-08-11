function validateForm() {
    var name = document.forms["myForm"]["fullname"].value;
    var email = document.forms["myForm"]["email"].value;
    var mbnum = document.forms["myForm"]["mbnumber"].value;
    var mess = document.forms["myForm"]["message"].value;
    if (name == "") {
      alert("Name must be fill.");
    }
    else if (name == "") {
        alert("Email must be fill.");
      }
    else if (email == "") {
        alert("Phone Number must be fill.");
      }
    else if (mbnum == "") {
        alert("Message must be fill.");
      }
    else{
        alert("Thank You for contacting us. We will contact you soon.");
        return false;
    }
  }
