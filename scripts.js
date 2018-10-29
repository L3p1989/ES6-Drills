function favMovie(movie, name) {
    if (typeof movie === 'undefined') {
        movie = "The Room";
    } if (typeof name === 'undefined') {
        name = "world"
    }
    console.log(`my name is ${name} my favorite movie is ${movie}`);
};

favMovie();
favMovie("world");

favMovie("The Golden Compass", "Patrick");
favMovie();