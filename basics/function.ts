const sayHello = (name) => {
    console.log(`Hola ${name}`)
}

sayHello("estudiantes de david")

function sayGoodBye(name) {
    console.log(`Adios ${name}, casi no entendemos nada`)
}
sayGoodBye("David")

interface ResponseServiceCD {
    id: number,
    name: string,
    charge: string
    number: number
}
const response: ResponseServiceCD = {
    id: 1,
    name: "David",
    charge: "Developer",
    number: 4
}
function show({ name, ...other }: ResponseServiceCD): number {
    console.log("El id mandado es: ", name)
    console.log("Otros datos son: ", other)

    return 1
}

show(response)