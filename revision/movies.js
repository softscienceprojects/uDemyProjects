// YOUR ARRAY OF MOVIES
var movies = [
	{
		title: "Frozen",
		rating: 2,
		hasWatched: false},
	{
		title: "In Bruges",
		rating: 3,
		hasWatched: true;
	}
];

//YOUR MAIN METHOD
movies.forEach(function(movie) {
	console.log(buildString(movie));
});

//ALL YOUR STRINGS
function buildString(movie) {
	var result = "You have ";
	if (movie.hasWatched) {
		result += "watched ";
	} else {
		result+= "not seen ";
	}
	result += "\"" +movie.title + "\" - ";
	result += movie.rating + " stars";
	return result;
};