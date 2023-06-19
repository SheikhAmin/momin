const numbers = [1,1,1,1,2,3,4];

let track = 0;

const count = countOccurrences(numbers,1);

console.log(count);

function countOccurrences(array, searchElement){
   
    for(element in array){
        if(array[element] == searchElement){
            track += 1; 
        }
    }
    return track;
}