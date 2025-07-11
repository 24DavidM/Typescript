type People = {
    name:string
    code: string | number
    description?:string
}

const newPerson: People = {
    name:"David",
    code:"H"
}

type ServiceResponseve = string | null | number |  undefined
type userCharger = "admin" | "normal" | "superUser"
let response: ServiceResponseve

const myUserType: userCharger = "superUser"

