let money = 1;

let lastUpdateTime = Date.now();

const moneyText = document.getElementById("moneyText");

const product1NameText = document.getElementById("product1NameText");
const product1GainText = document.getElementById("product1GainText");
const product1PriceText = document.getElementById("product1PriceText");
const product1QuantityText = document.getElementById("product1QuantityText");

const product2NameText = document.getElementById("product2NameText");
const product2GainText = document.getElementById("product2GainText");
const product2PriceText = document.getElementById("product2PriceText");
const product2QuantityText = document.getElementById("product2QuantityText");

const product3NameText = document.getElementById("product3NameText");
const product3GainText = document.getElementById("product3GainText");
const product3PriceText = document.getElementById("product3PriceText");
const product3QuantityText = document.getElementById("product3QuantityText");

const product4NameText = document.getElementById("product4NameText");
const product4GainText = document.getElementById("product4GainText");
const product4PriceText = document.getElementById("product4PriceText");
const product4QuantityText = document.getElementById("product4QuantityText");

const product5NameText = document.getElementById("product5NameText");
const product5GainText = document.getElementById("product5GainText");
const product5PriceText = document.getElementById("product5PriceText");
const product5QuantityText = document.getElementById("product5QuantityText");

const product6NameText = document.getElementById("product6NameText");
const product6GainText = document.getElementById("product6GainText");
const product6PriceText = document.getElementById("product6PriceText");
const product6QuantityText = document.getElementById("product6QuantityText");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");

button1.onclick = buyProduct1;
button2.onclick = buyProduct2;
button3.onclick = buyProduct3;
button4.onclick = buyProduct4;
button5.onclick = buyProduct5;
button6.onclick = buyProduct6;

const products = [
    {
        name: "placeholder", // 0
        gain: 0,
        price: 0,
        quantity: 0,
    },
    {
        name: "Pack of gum: $", //1
        gain: 0.20,
        price: 0.40,
        quantity: 0,
        priceChange: 1.07,
        gainChange: 1.030
    },
    {
        name: "Mobile phone: $", //2
        gain: 0.50,
        price: 9,
        quantity: 0,
        priceChange: 1.10,
        gainChange: 1.050
    },
    {
        name: "Bluetooth earphones: $", //3
        gain: 5,
        price: 99,
        quantity: 0,
        priceChange: 1.12,
        gainChange: 1.070
    },
    {
        name: "High end laptop: $", //4
        gain: 40,
        price: 1299,
        quantity: 0,
        priceChange: 1.14,
        gainChange: 1.090 
    },
    {
        name: "Japanese car: $", //5
        gain: 500,
        price: 9860,
        quantity: 0,
        priceChange: 1.16,
        gainChange: 1.10 
    },
    {
        name: "Luxury watch: $", // 6
        gain: 3700,
        price: 103000,
        quantity: 0,
        priceChange: 1.18,
        gainChange: 1.100 
    }
];

function buyProduct1() {
    buyProduct(1);
}

function buyProduct2() {
    buyProduct(2);
}

function buyProduct3() {
    buyProduct(3);
}

function buyProduct4() {
    buyProduct(4);
}

function buyProduct5() {
    buyProduct(5);
}

function buyProduct6() {
    buyProduct(6);
}

function buyProduct(index) {
    const product = products[index];
    if (money >= product.price) {
        money -= product.price;
        product.price *= product.priceChange;
        product.gain *= product.gainChange;
        product.quantity += 1;

        product.intervalStarted = true;

    updateProductUi(index);
    update();
    checkMoney();
    }
}

setInterval(() => {
    const now = Date.now();
    const delta = (now - lastUpdateTime) / 1000; // time since last update in seconds
    lastUpdateTime = now;

    products.forEach((product) => {
        if (product.intervalStarted) {
            money += product.gain * delta;
        }
    });

    update();
    checkMoney();
}, 100);

function updateProductUi(index) {
    const product = products[index];

    document.getElementById(`product${index}NameText`).innerText = product.name;
    document.getElementById(`product${index}GainText`).innerText = (product.gain).toFixed(2);
    document.getElementById(`product${index}PriceText`).innerText = product.price.toFixed(2);
    document.getElementById(`product${index}QuantityText`).innerText = product.quantity;
}

function update() {
    moneyText.innerText = money.toFixed(2);
}

function checkMoney() {
    if (money >= 2) {
        product2Div.style.display = "block";
    }
    if (money >= 20) {
        product3Div.style.display = "block";
    }
    if (money >= 200) {
        product4Div.style.display = "block";
    }
    if (money >= 2000) {
        product5Div.style.display = "block";
    }
    if (money >= 20000) {
        product6Div.style.display = "block";
    }
}