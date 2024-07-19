let harryQuestions = [
    {
        question: "Question 1",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        correct: "Choice 1",
    },
    {
        question: "Question 2",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        correct: "Choice 2",
    },
    {
        question: "Question 3",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        correct: "Choice 3",
    },
    {
        question: "Question 4",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        correct: "Choice 4",
    },
    {
        question: "Question 5",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        correct: "Choice 4",
    },
    {
        question: "Question 6",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        correct: "Choice 4",
    },
    {
        question: "Question 7",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        correct: "Choice 4",
    },
];

function harryQuiz(){
    let harryQuizPage = document.getElementById('gameArea');
    
    let harryHtmlStructure = `
        <div>
            <h3></h3>
        </div>
    `;
    for (harryQuestions of harryQuestions){
        let harryHtmlContent = `
            <div class = "harry">
                <h3>${harryQuestions.question}</h3>
            </div>
            <div>
                <button onclick="checkHarryAnswer(0);">${harryQuestions.choices[0]}</button>
                <button onclick="checkHarryAnswer(1);">${harryQuestions.choices[1]}</button>
                <button onclick="checkHarryAnswer(2);">${harryQuestions.choices[2]}</button>
                <button onclick="checkHarryAnswer(3);">${harryQuestions.choices[3]}</button>       
            </div>
            <div id="feedback"></div>
        `;
        
    harryHtmlStructure += harryHtmlContent;
    };
    harryQuizPage.innerHTML = harryHtmlStructure;
};


function ronQuiz(){

}

function hermionQuiz(){

}