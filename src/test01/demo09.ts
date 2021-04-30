// 使用泛型定义 mysql、mssql 、 mongodb 数据库方法
interface DBI<T> {
    add(info: T): boolean;

    update(newInfo: T, id: number): boolean;

    delete(id: number): boolean;

    get(id: number): boolean;
}

class MySqlDB<T> implements DBI<T> {
    private users: T[] = [];


    add(info: T): boolean {
        this.users.push(info)
        return false;
    }

    update(newInfo: T, id: number): boolean {
        const length = this.users.length;
        for (let i = 0; i < length; i++) {
            const item = this.users[i]
        }
        return true
    }

    delete(id: number): boolean {
        return true
    }

    get(id: number): boolean {
        return true
    };
}

interface User {
    id: number;
    username: string;
    password: string;
}

let mySqlDb = new MySqlDB<User>()

let user1: User = {
    id: 1,
    username: "zhangsan",
    password: '123123'
}
mySqlDb.add(user1)
