let oprArr = {'+':'+', '-':'-', '/':'/','*':'*'};
input = '';
let opr = [];
let num = [];
let temp = '';
let result = '';

function calculate(){
    for(let i = 0;i < input.length; i++){
         if(input[i] in oprArr){
            opr.push(input[i]);
            num.push(temp);
            temp = '';
        }else{
        temp +=input[i];
        }
    };
    num.push(temp);
    result = num[0]
    for(i in opr){
        if (opr[i] == '+'){
            result = parseInt(result)+parseInt(num[parseInt(i)+1]);
        }else if (opr[i] == '-'){
            result = parseInt(result)-parseInt(num[parseInt(i)+1]);
        }else if (opr[i] == '*'){
            result = parseInt(result)*parseInt(num[parseInt(i)+1]);
        }else if (opr[i] == '/'){
            result = parseInt(result)/parseInt(num[parseInt(i)+1]);
        }
    }
    return result;
};

let output = document.querySelector('.output');
let keysArray = document.querySelectorAll('.button');

Array.from(keysArray).forEach(function(key){
    key.addEventListener('click', function(){
        if(key.textContent == '='){
            if(calculate() =='Infinity'){
                alert('can not divide by zero');
            }else{output.textContent = Math.round(calculate())};
        }else if(key.textContent =='clear'){
            output.textContent = '';
            input = '';
            for(let i =0;i<=num.length;i++){
                num.pop();
            }
            console.log(num);
            for(let i = 0;i<=opr.length;i++){
                opr.pop();
            }
            temp='';
            result = '';
            console.log(opr)
        }else{
            input +=key.textContent;
            output.textContent +=key.textContent;
        }
    })
})