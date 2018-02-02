/**
 * Create a function called 'greaterNumber'
 * This function will take in 2 Parameters.
 * You need to check which number is greater and return that number
 * @param  { Number } a
 * @param  { Number } b
 * @return { Number }
 */
console.log("greaterNumber function \n")
function greaterNumber(a,b) {
	if (a > b) {
	return a;
  }else {
  	return b
  }
}
console.log(greaterNumber(6, 6.8))
/**
 * Create a function called 'stringOfNumbers'.
 * This function will take in 1 parameter
 * Your task is to add all the numbers in between 0 and n
 * For example if the number is 10 than the function should return:
 * "0,1,2,3,4,5,6,7,8,9,10"
 * @param  { Number } n
 * @return { String }
 */
function stringOfNumbers(n) {
	var t = [ ]
	for (var i=0; i<=n; i++) {
		t.push(i)
	}
	return t.toString()
}

console.log(stringOfNumbers(10))

/**
 * Create a function called 'sumOfArray'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return the sum of all the numbers in the array.
 * You must check if the item in the array is a number
 * @param  { array } arr
 * @return { Number }
 */
function sumOfArray(arr) {
	var sum = 0
	for (var i=0; i<=arr.length-1; i++) {
		if (isNaN(arr[i])) {
			console.log("error : " + arr[i] + " at index " + i + " thats an incorrect input! procceed to the next")
			continue
		} else {
			sum +=arr[i]
		}
	} 
	return sum
}	

console.log("sum of array is " + sumOfArray([5,25,40,"antimatter",25, "matter", 7, function annihilate(){console.log("annihilate")}, 7, "True", 71]))
/**
 * Create a function called 'getEvens'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the even numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */
function getEvens(arr) {
	console.log("original : " + arr)
	var evenArr = [ ]
	for(var i=0; i<=arr.length-1; i++) {
		if (arr[i] % 2 === 0) {
			evenArr.push(arr[i])
		}
	}
	return evenArr

}
console.log("new : " + getEvens([3,2,9,4,6,10,15,29,220]));

/**
 * Create a function called 'getOdds'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the odd numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */
function getOdds(arr) {
	console.log("original : " + arr)
	var oddArr = [ ]
	for (var i=0; i<=arr.length-1; i++) {
		if (arr[i] % 2 !== 0) {
			oddArr.push(arr[i])
		}
	}
	return oddArr
}
console.log("new ; " + getOdds([3,2,9,4,6,10,15,29,220,1597]))
/**
 * Create a function called 'calculate'.
 * This function will take in 3 parameters:
 * The first parameter is a number.
 * The second parameter is a number.
 * The third param is a string that will be 'add', 'subtract', 'multiply', 'divide'.
 * Your task is to do a mathematical operation on the 2 numbers based on the third parameter.
 * The function should return the string "Invalid operator" if the operator is
 * not 'add', 'subtract', 'multiply', 'divide'.
 * @param  { Number } int1
 * @param  { Number } int2
 * @param  { String } operator ('add', subtract, 'multiply', 'divide')
 * @return { Number/String }
 */
function calculate(firstNumber, secondNumber, theResult) {
	switch (theResult.toLowerCase()) {
		case "add":
			return firstNumber + secondNumber
			break;

	
	case "subtract":
			return firstNumber + secondNumber
			break;

	
	case "multiply":
			return firstNumber + secondNumber
			break;


	case "divide":
			return firstNumber + secondNumber
			break;						
	

	default:
		return "not the right operator. Try Again..."			
			
	}
}
console.log(calculate(15, 3, "addition"))
console.log(calculate(15, 3, "subtract"))
console.log(calculate(15, 3, "multiplication"))
console.log(calculate(15, 3, "division"))
console.log(calculate(15, 3, "ERROR"))