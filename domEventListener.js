function myFunction(){
 console.log('Hello Button!');
}

const button = document.getElementById('button');
const container = document.getElementById('container');

button.addEventListener('click', myFunction,true);
container.addEventListener('click', function(){
       console.log('Hello Div!');
},true );