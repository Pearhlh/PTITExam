import { questionOfExam, exams } from "./exam.js";
$(document).ready(function () {
  const formExam = $("#questionContainer");
  const currentUrl = window.location.href;
  const pageCurrent = currentUrl
    .split("/")
    .slice(-1)[0]
    .split("?")
    .slice(-1)[0]
    .split("=")
    .slice(-1)[0];
  const questions = questionOfExam[+pageCurrent - 1];
  var examHeader = exams[+pageCurrent - 1][1];
  const correctAnswers = [];
  for (let question of questions) {
    correctAnswers.push(question.correctAnswer);
  }

  $("#exam-header").text(examHeader);
  var questionContainer = $("#questionContainer");
  var answerBox = $("#answerBox");
  var abHeader = $("#answer-box-header");
  abHeader.text(abHeader.text() + " " + questions.length);

  for (var i = 0; i < questions.length; i++) {
    var questionElement = $('<div class="card-header"></div>');
    questionElement.attr("id", "q" + (i + 1));
    var questionTitle = $("<h2></h2>");
    questionTitle.text("Câu hỏi " + (i + 1) + ":");
    questionElement.append(questionTitle);
    questionContainer.append(questionElement);

    var questionContent = $('<div class="card-body"></div>');
    var questionText = $("<p></p>");
    questionText.text(questions[i].question);
    questionContent.append(questionText);
    questionContainer.append(questionContent);

    for (var j = 0; j < questions[i].answers.length; j++) {
      var answerElement = $('<div class="form-check"></div>');

      var inputElement = $(
        '<input id="answer' +
          (i + 1) +
          "-" +
          (j + 1) +
          '" class="form-check-input" type="radio" name="q' +
          (i + 1) +
          '" value="a' +
          (j + 1) +
          '">'
      );
      answerElement.append(inputElement);

      var answerLabel = $(
        '<label class="form-check-label" for="answer' +
          (i + 1) +
          "-" +
          (j + 1) +
          '"></label>'
      );
      answerLabel.text(questions[i].answers[j]);
      answerElement.append(answerLabel);

      questionContent.append(answerElement);
    }

    var answerLink = $('<a href="#q' + (i + 1) + '">' + (i + 1) + "</a>");

    // Add link to answer cell
    var cell = $('<div id="cell' + (i + 1) + '" class="answer-cell"></div>');
    cell.append(answerLink);
    answerBox.append(cell);

    $("input[name=q" + (i + 1) + "]").on("change", function () {
      var cell = $("#cell" + this.name.slice(1));
      if (cell.length > 0) {
        cell.css("background-color", "rgba(128, 128, 128, 0.55)");
      } else {
        console.log("not found " + "cell" + (i + 1));
      }
    });
  }
  $(".button_submit").on("click", function () {
    const userAnswers = formExam.serialize().split("&");
    let userCorrectAnswer = 0;
    let detailExam = {};
    const detailAnswers = [];
    for (let index in correctAnswers) {
      if (userAnswers.indexOf(correctAnswers[index]) != -1) {
        userCorrectAnswer++;
        detailAnswers.push([index, "true"]);
      } else {
        detailAnswers.push([index, "false"]);
      }
    }
    const examLocal = JSON.parse(localStorage.getItem("exam")) || [];
    const examTmp = [...examLocal];
    detailExam = {
      name: examHeader,
      detailAnswers,
      correctNumber: userCorrectAnswer,
      pass: userCorrectAnswer >= 5 ? "Đạt" : "Không đạt",
    };
    examTmp.push(detailExam);
    localStorage.setItem("exam", JSON.stringify(examTmp));
    window.location.href = `ketqua.html`;
  });

  // Đồng hồ đếm ngược
  let workTime = 25;
  let breakTime = 5;
  let seconds = "00";

  $("#minutes").text(workTime);
  $("#seconds").text(seconds);

  (function start() {
    seconds = 59;
    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;
    let breakCount = 0;

    let timerFunction = function () {
      $("#minutes").text(workMinutes);
      $("#seconds").text(seconds);

      seconds = seconds - 1;

      if (seconds === 0) {
        workMinutes = workMinutes - 1;
        if (workMinutes === -1) {
          if (breakCount % 2 === 0) {
            workMinutes = breakMinutes;
            breakCount++;
          } else {
            workMinutes = workTime;
            breakCount++;
          }
        }
        seconds = 59;
      }
    };

    setInterval(timerFunction, 1000);
  })();
});
