//your JS code here. If required.
const inputs = document.querySelectorAll('.code');
 
inputs.forEach((input, index) => {
  // Add event listener for when a user types a number
  input.addEventListener('input', function (e) {
    if (e.target.value) {
      // Move to the next input when a value is entered
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }
  });
 
  // Add event listener for backspace to move focus back
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Backspace') {
      if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  });
});
 
// Focus on the first input initially
inputs[0].focus();