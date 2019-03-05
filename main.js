// task 1
document.querySelector('.convert').addEventListener('click', moneyConverter);
function moneyConverter(){
        const RATE = 26.80;

 const value = parseFloat(document.getElementById('inputdol').value);
       
        const result = value * RATE;
        document.getElementById('outputuah').innerHTML = result;
}
function conver(value, rate = 26.80) {
  return value * rate;
}

//task 2
function reverseString(str) {
	return str.split('').reverse().join('');
}
console.log(reverseString('Diana'));


 //task 3
function printStairs(n) {
	let str = '';
	for (let i = 0; i < n; i++) {
		str += '#';
		console.log(str);
	}
}
printStairs(3);

 //task 4
 function sumRange(start, end) {
 let result = 0;
 for (let i = start; i <= end; i++) {
 	result += i;
 }
 	return result;
 }
console.log(sumRange(2, 4),sumRange(-1, 3)); //9 , 5


//task 5 
function min(a,b,c){
	return Math.min(a,b,c);
}	
console.log(min(10,5,11),min(3,8,4));	// 5 , 3
	

//task 6
function printPyramid(n){
	for (let i = 0; i < n; i++) {
		let str = '';
		for (let j = 1; j < n - i; j++) {
			str += ' ';
		}
		for (let k = 1; k <= (2 * i + 1); k++) {
			str += '#';
		}
		console.log(str);
	}
}
printPyramid(3);

//task 7
function firstAndLastToUpper(str) {
	return str[0].toUpperCase() + str.slice(1, str.length - 1) + str.charAt(str.length - 1).toUpperCase();
}
console.log(firstAndLastToUpper('abc'));



// task 8
function cursorCheck(str) { 
	let result = false;
	str = str.toLowerCase();
	if (str.includes('ironman')) {
		result = true;
	} else if (str.includes('cursor')) {
		result = true;
	} else if (str.includes('ostap')) {
		result = true;
	}
		return result;
 }
console.log(cursorCheck('Hello I am OstaP')) // true
console.log(cursorCheck('Superman is here')) // false

//task 9
function toUppercase (str) {
	for ( let i = 0; i < str.length; i++) {
		switch (str.charAt(i)) {
			case 'a': str = str.slice(0, i) + 'A' + str.slice(i + 1, str.length );
			break;
			case 'b': str = str.slice(0, i) + 'B' + str.slice(i + 1, str.length );
			break;
			case 'c': str = str.slice(0, i) + 'C' + str.slice(i + 1, str.length );
			break;
			case 'd': str = str.slice(0, i) + 'D' + str.slice(i + 1, str.length );
			break;
			case 'e': str = str.slice(0, i) + 'E' + str.slice(i + 1, str.length );
			break;
			case 'f': str = str.slice(0, i) + 'F' + str.slice(i + 1, str.length );
			break;
			case 'g': str = str.slice(0, i) + 'G' + str.slice(i + 1, str.length );
			break;
			case 'h': str = str.slice(0, i) + 'H' + str.slice(i + 1, str.length );
			break;
			case 'i': str = str.slice(0, i) + 'I' + str.slice(i + 1, str.length );
			break;
			case 'j': str = str.slice(0, i) + 'J' + str.slice(i + 1, str.length );
			break;
			case 'k': str = str.slice(0, i) + 'K' + str.slice(i + 1, str.length );
			break;
			case 'l': str = str.slice(0, i) + 'L' + str.slice(i + 1, str.length );
			break;
			case 'm': str = str.slice(0, i) + 'M' + str.slice(i + 1, str.length );
			break;
			case 'n': str = str.slice(0, i) + 'N' + str.slice(i + 1, str.length );
			break;
			case 'o': str = str.slice(0, i) + 'O' + str.slice(i + 1, str.length );
			break;
			case 'p': str = str.slice(0, i) + 'P' + str.slice(i + 1, str.length );
			break;
			case 'q': str = str.slice(0, i) + 'Q' + str.slice(i + 1, str.length );
			break;
			case 'r': str = str.slice(0, i) + 'R' + str.slice(i + 1, str.length );
			break;
			case 's': str = str.slice(0, i) + 'S' + str.slice(i + 1, str.length );
			break;
			case 't': str = str.slice(0, i) + 'T' + str.slice(i + 1, str.length );
			break;
			case 'u': str = str.slice(0, i) + 'U' + str.slice(i + 1, str.length );
			break;
			case 'v': str = str.slice(0, i) + 'V' + str.slice(i + 1, str.length );
			break;
			case 'w': str = str.slice(0, i) + 'W' + str.slice(i + 1, str.length );
			break;
			case 'x': str = str.slice(0, i) + 'X' + str.slice(i + 1, str.length );
			break;
			case 'y': str = str.slice(0, i) + 'Y' + str.slice(i + 1, str.length );
			break;
			case 'z': str = str.slice(0, i) + 'Z' + str.slice(i + 1, str.length );
			break;
		}
	}
	return str;
}	
console.log(toUppercase('i love this task'));

//task 10
function removeDuplicationLetters(str) { 
	let dupLet = '';
	for (i = 0; i < str.length; i++) {
		if(dupLet.toLowerCase().indexOf(str[i].toLowerCase())==-1 || str.charAt(i) == ' ') {
			dupLet+= str[i];
		}
	}
	
	console.log(dupLet);
 }
removeDuplicationLetters('Hello I am Iron Man') // 'Helo I am rn '

// task 11
function fibonacci(n) { 
	let result = 1;
	let a = 1;
	let b = 1;
	for(i = 0; i<= n-3; i++) {
		result = a + b
		a = b
		b = result
	}
	 return result;

 }
console.log(fibonacci(3),fibonacci(5),fibonacci(7)); // 2, 5 ,13


























