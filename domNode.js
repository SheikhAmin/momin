const paragraph = document.createElement('p');

const node = document.createTextNode('Hello World');

paragraph.appendChild(node);

const element = document.getElementById('div1');
const p1 = document.getElementById('p1');

element.insertBefore(paragraph,p1);

const p2 = document.getElementById('p2');
element.removeChild(p2);