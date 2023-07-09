//Object Destructuring
const user = {
    id: 339,
    name:"Sakib",
    age: 35,
};

 let {name}= user;
 
 let {name:title}= user;


 console.log(title);

 const user1 = {
    id: 349,
    name:"Tamim",
    age: 35,
    education: {
        degree: "Masters",
    }
 };

 const {education:{degree} = {} } = user1;

 console.log(degree);

 //array destructuring
 var numbers = [1,2,3,4,5,6];
 var number = [1,2,3,[4,5,6,7],8,9];

 var [,,,[e,f],,g] = number;

 var [a,b] = numbers;

 console.log(a,b);

 var [,,c,d,] =numbers;
 console.log(c,d);
 console.log(e,f,g);

