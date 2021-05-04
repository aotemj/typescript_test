// 数组类型
{
    // 数组的声明
    // 1
    const arr1: Array<number> = [1, 2, 3]

    const arr2: number[] = [1, 2, 3]

    function sum(...args: number []) {
        return args.reduce((prev, current) => prev + current)
    }

    console.log(sum(...arr1));
}