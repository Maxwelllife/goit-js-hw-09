const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  bodyStyle: document.body.style,
};
let timeoutId = null;
refs.start.addEventListener('click', onStartBtnClick);
refs.stop.addEventListener('click', onStopBtnClick);

refs.stop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartBtnClick() {
  timeoutId = setInterval(() => {
    refs.bodyStyle.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.start.disabled = true;
  refs.stop.disabled = false;
}

function onStopBtnClick() {
  clearInterval(timeoutId);
  refs.start.disabled = false;
  refs.stop.disabled = true;
}
