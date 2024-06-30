// 'use strict';

const { enableES5, produce } = require( 'immer' );

// enables ES5 support (for IE11 for example)
enableES5();

// working with objects
const amazonEcho1 = {
    name: 'Amazon Echo',
    version: 'v1'
};

// we can happily work with the draft object (without no concern for immutability)
const amazonEcho2 = produce( amazonEcho1, draft => {
    draft.version = 'v2';
});

console.log( amazonEcho1 );
console.log( amazonEcho2 );

// the produced object is frozen and immutable
// this assignment will throw an error in strict mode
amazonEcho2.version = 'v3';

console.log( amazonEcho2 );

// working with arrays
const productsList1 = [
    { name: 'Amazon Echo', price: 129 },
    { name: 'Apple Watch', price: 699 }
];

const productsList2 = produce( productsList1, draft => {
    draft.push({
        name: 'iPad Pro',
        price: 849
    });

    draft[1].price -= 50;
});

console.log( productsList1 );
console.log( productsList2 );

// structutal sharing - since first item is not modified (index 0), it is still shared between the 2 arrays

console.log( productsList1[0] === productsList2[0] ); // true