// 泛型
// interface LengthWise {
//     length: number;
// }
//
// function identity<T extends LengthWise>(arg: T): T {
//     console.log(arg.length);
//     return arg;
// }
//
// const result = identity<string>("hello world");
//
// console.log(result)

class GenericNumber<T> {
    zeroValue: T | undefined;
    add: ((x: T, y: T) => T) | undefined;
}

const myGenericNumber = new GenericNumber<number>();

myGenericNumber.add = function (x, y) {
    return x + y
}

console.log(myGenericNumber.add(1, 2));
// console.log(myGenericNumber.add('hello', 'world')) // 报错

// 泛型接口
interface ConfigFn {
    <T>(value: T): void;
}

const getData = function <T>(value: T) {
    console.log(value)
}
getData<number>(1)

getData<string>("hello")

//泛型动态数据
interface Bookmark {
    msg: string;
}

class BookMarkService<T extends Bookmark> {
    items: T[] = [];
}


// 彩蛋
// let err1 :readonly Set<number>; // 仅允许对数组和元祖文本类型使用 readonly 类型修饰符
// let err2 :readonly Array<number>;

let ok1: readonly boolean []

let ok2: readonly [number, string];


