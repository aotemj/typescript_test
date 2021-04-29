// let person: {
//     name: string
//     age: number
//     address?: string
//     sayHi: () => void
//     add: (num1: number, num2: number) => number
//     sendMessage: () => string
// } = {
//     name: 'zhangsan',
//     age: 14,
//     address: ' hello',
//     sayHi: () => {
//         console.log("hello")
//     },
//     add: (num1: number, num2: number): number => {
//         return num1 + num2;
//     },
//     sendMessage: () => {
//         return "message has sent"
//     }
// }

// interface Person {
//     name: string
//     age: number
//     address?: string
//     sayHi: () => void
//     add: (num1: number, num2: number) => number
//     sendMessage: () => string
// }
//
// let person: Person = {
//     name: 'zhangsan',
//     age: 14,
//     address: ' hello',
//     sayHi: () => {
//         console.log("hello")
//     },
//     add: (num1: number, num2: number): number => {
//         return num1 + num2;
//     },
//     sendMessage: () => {
//         return "message has sent"
//     }
// }
//
//
// enum Gender {Female, Male}
//
// let userGender: Gender
//
// userGender = Gender.Female
// console.log(userGender);
// userGender = Gender.Male

// class Person {
//     constructor({name}) {
//         this.name = name
//     }
//
//     private name: string;
//
//     public sayHello() {
//         console.log("hello");
//     }
//
//     public getName(): string {
//         return this.name
//     }
// }
//
// const person = new Person({name: "lisi"})
//
// person.sayHello()
//
// console.log(person.getName());


// class Person {
//     private _name: string
//     private _age: number
//
//     constructor(name: string, age: number) {
//         this._name = name;
//         this.age = age;
//     }
//
//     get age() {
//         return this._age;
//     }
//
//     set age(age: number) {
//         this._age = age
//     }
//
//     get name() {
//         return this._name;
//     }
//
//     set name(name: string) {
//         this._name = name
//     }
// }
//
// class Teacher extends Person {
//     constructor(name: string, age: number) {
//         super(name, age)
//     }
//
//     teach() {
//         console.log("教书育人")
//     }
// }
//
// const t = new Teacher("lisi", 12)
// console.log(t.age);

// const p = new Person("lisi", 20)
// console.log(p.age);
// console.log(p.name);
// console.log(person.name);

// 抽象类



