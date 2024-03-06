var questions = [
    {
        question: 'Đâu là ngôn ngữ lập trình phổ biến nhất?',
        answers: ['Python', 'JavaScript', 'Java', 'C++'],
        correctAnswer: 'JavaScript'
    },
    {
        question: 'Trình duyệt web phổ biến nhất hiện nay là gì?',
        answers: ['Google Chrome', 'Mozilla Firefox', 'Microsoft Edge'],
        correctAnswer: 'Google Chrome'
    },
    {
        question: 'Hệ điều hành Android là của công ty nào?',
        answers: ['Apple', 'Google', 'Microsoft'],
        correctAnswer: 'Google'
    },
    {
        question: 'Ngôn ngữ đánh dấu được sử dụng để tạo nội dung website là gì?',
        answers: ['HTML', 'CSS', 'JavaScript'],
        correctAnswer: 'HTML'
    },
    {
        question: 'Trong lập trình, "API" viết tắt của cụm từ gì?',
        answers: ['Application Programming Interface', 'Advanced Programming Interface', 'Application Protocol Interface'],
        correctAnswer: 'Application Programming Interface'
    },
    {
        question: 'Đâu là một kiểu dữ liệu trong ngôn ngữ lập trình JavaScript?',
        answers: ['String', 'Boolean', 'Integer'],
        correctAnswer: 'String'
    },
    {
        question: 'Hàm console.log() được sử dụng để làm gì trong JavaScript?',
        answers: ['Hiển thị thông báo lỗi', 'In ra giá trị của biến trong console', 'Thực thi một hành động nhất định'],
        correctAnswer: 'In ra giá trị của biến trong console'
    },
    {
        question: 'Đâu là một phần tử block-level trong HTML?',
        answers: ['span', 'div', 'a'],
        correctAnswer: 'div'
    },
    {
        question: 'CSS viết tắt của cụm từ gì?',
        answers: ['Cascading Style Sheet', 'Creative Style Sheets', 'Computer Style Sheets'],
        correctAnswer: 'Cascading Style Sheet'
    },
    {
        question: 'Đâu là thuộc tính để thay đổi kích thước chữ của một phần tử trong CSS?',
        answers: ['font-size', 'text-size', 'font-style'],
        correctAnswer: 'font-size'
    },
    // Thêm các câu hỏi khác tại đây
];


userAnswers = JSON.parse(localStorage.getItem('userAnswers'));

document.addEventListener("DOMContentLoaded", function () {
    const resultElement = document.getElementById("result");
    const scoreElement = document.getElementById("score");
    const reviewBtn = document.getElementById("reviewBtn");
    const reviewSection = document.getElementById("reviewSection");

    let correctCount = 0;
    for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] === questions[i].correctAnswer) {
            correctCount++;
        }
    }

    // Display result and score
    resultElement.textContent = `Bạn đã làm đúng ${correctCount} trên tổng số ${questions.length} câu.`;
    scoreElement.textContent = `Số điểm đạt được: ${((correctCount / questions.length) * 10).toFixed(2)}`;

    // Display review section
    reviewBtn.addEventListener("click", function () {
        reviewSection.classList.remove("hidden");
        displayReview();
    });
});

var questionContainer = document.getElementById('questionContainer');

for (var i = 0; i < questions.length; i++) {

    var questionElement = document.createElement('div');
    questionElement.className = 'card-header';
    questionElement.id = 'q' + (i + 1);
    var questionTitle = document.createElement('h2');
    questionTitle.textContent = 'Câu hỏi ' + (i + 1) + ':';
    questionElement.appendChild(questionTitle);
    questionContainer.appendChild(questionElement);

    var questionContent = document.createElement('div');
    questionContent.className = 'card-body';
    var questionText = document.createElement('p');
    questionText.textContent = questions[i].question;
    questionContent.appendChild(questionText);
    questionContainer.appendChild(questionContent);

    for (var j = 0; j < questions[i].answers.length; j++) {
        var answerElement = document.createElement('div');
        answerElement.className = 'form-check';

        var inputElement = document.createElement('input');
        inputElement.className = 'form-check-input';
        inputElement.type = 'radio';
        inputElement.name = 'q' + (i + 1);
        inputElement.value = 'a' + (j + 1);
        inputElement.disabled = true;
        answerElement.appendChild(inputElement);


        var answerLabel = document.createElement('label');
        answerLabel.className = 'form-check-label';
        answerLabel.htmlFor = 'answer' + (j + 1);
        answerLabel.textContent = questions[i].answers[j];
        answerElement.appendChild(answerLabel);

        if (questions[i].answers[j] === userAnswers[i]) {
            inputElement.checked = true;
            if (questions[i].correctAnswer !== userAnswers[i]) {
                answerLabel.style.color = "red";
            }
        }

        if (questions[i].answers[j] === questions[i].correctAnswer) {
            answerLabel.style.color = "green";
        }

        questionContent.appendChild(answerElement);
    }
}