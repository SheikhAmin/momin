const numbers = [1,5,3,4];

const max = getMax(numbers);

console.log(max);

function getMax(array){
    if(array.length === 0) return undefined;
    let value = array[0];
    for(let i=0; i<=array.length;i++){
        if(array[i] > value){
                value = array[i];
            }
        
    }
    return value;
}

//another approach
function getMax1(array){
    if(array.length === 0) return undefined;
    array.reduce((accumulator, current) =>{
        if(current > accumulator) return current;
        return accumulator;
    })
}