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