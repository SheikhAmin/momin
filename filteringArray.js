const number = [1,-1,2,3];

const filtered = number.filter(function(value){
    return value >= 0;
});

console.log(filtered);