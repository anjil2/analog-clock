var second=0;
var minute=0;
var hour=0;
var d =new Date();
setInterval(
    function(){
        d=new Date();
        second= d.getSeconds() * 6;
        minute=d.getMinutes() * 6;
        hour=d.getHours() * 30 + Math.round(minute / 12);
        document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
        document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
        document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";
    }, 1000
);



function displayCurrentTime() {
  let date = new Date();
  let day = date.getDate();
  let month = date.toLocaleString('default', { month: 'long' });
  let timeString = day + " " + month;
  document.getElementById("currentTime").innerText = timeString;
}

setInterval(displayCurrentTime, 1000);


