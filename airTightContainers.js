
var AirTightContainersData = [
    {
        name: "Shoptool New Grocery Woman's Choice New Containers – 800 ml (Pack of 6, Grey)",
        price: "₹599.00 ",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/12/handi-800ml-grey-shoptool-original-imafxu7e79mt5vkw.png",
    },
    {
        name: "Shoptool Woman’s 1st Choice New Grocery Container – 800 ml (Pack of 6, Red)",
        price: "₹599.00",
        image: "https://www.uboric.com/wp-content/uploads/2020/12/handi-01-shoptool-original-imafw2fyakfmze5m.png",
    },
    {
        name: "Shoptool BPA Free 2 in 1 Storage Container with 2 Grid for Food Cereals Grain Sealed Container",
        price: "₹349.00 ",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/08/shoptool-72.jpg",
    },
    {
        name: "Shoptool Woman’s 1st Choice New Grocery Container- 800 ml (Pack of 6, Blue)",
        price: "₹599.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/12/handi-800ml-blue-shoptool-original-imafw2fyahryzhhf.png",
    },
    {
        name: "Shoptool Woman’s 1st Choice – 1100 ml (Pack of 10, Blue)",
        price: "₹999.10 ",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/10/ASCAS-1.png",
    },
    {
        name: "SHOPTOOL New 10 Pieces – 1100 ml (Pack of 10, Orange)",
        price: "₹999.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/01/kitkat-1100ml-orange10-bluewhale-original-imafsz2gs3bwymf3.png",
    },
    {
        name: "SHOPTOOL Grocery Containers – 800 ml (Pack of 10, Grey)",
        price: "₹949.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/01/handi-container-grey-speack-original-imafwzfwfq27fwgh.png",
    },

    {
        name: "shoptool Grocery Containers – 900 ml (Pack of 10, Black)",
        price: "₹999.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/01/xllent9black1400ml-speack-original-imafymzd7q8wgmmf.png",
    },
    {
        name: "Shoptool Woman’s 1st Choice Unbreakable Airtight – 1100 ml (Pack of 10, Red)",
        price: "₹989.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/10/CASS.png",
    },
    {
        name: "Shoptool ® Woman’s 1st choice 500 ml Plastic Grocery Container (Pack of 6, Grey)",
        price: "₹899.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/06/10.jpeg",
    },
    {
        name: "Shoptool ® Woman’s 1st Choice 900 ml Plastic Grocery Container (Pack of 6, Red, Clear)",
        price: "₹899.10",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/06/10-1.jpeg",
    },
    {
        name: "Shoptool ® Woman’s 1st Choice 630 ml Plastic Grocery Container (Pack of 10, Brown)",
        price: "₹899.00",
        image: "https://www.uboric.com/wp-content/uploads/2021/06/10-630-ml-container-shoptool-original-imafzpuav2pk2fhf.jpeg",
    },
];

var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "main");

document.querySelector("body").append(mainDiv);

showAirtightContainers();

function showAirtightContainers() {
    AirTightContainersData.map(function (item) {
        var div1 = document.createElement("div");

        var img = document.createElement("img");
        img.setAttribute("src", item.image);

        var h1 = document.createElement("h1");
        h1.textContent = item.name;

        var h2 = document.createElement("h2");
        h2.textContent = item.price;

        var btn = document.createElement("button");
        btn.textContent = "ADD TO CART"

        div1.append(img, h1, h2, btn);

        mainDiv.append(div1);
    });
}

