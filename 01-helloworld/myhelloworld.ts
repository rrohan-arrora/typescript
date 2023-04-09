console.log("Hello world");

let found1: boolean = true;
let found2: number = 12.0;
let found3: string = "rohan";
let found4: string = 'arora';

let found5: any = 12.3  + "rohan";
found5 = 12.45;
console.log(found1);
console.log(found2);
console.log(found5);
console.log(`Hi ${found4} ${found3}`);

let reviews: number[] = [5, 5, 4.5, 1, 3];

let total: number = 0;
for(let i=0; i<reviews.length;i++){
    console.log(reviews[i]);
    total+= reviews[i];
}

let average: number = total/reviews.length;

console.log("Review average = " + average);

 let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];
 for(let tempSport of sportsOne){
    console.log(tempSport);
    // if(tempSport == 'Cricket'){
    //     console.log("Dream11");
    // }
 }

 let sportsTwo: string[] = ["Golf", "Cricket", "Tennis"];
 sportsTwo.push("Baseball");
 sportsTwo.push("Futbol");
 for(let tempSport of sportsTwo){
    console.log(tempSport);
 }

 for(let i=0;i<6;i++){
    console.log(i);
 }

 let reviewss: number[] = [5, 5, 4.5, 4, 6];
 for(let review of reviewss){
    console.log(review);
 }
