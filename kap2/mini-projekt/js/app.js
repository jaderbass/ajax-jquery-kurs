// app.js
$(document).ready(function() {
  $('#searchButton').click(function() {
    $.ajax({
      url: 'server/books.json',
      type: 'GET',
      dataType: 'json',
      q: $('#searchInput').val(),
      success: function(data, textStatus, xhr) {
        const resultsDiv = $('#resultsContainer');
        resultsDiv.empty(); // Vorherige Ergebnisse löschen
        resultsDiv.append('<p>Lade...</p>');
        setTimeout(() => {
          resultsDiv.empty(); // Ladeanzeige entfernen
          showBooks(data, $('#searchInput').val(), xhr);
        } , 500); // Simuliere Ladezeit
      },
      error: function(xhr, status, error) {
        const hint = $('#msg');
        switch(status) {
          case 404:
            hint.text('Die angeforderte Datei wurde nicht gefunden (404).');
            break;
          case 403:
            hint.text('Zugriff verweigert (403).');
            break;
          case 500:
            hint.text('Interner Serverfehler (500).');
            break;
          default:
            hint.text('JSON kaputt');
        }
      }
    });
  });
});

function showBooks(books, query, xhr) {
  const resultsDiv = $('#resultsContainer');
  const ul = $('<ul>');
  const hint = $('#msg');
  let resLength = books.length;

  resultsDiv.empty(); // Vorherige Ergebnisse löschen
  ul.empty();
  ul.addClass('book');
  books.forEach(book => {
    if (query && !book.title.toLowerCase().includes(query.toLowerCase()) && !book.author.toLowerCase().includes(query.toLowerCase())) {
      resLength--;
      return; // Überspringe Bücher, die nicht zum Suchbegriff passen
    }
    const li = `<li><strong>${book.title}</strong><br><small>${book.author}</small></li>`;
    ul.append(li);
    hint.text(`Status: ${xhr.status} ${xhr.statusText} - Gefundene Bücher: ${resLength}`);
  });
  resultsDiv.append(ul);
}