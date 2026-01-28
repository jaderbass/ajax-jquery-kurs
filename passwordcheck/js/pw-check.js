$(document).ready(() => {
  $('input').on("keypress", (event) => {
    $.get('server/pw-check.php', { q: $('input').val() })
      .done((data) => {
        if (data === 0) {
          $("#securityHints").text("keine Eingabe (" + data + ")");
          $("#progbar").css("width", "0");
        } else if (data <= 10) {
          $("#securityHints").text("unsicher (" + data + ")");
          $("#progbar").animate({
            backgroundColor: "#a00",
            width: data * 10
          }, 500);
        } else if (data <= 20) {
          $("#securityHints").text("mittelmäßig (" + data + ")");
          $("#progbar").animate({
            backgroundColor: "#cc0",
            width: data * 10
          }, 500);
        } else if (data > 20) {
          $("#securityHints").text("stark (" + data + ")");
          $("#progbar").animate({
            backgroundColor: "#6a6",
            width: data * 10
          }, 500);
        }
      }).fail(() => {
        $("#securityHints").html("<p>FEHLER!!!</p>");
      });
  });
});