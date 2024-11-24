//your JS code here. If required.
const codes = document.querySelectorAll('.code');

// Focus on the next input when typing
codes.forEach((code, index) => {
  code.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value) {
      if (index < codes.length - 1) {
        codes[index + 1].focus();
      }
    }
  });

  // Move focus backward on backspace
  code.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !e.target.value) {
      if (index > 0) {
        codes[index - 1].focus();
      }
    }
  });
});
