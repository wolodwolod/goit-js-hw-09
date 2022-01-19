// Описан в документации
import flatpickr from "flatpickr";

// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

const refs = {
dateInp: document.querySelector('input[type="text]'),
    startBtn: document.querySelector('button[data-start]'),
dataDays: document.querySelector('span[data-days]'),
dataHours: document.querySelector('span[data-hours]'),
dataMinutes: document.querySelector('span[data-minutes]'),
dataSeconds: document.querySelector('span[data-seconds]')
};

refs.startBtn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
    
      const selectedTime = selectedDates[0].getTime();
      let currentTime = Date.now();
         
      if (selectedTime <= currentTime) {
          alert("Please choose a date in the future");
          refs.startBtn.setAttribute('disabled', true);
          return
      } else {
          refs.startBtn.removeAttribute('disabled');
      }
      refs.startBtn.addEventListener('click', onStartCountdownTimer);


function onStartCountdownTimer() {
    
    const intervalID = setInterval(() => {
        currentTime = Date.now();
let remainTime = selectedTime - currentTime;
        console.log(remainTime);
                       
          const remain = convertMs(remainTime);
        console.log(remain);
               
refs.dataDays.textContent = addLeadingZero(remain.days);
refs.dataHours.textContent = addLeadingZero(remain.hours);
refs.dataMinutes.textContent = addLeadingZero(remain.minutes);
        refs.dataSeconds.textContent = addLeadingZero(remain.seconds);
        
        if (remain.days === 0 &&
            remain.hours === 0 &&
            remain.minutes === 0 &&
            remain.seconds === 0
        ) {
             
            clearInterval(intervalID);
            setTimeout(() => { alert('TIME IS OVER!') }, 500);
            refs.startBtn.setAttribute('disabled', true);
                         }
    },
        1000);    
    
}
   },
};

flatpickr("input#datetime-picker", options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
return String(value).padStart(2, '0');
}

