function myFunction() {
	var x = document.getElementById("myInput");
	var x2 = document.getElementById("myInput1");
  if (x.type === "password") {
    x.type = "text";
    x2.type = "text";
  } else {
    x.type = "password";
    x2.type = "password";
  }
}

function alert_login(){
	alert("Welcome Back!");
	window.location.href = "index.html";
}

function myFunction() {
	var x = document.getElementById("myInput");
	var x2 = document.getElementById("myInput1");
  if (x.type === "password") {
    x.type = "text";
    x2.type = "text";
  } else {
    x.type = "password";
    x2.type = "password";
  }
}

function alert_ss(){
	alert("Successfully Registered, Proceed to Login!");
	window.location.href = "login.html";
}
