

var leetLetters = ["A", "E", "G", "I", "O", "S", "T"]
var leetNumbers = ["4", "3", "6", "1", "0", "5", "7"]
var ourString = "ABCDEFG HIJK LMNOP QRS TUV WXYZ"
function leetSpeak(string){
var myArray = string.split("")
for(var i = 0; i < string.length; i++ ){
	
		var inTheArray = leetLetters.indexOf(myArray[i])
		if(inTheArray > -1){
			myArray[i] = leetNumbers[inTheArray];
		}
	}
	var putBackTogether = myArray.join("")
	console.log(putBackTogether)
}

leetSpeak("WE LIKE TURTLES AND STUFF")




















