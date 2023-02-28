
document.getElementById("btn_login").onclick = function bad(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(password != 'strona123' || email != 'strona'){
    
        alert("bledny email lub haslo");
    }
    else{
        window.location.replace("index.html");
    }

}
    