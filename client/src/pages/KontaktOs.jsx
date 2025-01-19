import React from 'react';
import '../styles/kontakt.css'; // Tilføj CSS

const KontaktOs = () => (
  <div className="kontakt-container">
    <h1>Kontakt os</h1>
    <p>Har du spørgsmål eller brug for hjælp? Kontakt os via formularen nedenfor.</p>
    <form className="kontakt-form">
      <label>Navn:</label>
      <input type="text" placeholder="Dit navn" />

      <label>E-mail:</label>
      <input type="email" placeholder="Din e-mail" />

      <label>Besked:</label>
      <textarea placeholder="Skriv din besked her"></textarea>

      <button type="submit">Send besked</button>
    </form>
    <div className="kontakt-info">
      <p>📞 Telefon: +45 123 456 78</p>
      <p>✉️ E-mail: support@gomove.dk</p>
      <p>📍 Adresse: Flyttevej 12, 1000 København</p>
    </div>
  </div>
);

export default KontaktOs;
