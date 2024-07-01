type Product<T> = {
    name: string;
    tax: T;
};

type StateCentreTax = {
    sgst: number;
    cgst: number;
};

const product1: Product<number> = {
    name: "Product 1",
    tax: 10,
};

const product2: Product<StateCentreTax> = {
    name: "Petrol",
    tax: {
        sgst: 9,
        cgst: 9,
    },
};

function map<T>(arr: T[], mapper: (item: T) => any) {
    let result = []; // [ 2, 4, 6, 8, 10]

    for (let i = 0; i < arr.length; ++i) {
        result.push(mapper(arr[i]));
    }

    return result;
}

// newArr -> [ 2, 4, 6, 8, 10 ]
const newArr = map([1, 2, 3, 4, 5], (item) => 2 * item);

export {};
