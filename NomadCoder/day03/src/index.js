// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector("select");

console.log(select);
console.log(select.selectedIndex);

function selectHandler(e) {
  console.log(e.target.value);
  localStorage.setItem("country", e.target.value);
}

select.addEventListener("change", selectHandler);
