//-------------ფუნქცია სტრინგით-----------

function checkBooleanString(value){
    if (value === "true"){
        return true;
    } else {
        return false;
    }
}

console.log(checkBooleanString("true"))
console.log(checkBooleanString("false"))

//მოკლე ვერსია

function checkBooleanSttring(value){
    return value === "true"
}
console.log(checkBooleanSttring("true"));

//------------დოლარიდან ლარში--------------

function convertUsdToGel(usdAmount, gelRate){
    return usdAmount * gelRate
}

console.log(convertUsdToGel(100, 2.70));

//------------ვალუტა---------------------

function getCountryByCurrencyCode(code){
    const currencyMap={
        USD: "United States",
        EUR: "Europian Union",
        GEL: "Georgia"
    };

    if (currencyMap[code]){
        return currencyMap[code];
    } else {
        return "unknow currency";
    }
}

console.log(getCountryByCurrencyCode("USD"));

//--------------პატარა და დიდი სიმბოლოები-----------

function toLowerCaseString(str){
    return str.toLowerCase()
}

console.log (toLowerCaseString("I WORK ON A FIRST HARD PART OF FRONTENT"))

