function workingClock() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    if(minute<10) minute = '0' + minute; else minute;
    if(second<10) second = '0' + second; else second;

    time.innerHTML = hour + ':' + minute + ':' + second;
}

workingClock()
setInterval(workingClock,1000)