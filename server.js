const form = document.getElementById('wishForm');
const canvas = document.getElementById('wishCanvas');
const ctx = canvas.getContext('2d');
const downloadBtn = document.getElementById('downloadBtn');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const occasion = document.getElementById('occasion').value;
  const message = document.getElementById('message').value;
  const theme = document.getElementById('theme').value;

  // Draw background
  ctx.fillStyle = theme;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw text
  ctx.fillStyle = '#333';
  ctx.font = '28px serif';
  ctx.fillText(`${occasion} Wishes`, 50, 80);
  ctx.font = '20px serif';
  ctx.fillText(message, 50, 140);
  ctx.fillText(`— ${name}`, 50, 180);
});

downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'wish-image.png';
  link.href = canvas.toDataURL();
  link.click();
});
