const listCategoriesRef = document.querySelector('#categories');
const categoriesRef = document.querySelectorAll(".item");


const countCategories = element => {
    const value = element.children.length
    return console.log(`В списке ${value} категории.`)
};

const filterCategories = category => {
    const catogoryName = category.querySelector('h2').textContent;
    const quantity = category.querySelectorAll("li").length;
    return console.log(`Категория: ${catogoryName}. Количество елементов: ${quantity}`) 
}

countCategories(listCategoriesRef);

categoriesRef.forEach(category => filterCategories(category));
