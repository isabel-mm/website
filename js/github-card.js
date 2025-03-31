// js/github-card.js

document.addEventListener('DOMContentLoaded', function() {
  const username = 'isabel-mm';
  const profileUrl = `https://api.github.com/users/${username}`;
  const reposUrl = `https://api.github.com/users/${username}/repos?sort=updated&per_page=5`;

  // Obtener datos del perfil
  fetch(profileUrl)
    .then(response => response.json())
    .then(data => {
      document.getElementById('github-avatar').src = data.avatar_url;
      document.getElementById('github-avatar').alt = `Foto de perfil de ${data.login}`;
      document.getElementById('github-username').textContent = data.login;
      document.getElementById('github-username').href = data.html_url;
    })
    .catch(error => console.error('Error al obtener el perfil de GitHub:', error));

  // Obtener repositorios recientes
  fetch(reposUrl)
    .then(response => response.json())
    .then(data => {
      const reposList = document.getElementById('github-repos');
      data.forEach(repo => {
        const listItem = document.createElement('li');
        const repoLink = document.createElement('a');
        repoLink.textContent = repo.name;
        repoLink.href = repo.html_url;
        repoLink.target = '_blank';
        listItem.appendChild(repoLink);
        reposList.appendChild(listItem);
      });
    })
    .catch(error => console.error('Error al obtener los repositorios de GitHub:', error));
});
