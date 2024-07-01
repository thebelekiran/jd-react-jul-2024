// 2 main ways to define function signature
// function declaration
function add(x: number, y: number) /*: number*/ {
    return x + y;
}

add(12, 13);

// function expression way
type BinaryFunction = (x: number, y: number) => number;

const sum: BinaryFunction = (x, y) => {
    return x + y;
};

function map(arr: any[], mapper: (item: any) => any) {
    let result = []; // [ 2, 4, 6, 8, 10]

    for (let i = 0; i < arr.length; ++i) {
        result.push(mapper(arr[i]));
    }

    return result;
}

// newArr -> [ 2, 4, 6, 8, 10 ]
const newArr = map([1, 2, 3, 4, 5], (item) => 2 * item);
