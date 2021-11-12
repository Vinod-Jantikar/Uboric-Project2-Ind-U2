var kitchenToolsData = [
    {
        name: "500 ml Shoptool Compact Mini Vegetable Handy Dori Chopper (COLOR MAY VERY)",
        price: "₹199.00 ",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/08/shoptool-82.jpg",
    },
    {
        name: "Shoptool Fruit and Vegetable Chipser 1 Peeler Inside Chopper (Green)",
        price: "₹399.00",
        image: "https://www.uboric.com/wp-content/uploads/2020/08/1.png",
    },
    {
        name: "Smart Candy Box Serving Rotating Tray Spice Storage (COLOR MAY VERY)",
        price: "₹249.00 ",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/09/51DtnWKDywL._SX425_.png",
    },
    {
        name: "Stainless Steel Kitchen Knife Set with Wooden Stand – 6 Pcs",
        price: "₹349.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/09/51uR8Y2hVL._SL1000_.jpg",
    },
    {
        name: "1 Delux Fruit & Vegetable Manual Juicer (Multi Colour) with lemon sqeezer ",
        price: "₹449.10 ",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/09/photo_2020-09-15_13-14-18.jpg",
    },
    {
        name: "2 big shoptool vegetable chopper (900ml) purple",
        price: "₹349.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/617hc3VTmL._SL1500_-1024x1024-1-1000x602.png",
    },
    {
        name: "Pre-Seasoned Cast Iron Dosa Tawa 12 inches",
        price: "₹999.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/03/71NWugA7pYL._SL1200_.jpg",
    },

    {
        name: "Shoptool Plastic Square 1000 ml Bottle (Pack of 3, Multicolor, Plastic)",
        price: "₹359.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/06/1000-plastic-square-3-classic-fridge-bottle-3-shoptool-original-imag28xguurwrczn.jpeg",
    },
    {
        name: "Pack of 2 Smart Candy Box Serving Rotating Tray Spice Storage (COLOR MAY VERY) (Copy)",
        price: "₹449.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/09/4171fJSiqEL.jpg",
    },
    {
        name: "shoptool Plastic Serving Tray with 4 Pcs. (Assorted Color) Multi Purpose Unbreakable",
        price: "₹345.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/12/airtight-4-bowl-with-tray-blue-speack-original-imafxnpn6gewausy.png",
    },
    {
        name: "Shoptool Multi Purpose Unbreakable Drinking Glass Set of 6 Pieces Plastic 300ml",
        price: "₹249.10",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/10/71RLwIzAqVL._SL1500_.jpg",
    },
    {
        name: "Lunch Box with Attractive Stand – 4 pcs (200 ml Each Container) Multi Purpose Unbreakable",
        price: "₹199.00",
        image: "https://www.uboric.com/wp-content/uploads/2020/09/51Vv9FI9DL.jpg",
    },
];

var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "main");

document.querySelector("body").append(mainDiv);

showKitchenTools();

function showKitchenTools() {
    kitchenToolsData.map(function (item) {
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