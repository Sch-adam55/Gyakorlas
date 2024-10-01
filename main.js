import './style.css'

let num1 = Math.floor(Math.random() * 100) + 1;
let num2 = Math.floor(Math.random() * 100) + 1;
let correctAnswer = num1 + num2;


document.getElementById("equation").innerText = `${num1} + ${num2} = [    ]`;

function checkAnswer() {
    const userAnswer = Number(document.getElementById("answerInput").value);
    const messageElement = document.getElementById("message");

    if (userAnswer === correctAnswer) {
        document.body.style.backgroundColor = "green";
        messageElement.innerText = "Helyes válasz!";
    } else {
        document.body.style.backgroundColor = "red";
        messageElement.innerText = "Helytelen válasz, próbáld újra!";
    }
}

document.getElementById("ellenorzes").addEventListener('click', checkAnswer)
