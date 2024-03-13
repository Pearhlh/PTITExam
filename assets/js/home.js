import { exams } from "./exam.js";
$(document).ready(function () {
  var table = $("#myTable").DataTable({
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
      { width: "30%" },
      { width: "15%" },
      { width: "15%" },
      { width: "25%" },
      { width: "25%" },
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
