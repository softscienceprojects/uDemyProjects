//isEven

function isEven(num) {
	//return true if even 
		if(num%2===0) {
			return true;
		}
	//return false otherwise
	return false;
}


//this also works
function isEven(num) {
		num%2===0;
	}

factorial (num) {
	//define a result variable
	var result = 1; // start at 1
	//calculate factorial and sotre the value in result
	
	for (let i=1;i<=num;i++) { //start at 1, get to num, add one each time
		result = result * i; //redefine your result as the result * i through each loop
		//result *=i is the same
	} 
	//return the result variable
}	

function kebabToSnake(str) {
	//repace all '-' with '_'
	var newStr = str.replace(/-/g, "_");
	//return str
	return newStr;
}