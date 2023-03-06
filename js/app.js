let num = 0;
let interval;
const stopWatch = () => {
  document.getElementById('time-field').innerText = ++num;
};

document.getElementById('start-btn').addEventListener('click', function () {
  interval = setInterval(stopWatch, 1000);
});

document.getElementById('stop-btn').addEventListener('click', function () {
  clearInterval(interval);
});
document.getElementById('reset-btn').addEventListener('click', function () {
  clearInterval(interval);
  num = 0;
  document.getElementById('time-field').innerText = 0;
});
