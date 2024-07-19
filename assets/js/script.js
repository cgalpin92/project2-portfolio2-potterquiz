function harryQuiz(){
    let harryQuizPage = document.getElementById('gameArea');
    let harryQuestions = [
        {
            question: "Question 1",
            choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
            correct: 0,
        },
        {
            question: "Question 2",
            choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
            correct: 0,
        },
        {
            question: "Question 3",
            choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
            correct: 0,
        },
        {
            question: "Question 4",
            choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
            correct: 0,
        },
        {
            question: "Question 5",
            choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
            correct: 0,
        },
        {
            question: "Question 6",
            choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
            correct: 0,
        },
        {
            question: "Question 7",
            choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
            correct: 0,
        },
    ];
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
                <button onclick="checkHarryAnswer();">${harryQuestions.choices[0]}</button>
                <button onclick="checkHarryAnswer();">${harryQuestions.choices[1]}</button>
                <button onclick="checkHarryAnswer();">${harryQuestions.choices[2]}</button>
                <button onclick="checkHarryAnswer();">${harryQuestions.choices[3]}</button>       
            </div>
            <p id="feedback"></p>
        `;
    harryHtmlStructure += harryHtmlContent;
    }
    harryQuizPage.innerHTML = harryHtmlStructure;
};

function ronQuiz()

function hermionQuiz()