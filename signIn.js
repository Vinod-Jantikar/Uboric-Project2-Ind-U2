
document.getElementById("signinbtn").addEventListener("click", signin);


var regUserData = JSON.parse(localStorage.getItem("userData"));

var flag = false;
// console.log(regUserData)

function signin() {

    var Email = document.getElementById("emailAdd").value;
    var pasword = document.getElementById("password").value;

    for (var i = 0; i < regUserData.length; i++) {
        if (Email === regUserData[i].userEmail && pasword === regUserData[i].userPassword) {
            flag = true;
            break    
        } else {
           flag = false;
        }

    }
    if(flag === true) {
        window.location.href = "home.html"
    }else {
        alert("Wrong Email Id or Password");
    }

}