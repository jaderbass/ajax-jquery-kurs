// Vanilla JS
/* document.querySelector("#btn").onclick = () => {
  document.querySelector("#output").textContent = "Hallo Vanilla JS";
}; */

$("#btn").on("click", () => {
  $("#output").text("Hallo von jQuery");
});