interface Person {
    name: string;
    readonly age: number;
    spouse?: string;
}

// this declaration will be merged with the earlier declaration
interface Person {
    company: string;
}

const john: Person = {
    name: "John",
    age: 32,
    company: "John Deere",
    // spouse: "Jane", // works either with/without spouse
};
