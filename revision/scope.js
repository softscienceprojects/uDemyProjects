function doMath() {
	var x = 40;
	console.log(x);
}


//HIGHER ORDER FUNCTIONS
function sing() {
	console.log("twinkle twinkle...")
	console.log("how I wonder...")
}

//setInterval(anotherFunc, interval);

setInterval(sing, 1000);

//this will return a number in your console.
//To stop the function, use
// clearInterval(#); <--that's your number

setInterval(function() {
	console.log("I am an anonymous function");
	console.log("This is awesome");
}, 2000);