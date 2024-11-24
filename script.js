//your JS code here. If required.
const codes = document.querySelectorAll('.code');

codes.forEach((code, index) => {
  code.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value) {
      code.classList.remove('focused');
      if (index < codes.length - 1) {
        codes[index + 1].focus();
        codes[index + 1].classList.add('focused');
      }
    }
  });

  code.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !e.target.value) {
      code.classList.remove('focused');
      if (index > 0) {
        codes[index - 1].focus();
        codes[index - 1].classList.add('focused');
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
