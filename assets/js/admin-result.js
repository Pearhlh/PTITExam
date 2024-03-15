var questions = [
  {
    question: "Đâu là ngôn ngữ lập trình phổ biến nhất?",
    answers: ["Python", "JavaScript", "Java", "C++"],
    correctAnswer: "q1=a2",
  },
  {
    question: "Trình duyệt web phổ biến nhất hiện nay là gì?",
    answers: ["Google Chrome", "Mozilla Firefox", "Microsoft Edge"],
    correctAnswer: "q2=a1",
  },
  {
    question: "Hệ điều hành Android là của công ty nào?",
    answers: ["Apple", "Google", "Microsoft"],
    correctAnswer: "q3=a2",
  },
  {
    question: "Ngôn ngữ đánh dấu được sử dụng để tạo nội dung website là gì?",
    answers: ["HTML", "CSS", "JavaScript"],
    correctAnswer: "q4=a1",
  },
  {
    question: 'Trong lập trình, "API" viết tắt của cụm từ gì?',
    answers: [
      "Application Programming Interface",
      "Advanced Programming Interface",
      "Application Protocol Interface",
    ],
    correctAnswer: "q5=a1",
  },
  {
    question: "Đâu là một kiểu dữ liệu trong ngôn ngữ lập trình JavaScript?",
    answers: ["String", "Boolean", "Integer"],
    correctAnswer: "q6=a1",
  },
  {
    question: "Hàm console.log() được sử dụng để làm gì trong JavaScript?",
    answers: [
      "Hiển thị thông báo lỗi",
      "In ra giá trị của biến trong console",
      "Thực thi một hành động nhất định",
    ],
    correctAnswer: "q7=a2",
  },
  {
    question: "Đâu là một phần tử block-level trong HTML?",
    answers: ["span", "div", "a"],
    correctAnswer: "q8=a2",
  },
  {
    question: "CSS viết tắt của cụm từ gì?",
    answers: [
      "Cascading Style Sheet",
      "Creative Style Sheets",
      "Computer Style Sheets",
    ],
    correctAnswer: "q9=a1",
  },
  {
    question:
      "Đâu là thuộc tính để thay đổi kích thước chữ của một phần tử trong CSS?",
    answers: ["font-size", "text-size", "font-style"],
    correctAnswer: "q10=a1",
  },
];

const userAnswers = [
  "q1=a2",
  "q2=a2",
  "q3=a2",
  "q4=a1",
  "q5=a1",
  "q6=a1",
  "q7=a2",
  "q8=a2",
  "q9=a1",
  "q10=a1",
];

document.addEventListener("DOMContentLoaded", function () {
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  const reviewBtn = document.getElementById("reviewBtn");
  const reviewSection = document.querySelector(".examSection");

  let correctCount = 0;
  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].correctAnswer) {
      correctCount++;
    }
  }

  // Display result and score
  resultElement.textContent = `Bạn đã làm đúng ${correctCount} trên tổng số ${questions.length} câu.`;
  scoreElement.textContent = `Số điểm đạt được: ${(
    (correctCount / questions.length) *
    10
  ).toFixed(2)}`;

  // Display review section
  reviewBtn.addEventListener("click", function () {
    reviewSection.classList.toggle("hidden");
  });
});

var questionContainer = document.getElementById("questionContainer");

for (var i = 0; i < questions.length; i++) {
  var questionElement = document.createElement("div");
  questionElement.className = "card-header";
  questionElement.id = "q" + (i + 1);
  var questionTitle = document.createElement("h2");
  questionTitle.textContent =
    "Câu hỏi " + (i + 1) + ": " + questions[i].question;
  questionElement.appendChild(questionTitle);
  questionContainer.appendChild(questionElement);

  var questionContent = document.createElement("div");
  questionContent.className = "card-body";
  // var questionText = document.createElement("p");
  // questionText.textContent = questions[i].question;
  // questionContent.appendChild(questionText);
  questionContainer.appendChild(questionContent);

  for (var j = 0; j < questions[i].answers.length; j++) {
    var answerElement = document.createElement("div");
    answerElement.className = "form-check";

    var inputElement = document.createElement("input");
    inputElement.className = "form-check-input";
    inputElement.type = "radio";
    inputElement.name = "q" + (i + 1);
    inputElement.value = "a" + (j + 1);
    inputElement.disabled = true;
    answerElement.appendChild(inputElement);

    var answerLabel = document.createElement("label");
    answerLabel.className = "form-check-label";
    answerLabel.htmlFor = "answer" + (j + 1);
    answerLabel.textContent = questions[i].answers[j];
    answerElement.appendChild(answerLabel);
    if ("q" + (i + 1) + "=a" + (j + 1) === userAnswers[i]) {
      inputElement.checked = true;
      console.log(userAnswers[i]);

      if (questions[i].correctAnswer !== userAnswers[i]) {
        answerLabel.style.color = "rgba(214, 20, 10, 0.8431372549)";
      }
    }

    if ("q" + (i + 1) + "=a" + (j + 1) === questions[i].correctAnswer) {
      answerLabel.style.color = "rgba(8, 205, 8,1)";
    }

    questionContent.appendChild(answerElement);
  }
}
