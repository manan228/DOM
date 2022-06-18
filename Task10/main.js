// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

let userDetail;

// Retreving and displaying data stored in local storage
Object.keys(localStorage).forEach(key => {

    userDetail = JSON.parse(localStorage.getItem(key))

    displayData(userDetail)     // Displaying data at frontend
})

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

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
    const obj = {
        name: nameInput.value,
        email: emailInput.value
    }

    displayData(obj) // Displaying data at frontend

    // Storing data(name, email) into local strage
    localStorage.setItem(`${nameInput.value}`, JSON.stringify(obj));

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

// Displaying user list, stored data in frontend
function displayData(data) {

    // if(localStorage.getItem(data.name) !== null) {

    //     onClickDeleteButton(data.name)
    // }

    // Create new list item with user
    const li = document.createElement('li');

    // Adding id of list
    li.id = data.name;

    // Add text node with input values
    li.appendChild(document.createTextNode(`${data.name}: ${data.email}`));

    deleteButton(li, data)    // Initializing of delete button
    
    const editBtn = document.createElement(`button`)
    editBtn.innerHTML = `Edit`
    li.appendChild(editBtn)

    // Append to ul
    userList.appendChild(li);
}

// Creating and appending delete button to user list
function deleteButton(li, {name}) {

    const deleteBtn = document.createElement(`button`)
    deleteBtn.innerHTML = `Delete`
    li.appendChild(deleteBtn)

    deleteBtn.addEventListener(`click`, (e) => onClickDeleteButton(e, name));
}

function onClickDeleteButton(e,name) {

    const childNodeToBeDeleted = document.getElementById(name)

    childNodeToBeDeleted.remove()
    localStorage.removeItem(name)
}