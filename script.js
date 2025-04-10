fetch('data.json')
  .then(response => response.json())
  .then(films => {
    const container = document.getElementById('cards-container');

    films.forEach(film => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${film.immagine}" alt="Locandina di ${film.titolo}">
        <div class="card-content">
          <h2>${film.titolo}</h2>
          <p><strong>Genere principale:</strong> ${film.genere1}</p>
          <p><strong>Genere secondario:</strong> ${film.genere2}</p>
          <p><strong>Voto:</strong> ${film.voto}</p>
          <p><strong>Anno:</strong> ${film.anno}</p>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Errore nel caricamento dei dati:', error);
  });
