const inputRef = document.querySelector('#validation-input');


inputRef.addEventListener('blur', checkInput);
inputRef.addEventListener('focus', removeClasses);


function checkInput (event) {
    const inputValue = event.target.value;
    const requiredLength = Number(inputRef.dataset.length);

    inputValue.length === requiredLength ? addClassValid() : addClassInvalid();
     
 
 
};

function addClassValid() {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
};

function addClassInvalid() {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
};

function removeClasses() {
    inputRef.classList.remove('invalid');
    inputRef.classList.remove('valid');
};