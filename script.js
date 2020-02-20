const button = document.querySelector('button');
const list = document.querySelector('ul');


button.addEventListener("click", function () {
    let listItem = document.createElement('li');
    listItem.innerText = "New Task";
    list.appendChild(listItem);
});

console.log(button);
console.log(list);
