var cartItems = JSON.parse(localStorage.getItem("cart"));

// console.log(cartItems)

var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "main");

document.querySelector("body").append(mainDiv); 


showFootWears(cartItems);

function showFootWears(sportsShoes) {
    sportsShoes.map(function (item) {
        var div1 = document.createElement("div");

        var img = document.createElement("img");
        img.setAttribute("src", item.image);

        var h1 = document.createElement("h1");
        h1.textContent = item.name;

        var h2 = document.createElement("h2");
        h2.textContent = item.price;

       

        div1.append(img, h1, h2);

        mainDiv.append(div1);
    });
}


var total = cartItems.reduce(function(ac, el){
    return ac + Number(el.price);
}, 0)


document.querySelector("#totalDiv > div").textContent = Math.floor(total) + " " + "/-"

document.getElementById("btn").addEventListener("click", function(){
    var coupon = document.getElementById("discount").value;

    if(coupon === "uboric30"){
        document.querySelector(".totalPrice").textContent = Math.floor(total - (total  * 0.3)) + " " + "/-";
        alert("Coupon Code Applied Successfully"); 
    }else {
        alert("Coupon Code Not Valid")
    }
})



document.getElementById("buyNow").addEventListener("click", function(){
    window.location.href = "payment.html";
})
