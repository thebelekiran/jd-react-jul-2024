const { enableES5, produce } = require( 'immer' );

enableES5();

// working with objects
const amazonEcho1 = {
    name: 'Amazon Echo',
    version: 'v1'
};

const googleDot1 = {
    name: 'Google Dot',
    version: 'v1'
};

// we are not passing the object which we want to "modify" (this gives us a "curried" / "pre-configured" function)
const changeToV2 = produce(draft => {
    draft.version = 'v2';
});

// we can used the "curried" function to change the version to v2.
const amazonEcho2 = changeToV2( amazonEcho1 );
const googleDot2 = changeToV2( googleDot1 );

console.log( amazonEcho1 );
console.log( amazonEcho2 );

console.log( googleDot1 );
console.log( googleDot2 );