interface Persona {
    name: string
    age: number
}

interface Employee extends Persona{
    charge: string
}

const newEmployee: Employee = {
    name: "",
    age: 12,
    charge:""
}

//  vs

type Personas = {
    name: string
    age: number
}

interface Employee extends Personas{
    charge: string
}

const newEmployee1: Employee = {
    name: "",
    age: 12,
    charge:""
}


//Union de tipos

type usuario = {
    id:string
}

type admin = usuario & Employee

//Permite especificar tipos de datos podemos utilizar
type ServiceResponseveToken = string | null | number |  undefined
type userTypes = "admin" | "normal" | 0

//----------

interface Developer {
    name:string
    stack:string[]
}
//Permite sobreescribir otra interfaz sin dañar una interfaz
interface Developer{
    phone:string
}

const me: Developer = {
    name: "",
    stack: [],
    phone: ""
}