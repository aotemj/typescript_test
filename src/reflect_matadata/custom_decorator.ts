//自定义装饰器
// 上面的例子里我们用了Reflect.metadata设置的元数据，我们也可以自定义一个装饰器去完成同样的事情，像下面这样：
import "reflect-metadata";

function Role(name: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(arguments);

        // return target
        // Reflect.defineMetadata("name", name, target)
    }
}

