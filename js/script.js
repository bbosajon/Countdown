// setting the date to we are counting down to 
const CountDownDate = new Date('Feb 29, 2021 21:18:15').getTime();

// UpDate the count down every 1 second instantly
var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();
    
    //we use getTime() method b'se it returns the meliseconds
    // Find the distance(gap) between now and the count down date
    var gap = CountDownDate - now;
    // Time  calculations for days, hours, minutes and seconds
    var days = Math.floor(gap / (1000 * 60 * 60 * 24));
    var Hours = Math.floor(gap  % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var Minutes = Math.floor(gap % (1000 * 60 * 60) / (1000 * 60));
    var Seconds = Math.floor(gap % (1000 * 60) / 1000);
    // Display the results in the element with 'id'
    document.getElementById('paragraph').innerHTML  = days + 'd ' + Hours + 'h ' 
     + Minutes + 'm ' + Seconds + 's ';

    //  If the count down is finished, write some text
    if (gap < 0) {
        clearInterval(x);
        document.getElementById('paragraph').innerHTML  = 'EXPIRED';
    }

}, 1000);