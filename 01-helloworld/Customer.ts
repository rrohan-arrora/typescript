class Customer{

    // parameter properties shortcut with constructor
    constructor(private firstName: string, private _lastName:string){
        this.firstName = firstName;
        this._lastName = _lastName;
        console.log(`${this.firstName} ${this._lastName}`)
    }

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

    // below syntax for getter and setter is only availbale from ECMA 5
    public get firstN(): string{
        return this.firstName;
    }

    public set firstN(value: string){
        this.firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

}

let theCustomer = new Customer("Tom", "Dick");
// theCustomer.firstName = "Marc";
// theCustomer.lastName = "Dick";
// console.log(theCustomer.firstName);
// console.log(theCustomer.lastName);
// theCustomer.setFirstName("Vaginal")
// console.log(theCustomer.getFirstName);

theCustomer.firstN = "Vaginal";
console.log(theCustomer.firstN);
console.log(theCustomer.lastName);
