//add substract multiply 

let left = '';
let right = '';

function calculator(num1, opr, num2){
    if(opr =='+'){
        return num1+num2;
    }else if(opr === '-'){
        return num1-num2;
    }else if(opr == '*'){
        return num1*num2;
    }else if(opr == '*'){
        return num1*num2;
    }else if(opr == '/'){
        return num1/num2;
    }else{return 'invalid operator'}
}

console.log(calculator(240,'/',12));