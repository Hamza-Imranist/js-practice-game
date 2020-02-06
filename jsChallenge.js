let guess = document.querySelector(".guess-input");
let answer = document.querySelector("#answer");
let submit = document.querySelector("#submit");
let countPara = document.querySelector("#guess-count");
let remainGuess = document.querySelector("#remain-guess");
let prevPara = document.querySelector("#prev-guess");
let game = document.querySelector(".game");
let intro = document.querySelector("#intro");
let actualNumber;
game.style.display = "none";
let startButton = document.querySelector("#start");
let lastButton = document.querySelector("#lastButton");
lastButton.style.display = "none";
startButton.addEventListener("click",()=>{
	game.style.display = "block";
	startButton.style.display = "none";
	intro.style.display = "none" ;
	actualNumber = Math.floor(Math.random() * 100) + 1;
	console.log(actualNumber);
})
let counter = Number(0);
let remainChances = Number(10);
submit.addEventListener("click",checkGuess);
function checkGuess(){
	counter++;
	countPara.innerHTML = "You have guessed " + counter + " times.";
	let remain = Number(remainChances - counter);
	remainGuess.innerHTML = "You have " + remain + " remaining chances." ;
	let value = Number(guess.value);
	if ( counter == 1){
		prevPara.textContent = "Your previous guesses are: ";
	}
	prevPara.textContent += value + " ";
	if ( value === actualNumber && remain > 0 ){
		answer.style.display = "block";
		answer.innerHTML = "Congratulations!!! You Won!!!";
		answer.style.background = "green";
		submit.disabled = true;
		guess.disabled = true;
		lastButton.style.display = "block";
	}
	else if ( value > actualNumber && remain > 0 ){
		answer.style.display = "block";
		answer.innerHTML = "Your answer is too high!!!";
		answer.style.background = "red";
		guess.focus();
	}
	else if ( value < actualNumber && remain > 0 ){
		answer.style.display = "block";
		answer.innerHTML = "Your answer is too low!!!";
		answer.style.background = "red";
		guess.focus();
	}
	else if ( remain <= 0 ){
		answer.style.display = "block";
		answer.innerHTML = "The game is over.";
		answer.style.background = "purple";
		submit.disabled = true;
		guess.disabled = true;
		lastButton.style.display = "block";
	}
	guess.value = " ";
}
lastButton.addEventListener("click",()=>{
		submit.disabled = false;
		guess.disabled = false;
		counter = Number(0);
		lastButton.style.display = "none";
		answer.style.display = "none" ;
		countPara.innerHTML = "You have guessed " + counter + " times.";
		remain = Number(10);
		remainGuess.innerHTML = "You have " + remain + " remaining chances." ;
		prevPara.innerHTML = " ";
		actualNumber = Math.floor(Math.random() * 100) + 1;
		console.log(actualNumber);
})