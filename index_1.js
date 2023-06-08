//do-while Loop
let i = 0;
do {
    if (i % 2 !==0){
        console.log(i);
    }
    i++;
}while(i <= 5);
//for-in loop
const person= {
    name : "Mosh",
    age: 30
}
for (let key in person){
    console.log(key,person[key]);
}
//for of loop
const colors = ["red","green","blue"];
for(let color of colors){
    console.log(color);
}
//landscape or Potrait exercise
console.log(isLandscape(800,600));

function isLandscape(width,height){
    return (width > height);
}
//Exercise 1
const output = fizzBuzz("42");
console.log(output);

function fizzBuzz(input){
    if( typeof input !== "number") return "Not a Number";
    if( input % 3 == 0 && input % 5 == 0 ) return "FizzBuzz";
    if( input % 3 == 0) return "Fizz";
    if( input % 5 == 0) return "Buzz";
    return input;
}
//Exercise 2

checkSpeed(73);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
    let points;
    if (speed < speedLimit + kmPerPoint) {
        console.log("OK");
    }
    else{
       let point = (speed - speedLimit) / kmPerPoint ;
       points = Math.floor(point);
       if( points >= 12 ) console.log("suspended");
       else{
       console.log(points, " Points");}
    }
}

//Excercise 3

showNumber(10);

function showNumber(limit){
    for( let i=0; i<=limit; i++){
        if(i % 2 ==0) console.log(i,"EVEN");
        else console.log(i,"ODD");
    }
}

//Exercise 4
const array = [0, null, undefined, "", 2, 3];
console.log(countTruthy(array));
function countTruthy(array){
   let count = 0;
   for (let value of array){
    if(value) count++;  
   }
   return count;
}