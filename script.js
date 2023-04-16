var cookieDiv = document.querySelector(".cookie-policy");

//function to load alert when a city is clicked on
function loading() {
    alert("loading weather report...")
}

//functionn to remove cookie alert when the 'I Accept' btn is clicked
function accept() {
    cookieDiv.remove();
}

//conversion function celsius to fahrenheit
function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

//conversion function fahrenheit to celsius
function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

//function to convert temperatures when switching between C and F
function convert(element) {
    console.log(element.value);
    for(var i = 1; i < 9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = f2c(tempVal);
        } else {
            tempSpan.innerText = c2f(tempVal);
        }
    }
}