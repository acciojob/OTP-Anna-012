//your JS code here. If required.
const codes = document.querySelectorAll('.code');

codes.forEach((code, index) => {
  // When the user types in a code input
  code.addEventListener('input', (e) => {
    const value = e.target.value;

    if (value) {
      // Remove 'focused' class from all inputs
      codes.forEach((c) => c.classList.remove('focused'));

      // Focus the next input and add 'focused' class
      if (index < codes.length - 1) {
        codes[index + 1].focus();
        codes[index + 1].classList.add('focused');
      }
    }
  });

  // Handle backspace key
  code.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !e.target.value) {
      codes.forEach((c) => c.classList.remove('focused'));

      if (index > 0) {
        codes[index - 1].focus();
        codes[index - 1].classList.add('focused');
      }
    }
  });

  // Add 'focused' class when an input gains focus
  code.addEventListener('focus', () => {
    codes.forEach((c) => c.classList.remove('focused'));
    code.classList.add('focused');
  });
});
