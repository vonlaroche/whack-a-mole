const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const button = document.querySelector("button");
const totalTime = 10000;



let startGame = () => {
    let score = 0;
    let gameOver = false;
    button.disabled = true;

    let showMole = () => {
        let randIndex = Math.floor(Math.random() * holes.length);
        let randTime = Math.floor(Math.random() * 1800) + 200; // random number between 200 and 2000
        holes[randIndex].classList.add("up");

        moles[randIndex].onclick = () => {
            score += 1;
            scoreBoard.textContent = score;
            holes[randIndex].classList.remove("up");
            moles[randIndex].onclick = null;
        }

        setTimeout(() => {
            holes[randIndex].classList.remove("up");

            if (!gameOver) {
                showMole();
            }
        }, randTime);

    }

    showMole();

    setTimeout(() => {
        gameOver = true;
        button.disabled = false;
        holes.forEach(hole => hole.classList.remove("up"));

    }, totalTime)

}