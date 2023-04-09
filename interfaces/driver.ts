import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCOach = new GolfCoach();

// declare an array for coaches ... initially empty
let theCoaches: Coach[] = [];
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCOach);

for(let coach of theCoaches){
    console.log(coach.getDailyWorkout());
}
