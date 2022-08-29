const items = document.querySelectorAll(".countdown-item > h4");
const countdownElement = document.querySelector(".countdown");

const inputNode = document.querySelector(".js-input");
const btnNode = document.querySelector(".js-btn");



let countdownDate = new Date().getTime() + 24 * 60 * 60 * 1000;

btnNode.addEventListener('click' , () => {
    countdownDate = new Date(inputNode.value).getTime();
    getCountdownTime();
});

function getCountdownTime() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;

    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / oneSecond);

    const values = [days, hours, minutes, seconds];

    items.forEach(function (item, index) {
        item.textContent = values[index];
    })
    if (distance <= 0) {
        clearInterval(countdown);
          countdownElement.innerHTML = '<h4 class="expired">Times up!</h4>';
    }
}

let countdown = setInterval(getCountdownTime, 1000);
getCountdownTime();