// enum 枚举类型
// 枚举类型需要注意的点：
// 当不使用 const 修饰 当前枚举类型时，会在编译后进行值和键的双向绑定（入侵运行时代码，通过键可以获取值，也可以通过值获取键）
// 如果代码中不需要进行键和值的双向绑定，建议使用常量枚举（const）


// 键值双向绑定枚举
// {
//     enum Gender {
//         Male,
//         Female,
//         Other
//     }
//
//     class Student {
//         name: string;
//         age: number;
//         gender: Gender;
//
//         constructor(name: string, age: number, gender: Gender) {
//             this.name = name;
//             this.age = age;
//             this.gender = gender
//         }
//     }
//
//
//     let stu = new Student("lisi", 12, Gender.Male);
//     console.log(stu.gender, Gender[stu.gender]); // 0 ,Male 即可以通过键获取值， 又可以通过值获取键
//     // 编译结果：
//     /**
//      * "use strict";
//      {
//         let Gender;
//         (function (Gender) {
//             Gender[Gender["Male"] = 0] = "Male";
//             Gender[Gender["Female"] = 1] = "Female";
//             Gender[Gender["Other"] = 2] = "Other";
//         })(Gender || (Gender = {}));
//         class Student {
//             constructor(name, age, gender) {
//                 this.name = name;
//                 this.age = age;
//                 this.gender = gender;
//             }
//         }
//         let stu = new Student("lisi", 12, Gender.Male);
//         console.log(stu.gender, Gender[stu.gender]);
//     }
//      */
// }

// 常量枚举
namespace C {
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