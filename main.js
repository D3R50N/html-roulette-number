function id(_id) {
  return document.getElementById(_id);
}
function rand(max, min = 0) {
  return parseInt(Math.random() * (max - min) + min);
}

const text = id("text");
const number = rand(10000000, 1000000);

for (let digit_index in number.toString()) {
  const digit = number.toString()[digit_index];
  const div = document.createElement("div");
  div.className = "roulette";

  add_digits(div);
  
  text.appendChild(div);
  setTimeout(() => {
    div.style.transitionDuration = 2 -1 / (digit_index + 1) + "s";
    div.style.translate = `0 -${10 * digit}vw`;
  }, 0);
}

function add_digits(div) {
  for (let dc of "0123456789") {
    const span = document.createElement("span");
    span.className = "digit";
    span.innerText = dc;
    div.appendChild(span);
  }
}
