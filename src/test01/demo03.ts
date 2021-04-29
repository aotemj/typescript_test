// 抽象类
// 抽象类中只有抽象方法 ， 抽象类的子类必须重写抽象类中的所有抽象方法

abstract class Person3 {

    abstract eat(): any;

    abstract sleep(): any;
}

class Student extends Person {
    eat(): void {
        console.log("学生在学校吃饭");
    }

    sleep(): void {
        console.log("学生在学校睡觉");
    }
}