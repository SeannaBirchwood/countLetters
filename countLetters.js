//We want the function to return all unique characters in a string with
//how many times the character is used in the string.
//This function has to return an Object, which can report on the stats of
//the entered string.

//Expected output if input is: countLetters("lighthouse in the house"):
/* {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
*/

var initialString = "Lighthouse in the house"

function countLetters(uniChar) {
	for (var nextLtr of uniChar) {
		console.log(nextLtr);
	}
}
countLetters("Lighthouse in the house");