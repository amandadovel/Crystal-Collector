/* 
Variables to create are randomNumber, blueCrystal, pinkCrystal, greenCrystal, purpleCrystal, totalScore, wins, losses.
We will need to create a random number variable for the number user is trying to reach, which changes each time game resets.
We will need variable  for each crystal and assign a random number range for each crystal that changes every time the game restarts.
randomNumber will print to number you're trying reach. 
Crystal variables will be hidden from user until clicked.
When use clicks crystal, value will be printed to totalScore or added to total score. 
If total score is less than randomNumber then user keeps playing. 
If total score goes above randomNumber then user loses and game resets. 

*/

// Variables to hold wins and losses

var wins = 0;
var losses = 0;

// Variable for computerGuess which will get logged to 

// Random number generator

var randomNumber = [math.floor(math.random() * 100) +1]; 

// Creates crystal variables with random numbers:

var blueCrystal = [math.floor(math.random() * 20) +1];
var pinkCrystal = [math.floor(math.random() * 30) +1];
var greenCrystal = [math.floor(math.random() * 40) +1];
var purpleCrystal = [math.floor(math.random() * 50) +1];

// Holds references to 


