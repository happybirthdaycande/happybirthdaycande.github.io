const anniversaries = {
    "1": "cande",
    "2": "07/07/2020",
    "3": "5",
    "4": "violeta",
    "5": "vernos todos los dias"
    };
    
    function checkAnswer(questionNumber) {
    let inputElement = document.getElementById("answer-input-" + questionNumber);
    let feedbackElement = document.getElementById("feedback-text-" + questionNumber);
    
    if (inputElement.value === anniversaries[questionNumber.toString()]) {
        feedbackElement.innerText = "¡Respuesta correcta!";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.innerText = "Respuesta incorrecta, intenta de nuevo";
        feedbackElement.style.color = "red";
    }
    }
    
    function resetGame() {
    for (let i = 1; i <= 4; i++) {
    let inputElement = document.getElementById("answer-input-" + i);
    let feedbackElement = document.getElementById("feedback-text-" + i);
    
        inputElement.value = "";
        feedbackElement.innerText = "";
    }
    }