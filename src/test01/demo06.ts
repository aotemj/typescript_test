// 泛型
enum type {STRING = 'string', NUMBER = 'number'};

function add<T>(num1: T, num2: T) {
    switch (typeof num1) {
        case type.STRING:
            return `${num1}${num2}`
        case type.NUMBER:
            return (num1 as any) + (num2 as any);
    }
}

console.log(add<number>(1, 1));
console.log(add<string>('123', '123'));


// 多个泛型
function join<T, P>(arg1: T, arg2: P) {
    return `${arg1}${arg2}`
}

console.log(join<string, number>("123", 2));

function getParams<T>(args: Array<T>): Array<T> {
    return args
}

// 等价于：
// function getParams<T>(args: T[]): T[] {
//     return args
// }

getParams<string>(["123", "32424", "1231"])
getParams<number>([1, 2, 3])

// 泛型在类中的使用：

class Person1 {
    private _hobby: string [];

    constructor(hobby: Array<string>) {
        this._hobby = hobby
    }

    getHobby(index: number): string {
        return this._hobby[index];
    }
}

const person = new Person1(["eat", "sleep"])
console.log(person.getHobby(1));

function identity<T>(arg: T): T {
    return arg;
}

identity("string");


function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}


loggingIdentity<number>([1, 2])


// 普通类
// class MinClass {
//     public nums: number[] = [];
//
//     add(num: number): void {
//         this.nums.push(num)
//     }
//
//     getMin(): number {
//         const length = this.nums.length;
//         let min = this.nums[0]
//         for (let i = 0; i < length; i++) {
//             min = this.nums[i] < min ? this.nums[i] : min
//         }
//         return min
//     }
// }
//
//
// const minClass = new MinClass()
// minClass.add(1)
// minClass.add(-1)
// minClass.add(0)
// minClass.add(100)
// console.log(minClass.getMin());


// 使用 泛型改造后的类，兼容多种数据类型
class MinClass<T> {
    public container: T[] = [];

    add(arg: T): void {
        this.container.push(arg)
    }

    getMin(): T {
        const length = this.container.length;
        let min = this.container[0]
        for (let i = 0; i < length; i++) {
            min = this.container[i] > min ? min : this.container[i]
        }
        return min
    }
}


let m1 = new MinClass<string>();
m1.add("a")
m1.add("b")
m1.add("c")

console.log(m1.getMin());


let m2 = new MinClass<number>()
m2.add(1)
m2.add(2)
m2.add(4)
m2.add(10)
m2.add(-1)
console.log(m2.getMin());
