/*
====================================
背景に流れる粒子を生成する
====================================
*/

const particleArea =
    document.getElementById("particles");

/*
粒子を100個作る
*/
for (let i = 0; i < 200; i++) {

    const particle =
        document.createElement("div");

    particle.style.position =
        "absolute";

    particle.style.width =
        "3px";

    particle.style.height =
        "3px";

    particle.style.background =
        "cyan";

    particle.style.borderRadius =
        "50%";

    particle.style.left =
        Math.random() * window.innerWidth + "px";

    particle.style.top =
        Math.random() * window.innerHeight + "px";

    particle.style.opacity =
        Math.random();

    particleArea.appendChild(
        particle
    );

    animateParticle(
        particle
    );
}


/*
====================================
粒子を動かす関数
====================================
*/

function animateParticle(particle) {

    let y =
        parseFloat(
            particle.style.top
        );

    setInterval(() => {

        y += 1;

        if (y >
            window.innerHeight) {

            y = 0;
        }

        particle.style.top =
            y + "px";

    }, 20);
}


/*
====================================
スクロールでタイトル演出
====================================
*/

window.addEventListener(
    "scroll",
    () => {

        const title =
            document.getElementById(
                "title"
            );

        title.style.transform =
            `translateY(${
                window.scrollY * 0.3
            }px)`;
    }
);