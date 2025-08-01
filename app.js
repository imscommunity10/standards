function loadSelectedAyah() {
  const selection = document.getElementById('ayahSelect').value;
  fetch(`data/${selection}.json`)
    .then(response => response.json())
    .then(data => {
      const display = document.getElementById('ayahDisplay');
      display.innerHTML = `
        <h3>Surah ${data.surah}, Ayah ${data.ayah}</h3>
        <p><strong>Arabic:</strong> ${data.ayahWords.join(' ')}</p>
        <p><strong>Translation:</strong> ${data.ayahDetails.translation}</p>
        <hr>
        <h4>Word Details:</h4>
        ${data.wordDetails.map(w => `
          <div>
            <b>Word:</b> ${w.word} <br>
            <b>Meaning:</b> ${w.meaning} <br>
            <b>Root:</b> ${w.rootMeaning} <br>
            <b>Grammar:</b> ${w.grammar} <br>
            <b>Purpose:</b> ${w.purpose} <br>
            <b>Tafsir:</b> ${w.tafsir} <br><br>
          </div>`).join('')}
      `;
    })
    .catch(err => {
      document.getElementById('ayahDisplay').innerText = "Error loading data.";
    });
}
