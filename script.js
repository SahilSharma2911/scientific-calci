let string = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = evaluateExpression(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === 'del') {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === 'sin') {
            string += 'sin(';
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === 'cos') {
            string += 'cos(';
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === 'tan') {
            string += 'tan(';
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === 'log') {
            string += 'log(';
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === 'ln') {
            string += 'ln(';
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === 'π') {
            string += 'π';
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === '√') {
            string += '√(';
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === 'e') {
            string += 'e';
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === 'x²') {
            string += '^2';
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === 'x^y') {
            string += '^';
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === '|x|') {
            string += 'Math.abs(';
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === '%') {
            string += '/100';
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target);
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})

function evaluateExpression(expr) {
  const modifiedExpr = expr.replace(/sin/g, 'Math.sin')
                           .replace(/cos/g, 'Math.cos')
                           .replace(/tan/g, 'Math.tan')
                           .replace(/log/g, 'Math.log10')
                           .replace(/ln/g, 'Math.log')
                           .replace(/π/g, 'Math.PI')
                           .replace(/√/g, 'Math.sqrt')
                           .replace(/e/g, 'Math.E')
                           .replace(/\^/g, '**');
  return eval(modifiedExpr);
}



