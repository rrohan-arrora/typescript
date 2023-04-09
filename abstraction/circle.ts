import { Shape } from './shape';

export class circle extends Shape{
    
    calculateArea(): number {
        return (22/7) * this._radius * this._radius;
    }

    constructor(x: number, y: number, private _radius:number){
        super(x, y);
    }

    public set radius(value: number){
        this._radius = value;
    }

    public get radius():number{
        return this._radius;
    }

    getInfo(): string {
        return super.getInfo() + `, radius = ${this._radius}`;
    }
}

