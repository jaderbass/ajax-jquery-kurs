$(document).ready(() => {
  $("#input").keyup(() => {
    $.getJSON("server/plz.php", { q: $("#input").val() })
      .done((data) => {
        console.log(data);
        let tableData = data;


        let output = "<table class='result'>";

        output += "</table>";
      });
  });
});