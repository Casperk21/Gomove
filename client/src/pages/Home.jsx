import React from 'react';
import '../styles/home.css'; // Importér CSS

const Home = () => (
  <div className="home-header">
    <h1>Velkommen til Gomove</h1>
    <p>
      Gomove er din komplette løsning til en nem og effektiv flytning. Med vores
      værktøjer kan du planlægge og organisere din flytning uden besvær.
    </p>
    <div className="home-actions">
      <a href="/flyttebilberegner">Start Beregning</a>
      <a href="/tjekliste">Lav Tjekliste</a>
    </div>
  </div>
);

export default Home;
