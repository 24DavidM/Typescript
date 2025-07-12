interface PersonInterface {
    name: string;
    code: string | number
    charge: number,
    description?: string
    sayHello: () => string
}

class PersonClass{
    sayHello(){
        console.log("Hellowwwwwwww")
        fetch("http://localhost:4000")
    }
}

const personOne: PersonInterface = {
    name: "David",
    code: "abd1",
    charge: 1,
    sayHello() {
        return `Bienvenido ${name}`
    }
}

//const persontwo:PersonClass = {}

const personTwo: PersonClass = new PersonClass()
personTwo.sayHello()

interface PetInterface {
    sayHello: ()=> string
}

class PetClass {
    sayHello(){
        return "Hello"
    }
}

class Doger implements PetInterface{
    sayHello(){return "hola"}   
}

class cat extends PetClass{}