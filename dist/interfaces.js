var _a;
var onePerson = {
    name: "David",
    code: "01",
    charge: 1,
    description: "Hola",
    sayHello: function () { return "hola".concat(name); }
};
onePerson.code = 60;
var secondeperson = {
    name: "",
    code: "",
    charge: 0,
    sayHello: function () {
        console.log("Holaa");
        var personas = [1, 2, 3, 4];
        personas.map(function (p) { return p.toFixed(1); });
        return "Hola";
    }
};
secondeperson.description = "hola";
var texto = (_a = secondeperson.description) === null || _a === void 0 ? void 0 : _a.toUpperCase();
console.log(texto);
var personas = [1, 2, 3, 4];
personas.map(function (p) { return p.toFixed(1); });
console.log(personas);
