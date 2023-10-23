const countdown = document.getElementById('countdown');
const questionContainer = document.getElementById('question-container');
const timeUp = document.getElementById('timeup-container');
const tryAgain = document.getElementById('tryagain');

const startingMinutes = 5;
let time = startingMinutes * 60;

const timeInterval = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdown.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (time < 0) {
        timeUp.style = "display: flex";
        countdown.textContent = '0:00'
    }
}, 1000);

tryAgain.addEventListener('click', () => {
    location.reload()
});

class Question {
    constructor(question, image, answers, correctAnswer) {
        this.question = question;
        this.image = image;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
}

const questions = [
    new Question(
        'What does this traffic sign mean?',
        'img1.png',
        ['Turning left or right mandatory.', 'Driving straight ahead prohibited.', 'Warning for a double curve.', 'Passing left or right mandatory.'],
        'Passing left or right mandatory.'
    ),
    new Question(
        'What does this traffic sign mean?',
        'img2.png',
        ['Warning for a bad road surface.', 'Warning for an uncontrolled crossroad.', 'Warning for a speed bump.', 'Begin of a tunnel.'],
        'Warning for a speed bump.'
    ),
    new Question(
        'What does this traffic sign mean?',
        'img3.png',
        ['Vehicles heavier than indicated prohibited.', 'Warning for a movable bridge.', 'Vehicles higher than indicated prohibited.', 'Vehicles longer than indicated prohibited.'],
        'Vehicles higher than indicated prohibited.'
    ),
    new Question(
        'What does this traffic sign mean?',
        'img4.png',
        ['Dead end street.', 'Warning for heavy crosswind.', 'Entry prohibited.', 'Warning for a movable bridge.'],
        'Warning for a movable bridge.'
    ),
    new Question(
        'What does this traffic sign mean?',
        'img5.png',
        ['End of the zone for pedestrians.', 'End of the zone with speed limit.', 'End of the built-up area.', 'End zone where parking is prohibited.'],
        'End of the zone where parking is prohibited.'
    ),
    new Question(
        'What does this traffic sign mean?',
        'img6.png',
        ['Warning for falling rocks.', 'Warning for a soft verge.', 'Cyclists prohibited.', 'Loose chippings on the road.'],
        'Warning for loose chippings on the road surface.'
    ),
    new Question(
        'What does this traffic sign mean?',
        'img7.png',
        ['Shared for pedestrians and cyclists.', 'Divided for pedestrians and cyclists.', 'Pedestrians and cyclists prohibited.', 'Crossing for pedestrians and cyclists.'],
        'Mandatory shared path for pedestrians and cyclists.'
    ),
    new Question(
        'What does this traffic sign mean?',
        'img8.png',
        ['Entry prohibited, except for trams.', 'Warning for trains.', 'Mandatory lane for trams.', 'Warning for trams.'],
        'Warning for trams.'
    ),
    new Question(
        'What does this traffic sign mean?',
        'img9.png',
        ['Defrost front window.', 'Battery.', 'Airbag.', 'Handbrake.'],
        'Handbrake.'
    ),
    new Question(
        'What does this traffic sign mean?',
        'img10.png',
        ['Overtaking prohibited.', 'Parking prohibited.', 'Road with two-way traffic.', 'Driving straight ahead mandatory.'],
        'Driving straight ahead mandatory.'
    )
]

let currentIndex = 0;
let score = 0;

const displayQuestion = () => {
    if (currentIndex < questions.length) {
        const currentQuestion = questions[currentIndex];
        questionContainer.innerHTML =
        `
           <p id="question">${currentQuestion.question}</p>
           <div id="answers-container">
               <img src="${currentQuestion.image}">
               <div id="answers">
                   <label><input type="radio" name="question" value="${currentQuestion.answers[0]}"> ${currentQuestion.answers[0]}</label>
                   <label><input type="radio" name="question" value="${currentQuestion.answers[1]}"> ${currentQuestion.answers[1]}</label>
                   <label><input type="radio" name="question" value="${currentQuestion.answers[2]}"> ${currentQuestion.answers[2]}</label>
                   <label><input type="radio" name="question" value="${currentQuestion.answers[3]}"> ${currentQuestion.answers[3]}</label>
               </div>
           </div>
           <button id="submitBtn"><i class="fa-solid fa-angles-right"></i></button>
        `;

        const submitBtn = document.getElementById('submitBtn');
        submitBtn.addEventListener('click', () => {
            const answer = document.querySelector('input[name="question"]:checked').value;

            if (answer === currentQuestion.correctAnswer) {
                score++;
            }  

            currentIndex++;
            displayQuestion(); 
        });
    } else {
        clearInterval(timeInterval);
        questionContainer.innerHTML = 
        `
            <p id="score-title">Final Score</p>
            <p id="score">${score}/10</p>
        `
    }
}

displayQuestion();