import { Shape } from './shape';
import { circle } from './circle';
import { Rectangle } from './rectange';

let myShape = new Shape(10, 15);
console.log(myShape.getInfo());

let myCircle = new circle(3, 10, 20);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(3, 4, 10, 20);
console.log(myRectangle.getInfo());