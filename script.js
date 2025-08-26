//Storing all the questions, options and answer inside an object
const quiz = {
    1: {
        question: "Who won the FIFA World Cup in 2018?",
        options: ["Brazil", "France", "Germany", "Argentina"],
        answer: "France"
    },
    2: {
        question: "Which country has win the most FIFA World Cups?",
        options: ["Brazil", "Germany", "Italy", "Argentina"],
        answer: "Brazil"
    },
    3: {
        question: "Who is known as \"The King of Football\"?",
        options: ["Pele", "Diego Maradona", "Cristiano Ronaldo", "Lionel Messi"],
        answer: "Pele"
    },
    4: {
        question: "Which player has scored the most goals in World Cup history?",
        options: ["Miroslav Klose", "Pele", "Lionel Messi", "Cristiano Ronaldo"],
        answer: "Miroslav Klose"
    },
    5: {
        question: "What country hosted the 2014 FIFA World Cup?",
        options: ["Brazil", "Germany", "South Africa", "Russia"],
        answer: "Brazil"
    },
    6: {
        question: "Which club does Lionel Messi currently play for (2025)?",
        options: ["Barcelona", "Argentina", "Inter Miami", "Manchester City"],
        answer: "Inter Miami"
    },
    7: {
        question: "Which club has won the most UEFA Champions League titles?",
        options: ["Real Madrid", "AC Milan", "Liverpool", "Bayern Munich"],
        answer: "Real Madrid"
    },
    8: {
        question: "Who is the all-time top scorer of the UEFA Champions League titles?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski", "Karim Benzema"],
        answer: "Cristiano Ronaldo"
    },
    9: {
        question: "Which country has never won a World Cup?",
        options: ["France", "Portugal", "Germany", "Spain"],
        answer: "Portugal"
    },
    10: {
        question: "What position does Manuel Neuer play?",
        options: ["Striker", "Midfielder", "Goalkeeper", "Defender"],
        answer: "Goalkeeper"
    }
}

//Varibales for storing scores and current question number

let currentQno = 0;
let scores = 0;

//Accessing start button and division
const start = document.querySelector("button");
const card = document.querySelector("div");

start.addEventListener("click", nextButton)


function nextButton(){
    if (currentQno >= Object.keys(quiz).length){
        const heading = document.createElement("h2");
        heading.textContent = `Score: ${scores}/${currentQno}`;
        heading.classList.add("score");
        card.appendChild(heading)

        //creating restart button
        const restart = document.createElement("button");
        restart.textContent = "Restart Quiz";
        restart.classList.add("restart");
        card.appendChild(restart)
        restart.addEventListener("click", ()=>{
            currentQno = 0;
            scores = 0;
            heading.remove();
            restart.remove();
            nextButton();
        })
        return
    }

    currentQno++;
    //Creating h2 element to display the question
    const heading = document.createElement("h2");
    heading.textContent = quiz[currentQno].question;
    card.appendChild(heading);
    if (start){
        start.remove()
    }

    //Creating input Element for radio buttons
    const correctAnswer = quiz[currentQno].answer
    for (let opt of quiz[currentQno].options){
        const choice = document.createElement("input");
        choice.type = "radio";
        choice.value = opt;
        choice.name = "quiz";
        
        //Creating label to wrap the input 
        const label = document.createElement("label");
        label.appendChild(choice);
        label.append(`   ${opt}`);
        card.appendChild(label);
    }

    //Creating submit button to check
    const submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.classList.add("submit")
    card.appendChild(submit);
    submit.addEventListener("click", ()=>{
        const selected = document.querySelector("input[name=\"quiz\"]:checked")
        const actualAnswer = document.querySelector(`input[value="${correctAnswer}"]`)
        if (!selected){
            return
        }
        if (selected.value == correctAnswer){
            selected.parentElement.style.backgroundColor = "green";
            scores++;
        }else{
            actualAnswer.parentElement.style.backgroundColor = "green";
            selected.parentElement.style.backgroundColor = "red";
        }
        submit.remove()

        //Creating next button
        const next = document.createElement("button");
        next.textContent = "Next";
        next.classList.add("next");
        card.appendChild(next);
        next.addEventListener("click", ()=>{
            heading.remove()
            const allLabel = document.querySelectorAll("label");
            for (let item of allLabel){
                item.remove();
            }
            next.remove()
            nextButton()
        })
    })
}