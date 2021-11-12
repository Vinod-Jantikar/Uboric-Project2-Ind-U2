var sportsShoes = [
    {
        name: "COLUMBUS MENS SPORT SHOES IN BLACK GOLD",
        price: "1619.10",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0755_result.jpg",
    },
    {
        name: "COLUMBUS MENS SPORT SHOES IN BLACK/GOLD",
        price: "1349.10",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0827_result.jpg",
    },
    {
        name: "COLUMBUS MENS SPORT SHOES IN NAVY/RED",
        price: "1259.10",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0855_result.jpg",
    },
    {
        name: "G.SERIES MEN’S SPORTS SHOES IN BLACK",
        price: "1439.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0907_result.jpg",
    },
    {
        name: "G.SERIES MEN’S SPORTS SHOES IN BLACK",
        price: "1439.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0811_result.jpg",
    },
    {
        name: "G.SERIES MEN’S SPORTS SHOES IN C.GREEN",
        price: "719.10",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0927_result.jpg",
    },
    {
        name: "G.SERIES MEN’S SPORTS SHOES IN DK.GREY",
        price: "1439.10",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0835_result.jpg",
    },
    {
        name: "G.SERIES MEN’S SPORTS SHOES IN GREY",
        price: "1439.10",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0931_result.jpg",
    },
    {
        name: "COLUMBUS MEN’S SPORTS SHOES IN NAVY",
        price: "1349.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/01/DSC_0699_result.jpg",
    },
    {
        name: "JQR MEN’S SPORTS SHOES IN GREY/WHITE",
        price: "989.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/01/DSC_0719_result.jpg",
    },
    {
        name: "TRACER MEN’S SPORT SHOES IN BLACK COLOUR",
        price: "1979.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/01/DSC_0666_result.jpg",
    },
    {
        name: "G.SERIES MEN’S SNEAKERS in WHITE and Black",
        price: "899.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2019/12/13-11091.png",
    },


];

var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "main");

document.querySelector("body").append(mainDiv);

var cartItems = JSON.parse(localStorage.getItem("cart")) || [];

showFootWears(sportsShoes);

function sortByPrice() {
    var selected = document.getElementById("sorting").value;

    if (selected === "low") {
        sportsShoes.sort(function (a, b) {
            return a.price - b.price
        })
    } else if (selected === "high") {
        sportsShoes.sort(function (a, b) {
            return b.price - a.price;
        })
    }
    showFootWears(sportsShoes);

}

function sortByName() {
    var selected = document.getElementById("sortingByName").value;

    if (selected === "asc") {
        var product = sportsShoes.sort(function (a, b) {
           return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
        })
    }
    if (selected === "des") {
        var product = sportsShoes.sort(function (a, b) {
          return  a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
        })
    }
    showFootWears(product);
}


function showFootWears(sportsShoes) {
    document.getElementById("main").innerHTML = null;
    sportsShoes.map(function (item) {
        var div1 = document.createElement("div");

        var img = document.createElement("img");
        img.setAttribute("src", item.image);

        var h1 = document.createElement("h1");
        h1.textContent = item.name;

        var h2 = document.createElement("h2");
        h2.textContent = "₹" + item.price;

        var btn = document.createElement("button");
        btn.textContent = "ADD TO CART";
        btn.addEventListener("click", function () {
            addToCart(item)
        })

        div1.append(img, h1, h2, btn);

        mainDiv.append(div1);
    });
}

function addToCart(item) {

    cartItems.push(item);
    localStorage.setItem("cart", JSON.stringify(cartItems));
}


// document.getElementById("cartBtn").addEventListener("click", function(){
//     window.location.href = "cart.html"
// })