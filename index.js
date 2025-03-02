// 1. Remove the <main> element with id "main" if it exists.
const mainEl = document.getElementById("main");
if (mainEl) {
  mainEl.remove();
}

// 2. Create a new <h1> element.
const newHeader = document.createElement("h1");

// 3. Set its id to "victory".
newHeader.id = "victory";

// 4. Set its text content to "YOUR-NAME is the champion" (replace YOUR-NAME with your name).
// For example, if your name is Michael, use:
newHeader.textContent = "Michael is the champion";

// 5. Append the new <h1> element to the document body.
document.body.append(newHeader);
