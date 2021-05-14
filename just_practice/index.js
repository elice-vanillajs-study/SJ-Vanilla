const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');

let status = document.querySelector('p');

function plus_stat() {
	status.innerText++;
	console.log(status.innerText);
}

function minus_stat() {
	status.innerText--;
	console.log(status.innerText);
}

plus.addEventListener('click', plus_stat);
minus.addEventListener('click', minus_stat);