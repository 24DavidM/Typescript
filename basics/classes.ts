class Animal {
    public name: "Amimal Generico";
    private age = 10
    protected identity = "1111"

    constructor(){}
    sayHi() {
        console.log("Grrrrrrrrr", this.age)
    }
}
const myAnimal: Animal = new Animal()
myAnimal.sayHi()


class Dog extends Animal {
    type: "Pastor alemán"

    constructor(){
        super()
    }
    sayHi() {
        this.identity
    }
}


const myDog: Dog = new Dog()