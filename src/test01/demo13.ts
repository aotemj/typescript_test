// 属性装饰器

// 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
// 1、 对于静态尘缘来说是类的构造函数，对于实力成员是类的原型对象。
// 2、 成员的名字

namespace C {

    function decoratorDemo(target: any) {
        return class extends target {
            baseUrl: string;

            constructor(baseUrl: string) {
                super();
                this.baseUrl = baseUrl;

            }

            getData(): string {
                return this.baseUrl;
            }
        }
    }

    //属性装饰器
    function propertyDecoratorDemo(params: any) {
        return function (target: any, attr: any) {
            console.log(target) // {getData: [Function (anonymous)]}
            console.log(attr) // baseUrl
            target[attr] = params;
        }
    }

    @decoratorDemo
    class HttpClient {
        @propertyDecoratorDemo('hello')
        baseUrl: string | undefined;

        constructor(baseUrl: string) {
            // this.baseUrl = baseUrl
        }

        getData(): any {
            return this.baseUrl;
        }
    }

    // let httpClient = new HttpClient("www.baidu.com");
    // httpClient.getData();
}