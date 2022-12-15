
//The Temperature Converter
function celsiusToFahrenheit(celsiusVar){
 console.log(`${celsiusVar}°C is ${((celsiusVar *1.8)+32)}°F`);
}


function fahrenheitToCelsius(fahrenheitVar){
    console.log(`${fahrenheitVar}°F is ${((fahrenheitVar -32)*(5/9))}°C`);
}


celsiusToFahrenheit(20);
celsiusToFahrenheit(80);
celsiusToFahrenheit(10);

fahrenheitToCelsius(100);
fahrenheitToCelsius(130);
fahrenheitToCelsius(80);