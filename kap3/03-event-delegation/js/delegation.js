$("#load").on("click", () => {
  $.getJSON("server/items.php", (items) => {
    // Ausgabe-Liste leeren
    $("#list").empty();

    items.forEach(item => {
      $("#list").append(`
        <button class="item-btn" data-id="${item.id}">
          ${item.name}
        </button>  
      `);
    });
  });
});

$(document).on("click", ".item-btn", function () {
  $("#info").text("Geklickte ID: " + $(this).data("id"));
});