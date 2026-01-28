// Da es die Buttons erst nach dem Laden gibt,
// Nutzen wir Event-Delegation
$(document).on("click", ".item-btn", function() {
  const id = $(this).data("id");
  loadDetails(id);
});

function loadDetails(id) {
  $.getJSON("server/detail.php", { id }, function(data) {
    renderDetails(data);
  });
}

function renderDetails(data) {
  if(data.error) {
    $("#details").html("Keine Details gefunden");
    return;
  }

  $("#details").html(`
    <h3>${data.title}</h3>  
    <p>${data.description}</p>
  `);
}