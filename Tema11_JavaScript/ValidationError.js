/*Activitate practica 2:
1. Avand la baza activitatea anterioara, creati o clasa pentru validator error care
sa extinda clasa predefinita Error
2. Validator-ul trebuie sa verifice tipul de data pentru name sa fie string si
pentru age sa fie number.*/


class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name='ValidationError';
    }
}

function Validation(User) {
    let user = JSON.parse(User);
  if (!user.name && !user.age) {
    throw new ValidationError("Incomplete data: no name & no age");
  }
  if (typeof user.name !== "string" && typeof user.age !== "number") {
    throw new ValidationError(
      "Incomplete data: name is not a string & age is not a number"
    );
  }
  if (typeof user.name !== "string") {
    throw new ValidationError("Incomplete data: name is not a string");
  }
  if (typeof user.age !== "number") {
    throw new ValidationError("Incomplete data: age is not a number");
  }
  if (!user.name) {
    throw new ValidationError("Incomplete data: no name");
  }
  if (!user.age) {
    throw new ValidationError("Incomplete data: no age");
  }
  return user;
}

//user -  name, age
let user1 = '{"name": "Ion" , "age": 22}';
console.group();
try {
  let user = Validation(user1);
  console.log(user.name);
  console.log(user.age);
} catch (err) {
  console.log("JSON Error: " + err.message);
}
console.groupEnd();


//user - no name, age
let user2 = '{"name": "" , "age": 22}';
console.group();
try {
  let user = Validation(user2);
  console.log(user.name);
  console.log(user.age);
} catch (err) {
  console.log("JSON Error: " + err.message);
}
console.groupEnd();

//user - no name, no age
let user3 = '{"name": "" , "age":"" }';
console.group();
try {
  let user = Validation(user3);
  console.log(user.name);
  console.log(user.age);
} catch (err) {
  console.log("JSON Error: " + err.message);
}
console.groupEnd();

//user - name, no age
let user4 = '{"name": "Ion" , "age":""}';
console.group();
try {
  let user = Validation(user4);
  console.log(user.name);
  console.log(user.age);
} catch (err) {
  console.log("JSON Error: " + err.message);
}
console.groupEnd();

//user - no string name, age
let user5 = '{"name": 4 , "age": 22}';
console.group();
try {
  let user = Validation(user5);
  console.log(user.name);
  console.log(user.age);
} catch (err) {
  console.log("JSON Error: " + err.message);
}
console.groupEnd();


//user -  name, no number age
let user6 = '{"name": "Ion" , "age": "Maria"}';
console.group();
try {
  let user = Validation(user6);
  console.log(user.name);
  console.log(user.age);
} catch (err) {
  console.log("JSON Error: " + err.message);
}
console.groupEnd();

