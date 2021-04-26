import "./style.css";
const bulb = document.querySelector(".bulb");
const toggle = document.querySelector("label");

toggle.addEventListener("click", () => {
  bulb.classList.toggle("bulb--on");
});
