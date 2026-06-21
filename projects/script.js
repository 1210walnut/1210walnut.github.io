let score = 0;
let timeLeft = 15;
let gameStarted = false;
let timer;

const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const button = document.getElementById("clickButton");

button.addEventListener("click", () => {

    // 初回クリックでゲーム開始
    if (!gameStarted) {
        gameStarted = true;
        button.textContent = "クリック！";

        timer = setInterval(() => {
            timeLeft--;
            timeElement.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timer);

                button.disabled = true;
                button.textContent = "終了";

                alert(`ゲーム終了！\n記録: ${score}回`);
            }
        }, 1000);

        return;
    }

    // ゲーム中のクリック
    score++;
    scoreElement.textContent = score;
});