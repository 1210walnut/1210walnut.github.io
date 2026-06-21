const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const button = document.getElementById("clickButton");

let score = 0;
let timeLeft = 15;
let gameStarted = false;

button.addEventListener("click", function () {

    if (!gameStarted) {
        gameStarted = true;
        button.textContent = "クリック！";

        const timer = setInterval(function () {

            timeLeft--;
            timeElement.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timer);

                button.disabled = true;

                alert("ゲーム終了！\n記録: " + score + "回");
            }

        }, 1000);

        return;
    }

    score++;
    scoreElement.textContent = score;
});