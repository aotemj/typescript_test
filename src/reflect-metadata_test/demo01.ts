// metadata 是 es7 的一个提案，他主要用来在声明的时候添加和读取元数据， typescript 在1.5+ 的版本已经支持他
import 'reflect-metadata'

// Reflect Metadata 的API可以YSL与类或类的属性上：
// function metadata(metadataKey: any, metadataValue: any): {
//     (target: Function): void;
//     (target: Object, propertyKey: string | symbol): void;
// }

//Reflect.metadata 当做  Decorator 使用，当修饰类时，在类上添加元数据，当修饰类属性时，在类原型的属性上添加元数据：

{
    @Reflect.metadata('inClass', 'A')
    class Test {

        @Reflect.metadata('inMethod', 'B')
        hello(): string {
            return 'hello world'
        }
    }

    console.log(Reflect.getMetadata('inClass', Test));
    console.log(Reflect.getMetadata('inMethod', new Test(), 'hello'));
}

// 自定义 metadataKey
// 除了能获取类型信息外，常用于自定义metadataKey，并在核实的实际获取它的值：
{
    function classDecorator(): ClassDecorator {
        return function (target) {
            // Reflect.defineMetadata('classMetaData', 'a', target)
            // console.log(target);
            // console.log(arguments)
            // 在类上定义元数据，key 为 classMetaData, value 为 'a'
            Reflect.defineMetadata('classMetaData', 'a', target)
        }
    }

    function methodDecorator(): MethodDecorator {
        return (target, key, descriptor) => {
            // 在类的原型属性 'someMethod' 上定义元数据，key 为 methodMetaData， value 为 b
            Reflect.defineMetadata('methodMetaData', 'b', target, key)
        }
    }

    @classDecorator()
    class SomeClass {
        @methodDecorator()
        someMethod() {
        }
    }

    console.log(Reflect.getMetadata('classMetaData', SomeClass));
    console.log(Reflect.getMetadata('methodMetaData', new SomeClass(), 'someMethod'));
    console.log(new SomeClass().someMethod())
}

// 控制反转和依赖注入
{
    // type Constructor<T = any> = new (...args: any[]) => T;
    // const Injectable = (): ClassDecorator => target => {
    // };
    //
    // class OtherService {
    //     a = 1;
    // }
    //
    // @Injectable()
    // class TestService {
    //     constructor(public readonly otherService: OtherService) {
    //     }
    //
    //     testMethod() {
    //         console.log(this.otherService.a)
    //     }
    // }
    //
    // const Factory = <T>(target: Constructor<T>): T => {
    //     //     获取所有注入的服务
    //     const providers = Reflect.getMetadata('design:paramtypes', target);
    //     const args = providers.map((provider: Constructor) => new provider());
    //     return new target(...args);
    // }
    //
    // Factory(TestService).testMethod();

    type Constructor<T = any> = new (...args: any[]) => T;

    const Injectable = (): ClassDecorator => target => {};

    class OtherService {
        a = 1;
    }

    @Injectable()
    class TestService {
        constructor(public readonly otherService: OtherService) {}

        testMethod() {
            console.log(this.otherService.a);
        }
    }

    const Factory = <T>(target: Constructor<T>): T => {
        // 获取所有注入的服务
        const providers = Reflect.getMetadata('design:paramtypes', target); // [OtherService]
        const args = providers.map((provider: Constructor) => new provider());
        return new target(...args);
    };

    Factory(TestService).testMethod(); // 1
}