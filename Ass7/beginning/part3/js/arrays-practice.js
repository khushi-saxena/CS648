var favoriteMovies = ["The Matrix", "Inception", "Interstellar", "The Dark Knight", "Pulp Fiction"];
console.log("Second movie:", favoriteMovies[1]);

var movies = new Array(5);
movies[0] = "The Matrix";
movies[1] = "Inception";
movies[2] = "Interstellar";
movies[3] = "The Dark Knight";
movies[4] = "Pulp Fiction";
console.log("First movie:", movies[0]);

movies.splice(2, 0, "Blade Runner 2049");
console.log("Array length after adding movie:", movies.length);

var moviesLiteral = ["The Matrix", "Inception", "Interstellar", "The Dark Knight", "Pulp Fiction"];
delete moviesLiteral[0];
console.log("Array after deleting first movie:", moviesLiteral);

var moviesSeven = ["The Matrix", "Inception", "Interstellar", "The Dark Knight", "Pulp Fiction", "Blade Runner", "Dune"];
console.log("Movies using for loop:");
for (var i = 0; i < moviesSeven.length; i++) {
    console.log(moviesSeven[i]);
}

console.log("Movies using for-in loop:");
for (var index in moviesSeven) {
    console.log(moviesSeven[index]);
}

console.log("Movies in sorted view:");
var sortedMovies = moviesSeven.sort();
for (var index in sortedMovies) {
    console.log(sortedMovies[index]);
}

var leastFavMovies = ["Twilight", "Fifty Shades of Grey", "The Room"];
console.log("Movies I like:");
for (var i = 0; i < moviesSeven.length; i++) {
    console.log(moviesSeven[i]);
}
console.log("Movies I regret watching:");
for (var i = 0; i < leastFavMovies.length; i++) {
    console.log(leastFavMovies[i]);
}

var allMovies = moviesSeven.concat(leastFavMovies);
var reverseSortedMovies = allMovies.sort().reverse();
console.log("All movies in reverse sorted order:");
for (var i = 0; i < reverseSortedMovies.length; i++) {
    console.log(reverseSortedMovies[i]);
}

var lastMovie = allMovies[allMovies.length - 1];
console.log("Last movie in array:", lastMovie);

