function binToOct(b) {
    // write your code here
    const arr = ['000', '001', '010', '011', '100', '101', '110', '111'];
    //b = reverseString(b);
    let temp;
    let text = '';
    let value = b.length%3
    switch (value) {
        case 1:
            b = '00' + b;
            break;

        case 2:
            b = '0' + b;
            break;

        default:
            break;
    }
    //Select three digit in every time
    console.log(b);
    for (let index = 0; index < b.length; index += 3) {

        
        temp = b.slice(index, index + 3);
      
        for (let i = 0; i < arr.length; i++) {
            if (temp == arr[i]) {
                text += i;
            }

        }
    }
    return parseInt(text);

}
function reverseString(str) {
    return str.split('').reverse().join('');
}
let strs = "1000000000";
console.log('001 000 000 000');
// console.log(reverseString(strs));
console.log(binToOct(strs));
// console.log(4 % 3);