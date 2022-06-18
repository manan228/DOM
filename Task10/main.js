// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

// Retriving data from local storage
const dataFromLocalStorage = JSON.parse(localStorage.getItem(`data`));

displayData(dataFromLocalStorage);  // Displaying data at frontend

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {

    // Conerting data to object
    const data = {
        name: nameInput.value,
        email: emailInput.value
    }

    // Storing data(name, email) into local strage
    localStorage.setItem(`data`, JSON.stringify(data));
    
    displayData(data) // Displaying data at frontend

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

// Displaying stored data in frontend
function displayData(data) {

    console.log(data)
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${data.name}: ${data.email}`));

    // Append to ul
    userList.appendChild(li);
}