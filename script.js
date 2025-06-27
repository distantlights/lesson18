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

//--------- 100 ზე მეტი-------------

function filterGreaterThan100(numbers){
    return numbers.filter(function(num){
        return num > 100
    });
}

console.log(filterGreaterThan100([50, 120, 99, 101, 200]));

//-------------ფუბქცია აიდი ფაინდი---------------

function findById(array, idToFind){
    return array.find(function(item){
        return item.id===idToFind
    });
}

const users=[
    {id: "1", name: "Mariam"},
    {id: "2", name: "Alexander"}
];

console.log(findById(users, "2"));

