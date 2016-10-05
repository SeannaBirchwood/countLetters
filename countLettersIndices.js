function countLetters(uniChar) {
	uniChar = uniChar.split(" ").join("");
	var objUniChar = {};
		for ( var nextLtr of uniChar) {
	if (objUniChar[nextLtr]) { 
		objUniChar[nextLtr].push(i++);
	} else {
	objUniChar[nextLtr] = [i++]; 
	}
	}
	return objUniChar;
}

var i = 0

console.log(countLetters("Lighthouse in the house"));