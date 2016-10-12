function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  if (userEntered.length >= 6) {
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  if (userEntered.length < 6 || userEntered.indexOf(' ') >= 1) {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username must be at least 6 characters and cannot contain spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  if (passEntered.toUpperCase() == "PASSWORD" || passEntered > 20 || passEntered < 6 || passEntered == userEntered) {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password must be between 6-20 characters, cannot be the word 'password', and cannot be your username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else {
    document.getElementById("passwordGroup").classList.add("has-success");
  }
}
