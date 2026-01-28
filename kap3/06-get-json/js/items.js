let xhr = $.getJSON("server/items.json", () => {
  console.log('success');
})
  .done( () => {
    console.log('second success');
  })
  .fail( () => {
    console.log('error');
  })
  .always( () => {
    console.log('complete');
  });

  // .. anderer Code

xhr.always( () => {
  console.log('second complete');
});