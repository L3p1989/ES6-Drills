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

let numVal = (x, y) => ({exponent: x^y, addSum: x + y});

console.log(`the exponent of 4 and 9 is ${numVal(4, 9).exponent}`)

console.log(`the sum of 4 and 9 is ${numVal(4, 9).addSum}`)