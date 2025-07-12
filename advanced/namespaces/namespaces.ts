namespace DatabaseEntity{
    export class User{
        constructor(public name:string){}
    }

    const myUser = new User("Kevin")
    console.log(myUser)
}

