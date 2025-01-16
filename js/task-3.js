const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  const nameContent = event.target.value.trim();

  if (nameContent === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = nameContent; 
  }
});
    