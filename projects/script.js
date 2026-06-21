let score = 0;

const scoreElement = document.getElementById("score");
const button = document.getElementById("clickButton");

button.style.position = "absolute";

button.addEventListener("click", () => {
    score++;
    scoreElement.textContent = score;

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    button.style.left = x + "px";
    button.style.top = y + "px";
});