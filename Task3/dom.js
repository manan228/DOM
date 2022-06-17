const headerTitle = document.getElementById(`header-title`);
const addTitle = document.getElementsByClassName(`title`);

headerTitle.style.borderBottom = `solid 3px #000`;

addTitle[0].style.color = `green`;

const listGroup = document.getElementsByClassName(`list-group-item`);

listGroup[2].style.backgroundColor = `green`;

for(let i=0;i<listGroup.length;i++) {

    listGroup[i].style.fontWeight = `bold`;
}

const li = document.getElementsByTagName(`li`);

liGroup[2].style.backgroundColor = `green`;

for(let i=0;i<li.length;i++) {

    li[i].style.fontWeight = `bold`;
}