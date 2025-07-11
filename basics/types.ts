// ✅ Declaración de tipos primitivos
let edad: string = "Hola";           // Tipo string
let month: number = 20;               // Tipo number
let confirmEmail: boolean = true;     // Tipo boolean

// ✅ Declaración de objetos y arreglos
let person: Object = {};              // Objeto vacío

let fruits: String[] = ["manzana", "pera", "naranja"]; // Arreglo de strings

let objects: Object[] = [             // Arreglo de objetos
    {},                               // Objeto vacío
    { name: "david" }                 // Objeto con una propiedad
];

// ✅ El tipo 'any' permite cualquier valor (no recomendado)
let responsea: any = "hola";       
responsea = 20;
responsea = true;
responsea = ["david", 123, true];

// ✅ Función que no retorna nada, tipo 'void'
function saludar(): void {
    console.log("Hola");
}

// ✅ El tipo 'unknown' requiere validación antes de ser usado
let response2: unknown;
response2 = true;
if (response2 == 'tdsdadsadsadas') {
    // Aquí podrías manejar el valor después de validarlo
}

// ✅ Valores especiales en JavaScript/TypeScript
let response3 = null;         // Valor nulo
let response4 = undefined;    // Valor indefinido

// ✅ Tipo personalizado que puede ser número o indefinido
type ResponseTypeService = number | undefined
let response5: ResponseTypeService

let responseProducts: ResponseTypeService;
let responsePartner: ResponseTypeService;
responsePartner?.toString().concat("")

// ✅ Conversión de tipo (type assertion)
let message: any = "";
// Cambiar de tipo
let messageUppercase = (message as string).toUpperCase()

let messageUppercase1 = <string>message
messageUppercase1.toUpperCase()

// ✅ Conversión de tipo para trabajar con el DOM (HTMLCanvasElement)
const canvas = <HTMLCanvasElement>document.getElementById("canvas")
const canvas1 = document.getElementById("canvas") as HTMLCanvasElement
