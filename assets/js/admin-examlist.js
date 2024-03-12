// Biến đếm để đảm bảo các id của câu hỏi là duy nhất
let questionCount = 1;

function addQuestionForm(questionContent, answers, correctAnswer) {
    // Tạo một form mới cho câu hỏi
    const questionForm = document.createElement('div');
    questionForm.classList.add('question-form', 'mb-3');
    questionForm.id = 'questionForm' + questionCount;
    const title = document.createElement('h4');
    title.textContent = 'Câu hỏi ' + questionCount + ": ";
    questionForm.appendChild(title);

    // Tạo input cho nội dung câu hỏi
    const questionInput = createTextInput('Nội dung câu hỏi', 'question');
    if (questionContent) questionInput.value = questionContent
    questionForm.appendChild(questionInput);


    // Tạo input cho 4 phương án lựa chọn
    for (let i = 0; i < 4; i++) {
        const optionInput = createTextInput('Phương án ' + (i + 1), 'option' + (i + 1));
        if (answers) optionInput.value = answers[i];
        questionForm.appendChild(optionInput);
    }


    // Tạo input cho đáp án đúng
    const correctAnswerInput = createTextInput('Đáp án đúng (số từ 1 đến 4)', 'correctAnswer');
    if (correctAnswer) correctAnswerInput.value = correctAnswer;
    questionForm.appendChild(correctAnswerInput);

    // Tạo button để xóa câu hỏi
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.classList.add('btn', 'btn-danger', 'mb-2');
    deleteButton.textContent = 'Xóa Câu Hỏi';
    deleteButton.addEventListener('click', function () {
        questionForm.remove();
        questionCount--;
    });
    questionForm.appendChild(deleteButton);

    // Thêm form câu hỏi vào container
    document.getElementById('examForm').appendChild(questionForm);

    // Tăng biến đếm
    questionCount++;
    console.log('ok');
}

// Hàm tạo input text
function createTextInput(placeholder, name) {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = placeholder;
    input.classList.add('form-control', 'mb-2');
    input.name = name;
    return input;
}

// Hàm đọc file Excel
function readExcelFile() {
    var fileInput = document.getElementById('excelFile');
    var file = fileInput.files[0];

    if (file) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var data = new Uint8Array(e.target.result);
            var workbook = XLSX.read(data, { type: 'array' });

            // Lấy dữ liệu từ workbook
            var firstSheetName = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[firstSheetName];
            var jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            // Hiển thị dữ liệu trong console
            console.log(jsonData);
            processExcelData(jsonData);
        };

        reader.readAsArrayBuffer(file);

    } else {
        alert('Vui lòng chọn một file Excel.');
    }
}

function processExcelData(jsonData) {
    // Xử lý dữ liệu từ jsonData và thêm câu hỏi vào form
    for (var i = 1; i < jsonData.length; i++) {
        var questionContent = jsonData[i][0]; // Dòng i, cột 0 là nội dung câu hỏi
        var answers = [
            jsonData[i][1], // Dòng i, cột 1 là phương án 1
            jsonData[i][2], // Dòng i, cột 2 là phương án 2
            jsonData[i][3], // Dòng i, cột 3 là phương án 3
            jsonData[i][4]  // Dòng i, cột 4 là phương án 4
        ];
        var correctAnswer = jsonData[i][5]; // Dòng i, cột 5 là đáp án đúng
        console.log(answers);
        // Tạo câu hỏi và thêm vào form sử dụng hàm addQuestionForm()
        addQuestionForm(questionContent, answers, correctAnswer);
    }
}