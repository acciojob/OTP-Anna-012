//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;
    if (value) {
      // Move to the next input if exists
      const nextInput = inputs[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      // Clear the current input
      input.value = "";
      // Move to the previous input if exists
      const previousInput = inputs[index - 1];
      if (previousInput) {
        previousInput.focus();
      }
    }
  });
});
