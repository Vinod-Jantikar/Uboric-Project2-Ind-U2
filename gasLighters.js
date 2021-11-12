
var AirTightContainersData = [
    {
        name: "10 pcs Shoptool Gas Lighter with New Printed Design",
        price: "₹449.00 ",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/08/shoptool-92.jpg",
    },
    {
        name: "1.5ft long Stainless Steel Regular Gas Lighter for Kitchen Stove",
        price: "149.00",
        image: "https://www.uboric.com/wp-content/uploads/2020/09/GL-08.png",
    },
    {
        name: "1ft 1.5ft  (2qty each) Stainless Steel Regular Gas Lighter for Kitchen Stove",
        price: "₹349.00 ",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/09/photo_2020-09-29_11-08-40.jpg",
    },
    {
        name: "1ft 1.5ft combo Stainless Steel Regular Gas Lighter for Kitchen Stove",
        price: "₹249.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/09/photo_2020-09-29_11-08-40.jpg",
    },
    {
        name: "PACK OF 2 Green Stainless Steel Regular Gas Lighter for Kitchen Stove",
        price: "₹199.10 ",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/09/photo_2020-09-20_12-41-06.jpg",
    },
    {
        name: "PACK OF 2 Blue Stainless Steel Regular Gas Lighter for Kitchen Stove",
        price: "₹199.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/09/photo_2020-09-20_12-41-23.jpg",
    },
    {
        name: "PACK OF 2 blue Stainless Steel Regular Gas Lighter for Kitchen Stove",
        price: "₹199.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/09/GL-12.png",
    },

    {
        name: "PACK OF 2 Red Stainless Steel Regular Gas Lighter for Kitchen Stove",
        price: "₹199.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/09/GL-06.png",
    },
    {
        name: "PACK OF 2 yellow Stainless Steel Regular Gas Lighter for Kitchen Stove",
        price: "₹199.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/09/photo_2020-09-20_12-41-34.jpg",
    },
    {
        name: "PACK OF 2 yellow Stainless Steel Regular Gas Lighter for Kitchen Stove",
        price: "₹199.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/09/photo_2020-09-20_12-41-30.jpg",
    },
    {
        name: "PACK OF 2 Red Stainless Steel Regular Gas Lighter for Kitchen Stove",
        price: "₹199.10",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/09/GL-03.png",
    },
    {
        name: "PACK OF 2 Pink Stainless Steel Regular Gas Lighter for Kitchen Stove",
        price: "₹199.00",
        image: "https://www.uboric.com/wp-content/uploads/2020/09/photo_2020-09-20_12-40-57.jpg",
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

