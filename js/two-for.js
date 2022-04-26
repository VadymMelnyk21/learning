'use strict'

// Знайти об’єкти з однаковими id
// Параметри qty додти а однакові id видалити

const products = [{
    id: 'sku1',
    qty: 1,
}, {
    id: 'sku2',
    qty: 2,
}, {
    id: 'sku3',
    qty: 3,
}, {
    id: 'sku1',
    qty: 6,
}, {
    id: 'sku1',
    qty: 8,
}, {
    id: 'sku2',
    qty: 19,
}, {
    id: 'sku4',
    qty: 1,
}];

for (let i = 0; i < products.length; i += 1) {
    // console.log(products[i]);
    for (let j = i + 1; j < products.length; j += 1) {
        // console.log(products[i]);
        // console.log(products[j]);

        if (products[i].id === products[j].id) {
            products[i].qty += products[j].qty
            products.splice(j, 1)
            j -= 1
        }
    }
}
console.log(products);

///////////////////////////////////////////////////////////////

// Мутувати обєкт так щоб в ньому були тільки унікальні імена
// Потім перебрати його і вивести імена по черзі в консолі
// Використовувати цикл for для перебору

const names = {
    user: 'Artem',
    user1: 'Denis',
    user2: 'Kate',
    user3: 'Dima',
    user4: 'Denis',
    user5: 'Denis',
    user6: 'Kate',
    user7: 'Kristina'
}

const updateNames = Object.keys(names);

for (let i = 0; i < updateNames.length; i += 1) {

    for (let j = i + 1; j < updateNames.length; j += 1) {
        if (names[updateNames[i]] === names[updateNames[j]]) {
            delete names[updateNames[j]]
        }
    }
}
console.log(names);