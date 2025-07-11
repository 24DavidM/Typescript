var Users;
(function (Users) {
    Users["NormalUser"] = "primary";
    Users["PayedUser"] = "payed";
    Users["AdminUser"] = "admin";
    Users["MegaUser"] = "mega";
})(Users || (Users = {}));
var myUser = Users.AdminUser;
if (myUser === Users.AdminUser) {
    console.log("true");
}
console.log(myUser);
