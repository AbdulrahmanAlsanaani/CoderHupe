function numToEng(n) {
    // write your code here
    const num = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ]
    const tens = [
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ]
    const hundred = ' hundred ';
    let a;
    
    if (n < 20 && n >= 0) {
        return num[parseInt(n)];
    } else if (n >= 20 && n < 100) {
        n = n.toString();
        let arr = n.split('');

        if (parseInt(arr[1]) == 0) {
            a = tens[parseInt(arr[0]) - 2]
        } else
            a = tens[parseInt(arr[0]) - 2] + '-' + num[parseInt(arr[1])]

        return a;
    } else if (n >= 100 && n < 1000) {


        n = n.toString();
        let arr = n.split('');
        let mm = arr[1].toString() + arr[2].toString();
        let a = num[parseInt(arr[0])] + hundred + numToEng(parseInt(mm))
        return a;
    }

}

console.log(numToEng(30));