
const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]')
} 
// console.log(refs.startBtn, refs.stopBtn);

const CHANGE_BG_COLOR_DELAY = 1000;
let colorId = null;


refs.startBtn.addEventListener('click', onStartBtnChangeBgColor);
refs.stopBtn.addEventListener('click', onStopBtnChangeBgColor);

function onStartBtnChangeBgColor(e) {
    colorId = setInterval(getRandomBgColor, CHANGE_BG_COLOR_DELAY);
    e.target.removeEventListener('click', onStartBtnChangeBgColor);
};

function onStopBtnChangeBgColor() {
        
    clearInterval(colorId);
    
    refs.startBtn.addEventListener('click', onStartBtnChangeBgColor);
};

function getRandomBgColor() {refs.body.style.backgroundColor =  getRandomHexColor()}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
