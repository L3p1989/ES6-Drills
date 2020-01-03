let favMovie = (movie = "The Room", name = "world") =>
  console.log(`my name is ${name} my favorite movie is ${movie}`);

favMovie(); //console logs favMovie default
favMovie("world"); //console logs favMovie with "world" as the movie

favMovie("The Golden Compass", "Patrick"); //console logs favMovie with values
favMovie(); //console logs default values

let getFirstName = fullName => {
  let fName = fullName.split(" "); //splits fullName into a string
  console.log(fName[0]);
}; //pulls the first name of any full name placed

let fName = fullName => console.log(fullName.split(" ")[0]); //shorthand of the above

let numVal = (x, y) => ({ exponent: x ^ y, addSum: x + y }); //function to turn values into an object

console.log(`the exponent of 4 and 9 is ${numVal(4, 9).exponent}`);

console.log(`the sum of 4 and 9 is ${numVal(4, 9).addSum}`);

let values = ["Patrick", "Denver", "Spicy"];

function whoIAm(name, location, favFood) {
  console.log(...values);
} //console logs values array

whoIAm(values);

let myName = "Patrick";

function spellIt(name) {
  let spellMyName = [...name];
  for (i = 0; i < spellMyName.length; i++) {
    console.log(spellMyName[i]);
  }
} //loops through name and logs each character of the value

spellIt(myName);
