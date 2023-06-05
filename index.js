console.log("Hello World");
let name = "Mosh";
let age = 55;
let gender = "Male";
console.log("Name is"+ name+ "age is" + age +",gender is"+ gender);
//constant value won't change but variable changese
const interestRate = 0.3;
console.log(interestRate);
// object:
let person = {
    name:"mmm",
    boyosh:25,
};
person.name = "Nati";
console.log(person);
let selectColors = ["red","blue"];
console.log(selectColors[0]);
selectColors[2] = "green";
console.log(selectColors);
selectColors[3] = 6;
console.log(selectColors.length);
// function:
function greet(name1){
    console.log("Hello " + name1);
}
 greet("AMin");
 // function calculating value:
 function calculator(radious){
    return 3.1416*radious*radious;
 }
 let result = calculator(5);
 console.log(result);
 console.log(calculator(10.5));
 //comparing operators:
 let x =1;
 console.log(x > 0);
 console.log(x >= 0);
 console.log(x <= 0);
 console.log(x >= 1);
 console.log(x < 1);
 console.log(x === 0);
 console.log(x !== 0);
 //Strict Equality Operator (Type + Value) use this:
 console.log(1 === 1);
 console.log(1 === "1");
 //Lose Equality operator(Value):
 console.log(1 == 1);
 console.log(1 == "1");
 console.log(true == 1);
 //Ternary operator:
