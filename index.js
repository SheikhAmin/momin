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
 let points = 100;
 let type = points > 100 ? "gold" : "silver";
 console.log(type);
//Logical operators:1)Logical AND(&&) return true if both operands are true
//Logical operators:2)Logical OR(||) return true if one of the operands is true
//Logical operators:2)Logical NOT(!) return the opposite whatever we give
console.log(true && true);
let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;
console.log(eligibleForLoan);
let applicationRefused = !eligibleForLoan;
console.log(applicationRefused);
//Conditionla Statement
//i)If....else:if hour is between 6am and 12pm:good morning.If it is between 12pm and 6pm:good afternoon.Otherwise:good evening.
let hour = 10;
if ( hour >= 6 && hour <= 12){
    console.log("Good Morning!");
}
else if (hour >= 12 && hour <= 6){
    console.log("Good Afternoon!");
}
else{
    console.log("Good Evening!");
}
//ii)Switch(variable)
let role = "guest";
switch (role){
    case "guest":
        console.log("Guest User");
        break;
    case "moderator":
        console.log("Moderator User");
        break;
    //default kaj korbe jokhon uper kono case e applicable hobe na. Default a kono condition lage na ar kono break lage na.
    default:
        console.log("Unknown User");
}


