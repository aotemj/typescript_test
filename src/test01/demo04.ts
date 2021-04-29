// 只读属性

class Person {
    readonly _name: string

    constructor(name: string) {
        this._name = name;
    }

    set name(name: string) {
        // this._name = name;
        //Attempt to assign to const or readonly variable
        // TS2540: Cannot assign to '_name' because it is a read-only property.
    }
}

