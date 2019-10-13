const countdown = document.querySelector('.countdown');

//set launch date
const launchDate = new Date('Novemeber 6, 2020 13:00:00').getTime();

//update every second
const interval = setInterval(() => {
  // get todays date and time in ms
  const now = new Date().getTime();

  //get date from now to the launch
  const distance = launchDate - now;

  //calculations for time
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  // display the results
  countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${secs}<span>Seconds</span></div>
    `;

  // check if launch date has already passed
  if (distance < 0) {
    clearInterval(interval);
    //style and output text
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = 'Launced!';
  }
}, 1000);
