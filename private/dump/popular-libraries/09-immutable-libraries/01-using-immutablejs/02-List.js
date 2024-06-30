const { List } = require( 'immutable' );

const numbers = List( [ 2, 3, 5, 7, 11 ] );

console.log( numbers.get( 1 ) );
const numbersWithString = numbers.set( 1, 'Three' );
const numbersWithUpdatedItem = numbers.update( 2, val => val + 1 );

// console.log( numbersWithString.toArray() );
// console.log( numbersWithUpdatedItem.toArray() );
// console.log( numbers.toArray() );

const numbers2 = numbers.push( 13 );
console.log( numbers2.toArray() );
console.log( numbers.toArray() );

const oddNumbers = numbers.filter( item => item % 2 === 1 );
console.log( oddNumbers.toArray() );

// Similarly you can use map(), forEach etc.
// The code in React that uses an array would remain unaffected if we switch over to a List