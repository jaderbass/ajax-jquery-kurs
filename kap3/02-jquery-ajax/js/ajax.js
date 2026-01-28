$("#btn").on("click", () => {
  $.getJSON("server/list.php", (data) => {
    render(data);
  });
});

function render(items) {
  $("#output").empty();

  items.forEach(item => {
    $("#output").append(`<p>${item.title}</p>`);
  });
}