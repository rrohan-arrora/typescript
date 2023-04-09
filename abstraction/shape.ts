 export abstract class Shape{
    // private _x: number;
    // private _y: number;

    constructor(private _x: number,  private _y: number){   
    }

    public set x(value: number){
        this._x = value;
    }
    public get x():number{
        return this._x;
    }

    public set y(value: number){
        this._y = value;
    }
    public get y():number{
        return this._y;
    }

    getInfo() :string{
        return `x=${this._x}, y=${this._y}`;
    }

    abstract calculateArea() :number;
 }