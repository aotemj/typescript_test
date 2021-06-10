// Reflect Metadata 的作用
// 在定义类或者类方法的时候，可以设置一些元数据，我们可以获取到在类与类方法添加的元数据，用的方法就是 Reflect Metadata,元数据值的是描述东西时 用的数据

// 导入 "reflect-metadata" 包
import "reflect-metadata"

// 在当前的Post 类的上面用Reflect.metadata 装饰器添加了一条元数据，role 是这条元数据的名字，admin 是我们给这条数据设置的对应的值
@Reflect.metadata('role', 'admin')
class Post {
}

// 稍后如果想获取到在类上添加的这些元数据，可以使用 Reflect.getMetadata 方法， role 是元数据的名字， Post 是对应的类的名字，执行上面代码，会返回admin 这个字符串
const metadata = Reflect.getMetadata('role', Post)

console.log(metadata);
