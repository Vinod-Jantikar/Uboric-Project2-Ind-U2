var casualShoesData = [
    {
        name: "WOODLAND MEN’S CASUAL/PART",
        price: "₹3,325.00 ",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/01/71QhNy9CkiL._UL1500_.png",
    },
    {
        name: "ID MEN’S CASUAL / PARTY SHOES IN BLACK COLOUR",
        price: "₹2,326.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/01/id2071black-5-id-black-original-imafp65fhcqmbgkg.png",
    },
    {
        name: "ID MEN’S CASUAL /PARTY SHOES IN BLACK",
        price: "₹2,326.00 ",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/01/id2072black-5-id-black-original-imafp7zyafgvzrft.png",
    },
    {
        name: "ID MEN’S CASUAL /PARTY SHOES IN BLACK",
        price: "₹2,326.00 ",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/01/id2072black-5-id-black-original-imafp7zyafgvzrft.png",
    },
    {
        name: "GARMONT MEN’S CASUAL/PARTY SHOES IN BROWN COLOUR",
        price: "₹1,259.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/01/DSC_0691_result.jpg",
    },
    {
        name: "GARMONT MEN’S CASUAL/PARTY SHOES IN BLACK COLOUR",
        price: "₹1,349.00 ",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0963_result.jpg",
    },
    {
        name: "GARMONT MEN’S CASUAL/PARTY SHOES IN BLUE COLOUR",
        price: "₹1,349.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_1011_result.jpg",
    },
    {
        name: "GARMONT MEN’S CASUAL/PARTY SHOES IN BROWN COLOUR",
        price: "₹1,349.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_1007_result.jpg",
    },

    {
        name: "GARMONT MEN’S CASUAL/PARTY SHOES IN BROWN COLOUR",
        price: "₹1,169.10",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/01/DSC_0695_result.jpg",
    },
    {
        name: "LEE COOPER MEN’S LOAFERS SHOES IN BLUE COLOUR (Copy)",
        price: "₹1,619.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/01/DSC_0687_result.jpg",
    },
    {
        name: "HUSH PUPPIES MEN’S / CASUAL PARTY SHOES IN BLACK COLOUR",
        price: "₹1,799.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/01/DSC_0638_result.jpg",
    },
    {
        name: "WOODS MEN’S / CASUAL PARTY SHOES IN BLACK COLOUR",
        price: "₹1,647.00",
        image:
            "https://www.uboric.com/wp-content/uploads/2021/02/DSC_0903_result.jpg",
    },
   

];

var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "main");

document.querySelector("body").append(mainDiv);

showCasualShoes();

function showCasualShoes() {
    casualShoesData.map(function (item) {
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