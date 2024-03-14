const exams = [
  ["1", "Nhập môn lập trình", "10:00", "11:00", "Tham gia tự do", "Đạt"],
  [
    "2",
    "Cấu trúc dữ liệu và giải thuật",
    "12:00",
    "14:00",
    "Tham gia tự do",
    "Đạt",
  ],
  ["3", "Nhập môn trí tuệ nhân tạo", "16:00", "18:00", "Tham gia tự do", "Đạt"],
  ["4", "Lập trình C++", "10:00", "14:00", "Tham gia tự do", "Đạt"],
];

$(document).ready(function () {
  var table = $("#examTable").DataTable({
    language: {
      search: "Tìm kiếm",
      lengthMenu: "Hiển thị _MENU_ bài thi mỗi trang",
      info: "Hiển thị từ _START_ đến _END_ của _TOTAL_ bài thi",
      infoEmpty: "Không có bài thi nào",
      infoFiltered: "(lọc từ _MAX_ bài thi tất cả)",
      zeroRecords: "Không tìm thấy bài thi nào",
      paginate: {
        first: "Đầu tiên",
        last: "Cuối cùng",
      },
    },
    columns: [
      { width: "5%" },
      { width: "20%" },
      { width: "20%" },
      { width: "20%" },
      { width: "20%" },
      { width: "20%" },
    ],
    lengthMenu: [
      [5, 10, 20, -1],
      [5, 10, 20, "Tất cả"],
    ],
  });
  for (var i = 0; i < exams.length; i++) {
    table.row.add(exams[i]);
  }
  table.draw();
  $("#statusFilter").on("change", function () {
    table.columns(4).search(this.value).draw();
  });
  $("#myTable")
    .find("tbody")
    .find("tr")
    .on("click", function () {
      var id = $(this).find("td").first().text();
      window.location.href = `baithi.html?id=${id}`;
    });
});
