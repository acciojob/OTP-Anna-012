//your JS code here. If required.
// script.js
const codes = document.querySelectorAll('.code');

// Add event listeners to each input
codes.forEach((code, index) => {
  // When the user types in an input
  code.addEventListener('input', (e) => {
    const value = e.target.value;

    if (value) {
      // Remove 'focused' from all inputs
      codes.forEach((c) => c.classList.remove('focused'));

      // Move to the next input if available
      if (index < codes.length - 1) {
        codes[index + 1].focus();
        codes[index + 1].classList.add('focused');
      }
    }
  });

  // Handle backspace key
  code.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !e.target.value) {
      // Remove 'focused' from all inputs
      codes.forEach((c) => c.classList.remove('focused'));

      // Move to the previous input if available
      if (index > 0) {
        codes[index - 1].focus();
        codes[index - 1].classList.add('focused');
      }
    }
  });

  // Add 'focused' class on focus
  code.addEventListener('focus', () => {
    codes.forEach((c) => c.classList.remove('focused'));
    code.classList.add('focused');
  });
});
