
// Partiel<T>
interface Task {
    id:number
    name:string
    description: string
}

function updateTask (id:string, task: Partial<Task>){
}

const newTask = {name:"David"}
updateTask("1",newTask)

//Required <T>
interface ToDo{
    id?:number
    name?: string
}

const myTodo: Required<ToDo> = {
    id: 0,
    name: ""
}

//Records <Key, Types> Para la creación de objectos
interface CatInfo {
    age:number
    name:string
}

type CatName = "moi" | "leon" | "morgan" | "negro"

const cats: Record<CatName, CatInfo> = {
    moi: {age:2, name:"Gato"},
    leon: {age:1, name:"Gato"},
    morgan: {age:3, name:"Gato"},
    negro: {age:3, name:"Gato"},
}

// Picks <T, Propiedades>

interface ToDo{
    title:string
    description: string
    completed:boolean
}

type TodoPreview = Pick<ToDo,"title" | "completed">
const otherToDo: TodoPreview = {title:"Class roon",completed:false}

//Omit <T, Propiedades>

type TodoOmitted = Omit<ToDo, "description">
