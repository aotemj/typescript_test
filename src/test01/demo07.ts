// 泛型接口
// interface UtilFn {
//     (arg: string): string;
// }
//
// let utilFn: UtilFn = (arg: string): string => {
//     return arg
// }
//
// console.log(utilFn("helloworld"));

interface UtilFn<T> {
    (arg: T): T;
}

let utilFn: UtilFn<string> = function (arg) {
    return arg;
}

console.log(utilFn("123"));

let utilFnNumber: UtilFn<number> = function (arg) {
    return arg
}

console.log(utilFnNumber(1211233));