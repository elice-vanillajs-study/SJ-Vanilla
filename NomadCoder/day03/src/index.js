const body = document.querySelector("body");
const xmasDay = new Date("2021-12-24:00:00:00+0900");
// You're gonna need this

function getTime() {
  // Don't delete this.
  const distance = xmasDay - Date.now();

  const day = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  body.innerHTML = ` <h2> Time Until Christmas </h2>
  <div> ${day}d
${hours < 10 ? `0${hours}` : hours}h
${minutes < 10 ? `0${minutes}` : minutes}m
${seconds < 10 ? `0${seconds}` : seconds}s </div>`;
}

function init() {
  setInterval(getTime, 1000);
}
init();
