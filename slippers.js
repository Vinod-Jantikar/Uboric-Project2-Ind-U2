var slippersData = [
    {
        name: "ADDA MEN’S CASUAL CHAPPLE SLIPPER IN TAN COLOUR",
        price: "₹675.00 ",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/01/DSC_0568_result.jpg",
    },
    {
        name: "SPARX MEN’S CASUAL CHAPPLE SLIPPER IN BROWN COLOUR",
        price: "₹749.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0010_result.jpg",
    },
    {
        name: "ADDA MEN’S CHAPPLE / SLIPPERS IN BLUE COLOUR",
        price: "₹675.00 ",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/01/DSC_0572_result.jpg",
    },
    {
        name: "ADDA MEN’S CHAPPLE / SLIPPERS IN COLOUR BLACK",
        price: "₹649.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0831_result.jpg",
    },
    {
        name: "ADDA MEN’S CHAPPLE / SLIPPERS IN COLOUR BLACK",
        price: "₹675.00 ",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0787_result.jpg",
    },
    {
        name: "ADDA MEN’S CHAPPLE / SLIPPERS IN COLOUR BLACK/GREY",
        price: "₹649.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0783_result.jpg",
    },
    {
        name: "ADDA MEN’S CHAPPLE / SLIPPERS IN COLOUR BLACK/RED",
        price: "₹629.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0791_result.jpg",
    },

    {
        name: "ADDA MEN’S CHAPPLE / SLIPPERS IN COLOUR BROWN",
        price: "₹649.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0795_result.jpg",
    },
    {
        name: "ADDA MEN’S CHAPPLE / SLIPPERS IN COLOUR BROWN",
        price: "₹679.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0939_result.jpg",
    },
    {
        name: "ADDA MEN’S CHAPPLE / SLIPPERS IN COLOUR ORANG/NAVY",
        price: "₹699.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0807_result.jpg",
    },
    {
        name: "ADDA MEN’S CHAPPAL/SLIPPERS in BROWN",
        price: "₹549.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/12/DSC_0417_result.jpg",
    },
    {
        name: "ADDA MEN’S CHAPPAL/SLIPPERS in NAVY/GREY",
        price: "₹565.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/12/DSC_0409_result.jpg",
    },

];

var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "main");

document.querySelector("body").append(mainDiv);

showSlippers();

function showSlippers() {
    slippersData.map(function (item) {
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