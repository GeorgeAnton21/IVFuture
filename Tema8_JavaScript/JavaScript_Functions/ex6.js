//The Calculator

function squereNumber(number){
    let squere = number*number;
    console.log(`The result of squaring the number ${number} is ${squere}`);
    return(squere);
}


function halfNumber(number){
    let half = number/2;
    console.log(`Half of ${number} is ${half}.`);
    return(half);
}

function percentOf(number1, number2){
   let percent = ((number2/number1)*100);
   console.log(`${number2} is ${percent}% of ${number1}.`);
   return(percent);
}

function areaOfCircle(radius){
        console.log(`The area is ${(Math.PI*(radius^2)).toFixed(2)}`);
        return(Math.PI*(Math.pow(radius,2)));
}


function Calculator(number){
    let halfC =halfNumber(number);
    let squereC= squereNumber(halfC);
    let areaC = areaOfCircle(squereC);
    let percentC = percentOf(squereC, areaC);
    
    console.log(`The half-squere number is ${squereC}. Area of circle is ${areaC}. The precentage is ${percentC}.`);

}



squereNumber(2);
halfNumber(10);
percentOf(4,2);
areaOfCircle(10);
//
Calculator(8);

