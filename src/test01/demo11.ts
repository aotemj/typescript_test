// decorator 装饰器 ,装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为
// 通俗的将装饰器就是一个方法，可以注入到类

namespace C {
    // 无参装饰器（普通装饰器）
    function decoratorDemo1(params: any) {
        console.log(params);
        // 在不改变当前类的结构的前提下，可以通过装饰器来为当前类添加成员方法，成员属性等
        params.prototype.baseUrl = 'https://www.baidu.com'
        params.prototype.postMethods = function () {
            console.log(this.baseUrl);
        }
    }

    @decoratorDemo1
    class HttpClient {
        constructor() {

        }

        getData() {

        }
    }

    let httpClient: any = new HttpClient()
// 在不改变当前类的结构的前提下，可以通过装饰器来为当前类添加成员方法，成员属性等
    httpClient.postMethods()

    console.log(httpClient);


// 装饰器工厂（可以在装饰器内传入参数）
    function decoratorDemo2(params: string) {
        return function (target: any) {

            console.log(target)
            console.log(params)
        }
    }


    @decoratorDemo2("hello decoratorDemo2")
    class HttpClient2 {
        constructor() {
        }

        getData() {
            console.log('getData invoked');
        }
    }

    let httpClient2 = new HttpClient2()
    console.log(httpClient2);
}
