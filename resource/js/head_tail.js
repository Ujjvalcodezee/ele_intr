const $ = require("jquery");
const displayContainer = document.getElementById("display-container");
const symbolDropdown = document.getElementById("symbol-dropdown");
const submitBtn = document.getElementById("submit-btn");
let queue = [];
var s1 = "";

submitBtn.addEventListener("click", function () {
  const selectedSymbol = symbolDropdown.value;

  if (selectedSymbol === "") {
    return;
  }

  queue.push(selectedSymbol);

  // Create a new row for each group of consecutive symbols
  displayContainer.innerHTML = "";
  let currentRow = document.createElement("div");
  displayContainer.appendChild(currentRow);

  for (let i = 0; i < queue.length; i++) {
    const currentSymbol = queue[i];
    const prevSymbol = i === 0 ? "" : queue[i - 1];

    if (prevSymbol === "" || prevSymbol === currentSymbol) {
      const currentCell = document.createElement("span");
      currentCell.textContent = currentSymbol;
      currentRow.appendChild(currentCell);
    } else {
      currentRow = document.createElement("div");
      const currentCell = document.createElement("span");
      currentCell.textContent = currentSymbol;
      currentRow.appendChild(currentCell);
      displayContainer.appendChild(currentRow);
    }
  }
});

function logout() {
  window.localStorage.clear();
  window.location.replace("./login.html");
}
