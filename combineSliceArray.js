const first = [1,2,3];
const second = [4,5,6];
const third = [{id:1}];

const combined = first.concat(second);
const combined1 = third.concat(first);
first[0].id = 10;

const slice = combined.slice();

console.log(combined);
console.log(slice);