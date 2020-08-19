const textarea = document.getElementById('textarea');
const count = document.getElementById('count');
let max = 100;
let now = null;

textarea.addEventListener('keyup', function () {
  now = max - textarea.value.length;
  count.textContent = now;
  count.className = now < 0 ? 'over' : '';
});
