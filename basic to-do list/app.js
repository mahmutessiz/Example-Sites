const input = document.querySelector('#main-input');
const addButton = document.querySelector('#add-button');
const mainUl = document.querySelector('#main-ul');


function mainArea() {

    /* xxxxxxx creating list items xxxxxxxxx */

    const listItem = document.createElement('li')
    mainUl.appendChild(listItem);

    /* xxxxxxxxxxx creating text area xxxxxxxxxx */

    const textArea = document.createElement('textarea');
    listItem.appendChild(textArea);
    textArea.classList.add('text');
    textArea.innerText = input.value;
    textArea.setAttribute('readonly', 'readonly');


    /* xxxxxxxxxxx creating inside of the list items xxxxxxxxxx */

    const listCloseButton = document.createElement('button')
    listItem.appendChild(listCloseButton);
    listCloseButton.innerText = 'x';
    listCloseButton.classList.add('closeButton');

    listCloseButton.addEventListener('click', () => {
        listItem.remove();
    });

    if (input.value == '') {
        listItem.remove();
    }

    
    input.value = '';
};


addButton.addEventListener('click', mainArea);