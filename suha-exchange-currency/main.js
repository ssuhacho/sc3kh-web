let currencyRatio = {
  USD: {
    KRW: 1197.84,
    USD: 1,
    CNY: 6.38,
    unit: "Dollar",
    img: "https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png",
  },
  KRW: {
    KRW: 1,
    USD: 0.00083,
    CNY: 0.0053,
    unit: "Won",
    img: "https://www.countryflags.com/wp-content/uploads/south-korea-flag-png-large.png",
  },
  CNY: {
    KRW: 187.82,
    USD: 0.16,
    CNY: 1,
    unit: "Yuan",
    img: "https://www.countryflags.com/wp-content/uploads/china-flag-png-large.png",
  },
};
//console.log(currencyRatio.KRW.USD);
//console.log(currencyRatio["CNY"]["unit"]);

let fromButton = document.getElementById("from-button");
let toButton = document.getElementById("to-button");
let fromCurrency = "USD";
let toCurrency = "USD";

//click event
document.querySelectorAll("#from-currency-list a").forEach((item) =>
  item.addEventListener("click", function () {
    //change the button value
    document.getElementById("from-button").textContent = this.textContent;
    //put the selected currency value into a variable
    fromCurrency = this.textContent;
    fromButton.innerHTML = `<img class="flag-img" src="${currencyRatio[fromCurrency].img}"/> ${fromCurrency}`;
    convert();
  })
);

document.querySelectorAll("#to-currency-list a").forEach((item) =>
item.addEventListener("click", function () {
    document.getElementById("to-button").textContent = this.textContent;
    toCurrency = this.textContent;
    toButton.innerHTML = `<img class="flag-img" src="${currencyRatio[toCurrency].img}"/> ${toCurrency}`;
    convert();
  })
);

function convert(){
    let amount = document.getElementById("from-input").value;
    //console.log("Total amount is ", amount);
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    //console.log("The Amount is ", convertedAmount);
    document.getElementById("to-input").value = convertedAmount;
    renderEnglishNum(convertedAmount,amount);
}

function renderEnglishNum(from,to){
  document.getElementById("fromNumToEng").textContent = currencyRatio[fromCurrency].unit;
  document.getElementById("toNumToEng").textContent = currencyRatio[toCurrency].unit;
}