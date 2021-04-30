// 命名空间
interface Animal<T> {
    name: string;
    age: number;

    eat(): void;

    sleep(): void;
}

namespace A {
    // 注意： 命名空间内的类和方法需要 export 后，才能在其他命名空间内使用
    export class Cat<T> implements Animal<T> {

        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        eat(): void {
            console.log(`${this.name}在吃饭`)
        }

        sleep(): void {
            console.log(`${this.name}准备睡觉了`)
        }
    }
}

namespace B {
    export class Cat<T> implements Animal <T> {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        eat(): void {
            console.log(`moduleB ${this.name}在吃饭`);
        }

        sleep(): void {
            console.log(`moduleA ${this.name}准备睡觉`);
        }
    }
}

let cat1 = new A.Cat("cat1", 12)
cat1.eat();

let cat2 = new B.Cat("cat2", 20)
cat2.eat();