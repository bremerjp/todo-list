const button = document.querySelector('button');
const list = document.querySelector('ul');

const textField = document.querySelector('input');
textField.value

const addListItem = () => {
    if (textField.value) {
        let listItem = document.createElement('li');
        let task = document.createElement('p');
        let completeBtn = document.createElement('p');
        let deleteBtn = document.createElement('p');

        task.innerText = textField.value;
        completeBtn.innerText = 'Complete';
        deleteBtn.innerText = 'Delete';

        completeBtn.classList.add("complete-btn");
        deleteBtn.classList.add("delete-btn");
    
        listItem.appendChild(task);
        listItem.appendChild(completeBtn);
        listItem.appendChild(deleteBtn);
        list.appendChild(listItem);

        textField.value = '';
    }
}

button.addEventListener("click", addListItem);