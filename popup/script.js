const btn = document.getElementById('btn');
const close = document.getElementById('close');
const box = document.getElementById('box');
let boxstyle = box.style;

btn.addEventListener('click', function () {
  if (boxstyle.display === 'block') {
    boxstyle.display = 'none';
  } else {
    boxstyle.display = 'block';
  }
});

close.addEventListener('click', function () {
  boxstyle.display = 'none';
});
