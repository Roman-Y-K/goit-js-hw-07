const inputRef = document.querySelector('#name-input');

const titleRef = document.querySelector('#name-output');


inputRef.addEventListener('input', changeName);

function changeName  (event)  {
       event.target.value === "" ?
        titleRef.textContent = 'незнакомец' :
        titleRef.textContent = event.target.value;
} 