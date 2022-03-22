function addStrNums(num1, num2) {
    // write your code here
    console.log(!/\D/.test(num1));
    if (!/\D/.test(num1) && !/\D/.test(num2)) {
        sum = parseInt(num1) + parseInt(num2);
    } else
        sum = -1;
    return sum;
}

console.log(addStrNums('-15', '5'))