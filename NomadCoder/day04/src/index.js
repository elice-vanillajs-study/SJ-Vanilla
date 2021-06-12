let body = document.querySelector("body");

body.innerHTML = `
<div>
<h1> Tasks </h1>
<form>
<input type='text' name='task' placeholder='Add task'>
</form>
<h2> Pending </h2>
<ul id='pending'> </ul>
<h2> Finished </h2>
<ul id='done'> </ul>
</div>
`;

let toDos = [];
const toDoObj = {
  text: text,
  id: toDos.length + 1
}
toDos.push(toDoObj)

let pending = document.getElementById("pending");
let finished = document.getElementById("done");

function inputHandler(e) {
  e.preventDefault();
  console.log(e.target.task.value);
  pending.innerHTML += `<li> ${e.target.task.value} <button>❎</button><button>✅</button></li>`;
}

let form = body.querySelector("form");

form.addEventListener("submit", inputHandler);
