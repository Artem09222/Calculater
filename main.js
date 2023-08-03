// let clicks = document.querySelectorAll(".click__button.numeric");

let wide = document.querySelector(".wide");
let clicks = document.querySelectorAll(".click__button.numeric");
let info = document.querySelector(".val");

function removeZeros(str) {
  while (str.startsWith("0")) {
    str = str.slice(1);
    return str;
  }
}
function clickNumStart(event) {
  if (info.textContent === "Error") {
    info.textContent = event.target.textContent;
  } else {
    info.textContent += event.target.textContent;
  }
  info.textContent = removeZeros(info.textContent);
}

function reset() {
  let arr = info.value;
  let text = arr.match(/[+\-\*\./]/g);
  console.log(text);
  let spl = arr.split(/[+\-\*\./]/g).map((text) => {
    return +text;
  });
  console.log(spl);

  if (!text || text.length === 0) {
    return;
  }

  let result = spl[0];
  for (let a = 0; a < text.length; a++) {
    switch (text[a]) {
      case "+":
        result += spl[++a];
        break;
      case "-":
        result -= spl[++a];
        break;
      case "*":
        result *= spl[++a];
        break;
      case "/":
        result /= spl[++a];
        if (spl[a] === 0) {
          result = "Error";
        }
        break;
      default:
        break;
    }
  }
  info.value = result;
}
function itemToDisplay(value) {
  const validOperator = /[+\-*/.]/;
  if (validOperator.test(value) && validOperator.test(info.value.slice(-1))) {
    return;
  }
  info.value += value;
}
function delItemFromDisplay(value) {
  info.value = "";
}
function num() {
  let text = info.textContent;
  let pattern = /[0-9]/g;
  let a = text.match(pattern);
}

clicks.forEach((ke) => ke.addEventListener("click", clickNumStart));
clicks.forEach((key) => key.addEventListener("click", num));
