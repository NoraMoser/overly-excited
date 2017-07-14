console.log("Hi");

let sentence = ["Hi, ", "my ", "name ", "is ", "Nora."];

// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */
let message = "";

	for (i = 0; i < theWordArray.length; i++) {
		message += " " + theWordArray[i];
		console.log(message);
		
		// if (sentence % 3) {
		// console.log(message + "!");
		// }
	}
	

}


// Invoke the function and pass in the array


function addExcitement (theWordArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */
let message = "";

	for (i = 0; i < theWordArray.length; i++) {
		message += " " + theWordArray[i];
		if (((i + 1) %  3) === 0) {
			message += "!";
		}
		console.log(message);
		
		// if (sentence % 3) {
		// console.log(message + "!");
		// }
	}
	

}
addExcitement(sentence);
