function check(){
    let name = document.getElementById("username").value;
    let pass = document.getElementById("pass").value;

    if (name == "ihsan"){
        if (pass == 12345678){
            window.location.replace("success.html");
        }
        else{
            alert("Enter your password correctly")
        }
    }
    else{
        alert("Enter your username correctly");
    }
}