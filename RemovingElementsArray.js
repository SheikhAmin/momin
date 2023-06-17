const numbers = [1,2,3,4];

//end
const last = numbers.pop();
console.log(numbers);
console.log(last);

//Beginign
const first = numbers.shift();
console.log(numbers);
console.log(first);

//Middle
const middle = numbers.splice(1,1);
console.log(numbers);
console.log(middle);
