$(document).on("click", "#htmlButt", function () {
  $("#opis_html").toggle();
   $(this).text(
  $(this).text() === "Więcej informacji" ? "Zwiń informacje" : "Więcej informacji"
  );
});
$(document).on("click", "#cssButt", function () {
  $("#opis_css").toggle();
  $(this).text(
  $(this).text() === "Więcej informacji" ? "Zwiń informacje" : "Więcej informacji"
  );
});
$(document).on("click", "#jsButt", function () {
  $("#opis_js").toggle();
   $(this).text(
  $(this).text() === "Więcej informacji" ? "Zwiń informacje" : "Więcej informacji"
  );
});