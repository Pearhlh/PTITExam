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

  const user = JSON.parse(localStorage.getItem("user"));
  $(".name_user").text(user.username);
  $(".profile").find(".dropdown-header").html(`<h>${user.username}</h>`);
  $(".button_signout").on("click", () => {
    localStorage.removeItem("user");
    window.location.href = "index.html";
  });
});
