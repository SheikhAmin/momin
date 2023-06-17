//sorting array function

const courses = [
    {id:1, name:'Node.js'},
    {id:2, name:'javaScript.js'},
];

courses.sort(function(a,b){
    //a<b => -1
    // a>b => 1
    // a === b => 0
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0; 
});

console.log(courses);

//sorting array

const number = [2,3,1];
number.sort();
console.log(number);