function validate() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var info = document.getElementById("info");

  if(name.value == "" || email.value == "" || phone.value == "" || info.value == ""){
    alert("Must fill all required fields.");
    return false;
  }
  else {
    return true;
  }
}
