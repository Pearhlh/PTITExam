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
    columns: [{ width: "60%" }, { width: "20%" }, { width: "20%" }],
    lengthMenu: [
      [5, 10, 20, -1],
      [5, 10, 20, "Tất cả"],
    ],
  });
  const examLocals = JSON.parse(localStorage.getItem("exam"));
  const exams = [];
  for (let examLocal of examLocals) {
    exams.push([examLocal.name, examLocal.correctNumber, examLocal.pass]);
  }
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
