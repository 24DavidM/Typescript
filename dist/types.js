// ✅ Declaración de tipos primitivos
var edad = "Hola"; // Tipo string
var month = 20; // Tipo number
var confirmEmail = true; // Tipo boolean
// ✅ Declaración de objetos y arreglos
var person = {}; // Objeto vacío
var fruits = ["manzana", "pera", "naranja"]; // Arreglo de strings
var objects = [
    {}, // Objeto vacío
    { name: "david" } // Objeto con una propiedad
];
// ✅ El tipo 'any' permite cualquier valor (no recomendado)
var response = "hola";
response = 20;
response = true;
response = ["david", 123, true];
// ✅ Función que no retorna nada, tipo 'void'
function saludar() {
    console.log("Hola");
}
// ✅ El tipo 'unknown' requiere validación antes de ser usado
var response2;
response2 = true;
if (response2 == 'tdsdadsadsadas') {
    // Aquí podrías manejar el valor después de validarlo
}
// ✅ Valores especiales en JavaScript/TypeScript
var response3 = null; // Valor nulo
var response4 = undefined; // Valor indefinido
var response5;
var responseProducts;
var responsePartner;
responsePartner === null || responsePartner === void 0 ? void 0 : responsePartner.toString().concat("");
// ✅ Conversión de tipo (type assertion)
var message = "";
// Cambiar de tipo
var messageUppercase = message.toUpperCase();
var messageUppercase1 = message;
messageUppercase1.toUpperCase();
// ✅ Conversión de tipo para trabajar con el DOM (HTMLCanvasElement)
var canvas = document.getElementById("canvas");
var canvas1 = document.getElementById("canvas");
