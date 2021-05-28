const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const lastElColors = colors.length - 1;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    buttonStart: document.querySelector('button[data-action="start"]'),
    buttonStop: document.querySelector('button[data-action="stop"]'),
    body: document.body,
}

refs.buttonStart.addEventListener('click', () => {
    refs.buttonStart.disabled = true;
  let  timerId = setInterval(() => {
        refs.body.style.backgroundColor =
            colors[randomIntegerFromInterval(0, lastElColors)];
    }, 1000);
});

refs.buttonStop.addEventListener('click', () => {

   refs.buttonStop.disabled = false;
   refs.buttonStart.disabled = false;
  clearInterval(timerId);  
});
