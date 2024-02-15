let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            if (isValidExpression(string)) {
                try {
                    let result = eval(string.replace(/%/g, '/100'));
                    if (isFinite(result)) {
                        input.value = result;
                        string = "";
                    } else {
                        alert('Invalid Expression');
                        string = "";
                        input.value = string;
                    }
                } catch (error) {
                    alert('Invalid Expression');
                    string = "";
                    input.value = string;
                }
            } else {
                alert('Invalid Expression');
            }
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            if (isValidInput(e.target.innerHTML)) {
                string += e.target.innerHTML;
                input.value = string;
            } else {
                alert('Invalid Input');
            }
        }
        
    })
});

function isValidInput(input) {
    const validInputRegex = /^[\d\+\-\*\/\.\%]*$/;
    return validInputRegex.test(input);
}

function isValidExpression(expression) {
    const validExpressionRegex = /^[\d\+\-\*\/\.\%]*$/;
    return validExpressionRegex.test(expression);
}
