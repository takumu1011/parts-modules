let time = 180;
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
let counter;

startBtn.addEventListener('click', function () {
  toggle();
  counter = setInterval(count, 1000);
});
stopBtn.addEventListener('click', function () {
  toggle();
  clearInterval(counter);
});
resetBtn.addEventListener('click', function () {
  time = 180;
  sec.innerHTML = time % 60;
  min.innerHTML = Math.floor(time / 60);
});

function toggle() {
  if (startBtn.disabled) {
    startBtn.disabled = false;
    stopBtn.disabled = true;
  } else {
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }
}

function count() {
  if (time === 0) {
    sec.innerHTML = 0;
    min.innerHTML = 0;
    toggle();
    alert('3分経過しました');
    clearInterval(counter);
  } else {
    time -= 1;
    sec.innerHTML = time % 60;
    min.innerHTML = Math.floor(time / 60);
  }
}
