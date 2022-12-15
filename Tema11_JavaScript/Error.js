/*Activitate practica 1:
1. Creati o functie care citeste dintr-un json date despre utilizator
2. In aceeasi functie verificati daca obiectul citit are name si age. Daca la
contine pe amandoua, functia va returna obiectul. Daca nu, va returna erori
custom pentru fiecare caz.
3. Intr-un constructor de tip try...catch apelati functia si afisati erorile.*/




let json2 ='{"name":"John", "age":"30"}' ;

try {

let user =JSON.parse(json2);

if(!user.name){
    throw new SyntaxError('Incomplete data no name:')
}
if(!user.age){
    throw new SyntaxError('Incomplete data no age:')
}
if(!user.age ||!user.name){
    throw new SyntaxError('Incomplete data:')
}



console.log(user.name, user.age);


}catch(err){
 console.log('JSON error: ' +err.message);
}



//No age
let json ='{"name":"John", "age":""}' ;

try {

let user =JSON.parse(json);

if(!user.name){
    throw new SyntaxError('Incomplete data no name:')
}
if(!user.age){
    throw new SyntaxError('Incomplete data no age:')
}
if(!user.age ||!user.name){
    throw new SyntaxError('Incomplete data:')
}



console.log(user.name);
console.log(user.age);


}catch(err){
 console.log('JSON error: ' +err.message);
}





//No name
let json3 ='{"name":"", "age":"30"}' ;

try {

let user =JSON.parse(json3);

if(!user.name){
    throw new SyntaxError('Incomplete data no name:')
}
if(!user.age){
    throw new SyntaxError('Incomplete data no age:')
}
if(!user.age ||!user.name){
    throw new SyntaxError('Incomplete data:')
}



console.log(user.name);
console.log(user.age);


}catch(err){
 console.log('JSON error: ' +err.message);
}


//No data
let json4 ='{"name":"", "age":""}' ;

try {

let user =JSON.parse(json4);
if(!user.age &&!user.name){
    throw new SyntaxError('Incomplete data:')
}



console.log(user.name);
console.log(user.age);


}catch(err){
 console.log('JSON error: ' +err.message);
}