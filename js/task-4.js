const incrementButtonRef = document.querySelector('[data-action="increment"]')
const decrementButtonRef = document.querySelector('[data-action="decrement"]')
const counterRef = document.querySelector('#value')

let counterValue = Number(counterRef.textContent);

 

incrementButtonRef.addEventListener('click', increasesValue);
decrementButtonRef.addEventListener('click', decreasesValue);



function increasesValue() {
    
   counterValue += 1;
   counterRef.textContent = counterValue;
};

function decreasesValue() {
    counterValue -= 1;
    counterRef.textContent = counterValue
};

