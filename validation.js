

function validate(){
    var email = document.getElementById("exampleInputEmail1");
var pwd = document.getElementById("exampleInputPassword1");
var error = document.getElementById("errors");
    var username = "admin";
    var password = "12345";
console.log("Here");
    if(username==email.value&&password==pwd.value){
        return true;
    }
    else{
        error.innerHTML = "wrong username or password";
		error.style.color = "red";
        error.style.fontSize = "small";
        return false;
    }
}