function favMovie(movie) {
    if (typeof movie === 'undefined') {
        movie = "The Room";
    }
    console.log(`my favorite movie is ${movie}`);
};

favMovie();
favMovie("world");