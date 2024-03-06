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
        '<input id="answer' + (i + 1) + "-" + (j + 1) + '" class="form-check-input" type="radio" name="q' +
        (i + 1) +
        '" value="a' +
        (j + 1) +
        '">'
      );
      answerElement.append(inputElement);

      var answerLabel = $(
        '<label class="form-check-label" for="answer' + (i + 1) + "-" + (j + 1) + '"></label>'
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
    console.log(formExam.submit());
  });

  // Đồng hồ đếm ngược
  var countdownDate = new Date(); // Thời điểm kết thúc đếm ngược (tùy chỉnh theo nhu cầu)
  countdownDate.setMinutes(countdownDate.getMinutes() + 1); // Ví dụ: 0.5 phút (30 giây)

  var countdownInterval = setInterval(function () {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById('timer').innerHTML = 'Hết giờ';
      submitExam(); // Tự động nộp bài khi hết giờ
    }
  }, 1000);
});

