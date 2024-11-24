//your JS code here. If required.
const codes = document.querySelectorAll('.code');

codes.forEach((code, index) => {
  code.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value) {
      code.classList.remove('focused'); // Remove focus class from current input
      if (index < codes.length - 1) {
        codes[index + 1].focus();
        codes[index + 1].classList.add('focused'); // Add focus class to next input
      }
    }
  });

  code.addEventListener('focus', () => {
    code.classList.add('focused');
  });

  code.addEventListener('blur', () => {
    code.classList.remove('focused');
  });
});
