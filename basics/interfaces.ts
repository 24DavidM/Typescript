interface InterfacePerson {
    name: string;
    code: string | number
    charge: number,
    description?: string
    sayHello: () => string
}

let onePerson: InterfacePerson = {
    name: "David",
    code: "01",
    charge: 1,
    description: "Hola",
    sayHello: () => `hola${name}`
}

onePerson.code = 60
let secondeperson: InterfacePerson = {
    name: "",
    code: "",
    charge: 0,
    sayHello: () => {
        console.log("Holaa")
        const personas = [1, 2, 3, 4]
        personas.map((p) => p.toFixed(1))
        return "Hola"
    }
};

secondeperson.description = "hola";
let text = secondeperson.description?.toUpperCase()

console.log(texto)
