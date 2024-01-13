const startBtn = document.getElementById('button-start');
const stopBtn = document.getElementById('button-stop');
const resetBtn = document.getElementById('button-reset');
const secondsText = document.getElementById('seconds');
const milliSecondsText = document.getElementById('tens');
  let seconds = 0;
  let milliSeconds = 0;
const milliSecondsFunction = ()=>{
  setInterval(()=>{
    milliSeconds+= 1;
    if(milliSeconds == 100){
      milliSeconds = 0;
      seconds += 1;
      if(seconds < 10){
        secondsText.textContent = '0' + seconds;
      }else{
        secondsText.textContent = seconds;
      }
    }
    milliSecondsText.textContent = milliSeconds;
  }, 10)
}
var killId = setTimeout(function () {
  for (var i = killId; i > 0; i--) clearInterval(i);
}, 3000);

startBtn.addEventListener('click', ()=>{
  milliSecondsFunction()
})

stopBtn.addEventListener('click', ()=>{
  var killId = setTimeout(function () {
    for (var i = killId; i > 0; i--) clearInterval(i);
  }, 0);

})

resetBtn.addEventListener('click', ()=>{
    var killId = setTimeout(function () {
      for (var i = killId; i > 0; i--) clearInterval(i);
    }, 0);
  seconds = 0;
  milliSeconds = 0;
  secondsText.textContent = "00";
  milliSecondsText.textContent = "00";
})