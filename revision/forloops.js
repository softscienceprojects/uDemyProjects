for (let i=-10; i<20; i++) {
	console.log(i);
}

for (var i= 10; i<=40; i+= 2){
	console.log(i);
}

for (var i=10; i<=40; i+=2) {
	if (i%2===0) { //actually check if it's even
		console.log(i);
	}
}

for (var i = 300; i<=333; i++) {
	if (i%2!==0) { // is this odd?
		console.log(i);
	}
}

for (let i=5; i<=50;i++) {
	if (i%5===0 && i%3===0) {
		console.log(i);
	}
}