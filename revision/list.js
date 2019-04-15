var todos = [];

var input = prompt("what would you like to do?");



while(input !== "quit") {
	if (input === "list") {
		listTodos();
	} else if (input === "new") {
		addTodo();
	} else if (input === "delete") {
		deleteTodo();
	}
//ask again for new input
		var input = prompt("what would you like to do?");
}
console.log("Okay, you quit the app");

function listTodos() {
	console.log("*******")
		todos.forEach(function(todo, ind) { //ind refers to the index
			console.log(ind + ": " + todo);
		});
		console.log("*******")
}

function addTodo() {
	//ask for new to dos
		var newTodo = prompt("enter new todo");
		//add to dos array
		todos.push(newTodo);
		console.log("added todo");
}

function deleteTodo() {
	var index = prompt("Enter index to delete");
		todos.splice(index,1); //this index connects to the index above
		console.log("deleted todo")
}