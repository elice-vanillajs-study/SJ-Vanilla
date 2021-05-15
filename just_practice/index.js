const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");

let status = document.querySelector("#num");

let num = 0;

function plus_stat() {
  num++;
  status.textContent = num;
  console.log(status.textContent);
}

function minus_stat() {
  num--;
  status.textContent = num;
  console.log(status.textContent);
}

function cal_stat(check) {
  if (check) {
    plus_stat();
  } else {
    minus_stat();
  }
}

plus.addEventListener("click", () => cal_stat(true));
minus.addEventListener("click", () => cal_stat(false));
