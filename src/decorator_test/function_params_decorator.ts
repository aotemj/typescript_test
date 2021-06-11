// 接着来看类函数参数的装饰器，类函数的参数装饰器可以修饰类的构建函数中的参数，以及类中其他普通函数中的参数，该装饰器在类的方法被调用的时候执行
/**
 *
 * @param target 当前装饰器所修饰参数所在方法的宿主类
 * @param key 当前所修饰参数所在方法的方法名
 * @param index 当前所修饰参数在当前方法中的索引值
 */

function function_params_decorator(target: any, key: string, index: number) {
    console.log(`taget is : ${target}`);
    console.log(`key is: ${key}`);
    console.log(`index is : ${index}`);
}

class TestClass {
    testMethod(@function_params_decorator param1: any) {
        console.log(`current param is : ${param1}`);
    }
}


const tc = new TestClass()
tc.testMethod("hello world");
// taget is : [object Object]
// key is: testMethod
// index is : 0
// current param is : hello world


// 这里对于类的属性的装饰器函数接受两个参数，对于静态属性而言，第一个参数是类本身，对于实例属性而言，第一个参数是类的原型，第二个参数是指属性的名字