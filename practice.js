class User{
    constructor(firstname,lastname){
        this.firstname= firstname;
        this.lastname = lastname;
    }
}
User.prototype.emailDomainName ='@anand.com';
// module.exports =  User;
use = new User('anand','rao');
console.log(use);
console.log(use.__proto__.emailDomainName);