function octToBin(num) {
    // write your code here
    num = num.toString().split('');
    evenArr = 0;
    oddArr = 0;
    for (let index = 0; index < num.length; index++) {
        if (num[index] % 2 === 0) {
            evenArr += parseInt(num[index]);
        } else
            oddArr += parseInt(num[index]);
    }
    if (evenArr > oddArr) {
        return 'even'
    } else if (evenArr < oddArr) {
        return 'odd'
    }else
        return 'equal'
        

}
console.log(octToBin(1524))
