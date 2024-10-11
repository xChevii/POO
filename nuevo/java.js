let input = '', firstOperand = null, operator = '';
const display = document.getElementById('display');
const historyDiv = document.getElementById('historial');

function press(num) {
    input += num;
    display.innerText = input || '0';
}

function setOP(op) {
    if (input) {
        firstOperand = parseFloat(input);
        operator = op;
        input = '';
    }
}

function calculate() {
    if (firstOperand !== null && input) {
        let result;
        switch (operator) {
            case '+':
                result = firstOperand + parseFloat(input);
                break;
            case '-':
                result = firstOperand - parseFloat(input);
                break;
            case '*':
                result = firstOperand * parseFloat(input);
                break;
            case '/':
                result = firstOperand / parseFloat(input);
                break;
            default:
                result = 0;
        }

        display.innerText = result.toFixed(0);
        addToHistory(`${firstOperand} ${operator} ${parseFloat(input)} = ${result.toFixed(0)}`);
        input = '';
        firstOperand = null;
        operator = '';
    }
}

function clr() {
    input = '';
    firstOperand = null;
    operator = '';
    display.innerText = '0';
}

function addToHistory(entry) {
    const entryDiv = document.createElement('div');
    entryDiv.textContent = entry;
    historyDiv.appendChild(entryDiv);
}

function processHistory() {
    const historyItems = historyDiv.innerHTML.split('<div>').filter(item => item.trim() !== '');
    for (let i = 0; i < historyItems.length; i++) {
        const historyEntry = historyItems[i].replace('</div>', '');
        console.log(historyEntry);
    }
}

const calculator = {
    input: '',
    firstOperand: null,
    operator: '',
    display: display,
    
    press: function(num) {
        this.input += num;
        this.display.innerText = this.input || '0';
    },
    
    setOP: function(op) {
        if (this.input) {
            this.firstOperand = parseFloat(this.input);
            this.operator = op;
            this.input = '';
        }
    },
    
    calculate: function() {
        if (this.firstOperand !== null && this.input) {
            let result;
            switch (this.operator) {
                case '+':
                    result = this.firstOperand + parseFloat(this.input);
                    break;
                case '-':
                    result = this.firstOperand - parseFloat(this.input);
                    break;
                case '*':
                    result = this.firstOperand * parseFloat(this.input);
                    break;
                case '/':
                    result = this.firstOperand / parseFloat(this.input);
                    break;
                default:
                    result = 0;
            }
            this.display.innerText = result.toFixed(0);
            addToHistory(`${this.firstOperand} ${this.operator} ${parseFloat(this.input)} = ${result.toFixed(0)}`);
            this.input = '';
            this.firstOperand = null;
            this.operator = '';
        }
    }
};

document.querySelectorAll('.num').forEach(btn => {
    btn.addEventListener('click', () => calculator.press(btn.innerText));
});

document.querySelectorAll('.op').forEach(btn => {
    btn.addEventListener('click', () => calculator.setOP(btn.innerText));
});

document.getElementById('equals').addEventListener('click', () => calculator.calculate());
document.getElementById('clear').addEventListener('click', () => clr());