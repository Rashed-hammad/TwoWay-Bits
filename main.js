const input = document.querySelector("#binary");
const output = document.querySelector("#result");
const form = document.querySelector("form");
const label = document.querySelector("label");
const modeButtons = document.querySelectorAll(".mode");

let mode = "bin2dec";

modeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    mode = btn.dataset.mode;
    modeButtons.forEach((b) => b.classList.toggle("active", b === btn));
    label.textContent =
      mode === "bin2dec"
        ? "Enter bits (0s and 1s):"
        : "Enter a decimal number:";
    input.placeholder = mode === "bin2dec" ? "e.g. 1011" : "e.g. 11";
    input.value = "";
    output.textContent = "";
  });
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  output.classList.remove("error");
  output.textContent = "";
  let value = input.value.trim();

  if (mode === "bin2dec") {
    if (value === "") {
      output.classList.add("error");
      output.textContent = "Enter a value.";
      return;
    }
    if (value.length > 53) {
      output.classList.add("error");
      output.textContent = "Too Large.";
      return;
    }
    if (!/^[01]+$/.test(value)) {
      output.classList.add("error");
      output.textContent = "Only 0 and 1 are allowed.";
      return;
    }
    value = value.split("").reverse().join("");
    let result = 0;
    for (let x = 0; x < value.length; x++) {
      if (value[x] == "1") {
        result = result + 2 ** x;
      }
    }
    output.textContent = result;
  } else if (mode === "dec2bin") {
    let n = Number(value);

    if (value === "") {
      output.classList.add("error");
      output.textContent = "Enter a value.";
      return;
    }
    if (!/^\d+$/.test(value)) {
      output.classList.add("error");
      output.textContent = "Only digits 0-9 are allowed.";
      return;
    }
    let bits = "";
    do {
      bits = (n % 2) + bits;
      n = Math.floor(n / 2);
    } while (n > 0);
    output.textContent = bits;
  }
});
