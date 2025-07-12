import { generateID, PI } from "./utils";
import { User as Person } from "./utils";
const myNumber = 10 * PI

const myUser: Person = {
    id: generateID().toString(),
    name: "Stalin"
}
console.log({

    myUser,
    myNumber
}
)