const colorDisplay = document.getElementById('color-display');

document.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const button = event.target;
    const color = button.id;
    colorDisplay.style.backgroundColor = getComputedStyle(button).backgroundColor;
    colorDisplay.textContent = color;
  }
});
