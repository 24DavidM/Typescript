interface MyInterface<T> {
    field: T
}
interface Example {
    id: string,
    name: string
}
const myValue: MyInterface<Example> = {
    field: {
        id: "122",
        name: "David"
    }
}


//clasesss

class MyClass<T> {
    field: T

    constructor(field: T) {
        this.field = field
    }
}

// const myObject: MyClass<number> = new MyClass()

function getData<T>(id: string): Promise<T> | void { }

getData("Hola")

interface UserResponse {
    id: number,
    name: string,
}

class HttpResponse<T> {
    data: T
    status: number
    code: Number
    constructor(data: T, status: number, code: number) {
        this.data = data
        this.status = status
        this.code = code
    }
}

const fetchUser = (): UserResponse => {

    return {
        id: 1,
        name: "david"
    };
};

const myUser = fetchUser()
const res = new HttpResponse(myUser, 200, 1)
console.log(res)

class CRUD<T> {
    private items: T[]
    constructor(items: T[]) {
        this.items = items
    }

    addItems(items: T) {
        this.items.push(items)
    }
    removeLastItem() {
        this.items.pop()
    }
    printItems(): T[] {
        return this.items
    }
}

const users: UserResponse[] = [
    {id:1,name:"Stalin"},
    {id:2,name:"David"},
    {id:3,name:"Pepe"}
]

const userCRUD: CRUD<UserResponse> = new CRUD(users)
userCRUD.addItems({id:4,name:"Salas"})

console.log(userCRUD.printItems())