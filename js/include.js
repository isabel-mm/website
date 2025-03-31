function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  elements.forEach(el => {
    const file = el.getAttribute('data-include');
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error(`Error al cargar ${file}`);
        return response.text();
      })
      .then(html => el.innerHTML = html)
      .catch(error => console.error(error));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  includeHTML();

  // Espera a que los componentes estén cargados antes de añadir eventos
  document.addEventListener("click", function (event) {
    if (event.target.matches(".dropbtn")) {
      document.getElementById("dropdownMenu").classList.toggle("show");
    } else {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove("show");
      }
    }
  });
});
