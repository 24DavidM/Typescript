
export const PI = 3.1415

export interface User{
    id: string
    name:string
}

export const generateID = () => {
    return Math.floor(Math.random() * 100)
}