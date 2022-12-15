
//The Lifetime Supply Calculator
function calculatorSupply(age, amountperday){
    let maxAge =99;
    let daysyear =365;
    let amountforlife = maxAge * amountperday;

    console.log(`You will need ${Math.round((amountperday*daysyear)*(maxAge-age))} to last you until the ripe old age of ${maxAge}`);
}

calculatorSupply(21, 2);
calculatorSupply(12, 7);
calculatorSupply(40, 1);