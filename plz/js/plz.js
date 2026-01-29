$(document).ready(() => {
  $("#input").keyup(() => {
    $.getJSON("server/plz.php", { q: $("#input").val() })
      .done((data) => {

        let output = '';
        if( data[0] !== undefined ) {
          output = data[0].error;
        } else {
          console.log(data);
          output = "<table class='result'>";
          for (i in data) {
            output += '<tr>';
            output += `<td>${data[i].ort}</td>`;
            output += `<td>${data[i].plz}</td>`;
            output += `<td>${data[i].bundesland}</td>`;
            output += '</tr>';
          }
          output += "</table>";

          console.log(output);
        }

        $("#output").html(output);
      });
  });
});