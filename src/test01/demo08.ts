{
    // 类泛型
    class MySqlDb<T> {

        add(info: T): boolean {
            console.log(info);
            return true
        }
    }

    interface User {
        username: string;
        password: string;
    }

    interface News {
        id: string;
        createTime: string;
        content: string
    }

    let user: User = {
        username: "lisi",
        password: '123456'
    }

    let mySqlDbOfUser = new MySqlDb<User>()

    mySqlDbOfUser.add(user)

    let mySqlDbOfNews = new MySqlDb<News>()

    let news: News = {
        id: '123',
        createTime: '2020-12-01',
        content: 'hello world'
    }

    mySqlDbOfNews.add(news);
}