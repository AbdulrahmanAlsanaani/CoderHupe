function postFix(expr) {
    let stack = [];
    for (let i = 0; i < expr.length; i++) {
        let c = expr[i];
        if (c == " ") {
            continue
        } else {
            if (!isNaN(parseInt(c))) {
                stack.push(parseInt(c));
            } else {
                let value1 = stack.pop();
                let value2 = stack.pop();

                switch (c) {
                    case '+':
                        stack.push(value2 + value1);
                        break;

                    case '-':
                        stack.push(value2 - value1);
                        break;

                    case '/':
                        stack.push(value2 / value1);
                        break;

                    case '*':
                        stack.push(value2 * value1);
                        break;
                    case '%':
                        stack.push(value2 % value1);
                        break;
                }
            }

        }
    }
    intOutPut = stack.join('');
    return parseInt(intOutPut);
}
console.log(postFix('3 3 *'))
