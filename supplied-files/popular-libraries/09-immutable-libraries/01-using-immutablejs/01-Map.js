/* replacement for object */
const { Map } = require( 'immutable' );

const amazonEcho = Map({
    name: 'Amazon Echo',
    version: 'v1',
    price: 45,
    options: {
        colors: [ 'Black', 'White' ],
        output: [ '5W', '10W' ]
    }
});

console.log( amazonEcho.get( 'version' ) );

const amazonEcho2 = amazonEcho.set( 'version', 'v2' );

console.log( amazonEcho.toObject() );
console.log( amazonEcho2.toObject() );

const amazonEchoCostly = amazonEcho.update( 'price', price => price + 5 );

console.log( amazonEcho.toObject() );
console.log( amazonEchoCostly.toObject() );