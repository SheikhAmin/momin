//every() check whether every element is same or not
const number = [1,2,-2,3,4];


const allPositive = number.every(function(value){
    return value >= 0;
});

console.log(allPositive);

const atLeastOnePositive = number.some(function(value){
      return value >= 0;
});

console.log(atLeastOnePositive);