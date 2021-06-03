let yam = document.querySelector("body");

yam.innerHTML = "<h2>Hello!</h2>";
yam.style.color = "#ffffff";

function resizeHandler(e) {
  console.log(e.target.innerWidth);
  if (e.target.innerWidth > 800) {
    yam.style.backgroundColor = "#a600ff";
  } else if (e.target.innerWidth > 554) {
    yam.style.backgroundColor = "#ffbb00";
  } else {
    yam.style.backgroundColor = "#009dff";
  }
}

window.addEventListener("resize", resizeHandler);
