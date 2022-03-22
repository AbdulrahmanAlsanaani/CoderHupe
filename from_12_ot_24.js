function convertTime(time) {
    // write your code here

    let hour = time.split(':');
    let mint = hour[1].split(' ');
    let pmAm = mint[1];

    if (time.indexOf("pm") > -1 || time.indexOf("am") > -1) {

        if (pmAm == 'pm') {
            if (parseInt(hour[0]) == 12)
                hour[0] = 12;
            else
                hour[0] = parseInt(hour[0]) + 12;
        } else {
            if (parseInt(hour[0]) == 12)
                hour[0] = 0;
        }
        return hour[0] + ':' + mint[0];


    } else {
        if (parseInt(hour[0]) > 12) {
            pmAm = 'pm'
            hour[0] = parseInt(hour[0]) - 12;
        }
        else
            pmAm = 'am'
        return hour[0] + ':' + mint[0] + ' ' + pmAm;
    }

}
console.log(convertTime('12:00 am'));


//