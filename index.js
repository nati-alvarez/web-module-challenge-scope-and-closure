// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter1 uses a closure. it returns a function that updates the variable in the parent function's scope.
 * counter2 increments a variable in the global scope named count.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter1 uses a closure. It returns a function that affects a variable in the scope of the parent function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * counter1's code might be useful if you only want the count variable to be increased by calling the inner function.
 * That way, there's only one way that it can be increased.
 * 
 * counter2's code could be more preferable if you want to use the counter variable in many different functions as
 * well as in the global scope, (logging and printing it out to the user for example.) 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.round(Math.random() * 2);
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(cb, innings){
  let score = {
    Home: 0,
    Away: 0
  };
  for(let i = 0; i < innings; i++){
    score.Home += cb();
    score.Away += cb();
  }
  return score;
}

console.log(finalScore(inning, 8));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(getInningScore, inning, numInnings) {
  let homeScore = 0;
  let awayScore = 0;

  for(let i = 1; i <= numInnings; i++){
    homeScore += inning();
    awayScore += inning();
    console.log(getInningScore(awayScore, homeScore, i));
  }
  
  console.log("");
  console.log(`Final Score: ${awayScore} - ${homeScore}`);
}

function getInningScore(away, home, inning){
  if(inning === 1){
    return `${inning}st inning: ${away} - ${home}`;
  }else if(inning === 2){
    return `${inning}nd inning: ${away} - ${home}`;
  }else if(inning === 3){
    return `${inning}rd inning: ${away} - ${home}`;
  }else {
    return `${inning}th inning: ${away} - ${home}`;
  }
}

scoreboard(getInningScore, inning, 9);


