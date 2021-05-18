// TS 中的类即可以作为实体类，又可以作为一个类型存在

// 作为实体类存在
class Dog {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(): void {
        console.log("遛狗")
    }

    sayHello(): void {
        console.log(`hello I'm ${this.name}`);
    }
}

let dog1 = new Dog("dog1");

// 作为类型存在
let dog2: Dog = new Dog("dog2");

dog2.sayHello()