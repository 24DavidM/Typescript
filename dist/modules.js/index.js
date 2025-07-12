"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var myNumber = 10 * utils_1.PI;
var myUser = {
    id: (0, utils_1.generateID)().toString(),
    name: "Stalin"
};
console.log({
    myUser: myUser,
    myNumber: myNumber
});
