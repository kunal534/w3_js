
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
// used with web browser then window.prompt() could be used
const num = Math.floor(Math.random() * 10) + 1;
rl.question('Guess the number (1-10): ', function(user_input) {
	if (parseInt(user_input, 10) === num) {
		console.log('Correct!');
	} else {
		console.log('Incorrect! The number was ' + num);
	}
	rl.close();
});
