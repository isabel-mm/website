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

document.addEventListener("DOMContentLoaded", includeHTML);
