const inputEl =document.getElementById('input01');
const buttonEl =document.getElementById('button01');
const nameEl =document.getElementById('span01');


buttonEl.addEventListener('click', () => {
    const whatTheUserTyped = inputEl.value;
    nameEl.textContent = whatTheUserTyped;

});



