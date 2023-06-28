function changeText(){
    const title = document.querySelector('#title');
    title.innerHTML = "Hello World";
}

const button = document.querySelector('#button');
button.onclick = function(){
    console.log('Hello world!');
}