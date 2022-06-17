// getElementById

const headerTitle = document.getElementById(`header-title`);
const addTitle = document.getElementsByClassName(`title`);

headerTitle.style.borderBottom = `solid 3px #000`;

addTitle[0].style.color = `green`;

// getElementByClassName

const listGroup = document.getElementsByClassName(`list-group-item`);

listGroup[2].style.backgroundColor = `green`;

for(let i=0;i<listGroup.length;i++) {

    listGroup[i].style.fontWeight = `bold`;
}

// getElementByTagName

const li = document.getElementsByTagName(`li`);

li[2].style.backgroundColor = `green`;

for(let i=0;i<li.length;i++) {

    li[i].style.fontWeight = `bold`;
}

// querySelector

const secondItem = document.querySelector(`.list-group-item:nth-child(2)`);

secondItem.style.backgroundColor = `green`;

const thirdItem = document.querySelector(`.list-group-item:nth-child(3)`);

thirdItem.style.visibility = `hidden`;

// querySelectorALL

const allSecondItem = document.querySelectorAll(`.list-group-item`)

allSecondItem[1].style.color = `green`;

const odd = document.querySelectorAll(`li:nth-child(odd)`);

for(let i=0;i<odd.length;i++) {

    odd[i].style.backgroundColor = `green`;
}

// 3. querySelector() methodcan only be used to access a single element while 
//    querySelectorAll() method can be used to access all elements which match 
//    with a specified CSS selector.