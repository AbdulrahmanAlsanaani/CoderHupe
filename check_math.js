function mathExpr(expr) {
    let m = '+-*/%';
    a = expr.split('');
    for (let i = 0; i < a.length; i++) {
        if (/\D/.test(a[i])) {
            if (m.indexOf(a[i]) < 0)
                return false
        }

    }
    return true

}
console.log(mathExpr('1+1'))