/* 
Variables to create are randomNumber, blueCrystal, pinkCrystal, greenCrystal, purpleCrystal, totalScore, wins, losses.
We will need to create a random number variable for the number user is trying to reach, which changes each time game resets.
We will need variable  for each crystal and assign a random number range for each crystal that changes every time the game restarts.
randomNumber will print to number you're trying reach. 
Crystal variables will be hidden from user until clicked.
When user clicks crystal, value will be printed to totalScore or added to total score. 
If total score is less than randomNumber then user keeps playing. 
If total score goes above randomNumber then user loses and game resets. 
*/

// Creates variable to hold crystal values
var crystalValues = [];

// Creates variable to score total value for clicks
var userScore = 0;

// creates variable representing number user should reach

var targetScore = numGenerator(19, 120);

//console.log(targetScore);

// Create a while loop

while (crystalValues.length < 4) {
    // code block to be executed
    //1 - 12
    var randomNum = numGenerator(1, 12);

    if (!crystalValues.includes(randomNum)){
        crystalValues.push(randomNum);
    }
}
//console.log(crystalValues);

// Variables to hold wins and losses

var wins = 0;
var losses = 0;

function numGenerator(min, max){
    return Math.floor(Math.random()*(max-min + 1)+min);
}


// Creates variables that hold references to where we want them in html.

    document.getElementById("wins-text").textContent = wins;
    document.getElementById("losses-text").textContent = losses;
    document.getElementById("alert-message").textContent = "";
    document.getElementById("random-number").textContent = targetScore;
    document.getElementById("total-score").textContent = userScore;


// Creates on click function for each crystal 

$(".crystal").on("click", function(){
  //  console.log(this);
    var selectedCrystal = $(this).data("index");
    //console.log(selectedCrystal);
    userScore += crystalValues[selectedCrystal];
    document.getElementById("total-score").textContent = userScore;
    //console.log(userScore);
    if (userScore > targetScore) {
        //console.log("You Lose");
        losses ++; 
        document.getElementById("losses-text").textContent = losses;
        document.getElementById("alert-message").textContent = "You Lose!";
        reset();
    } else if (userScore === targetScore){
        //console.log("You Win");
        wins ++;
        document.getElementById("wins-text").textContent = wins;
        document.getElementById("alert-message").textContent = "You Win!";
        reset();
    }
});

function reset() {
    setTimeout(function(){
        crystalValues = [];
        //console.log(crystalValues);
    // Creates variable to score total value for clicks
        userScore = 0;
        //console.log(userScore);
    // creates variable representing number user should reach

        targetScore = numGenerator(19, 120);
        //console.log(targetScore);
    // Create a while loop

        while (crystalValues.length < 4) {
            // code block to be executed
            //1 - 12
            var randomNum = numGenerator(1, 12);

            if (!crystalValues.includes(randomNum)){
                crystalValues.push(randomNum);
            }
        }

        document.getElementById("wins-text").textContent = wins;
        document.getElementById("losses-text").textContent = losses;
        document.getElementById("alert-message").textContent = "";
        document.getElementById("random-number").textContent = targetScore;
        document.getElementById("total-score").textContent = userScore;
    }, 1500);
}



