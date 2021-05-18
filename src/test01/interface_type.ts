// interface 和 type
// 相同点: 1.都可以描述一个对象或函数
// interface
{
    interface User {
        name: string
        age: number
    }

    interface SetUser {
        (name: string, age: number): void;
    }
}

{
    type User = {
        name: string
        age: number
    }

    type SetUser = {
        (name: string, age: number): void
    }
}

// 相同点: 2.都允许扩展 ,并且两者相互独立， interface 可以extends type， type  也可以extends interface

// interface extends interface
{
    interface Name {
        name: string
    }

    interface User extends Name {
        age: number
    }
}

// interface extends type
{
    type Name = {
        name: string
    }

    interface User extends Name {
        age: number;
    }
}

// type extends type
{
    type Name = {
        name: string
    }

    type User = Name & {
        age: number
    }
}
// type extends interface
{
    interface Name {
        name: string
    }

    type User = Name & {
        age: number
    }
}

// 不同点
//1. type 可以 interface 不行

// type 可以声明基本类型别名，联合类型，元组等类型
{
    class Dictionary<T, U> {
    }

    //    基本类型别名
    type Name = string;

    // 联合类型
    interface Dog {
        wang(): void;
    }

    interface Cat {
        miao(): void;
    }

    type Pet = Dog | Cat

    //     具体定义数组内每个成员的类型
    type PetList = [Dog, Cat, Pet]

    // type 语句中还可以使用 typeof 关键字获取对应数据的类型
    let a = 1;
    type B = typeof a;

//     其他操作
    type StringOrNumber = string | number;
    type Text = string | { text: string };
    type NameLookup = Dictionary<string, Person>;
    type Callback<T> = (data: T) => void;
    type Pair<T> = [T, T];
    type Coordinates = Pair<number>;
    type Tree<T> = T | { left: Tree<T>, right: Tree<T> };
}
// 2. interface 可以而 type 不行
{
    // interface 能够声明合并
    interface User {
        name: string
        age: number
    }

    interface User {
        sex: string
    }

    let user: User = {
        name: 'helo',
        age: 123,
        sex: 'male'
    }
}
