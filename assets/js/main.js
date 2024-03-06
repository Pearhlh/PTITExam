$(document).ready(function () {
  var currentUrl = window.location.href;
  const pageCurrent = currentUrl.split("/").slice(-1)[0].split(".").slice(0)[0];
  $(".nav-link[title]").each(function () {
    var title = $(this).attr("title");
    if (title !== pageCurrent) {
      $(this).addClass("collapsed");
    } else {
      $(this).removeClass("collapsed");
    }
  });
  $(".toggle-sidebar-btn").on("click", function (e) {
    $("body").toggleClass("toggle-sidebar");
  });
  $(".nav-item").on("click", function (e) {
    $(".nav-item").not(this).find(".nav-link").addClass("collapsed");
    $(this).find(".nav-link").removeClass("collapsed");
  });
  const fileName = "/exam.js";
  fetch(fileName)
    .then((response) => response.json())
    .then((additionalData) => {
      // Thêm object vào file exam.js
      console.log(additionalData);
    })
    .catch((error) => console.log(error));
});
