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
    if(number<2){
        return 1
    }
    return fibonacci(number-1)+fibonacci(number-2)
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
function inc(x) {
    return x + 1
    }
    function dec(x) {
    return x - 1
    }
    function add(number1,number2){
        if (number2 === 0){
            return number1
        }
        if(number2 < 0){
            return  add(dec(number1),inc(number2))
        }
        return  add(inc(number1),dec(number2))
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
    if(num2===0){
        return 0
    }
    return num1+multiply(num1,num2-1)
}
//Q10
function range(start,end){
    if(start + 1 === end -1){
        return end-1;
    }
    return start+1 +','+range(start+1,end)
}
//Q11

function stringLength(string) {
    if(string===''){
        return 0;
    }
    return 1+stringLength(string.slice(0,-1))
   }

// Q12
function modulo(number1, number2) {
    if(number1<number2){
    return number1;}
    return modulo(number1-number2,number2)
    }
//Q13

function countChars(string, char) {
  if(!string) return 0;
  return (string[0] === char) + countChars(string.slice(1), char);
}

//Q14

function indexOf(string, char) {
	if(string[0]===char) {
		return 0 }

return 1+indexOf(string.slice(1),char)
	
}
if (string[0]!==char){
		return undefined
	}

//Q15

function power(base,exponent){
	if(exponent===0){
		return 1
	} if (exponent%2===0){
		return power(base,(exponent/2)*power(base,(exponent/2))
	}else

	return base*power(base,(exponent-1/2)*power(base,(exponent-1/2))
}
//Q16

function reverseString(string) {

if (!string){
    return '';
}
return  ''+string.slice(-1)+reverseString(string.slice(0,-1))
}

//Q17

function greatestCommonDivisor(number1, number2) {
	if (number2===0){
		return number1}
		
return greatestCommonDivisor(number2,number1%number2)

}

//Q17

function lowestCommonMultiple(num1,num2){
	return num1 * (num2 / greatestCommonDivisor(num1,num2));
}

//Q18


function numberOfHandshakes(n){
	if(n===0) return 0
    return (n-1)+ numberOfHandshakes(n -1);
}