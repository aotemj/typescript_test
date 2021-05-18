# typescript

## 开发环境搭建

### 1.安装 Node 的运行环境

### 2.全局安装 typescript

- npm i -g typescript

## 静态类型

### 定义

- 某个变量或常量的类型一旦定义，则不可以改变

	- let count:number = 1

### 分类

- 原始数据类型

	- 布尔值

		- 布尔值是最基础的数据类型，在 TypeScript 中，使用 boolean 定义布尔值类型

			- let isDone: boolean = false;

// 编译通过
// 后面约定，未强调编译错误的代码片段，默认为编译通过

		- 注意，使用构造函数 Boolean 创造的对象不是布尔值：

			- let createdByNewBoolean: boolean = new Boolean(1);

// Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.

		- 事实上 new Boolean() 返回的是一个 Boolean 对象：

			- let createdByNewBoolean: Boolean = new Boolean(1);

		- 直接调用 Boolean 也可以返回一个 boolean 类型：

			- let createdByBoolean: boolean = Boolean(1);

		- 在 TypeScript 中，boolean 是 JavaScript 中的基本类型，而 Boolean 是 JavaScript 中的构造函数。其他基本类型（除了 null 和 undefined）一样

	- 数值

		- 使用 number 定义数值类型：

			- let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
			- 编译结果：
			- var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;

	- 字符串

		- 使用 string 定义字符串类型：

			- let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
			- 编译结果：
			- var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".
I'll be " + (myAge + 1) + " years old next month.";

	- 空值

		- JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
		- function alertName(): void {
    alert('My name is Tom');
}
		- 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
		- let unusable: void = undefined;

	- Null 和 Undefined

		- 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型

			- let u: undefined = undefined;
let n: null = null;

		- 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：

			- // 这样不会报错
let num: number = undefined;
			- // 这样也不会报错
let u: undefined;
let num: number = u;

		- 而 void 类型的变量不能赋值给 number 类型的变量：

			- let u: void;
let num: number = u;

// Type 'void' is not assignable to type 'number'.

- object类型

	- typescript 中的object 类型泛指 除了 原始数据类型外的对象类型，并不单单指 object 单纯的对象类型
	- 包括

		- 对象类型

			- const lady: {
  uname: string,
  uage: number
} = {
  uname: 'lisi',
  uage: 123
}

console.log(lady.uname, lady.uage);

		- 函数类型

			- const meetLady: () => string = () => {
  return 'lisi'
}

meetLady() // lisi

		- 类类型

			- class Lady {
  name: string;
  age: number;

  constructor(props) {
    this.name = props.name
    this.age = props.age
  }
}

const lady: Lady = new Lady({
  name: 'lisi',
  age: '12'
})

console.log(lady);

		- 数组类型

			- 数组中可以存储数据类型相同的一组元素
			- const ladys: string[] = ['lisi', 'wangwu', 'zhaoliu']
console.log(ladys);

		- 元组类型

			- 数组中如果数据类型不相同，则可以使用元组，元组中允许存储不同类型的元素，元组可以作为参数传递给函数

		- 枚举

			- 枚举是组织有关联数据的一种方式
			- 使用场景

				- 当变量的值只能是几个固定值中的一个的时候，就应该考虑使用枚举

			- 语法

				- enum  枚举名称 {成员1， 成员2，...}

					- eg

						- enum Gender {Female,Male}
						- enum Player{X,O}

				- 约定枚举名称、成员名称以大写字母开头
				- 多个成员之间使用逗号分隔

			- 注意

				- 数字枚举是以数字0开始自增
				- 字符串枚举没有自增的特性，必须给每个枚举赋初始值
				-  当不使用 const 修饰 当前枚举类型时，会在编译后进行值和键的双向绑定（入侵运行时代码，通过键可以获取值，也可以通过值获取键）

					- eg

						- // 键值双向绑定枚举
{
    enum Gender {
        Male,
        Female,
        Other
    }

    class Student {
        name: string;
        age: number;
        gender: Gender;

        constructor(name: string, age: number, gender: Gender) {
            this.name = name;
            this.age = age;
            this.gender = gender
        }
    }


    let stu = new Student("lisi", 12, Gender.Male);
    console.log(stu.gender, Gender[stu.gender]); // 0 ,Male 即可以通过键获取值， 又可以通过值获取键
    // 编译结果：
    /**
     * "use strict";
     {
        let Gender;
        (function (Gender) {
            Gender[Gender["Male"] = 0] = "Male";
            Gender[Gender["Female"] = 1] = "Female";
            Gender[Gender["Other"] = 2] = "Other";
        })(Gender || (Gender = {}));
        class Student {
            constructor(name, age, gender) {
                this.name = name;
                this.age = age;
                this.gender = gender;
            }
        }
        let stu = new Student("lisi", 12, Gender.Male);
        console.log(stu.gender, Gender[stu.gender]);
    }
     */
}

				- 对应的常量枚举不存在 键值的双向绑定

					- eg

						- // 常量枚举
{
    const enum Gender {
        Male,
        Female,
        Other
    }

    class Student {
        name: string;
        age: number;
        gender: Gender;

        constructor(name: string, age: number, gender: Gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
    }

    let stu = new Student("wangwu", 20, Gender.Female);
    // console.log(stu.gender, Gender[stu.gender]);  // 报错  A const enum member can only be accessed using a string literal.
}

## 类型断言（assertion）

### 当你比ts更能确定当前变量的类型的时候，可以使用类型断言来告诉ts 当前变量的类型

### 类型断言的两种方式

- 1. xxx as 类型
- 2. <类型>xxx
- eg

	- // 类型断言
// 当你比ts更能确定当前变量的类型的时候，可以使用类型断言来告诉ts 当前变量的类型

const arr: number[] = [1123, 1231, 124, 123];

const res = arr.find((item, index, arr) => item > 0)
console.log(res); //当前的res 我们知道一定是一个number 类型，但ts 认为它可能为undefined ，则这时候就可以通过断言的方式告诉ts 当前值的类型

const res1 = res as number; // 方式一
const res2 = <number>res1;  // 方式二

const nextRes = Math.pow(res1, 2)

const nextRes2 = Math.pow(res2, res1)

console.log(nextRes, nextRes2);

## 自定义静态类型

## 标准库

### 定义

- 是内置对象所对应的声明文件

## 类型注解和类型推断

### 类型注解（type annotation）

- let count: number;
count = 123;


	- 这段代码就是类型注解，意思是显示的告诉代码，我们的count 变量就是一个数字类型，这就叫做类型注解（开发者手动为某个变量或常量添加类型）

### 类型推断（type inferrence）

- let countInference = 123;

	- 它是有某种推断能力的，通过你的代码 TS 会自动的去尝试分析变量的类型（开发者没有为变量或常量添加类型，此时，typescript 会根据当前变量或常量的赋值自动匹配类型）

## 任意值

### 任意值（Any）用来表示允许赋值为任意类型。

### 如果是一个普通类型，在赋值过程中改变类型是不被允许的

- let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.

### 但如果是 any 类型，则允许被赋值为任意类型。

- let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

### 任意值的属性和方法

- 在任意值上访问任何属性都是允许的

	- let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

- 也允许调用任何方法：

	- let anyThing: any = 'Tom';
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');

- 可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。

### 未声明类型的变量

- 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：

	- let something;
something = 'seven';
something = 7;

something.setName('Tom');
	- 等价于
	- let something: any;
something = 'seven';
something = 7;

something.setName('Tom');

## 类（Class）

### 类的修饰符

- public

	- 当public修饰当前类中的成员变量或成员方法的时候，当前的成员变量和成员方法可以被类内部和外部同时访问

- protected

	- 当protected 修饰当前类中的成员变量或成员方法的时候，当前的成员变量和成员方法只能在当前类或其子类中被访问，不能在其他类中被访问

- private

	- 当 private 修饰当前类中的成员变量或成员方法的时候，当前的成员变量和成员方法只能被当前类内部访问，外部无法访问

### 只读属性

- 当前属性不可以被修改

	- eg

		- class Person {
    readonly _name: string

    constructor(name: string) {
        this._name = name;
    }

    set name(name: string) {
        this._name = name;
        //Attempt to assign to const or readonly variable
        // TS2540: Cannot assign to '_name' because it is a read-only property.
    }
}



### 构造方法

- 声明类时，可以使用 constructor 方法接收来自 实例化的参数，并进行初始化操作
- 注意：

	- 在继承中，子类中如果有constructor方法，则子类的constructor 中必须 使用 super() 方法来调用父类的 构造方法

		- eg

			- class Person {
    private _name: string
    private _age: number

    constructor(name: string, age: number) {
        this._name = name;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(age: number) {
        this._age = age
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name
    }
}

class Teacher extends Person {
    constructor(name: string, age: number) {
        super(name, age)
    }

    teach() {
        console.log("教书育人")
    }
}

### 抽象类

- 抽象类的修饰符为 abstract
- 抽象类中只有抽象方法 ， 抽象类的子类必须重写抽象类中的所有抽象方法
- eg

	- abstract class Person {

    abstract eat();

    abstract sleep();
}

class Student extends Person {
    eat() {
        console.log("学生在学校吃饭");
    }

    sleep() {
        console.log("学生在学校睡觉");
    }
}

### 注意

- ts 中的类即可以作为实体类存在，也可以作为一个类型存在

	- eg

		- // 作为实体类存在

			- class Dog {
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


		- // 作为类型存在

			- // 作为类型存在
let dog2: Dog = new Dog("dog2");

dog2.sayHello()

## interface、type

### 相同点

- 都可以描述一个对象或函数

	- {
    interface User {
        name: string
        age: number
    }

    interface SetUser {
        (name: string, age: number): void;
    }
}
	- {
    type User = {
        name: string
        age: number
    }

    type SetUser = {
        (name: string, age: number): void
    }
}

- 都允许扩展（extends）

	- interface和type 都可以扩展，并且两者并不是相互独立的，也就是说interface 可以extends type ，type 也可以extends interface， 虽然效果差不多，但是两者语法不同
	- interface extends interface

		- {
    interface Name {
        name: string
    }

    interface User extends Name {
        age: number
    }
}

	- interface extends type

		- {
    type Name = {
        name: string
    }

    interface User extends Name {
        age: number;
    }
}

	- type extends type 

		- {
    type Name = {
        name: string
    }

    type User = Name & {
        age: number
    }
}

	- type extends interface

		- {
    interface Name {
        name: string
    }

    type User = Name & {
        age: number
    }
}

### 不同点

- 1. type 可以 interface 不行

	- type 可以声明基本类型别名，联合类型，元组等类型

		- {
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
}

- 2.interface 可以而 type 不行

	- interface 可以进行类型合并

		- {
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

## tsconfig.json

### tsconfig.json 文件中制定了用来编译这个项目的根文件和编译选项，一个项目可以通过以下方式之一来编译

- 使用 tsconfig.json

	- 不带任何输入文件的情况下调用tsc，编译器会从当前目录开始去查找tsconfig.json文件，逐级向上搜索父目录
	- 不带任何输入文件的情况下调用tsc，且使用命令行参数--project（或-p）指定一个包含tsconfig.json文件的目录
	- 注意：

		- 当命令行上制定了输出文件时，tsconfig.json 文件会被忽略

### 详细配置

- files
- compilerOptions

	- removeComments

		- 是否在编译时删除注释

	- strict

		- 是否以严格模式编译ts

	- noImplicitAny

		- 是否允许注解类型any 不用特意标明

	- strictNullChecks

		- 不允许当前项目里有null值出现

	- strictFunctionTypes
	- strictBindCallApply
	- strictPropertyInitialization
	- noImplicitThis
	- alwaysStrict
	- target

		- 设置当前ts编译后对应的js所采用的ecmaScript标准
		- 可取值

			- ES3(default)
			- ES5
			- ES2015
			- ES2016
			- ES2017
			- ES2018
			- ES2019
			- ESNEXT

	- module

		- 用来指定编译后的js要使用的模块化标准
		- 可取值

			- none
			- commonjs
			- amd
			- system
			- umd
			- es2015
			- ESNext

	- lib

		- 用于指定要包含在编译中的库文件
		- 注意：当前

	- outDir

		- 编译生成js 文件目录

	- rootDir

		- 当前项目跟目录

	- sourceMap

		- 是否生成源文件与编译文件之间的映射关系文件

	- noUnusedLocals

		- 是否去除声明未使用的变量

	- noUnusedParameters

		- 是否去除声明未使用的参数（函数、方法）

## 联合类型和 类型保护

### 当一个变量的类型超过一个的时候即可设置为联合类型

### 当出现联合类型时，就需要特定的类型保护机制

### eg

- let var1: string|number;

	- 当前的var1 变量既可以是 string 类型，又可以是 number类型

## 泛型

### 在函数和方法、类的成员方法、方法接口中参数或返回值的类型不固定时，可以使用泛型来定义当前参数的类型，这样增强了函数、方法的通用性

### 示例

- 方法泛型

	- 单个参数

		- enum type {STRING = 'string', NUMBER = 'number'};

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

	- 多个参数

		- // 多个泛型
function join<T, P>(arg1: T, arg2: P) {
    return `${arg1}${arg2}`
}

console.log(join<string, number>("123", 2));

- 类泛型

	- class Person1<T> {
    private _hobby: T[];

    constructor(hobby: T[]) {
        this._hobby = hobby
    }

    getHobby(index: number): T {
        return this._hobby[index]
    }
}

const person = new Person1<string>(["eat", "sleep"])
const person2 = new Person1<number>([1, 2, 3])
console.log(person.getHobby(1));
console.log(person2.getHobby(0));

- 接口泛型

	- interface UtilFn<T> {
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

## 命名空间

### 在代码量较大的情况下，为了避免各种棉量命名相冲突，可将相似功能的函数、类、接口等放置到命名空间内，同Java的包,.net 的命名空间一样，typescript 的命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象

### 命名空间和模块的区别

- 命名空间： 内部模块，主要用于组织代码，避免命名冲突
- 模块： ts 的外部模块的简称，侧重代码的复用，一个模块里坑有多个命名空间

### 注意： 命名空间内的类和方法也需要 export 后才能使用

- interface Animal<T> {
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

## 装饰器

### 简介

- 装饰器是一种特殊类型的声明，他能够被附加到类声明，方法，属性或参数上，可以修改类的行为
- 通俗的将装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能

### 常见的装饰器

- 类装饰器

	- 类装饰器在类声明之前被声明（紧靠着类声明），类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。传入一个参数
	- eg

		- namespace C {
    function decoratorDemo3(target: any) {
        // 重载类的方法
        return class extends target {
            apiUrl: any = '我是修改后的数据'

            getData() {
                console.log(this.apiUrl);
            }
        }

    }

    @decoratorDemo3
    class HttpClient {
        apiUrl: string;

        constructor(apiUrl: string) {
            this.apiUrl = apiUrl;
        }

        getData() {
            console.log(this.apiUrl);
        }
    }

    let httpClient = new HttpClient("https://www.baidu.com")
    console.log(httpClient.getData());
}

- 属性装饰器
- 方法装饰器

	- 方法装饰器会被应用到方法的属性描述符上，可以用来监视，修改或者替换方法的定义
	- 方法装饰器会在运行时传入下列3个参数

		- 1. 对于静态船员来说是类的构造函数，对于实力成员是类的原型对象
		- 2.成员的名字
		- 3.成员的属性描述符

- 参数装饰器

### 装饰器的写法

- 普通装饰器（无法传参）
- 装饰器工厂（可传参）

