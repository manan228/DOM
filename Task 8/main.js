const form = document.getElementById(`addForm`);
const item = document.getElementById(`items`);
const itemList = document.getElementsByClassName('list-group-item');
const filter = document.getElementById('filter')

filter.addEventListener('keyup', onFilter);
form.addEventListener(`submit`, onSubmit);
item.addEventListener(`click`, ondelete);

// adding edit button to all list item
for(let i=0;i<itemList.length;i++) {
    
    const editBtn = document.createElement('button');
    editBtn.className = `btn btn-sm float-right editBtn`;
    editBtn.appendChild(document.createTextNode('EDIT'))
    
    itemList[i].appendChild(editBtn)
}

function onSubmit(e) {
    e.preventDefault();

    const inputValue = document.getElementById(`item`).value;

    const li = document.createElement(`li`);

    li.className = `list-group-item`;

    const newText = document.createTextNode(inputValue)

    li.appendChild(newText);

    const deleteBtn = document.createElement(`button`);

    deleteBtn.className = `btn btn-danger btn-sm float-right delete`;

    deleteBtn.appendChild(document.createTextNode(`X`))

    li.appendChild(deleteBtn);

    // Adding editButton
    const editBtn = document.createElement('button');
    editBtn.className = `btn btn-sm float-right editBtn`;
    editBtn.appendChild(document.createTextNode('EDIT'))

    li.appendChild(editBtn)

    item.appendChild(li)
}

function ondelete(e) {

    if(e.target.classList.contains(`delete`)) {

        if(confirm(`are you sure?`)) {

            const li = e.target.parentElement;

            item.removeChild(li);
        }
    }
}

// filter

function onFilter(e) {

    // converting text to lowercase
    const text = e.target.value.toLowerCase();

    // getting list
    const items = item.getElementsByTagName('li')

    // converting items from HTML collection to array
    Array.from(items).forEach(function(item) {

        const itemName = item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text) != -1) {

            item.style.display = `block`;
        } else {
            item.style.display = `none`;
        }
    })
}