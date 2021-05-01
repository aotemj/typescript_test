// 装饰器重载类

namespace C {
    function decoratorDemo3(target: any) {
        // 重载类的方法
        return class extends target {
            apiUrl: any = '我是修改后的数据'

            getData() {
                console.log(this.apiUrl);
            }
        }

    }

    @decoratorDemo3
    class HttpClient {
        apiUrl: string;

        constructor(apiUrl: string) {
            this.apiUrl = apiUrl;
        }

        getData() {
            console.log(this.apiUrl);
        }
    }

    let httpClient = new HttpClient("https://www.baidu.com")
    console.log(httpClient.getData());
}