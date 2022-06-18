// TRANSVERSE THE DOM

const itemList = document.querySelector(`#items`);

// parentNode
console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor = `#f4f4f4`;
console.log(itemList.parentNode.parentNode.parentNode)

// parentElement

console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor = `#f4f4f4`;
console.log(itemList.parentElement.parentNode.parentElement)

// childNodes
console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

// FirstChild
console.log(itemList.firstChild);
// firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';


// lastChild
console.log(itemList.lastChild);

// lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
console.log(itemList.nextSibling);

// nextElementSibling
console.log(itemList.nextElementSibling);

// previousSibling
console.log(itemList.previousSibling);

// previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green'; 

// createElement

// Create a div
const newDiv =  document.createElement('div');

// Add class
newDiv.className= 'hello';

// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
const newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);

// Adding hellow world before item 1

const li =  document.createElement('li');

li.className= 'list-group-item';

const newliText = document.createTextNode('Hello World');

li.appendChild(newliText);

const containerli = document.querySelector('div div ul li');
const h1li = document.querySelector('header div ul');

console.log(li);

li.style.fontSize = '15px'

containerli.insertBefore(li, h1li);
