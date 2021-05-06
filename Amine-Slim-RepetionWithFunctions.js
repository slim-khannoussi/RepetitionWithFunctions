//04/05/2021
//Basic
//Q1
//Answer
function sum(number){
	if(number===0){
		return 0
	}
	return number + sum(number-1) 
}

//Q2
//Answer

function factorial(number){
	if(number===0){
		return 1
	}
	return number * factorial(number-1)
}

//Q3
//Answer

function repeatString(string, number){
	if(number===0){
		return ''
	}
	return string+ repeatString(string,number-1)
}

//Q4
//Answer

function fibonacci(number){
	if(number===1&& number+1=1){
		return 1
	}
	return fibonacci(number-)-fibonacci(number-)
}


//Q5
//Answer

function multiplyBy10(firstNumber, secondNumber){
	if (secondNumber===0){
		return firstNumber
	}
	return firstNumber* multiplyBy10(firstNumber,secondNumber-1)
}

//Intermediate
//Q6
//Answer

function sumBetween(start,end){
	if(end===start){
		return start
	}
	return start + sumBetween(start+1,end)
}

//Q7
//Answer

function add(number1,number2){
	if (number1===number2){
		return number1
	}
	return number1+ add(inc(number1),number2)
}

//Q8
//Answer

function isEven(num){
    if(num===0){
        return(true);
    }else if (num === 1){
        return(false);
    }else {
        return(isEven(num - 2));
    }
}

//Q9
//Answer

function multiply(num1,num2){

}

//Q10
function range(start,end){
	if(end===start+1){
		return ''
	}
	return start+1 +','+range(start+1,end)
}