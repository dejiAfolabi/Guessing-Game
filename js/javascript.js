function guessTheNumber() {
	const guessNumber = document.getElementById("guess");
	let number = Math.ceil(Math.random() *10)
	if (number <= guess.value) {
		alert("You guessed a number greater than mine! You Win!");
	} else {
		alert("I Win! You guessed a number less than mine. I had  " + number);
	}
	console.log(number)
}
