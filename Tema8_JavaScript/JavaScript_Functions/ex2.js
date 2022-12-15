//The Puppy Age Calculator

function calculateDogAge(puppyAge,humanAge){
   let dogtohuman =humanAge *7;
   let humantodog = Math.round(puppyAge/7); //rotunjeste suma pentru a evita afisarea unui sir prea mare de numere

   console.log(`Your doggie is ${dogtohuman} years old in dog years!`)
   console.log(`Your age is ${humantodog} years old in dog years!`)
}

calculateDogAge(30, 20);
calculateDogAge(10, 18);
calculateDogAge(80, 16);