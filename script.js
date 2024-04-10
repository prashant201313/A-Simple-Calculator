const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'reset') {
            display.innerText = '0';
        }

        else if (item.id == 'delete') {
            if (display.innerText.length == 1) {
                display.innerText = '0';
            }
            else {
                let str = display.innerText.toString();
                display.innerText = str.substr(0, str.length - 1);
            }    
        }

        else if (display.innerText != '' && item.id == 'equal') {
            try {
                if (!['+', '-', '*', '/', '.'].includes(display.innerText.slice(-1))){
                    let result = eval(display.innerText);
                    if (result % 1 !== 0 && result.toString().includes('.')) {
                        result = result.toFixed(3);
                    }
                    display.innerText = result;
                }
                else{
                    throw new ReferenceError('Error');
                }  
            } 
            catch (error) {
                display.innerText = 'Error';
            }    
        }

        else {
            if (display.innerText === '0' && (item.id === '-' || !isNaN(parseInt(item.id)))) {
                display.innerText = item.id;
            }
            else if (item.id === '.') {
                // Check if the last character on the screen is already a decimal point
                var lastDecimalIndex = display.innerText.lastIndexOf('.');
                var lastOperatorIndex = Math.max(
                    display.innerText.lastIndexOf('+'),
                    display.innerText.lastIndexOf('-'),
                    display.innerText.lastIndexOf('*'),
                    display.innerText.lastIndexOf('/')
                );
                if (lastDecimalIndex > lastOperatorIndex) {
                    // If a decimal point is already present, do not append another one
                    return;
                }
                // Otherwise, append the decimal point to the screen
                display.innerText += item.id;
            }    
            else if (['+', '-', '*', '/'].includes(display.innerText.slice(-1)) && ['+', '-', '*', '/'].includes(item.id)) {
                display.innerText = display.innerText.slice(0, -1) + item.id;
            }
            else {
                display.innerText += item.id;
            }
        }
    }
});

