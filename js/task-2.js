const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');


const createList = el => {
    const item = document.createElement('li');
    item.textContent = el;
    return item;
}

const ingredientsList = ingredients.map(ingredient => createList(ingredient));

ingredientsRef.append(...ingredientsList);
