const numbers = [1,2,3,4];

const output = move(numbers,0,4);

console.log(output);

function move(array, index, offset){
    const position =index + offset;
    if (position >= array.length || position < 0){
        console.error('Invalid offset.');
        return;
    }
    
    const result = [...array];
    const element = result.splice(index,1)[0];
    result.splice(position,0,element);
    return result;
}