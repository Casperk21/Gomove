import React from 'react';
import '../styles/home.css'; // Importér CSS til forsiden

const Home = () => (
  <div className="home-header">
    <h1>Velkommen til Gomove</h1>
    <p>Din komplette løsning til flytning.</p>
    <div className="home-actions">
      <a href="/flyttebilberegner">Start Beregning</a>
      <a href="/tjekliste">Lav Tjekliste</a>
    </div>
  </div>
);

export default Home;
