interface IPerson {
    name: string;
    age: number;
    celebrateBirthday: () => void;
}

class Person implements IPerson {
    name;
    age;
    // private aadhaarCard: number;
    readonly children: string[] = [];

    constructor(name: string, age: number, private aadhaarCard: number) {
        this.name = name;
        this.age = age;
        // this.aadhaarCard = aadhaarCard;
    }

    celebrateBirthday() {
        ++this.age;
    }
}

export {};
