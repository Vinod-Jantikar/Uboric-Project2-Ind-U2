
document.getElementById("btn").addEventListener("click", signup);

var userArray = JSON.parse(localStorage.getItem("userData")) || [];

function signup() {
    var email = document.getElementById("email").value
    var password = document.getElementById("pass").value;
    var name = document.getElementById("username").value;
    var mobile = document.getElementById("mobile").value;

    var userDetails = {
        userEmail: email,
        userPassword: password,
        userName: name,
        userMobile: mobile,
    };
    userArray.push(userDetails)
    localStorage.setItem("userData", JSON.stringify(userArray));

    window.location.href = "signIn.html";


}