document.addEventListener('keydown', (e) => {
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    if (key) {
      key.classList.add('pressed');
    }
  });
  
  document.addEventListener('keyup', (e) => {
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    if (key) {
      key.classList.remove('pressed');
    }
  });
  