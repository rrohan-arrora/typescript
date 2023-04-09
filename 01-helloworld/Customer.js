"use strict";
var Customer = /** @class */ (function () {
    function Customer(firstName, _lastName) {
        this.firstName = firstName;
        this._lastName = _lastName;
        this.firstName = firstName;
        this._lastName = _lastName;
        console.log("".concat(this.firstName, " ").concat(this._lastName));
    }
    Object.defineProperty(Customer.prototype, "firstN", {
        // private firstName:string;
        // private _lastName: string;
        // constructor(firstName:string, lastName:string){
        //     this.firstName = firstName;
        //     this._lastName = lastName;
        //     console.log(`${this.firstName} ${this._lastName}`)
        // }
        // public getFirstName() : string{
        //     return this.firstName;
        // }
        // public setFirstName(theFirst: string) : void{
        //     this.firstName = theFirst;
        // }
        // below syntax is only availbale from ECMA 5
        get: function () {
            return this.firstName;
        },
        set: function (value) {
            this.firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var theCustomer = new Customer("Tom", "Dick");
// theCustomer.firstName = "Marc";
// theCustomer.lastName = "Dick";
// console.log(theCustomer.firstName);
// console.log(theCustomer.lastName);
// theCustomer.setFirstName("Vaginal")
// console.log(theCustomer.getFirstName);
theCustomer.firstN = "Vaginal";
console.log(theCustomer.firstN);
console.log(theCustomer.lastName);
