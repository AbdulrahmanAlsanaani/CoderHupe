function wordCount(txt) {

    a= txt.split('')
    for (let index = 0; index < a.length; index++) {
        if (a[index] != a[index].toLowerCase()) {
            a[index] = " " + a[index].toLowerCase();
        }
        
    }
    return a.join('');
}
let text ='iLoveMyFriend';
console.log(text);
console.log(wordCount(text))


