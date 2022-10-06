function signin(){
    var signinError = document.getElementById("errorSignin");

    var username = document.forms["sform"]["user"].value;
    var passwd = document.forms["sform"]["passwd"].value;
    
    if(username==987654321 && passwd==987654321){
        window.open("index.html");
        return true;
    }
    else{
        signinError.innerHTML = "Invalid login credentials, Please Try Again";
        signinError.style.display="block";
        return false;
    }
}
