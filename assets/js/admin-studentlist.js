const students = [
    ['B21DCCN395', 'Tống Việt Hoàng', 'E21CQCN03-B', '5', '5', '9.1'],
    ['B21DCVT225', 'Lê Gia Huy', 'E21CQCN03-B', '3', '3', '8.6'],
    ['B21DCAT021', 'Mai Xuân An', 'E21CQCN03-B', '4', '3', '8.1'],
    ['B21DCVT188', 'Đậu Quang Hiếu', 'E21CQCN03-B', '4', '4', '8.3'],

]
import { exams } from "./exam.js";
$(document).ready(function () {
    var table = $("#myTable").DataTable({
        language: {
            search: "Tìm kiếm",
            lengthMenu: "Hiển thị _MENU_ sinh viên mỗi trang",
            info: "Hiển thị từ _START_ đến _END_ của _TOTAL_ sinh viên",
            infoEmpty: "Không có sinh viên nào",
            infoFiltered: "(lọc từ _MAX_ sinh viên tất cả)",
            zeroRecords: "Không tìm thấy sinh viên nào",
            paginate: {
                first: "Đầu tiên",
                last: "Cuối cùng",
            },
        },
        columns: [
            { width: "12%" },
            { width: "20%" },
            { width: "12%" },
            { width: "10%" },
            { width: "15%" },
            { width: "15%" },
            { width: "15%" },
        ],
        lengthMenu: [
            [5, 10, 20, -1],
            [5, 10, 20, "Tất cả"],
        ],
    });
    for (var i = 0; i < students.length; i++) {
        table.row.add([...students[i], ...['<button class="view-student-info" data-bs-toggle="modal" data-bs-target="#student-info-modal">xem</button>']]);
    }
    table.draw();
    $("#statusFilter").on("change", function () {
        table.columns(4).search(this.value).draw();
    });
});
