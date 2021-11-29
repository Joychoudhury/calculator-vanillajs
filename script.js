// get elements

const operator = document.getElementsByClassName('operator');
const number = document.getElementsByClassName('number');
const output = document.getElementById('output-value');
const history = document.getElementById('history-value');


// event listners
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',operatorClick);
}
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',numberClick);
}


// functions

// number display



function numberClick(e){
    const numberValue = e.target.innerText; // numbers

    if(output.innerText === '0'){
        output.innerText = numberValue;
    }else{
        output.innerText += numberValue;
    }   
}

function operatorClick(e){

    const operatorValue = e.target.innerText; //operators 

    if(history.innerText !== '' && output.innerText !== '0' && operatorValue !== 'C' && operatorValue !== 'CE'){
        history.innerText = ` ${history.innerText}${output.innerText}`;
        console.log(eval(history.innerText));
        history.innerText = eval(history.innerText);
        if(operatorValue === '%' || operatorValue === '*' || operatorValue === '-' || operatorValue === '+'|| operatorValue === '/'){
            history.innerText = history.innerText+ operatorValue;
            output.innerText = '0';
        }
    }else if(operatorValue === '%' || operatorValue === '*' || operatorValue === '-' || operatorValue === '+'|| operatorValue === '/'){
        history.innerText = history.innerText+output.innerText + operatorValue;
        output.innerText = '0';
    }

    if(operatorValue === 'CE'){
        output.innerText = '0';
    }else if(operatorValue === 'C'){
        output.innerText = '0';
        history.innerText = '';
    }else if(operatorValue === '='){
        history.innerText = eval(history.innerText);
        output.innerText = history.innerText;
        history.innerText = '';
    }
}
    