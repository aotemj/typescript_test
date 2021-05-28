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

