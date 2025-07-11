enum Users {
    NormalUser = 'primary',
    PayedUser = 'payed',
    AdminUser = 'admin',
    MegaUser = 'mega',
}

const myUser = Users.AdminUser
if( myUser === Users.AdminUser){
    console.log("true")
}
console.log(myUser)