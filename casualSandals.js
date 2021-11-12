var casualSandalsData = [
    {
        name: "ID MEN’S CASUAL SANDLES IN TAN COLOUR",
        price: "₹2,385.00 ",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/01/Capture.jpg",
    },
    {
        name: "WOODS CASUAL SANDALS IN BLACK COLOUR",
        price: "₹1,247.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0006_result.jpg",
    },
    {
        name: "WOODS CASUAL SANDALS IN BLACK COLOUR",
        price: "₹1,197.00 ",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0955_result.jpg",
    },
    {
        name: "WOODS CASUAL SANDALS IN BROWN COLOUR",
        price: "₹1,497.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0915_result.jpg",
    },
    {
        name: "WOODS CASUAL SANDALS IN BROWN COLOUR",
        price: "₹1,247.00 ",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0919_result.jpg",
    },
    {
        name: "WOODS CASUAL SANDALS IN BROWN COLOURS",
        price: "₹1,197.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0979_result.jpg",
    },
    {
        name: "P&G MEN’S SANDALS in BLACK",
        price: "₹1,199.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2019/12/16-11067.jpg",
    },

    {
        name: "ONSTAR MEN’S CASUAL SANDALS in BROWN",
        price: "₹439.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2019/11/21-11076.jpg",
    },
    {
        name: "S.SERIES MEN’S CASUAL SANDALS in MAROON",
        price: "₹399.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2019/11/21-1060.jpg",
    },
    {
        name: "RED CHIEF MEN’S CASUAL SANDAL in WOOD BROWN",
        price: "₹1,595.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2019/11/DSC_0118_result-1.jpg",
    },
    {
        name: "WOODLAND MEN’S CASUAL SANDAL in CAMEL",
        price: "₹2,795.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2019/11/DSC_0045_result-1.jpg",
    },
    {
        name: "WOODLAND MEN’S CASUAL SANDAL in CAMEL",
        price: "₹3,295.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2019/11/DSC_0055_result-3.jpg",
    },

];

var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "main");

document.querySelector("body").append(mainDiv);

showCausalSandals()

function showCausalSandals() {
    casualSandalsData.map(function (item) {
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