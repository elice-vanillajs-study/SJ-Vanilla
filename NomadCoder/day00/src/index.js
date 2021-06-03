// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

let header = document.querySelector("h2");

const superEventHandler = {};

function resizeWindow() {
  let header = document.querySelector("h2");
  header.innerHTML = "You Just resized!";
  header.style.color = colors[2];
}

function mouseOver() {
  let header = document.querySelector("h2");
  header.innerHTML = "The mouse is here!";
  header.style.color = colors[0];
}

function mouseLeave() {
  let header = document.querySelector("h2");
  header.innerHTML = "The mouse is gone!";
  header.style.color = colors[1];
}

function onClick(e) {
  if (e.button === 2) {
    let header = document.querySelector("h2");
    header.innerText = "That was a right click!";
    header.style.color = colors[4];
  }
}

window.addEventListener("resize", resizeWindow);
header.addEventListener("mouseenter", mouseOver);
header.addEventListener("mouseleave", mouseLeave);
window.addEventListener("mousedown", onClick);
