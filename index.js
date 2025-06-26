//=== State ===

let bankArr = [];

let oddsArr = [];

let evensArr = [];

const $app = document.querySelector("#app");

function numberBank(n) {
  bankArr.push(n);
  render();
}

function sort1() {}

function sortAll() {}

//=== Components ===

function inputForm() {
  const $form = document.createElement("form");
  $form.innerHTML = /*html*/ `
    <label>
      Add a number to the bank
      <input name="numbers" type="number" min="1" />
    </label>
    <button>Add Number</button>
    <button>Sort 1</button>
    <button>Sort All</button>
  `;
  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData($form);
    const numbers = data.get("numbers");
    const n = parseInt(numbers, 10);
    numberBank(n);
  });
  return $form;
}

function bankSection() {
  const $section = document.createElement("section");
  const $bankTitle = document.createElement("h3");
  $bankTitle.textContent = "Bank";
  const $bankTextBox = document.createElement("input");
  $bankTextBox.value = bankArr.join(", ");
  $section.append($bankTitle, $bankTextBox);
  return $section;
}

function oddsSection() {
  const $section = document.createElement("section");
  const $oddsTitle = document.createElement("h3");
  $oddsTitle.textContent = "Odds";
  const $oddsBox = document.createElement("input");
  $oddsBox.value = oddsArr.join(", ");
  $section.append($oddsTitle, $oddsBox);
  return $section;
}

function evensSection() {
  const $section = document.createElement("section");
  const $evensTitle = document.createElement("h3");
  $evensTitle.textContent = "Evens";
  const $evensTextBox = document.createElement("input");
  $evensTextBox.value = evensArr.join(", ");
  $section.append($evensTitle, $evensTextBox);
  return $section;
}

function bank(n, waiting) {
  const $bank = document.createElement("section");
  $bank.classList.add("pasture");
  const $bankText = Array.from({ length: n }, () => bank(waiting));
  $bank.replaceChildren(...$bankText);

  return $bank;
}

//=== Render ===
function render() {
  $app.innerHTML = `
    <h1>Odds and Evens Organizer</h1>
    <div id="input-form-container"></div>
  `;
  const $formContainer = $app.querySelector("#input-form-container");
  $formContainer.replaceWith(inputForm());
  $app.append(bankSection());
  $app.append(oddsSection());
  $app.append(evensSection());
}
render();
