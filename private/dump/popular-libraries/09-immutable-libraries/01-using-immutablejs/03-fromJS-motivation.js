const { fromJS, Map } = require('immutable');

// instead of checking for all non-primitives within and making them immutable manually, we can use from JS
const john = Map({
    name: 'John',
    age: 32,
    // this is a mutable array and NOT a List
    emails: [
        'john@example.com',
        'john@gmail.com'
    ]
});

john.get('emails').push('john@yahoo.com');

console.log(john.get('emails').toArray());