import { Coach } from "./Coach";

export class GolfCoach implements Coach{
    getDailyWorkout(): string {
        return "golf needs 1 ball but she has 2";
    }
    
}