// 类型断言
// 当你比ts更能确定当前变量的类型的时候，可以使用类型断言来告诉ts 当前变量的类型

const arr: number[] = [1123, 1231, 124, 123];

const res = arr.find((item, index, arr) => item > 0)
console.log(res); //当前的res 我们知道一定是一个number 类型，但ts 认为它可能为undefined ，则这时候就可以通过断言的方式告诉ts 当前值的类型

const res1 = res as number; // 方式一
const res2 = <number>res1;  // 方式二

const nextRes = Math.pow(res1, 2)

const nextRes2 = Math.pow(res2, res1)

console.log(nextRes, nextRes2);