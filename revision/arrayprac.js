
//loop through an array from the end
function printReverse(arr) {
	for (var i=arr.length-1; i>=0;i--)  //-1 because the length is always 1 greater than the greatest index
		console.log(arr[i]); //while i >= 0 because this is the index you want to end at
};


//is every item the same as the first?
function isUniform(arr) {
	var first = arr[0];
	for (let i=0;i<arr.length;i++){ 
		if (arr[i] !== first) {
			return false
		}
	}
	return true;
};

//sum every item in array
function sumArray(arr) {
	var total = 0;
	for (let i=0; i<arr.length;i++) {
		total+= arr[i];
	}
	console.log(total);
}

//determine max in an array of numbers
function max(arr) {
	var theMax = arr[0]; //when you start this is the biggest

	for (let i=1; i<arr.length;i++) {
		if(arr[i] > theMax) {
			theMax =arr[i];
		}
	}
	console.log(theMax);
}


//get 'Malfoy' out of this

var someObject = { //someObject.
	friends: [ //friends
		{name: "Malfoy"}, //[0].name
		{name: "Crabbe"},
		{name: "Goyle"}
		],
		color: "baby blue",
		isEvil: true
	};
}

someObject.friends[0].name;
//the Object name
//first item within the object is friends
// inside of the first item is an array
// you need the first item which is 0
//and then to get the value you ask it the key