const sum =(a,b) => {
    return a + b;
}

console.log(sum(7,3));



let oneEurols ={
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87, 
}

function fromDollarToYen(dollar){
    let euro = dollar / oneEurols.USD;
    return euro * oneEurols.JPY;
}
function fromYenToPound(yen){
    let euro = yen / oneEurols.JPY;
    return euro * oneEurols.GBP;
}
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEurols.USD;
    return valueInDollar;
}
module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};