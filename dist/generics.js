var myValue = {
    field: {
        id: "122",
        name: "David"
    }
};
//clasesss
var MyClass = /** @class */ (function () {
    function MyClass(field) {
        this.field = field;
    }
    return MyClass;
}());
// const myObject: MyClass<number> = new MyClass()
function getData(id) { }
getData("Hola");
var HttpResponse = /** @class */ (function () {
    function HttpResponse(data, status, code) {
        this.data = data;
        this.status = status;
        this.code = code;
    }
    return HttpResponse;
}());
var fetchUser = function () {
    return {
        id: 1,
        name: "david"
    };
};
var myUser = fetchUser();
var res = new HttpResponse(myUser, 200, 1);
console.log(res);
var CRUD = /** @class */ (function () {
    function CRUD(items) {
        this.items = items;
    }
    CRUD.prototype.addItems = function (items) {
        this.items.push(items);
    };
    CRUD.prototype.removeLastItem = function () {
        this.items.pop();
    };
    CRUD.prototype.printItems = function () {
        return this.items;
    };
    return CRUD;
}());
var users = [
    { id: 1, name: "Stalin" },
    { id: 2, name: "David" },
    { id: 3, name: "Pepe" }
];
var userCRUD = new CRUD(users);
userCRUD.addItems({ id: 4, name: "Salas" });
console.log(userCRUD.printItems());
