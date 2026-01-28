$("#btnLoad").on("click", () => {
  $.getJSON("server/list.php", (items) => {
    renderList(items);
  });
});

function renderList(items) {
  const $container = $("#items");
  $container.empty();

  items.forEach(item => {
    $container.append(`
      <button class="item-btn" data-id="${item.id}">
        ${item.title}
      </button>
    `);
  });
}