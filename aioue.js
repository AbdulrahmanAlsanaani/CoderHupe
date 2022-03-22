function firstNVowels(phrase, n) {
    a=phrase.split('');
    s='aeiou';
    arr='';
    for (let i = 0; i < a.length; i++) {
        if (arr.length<n) {
            if (s.indexOf(a[i].toLowerCase())>-1) {
                arr+=a[i];
            }
        }
    }
    if (arr.length<n) {
        return 'invalid'
    }
    return arr
}

var string = "ProgrAmmEr";
console.log(firstNVowels(string,3));