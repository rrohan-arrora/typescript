import { Shape } from './shape';
import { circle } from './circle';
import { Rectangle } from './rectange';


let myCircle = new circle(3, 10, 20);
console.log(myCircle.getInfo());
console.log(myCircle.calculateArea());

let myRectangle = new Rectangle(3, 4, 10, 20);
console.log(myRectangle.getInfo());
console.log(myRectangle.calculateArea());