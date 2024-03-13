const questionOfExam = [
  [
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
  ],
  [
    {
      question: "Trí tuệ nhân tạo (AI) là gì?",
      answers: [
        "Một ngành nghiên cứu về việc lập trình máy tính để có khả năng tự học và thực hiện các tác vụ thông minh.",
        "Một phương pháp giảng dạy cho máy tính",
        "Một cách để biểu diễn thông tin bằng các ký hiệu và quy tắc",
        "Một thuật toán để tìm kiếm thông tin trên Internet",
      ],
      correctAnswer: "q1=a1",
    },
    {
      question:
        "Ngôn ngữ lập trình phổ biến trong lĩnh vực Trí tuệ nhân tạo là gì?",
      answers: ["Java", "Python", "C++", "Ruby"],
      correctAnswer: "q2=a2",
    },
    {
      question:
        "Công nghệ nào được sử dụng để huấn luyện mạng nơ-ron sâu rộng (deep neural networks)?",
      answers: [
        "Machine Learning",
        "Natural Language Processing",
        "Reinforcement Learning",
        "Backpropagation",
      ],
      correctAnswer: "q3=a4",
    },
    {
      question:
        "Loại học tăng cường nào dựa trên việc thử và sai để cải thiện hiệu suất của hệ thống?",
      answers: ["Học máy", "Học sâu", "Học tăng cường", "Học bán giám sát"],
      correctAnswer: "q4=a3",
    },
    {
      question:
        "Trong Trí tuệ nhân tạo, học máy giúp máy tính học từ dữ liệu mẫu để làm gì?",
      answers: [
        "Phân loại dữ liệu",
        "Tính toán số học",
        "Lập trình ứng dụng",
        "Tạo ra hình ảnh sống động",
      ],
      correctAnswer: "q5=a1",
    },
    {
      question: "Ứng dụng của Trí tuệ nhân tạo không bao gồm:",
      answers: [
        "Xử lý ngôn ngữ tự nhiên",
        "Nhận dạng hình ảnh",
        "Tự động lái xe",
        "Quản lý tài chính",
      ],
      correctAnswer: "q6=a4",
    },
    {
      question:
        "Trí tuệ nhân tạo mô phỏng sự thông minh của con người. Đúng hay sai?",
      answers: ["Đúng", "Sai"],
      correctAnswer: "q7=a1",
    },
    {
      question: "Trí tuệ nhân tạo có thể được chia thành các loại là:",
      answers: [
        "Học máy, Học sâu, Học tăng cường",
        "Big Data, Blockchain, Cloud Computing",
        "Robotics, Internet of Things, Virtual Reality",
        "Database, Networking, Security",
      ],
      correctAnswer: "q8=a1",
    },
    {
      question: "Nguyên tắc của Trí tuệ nhân tạo không bao gồm:",
      answers: ["Tự động hóa", "Tự học", "Tư duy logic", "Tương tác con người"],
      correctAnswer: "q9=a3",
    },
    {
      question:
        "Trí tuệ nhân tạo có thể gây ra các vấn đề đạo đức và định chính. Đúng hay sai?",
      answers: ["Đúng", "Sai"],
      correctAnswer: "q10=a1",
    },
  ],
  [
    {
      question: "Cấu trúc dữ liệu là gì?",
      answers: [
        "Cách tổ chức và lưu trữ dữ liệu trong máy tính",
        "Ngôn ngữ lập trình phổ biến",
        "Phương pháp xác định lỗi trong chương trình",
        "Thuật toán sắp xếp dữ liệu",
      ],
      correctAnswer: "q1=a1",
    },
    {
      question:
        "Cấu trúc dữ liệu nào được sử dụng để lưu trữ dữ liệu theo thứ tự vào và ra?",
      answers: ["Stack", "Queue", "Linked List", "Tree"],
      correctAnswer: "q2=a2",
    },
    {
      question: "Thuật toán tìm kiếm nào sử dụng phương pháp chia để trị?",
      answers: [
        "Linear Search",
        "Binary Search",
        "Depth-First Search",
        "Breadth-First Search",
      ],
      correctAnswer: "q3=a2",
    },
    {
      question:
        "Cấu trúc dữ liệu nào được sử dụng để tìm kiếm nhanh trong dữ liệu không thứ tự?",
      answers: ["Stack", "Queue", "Heap", "Hash Table"],
      correctAnswer: "q4=a4",
    },
    {
      question:
        "Thuật toán sắp xếp nào có độ phức tạp thời gian tốt nhất là O(n log n)?",
      answers: [
        "Insertion Sort",
        "Selection Sort",
        "Merge Sort",
        "Bubble Sort",
      ],
      correctAnswer: "q5=a3",
    },
    {
      question:
        "Cấu trúc dữ liệu nào được sử dụng để lưu trữ dữ liệu theo cấu trúc cây?",
      answers: ["Stack", "Queue", "Linked List", "Tree"],
      correctAnswer: "q6=a4",
    },
    {
      question:
        "Thuật toán sắp xếp nào sử dụng phương pháp hoán đổi trực tiếp?",
      answers: ["Insertion Sort", "Selection Sort", "Quick Sort", "Merge Sort"],
      correctAnswer: "q7=a2",
    },
    {
      question:
        "Cấu trúc dữ liệu nào được sử dụng để tìm kiếm nhanh trong dữ liệu có thứ tự?",
      answers: ["Stack", "Queue", "Heap", "Binary Search Tree"],
      correctAnswer: "q8=a4",
    },
    {
      question:
        "Thuật toán sắp xếp nào có độ phức tạp thời gian tệ nhất là O(n^2)?",
      answers: [
        "Insertion Sort",
        "Selection Sort",
        "Merge Sort",
        "Bubble Sort",
      ],
      correctAnswer: "q9=a4",
    },
    {
      question:
        "Cấu trúc dữ liệu nào được sử dụng để lưu trữ dữ liệu theo ngăn xếp?",
      answers: ["Stack", "Queue", "Linked List", "Tree"],
      correctAnswer: "q10=a1",
    },
  ],
  [
    {
      question: "C++ là một ngôn ngữ lập trình thuộc loại nào?",
      answers: [
        "Ngôn ngữ lập trình hướng đối tượng",
        "Ngôn ngữ lập trình hướng thủ tục",
        "Ngôn ngữ lập trình hỗn hợp",
      ],
      correctAnswer: "q1=a1",
    },
    {
      question: "Cú pháp để khai báo một biến trong C++ là gì?",
      answers: ["var", "let", "int", "string"],
      correctAnswer: "q2=a3",
    },
    {
      question: "C++ được phát triển lần đầu bởi ai?",
      answers: [
        "Bjarne Stroustrup",
        "Dennis Ritchie",
        "Guido van Rossum",
        "Linus Torvalds",
      ],
      correctAnswer: "q3=a1",
    },
    {
      question: "Đâu là cú pháp chính xác để khai báo hàm trong C++?",
      answers: [
        "function myFunction()",
        "def myFunction()",
        "void myFunction()",
        "sub myFunction()",
      ],
      correctAnswer: "q4=a3",
    },
    {
      question:
        "Trong C++, câu lệnh nào được sử dụng để in ra dữ liệu trên màn hình?",
      answers: ["print()", "cout <<", "console.log()", "printf()"],
      correctAnswer: "q5=a2",
    },
    {
      question: "C++ có hỗ trợ xử lý đa luồng (multi-threading) không?",
      answers: ["Có", "Không"],
      correctAnswer: "q6=a1",
    },
    {
      question: "C++ có cơ chế xử lý ngoại lệ (exception handling) không?",
      answers: ["Có", "Không"],
      correctAnswer: "q7=a1",
    },
    {
      question: "Cú pháp để tạo một đối tượng trong C++ là gì?",
      answers: [
        "create Object;",
        "Object myObject;",
        "Object.create();",
        "new Object();",
      ],
      correctAnswer: "q8=a2",
    },
    {
      question: "C++ hỗ trợ việc kế thừa đa cấp (multiple inheritance) không?",
      answers: ["Có", "Không"],
      correctAnswer: "q9=a1",
    },
    {
      question:
        "Để xóa một đối tượng đã được cấp phát động trong C++, ta sử dụng từ khóa nào?",
      answers: ["delete", "remove", "free", "destroy"],
      correctAnswer: "q10=a1",
    },
  ],
];
const exams = [
  ["1", "Nhập môn lập trình", "10:00", "11:00", "Tham gia tự do", "Đạt"],
  ["2", "Trí tuệ nhân tạo", "12:00", "14:00", "Tham gia tự do", "Đạt"],
  [
    "3",
    "Cấu trúc dữ liệu và giải thuật",
    "16:00",
    "18:00",
    "Tham gia tự do",
    "Đạt",
  ],
  ["4", "Lập trình C++", "10:00", "14:00", "Tham gia tự do", "Đạt"],
];
export { questionOfExam, exams };
