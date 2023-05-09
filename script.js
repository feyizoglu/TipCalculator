const billInput = document.querySelector("#bill");
const personInput = document.querySelector("#person");
const customTip = document.querySelector("#custom");
const tip = document.querySelector("#tip-person");
const total = document.querySelector("#total-person");
const resetBtn = document.querySelector("#reset");
const buttons = document.querySelectorAll("button");
console.log(parseFloat(buttons[0].textContent));
let tipPercent = 0;
let personNum = 1;
customTip.addEventListener("input", () => {
  tipPercent = parseFloat(customTip.value);
  console.log(tipPercent);
});
for (let i = 0; i < 5; i++) {
  buttons[i].addEventListener("click", function () {
    tipPercent = parseFloat(buttons[i].textContent);
    buttons[i].classList = "btn btn-outline-primary col mx-1";
  });
}

billInput.addEventListener("input", Calculate);
personInput.addEventListener("input", Calculate);

function Calculate() {
  let bill = parseInt(billInput.value);
  if (personInput.value) {
    personNum = parseInt(personInput.value);
  }
  tip.textContent = `$${((bill * tipPercent) / 100 / personNum).toFixed(2)}`;
  total.textContent = `$${(
    ((bill * tipPercent) / 100 + bill) /
    personNum
  ).toFixed(2)}`;
}

resetBtn.addEventListener("click", function () {
  tip.textContent = "$0.0";
  total.textContent = "$0.0";
  billInput.value = "";
  personInput.value = 1;
  for (let i = 0; i < 5; i++) {
    buttons[i].classList = "btn btn-info col mx-1";
  }
  customTip.value = "";
  tipPercent = 0;
});
