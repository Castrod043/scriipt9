(() => {
    console.clear();
    const currentdate = new Date();
    console.log(

        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds() +
        " year " +
        currentdate.getUTCFullYear()


    )
})();


//Deze functie checkt of iemand 18 of ouder is.

const checkAge = function (age) {
    if (age >= 18) {
        return true;
    } else {
        return "Jij bent geen 18";
    }
};

//const check = checkAge(19);

//console.log(check);  // controleerd 2de function
//fuctie die kijkt of iemand 18 is zoja Hello there, zoniet Hey Kiddo 

const welkom = function () {
    const checkAgain = checkAge(17);
    console.log(checkAgain);
    if (checkAgain == true) {
        console.log("Hello there");
    } else {
        console.log("Hey kiddo");
    }
};
welkom();


//VAT calculations

/// Vat exercise One 


const vatPercentage = 1.21;


const getTotalprice = function (price, vatPercentage) {
    return price * (vatPercentage);
};





const getTotal = function (price, vatPercentage) {
    return getTotalprice(price, vatPercentage);
};

console.log(getTotal(10, vatPercentage));







