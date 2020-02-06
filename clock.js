colorClock();

function colorClock(){
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours <= 9) {
    hours = "0" + hours;
  }
  if (minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (seconds <= 9) {
    seconds = "0" + seconds;
  }

  let clockFace = hours + ':' + minutes + ':' + seconds;
  let hexaColor = '#' + hours + minutes + seconds;
 
  document.getElementById('clock').innerHTML = clockFace;
  document.getElementById('clock').style.color = "lightgrey";
  document.body.style.background = hexaColor;
  setTimeout(function() {
    colorClock();
  }, 1000);
}