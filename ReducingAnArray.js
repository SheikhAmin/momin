const numbers = [1,-1,2,3];

let sum = 0;
for(let n of numbers){
   sum += n;
}

console.log(sum);

/*const total = numbers.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue;
}, 0);*/

//alternate
const total = numbers.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue;
});

console.log(total);