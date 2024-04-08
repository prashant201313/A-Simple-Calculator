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
            let result = eval(display.innerText);
            if (result % 1 !== 0 && result.toString().includes('.')) {
                result = result.toFixed(3);
            }
            display.innerText = result;
        }
        else {
            if (display.innerText === '0' && (item.id === '-' || !isNaN(parseInt(item.id)))) {
                display.innerText = item.id;
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

