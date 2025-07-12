var DatabaseEntity;
(function (DatabaseEntity) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    DatabaseEntity.User = User;
    var myUser = new User("Kevin");
})(DatabaseEntity || (DatabaseEntity = {}));
var myOtherUser = new DatabaseEntity.User("Codigo Facilito");
console.log(myOtherUser);
