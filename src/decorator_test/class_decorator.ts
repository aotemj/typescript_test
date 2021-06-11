// 类装饰器可以对当前类的方法和属性进行扩展和维护
function classDecorator(target: any) {
    class NewClass extends target {

        constructor(props: any) {
            super(props);
        }

        extendMethod() {
            console.log('修改后的extendMethod方法体');
        }
    }

    return NewClass
}

// @ts-ignore
@classDecorator
class DemoClass {
    demoProperty: string;

    constructor(demoProperty: string) {
        this.demoProperty = demoProperty
    }
}

const demoClass = new DemoClass("修改后的属性")
// @ts-ignore
demoClass.extendMethod() // 修改后的方法体
console.log(demoClass.demoProperty);