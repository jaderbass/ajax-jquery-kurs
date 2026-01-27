// Nutzung der Utility-Funktion ajaxGet()

document.getElementById("btnLoad").addEventListener("click", () => {
  ajaxGet("server/data.json", (response, status) => {
    if(status === 200) {
      const data = JSON.parse(response);
      document.getElementById("output").textContent = JSON.stringify(data, null, 4);
    }
  });
});