"use strict";
console.log("Hello world");
var found1 = true;
var found2 = 12.0;
var found3 = "rohan";
var found4 = 'arora';
var found5 = 12.3 + "rohan";
found5 = 12.45;
console.log(found1);
console.log(found2);
console.log(found5);
console.log("Hi ".concat(found4, " ").concat(found3));
var reviews = [5, 5, 4.5, 1, 3];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Review average = " + average);
var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    console.log(tempSport);
    // if(tempSport == 'Cricket'){
    //     console.log("Dream11");
    // }
}
var sportsTwo = ["Golf", "Cricket", "Tennis"];
sportsTwo.push("Baseball");
sportsTwo.push("Futbol");
for (var _a = 0, sportsTwo_1 = sportsTwo; _a < sportsTwo_1.length; _a++) {
    var tempSport = sportsTwo_1[_a];
    console.log(tempSport);
}
for (var i = 0; i < 6; i++) {
    console.log(i);
}
var reviewss = [5, 5, 4.5, 4, 6];
for (var _b = 0, reviewss_1 = reviewss; _b < reviewss_1.length; _b++) {
    var review = reviewss_1[_b];
    console.log(review);
}
