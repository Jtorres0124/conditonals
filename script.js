
var userChoice, randomNumber, computerChoice;


userChoice = prompt("Choose 'heads' or 'tails'").toLowerCase(); // Convert to lowercase for case-insensitivity


randomNumber = Math.floor(Math.random() * 2);


if (randomNumber === 0) {
    computerChoice = "heads";
} else {
    computerChoice = "tails";
}


if (userChoice === computerChoice) {
    alert("You guessed right! The coin flip landed on " + userChoice);
} else {
    alert("Sorry, the coin flip landed on " + computerChoice);
}


var birthYear;


birthYear = prompt("Enter your birth year");


var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;


if (age > 21) {
    alert("You are old enough to drink in the US");
} else if (age === 21) {
    alert("You are old enough to drink in the US...barely");
} else {
    alert("Sorry, you are not old enough to drink in the US");
}
