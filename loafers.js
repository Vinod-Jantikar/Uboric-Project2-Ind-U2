var loafersShoesData = [
    {
        name: "GARMONT MEN’S LOAFERS SHOES IN COLOUR BLACK",
        price: "₹1,299.00 ",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0859_result.jpg",
    },
    {
        name: "LEE-COOPER MEN’S / CASUAL LOAFER IN BLACK COLOUR",
        price: "₹1,619.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/01/DSC_0622_result.jpg",
    },
    {
        name: "TRY IT MEN’S CASUAL LOAFERS IN BROWN COLOUR",
        price: "₹1,079.00 ",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/01/DSC_0600_result.jpg",
    },
    {
        name: "TRY IT MEN’S CASUAL LOAFERS IN BLACK COLOUR",
        price: "₹1,079.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/01/DSC_0604_result.jpg",
    },
    {
        name: "TRY IT MEN’S CASUAL LOAFERS IN BLACK COLOUR",
        price: "₹1,079.10 ",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/01/DSC_0612_result.jpg",
    },
    {
        name: "AVERY MEN’S LOAFERS in TAN",
        price: "₹1,214.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2019/12/19-11048.png",
    },
    {
        name: "G. SERIESE MEN’S LOAFERS SHOES IN COLOUR GREEN",
        price: "₹1,299.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0863_result.jpg",
    },

    {
        name: "G.SERIES MEN’S LOAFERS in GREY",
        price: "₹809.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/01/26-1-2001.jpg",
    },
    {
        name: "MENS FANCY LOAFER (MATTE-BLUE) COLOUR",
        price: "₹1,169.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2020/12/DSC_0466_result.jpg",
    },
    {
        name: "TRY IT MEN’S LOAFER in BROWN",
        price: "₹999.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2019/11/DSC_0122_result-4.jpg",
    },
    {
        name: "TRY IT MEN’S LOAFERS in TAN",
        price: "₹899.10",
        image:
            "https://www.uboric.com/wp-content/uploads/2019/12/19-11101.png",
    },
    {
        name: "P&G MEN’S CASUAL/PARTY SHOES in BLACK",
        price: "₹1,349.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2019/12/16-11120.jpg",
    },

];

var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "main");

document.querySelector("body").append(mainDiv);

showLoafers();

function showLoafers() {
    loafersShoesData.map(function (item) {
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