let favMovie = (movie = "The Room", name = "world") => console.log(`my name is ${name} my favorite movie is ${movie}`);

favMovie();
favMovie("world");

favMovie("The Golden Compass", "Patrick");
favMovie();

let getFirstName = (fullName) => {
    let fName = fullName.split(' ');
    console.log(fName[0])
};

let fName = (fullName) => console.log(fullName.split(' ')[0]);