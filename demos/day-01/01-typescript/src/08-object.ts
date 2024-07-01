type Person = {
    name: string;
    readonly age: number;
    spouse?: string;
};
type ChequeAmount = number | string;

const john: Person = {
    name: "John",
    age: 32,
};

john.spouse = "Jane";
// ++john.age;

export {};
