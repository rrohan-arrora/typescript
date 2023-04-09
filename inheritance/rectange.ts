import { Shape } from "./shape";

export class Rectangle extends Shape{
    
    calculateArea(): number {
        return this._width*this._height;
    }
    
    

    constructor(private _width: number, private _height: number,
                x: number, y:number){
                    super(x, y);
                }

    public set width(value: number){
        this._width = value;
    }
    public set height(value: number){
        this._height = value;
    }
    
    public get width() :number{
        return this._width;
    }
    public get height() :number{
        return this._height;
    }

    getInfo(): string {
        return super.getInfo() + ` width=${this._width} height=${this._height}`;
    }
} 