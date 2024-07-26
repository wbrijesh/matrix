const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const texts =
  "1234567890!@#$%^&*()_+[]{};':,.<>?/|~`±§QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'";

const fontSize = 16;

const columnCount = canvas.width / fontSize;

const yAxisPositions = [];

for (let x = 0; x < columnCount; x++) {
  yAxisPositions[x] = 0;
}

const draw = () => {
  context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#0f0";
  context.font = `${fontSize}px monospace`;

  for (let x = 0; x < yAxisPositions.length; x++) {
    const randomCharacter = texts[Math.floor(Math.random() * texts.length)];
    context.fillText(
      randomCharacter,
      x * fontSize,
      yAxisPositions[x] * fontSize,
    );
    if (yAxisPositions[x] * fontSize > canvas.height && Math.random() > 0.975) {
      yAxisPositions[x] = 0;
    }
    yAxisPositions[x]++;
  }
};

setInterval(draw, 100);
