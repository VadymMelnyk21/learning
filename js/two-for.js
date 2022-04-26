'use strict'

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
    console.log(products[i]);
    for (let j = i + 1; j < products.length; j += 1) {
        console.log(products[i]);
        console.log(products[j]);

        if (products[i].id === products[j].id) {
            products[i].qty += products[j].qty
            products.splice(j, 1)
            j -= 1
        }
    }
}
console.log(products);