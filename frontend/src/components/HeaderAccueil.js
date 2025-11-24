import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HeaderAccueil() {
  const navigate = useNavigate();
const user = JSON.parse(localStorage.getItem('user'));
  const isAuthenticated = !!user;
  const handlePublishClick = () => {
    navigate('/auth');
  };

  return (
    <header className="header" style={{ padding: '20px', backgroundColor: '#e6f4ea' }}>
      <div className="logo" style={{ display: 'inline-block', fontWeight: 'bold', fontSize: '20px', color: '#2d8a4f' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>MaisonConnect</Link>
      </div>
      <nav style={{ display: 'inline-block', marginLeft: '50px' }}>
  <Link to="/" style={{ margin: '0 10px', textDecoration: 'none', color: 'inherit' }}>Accueil</Link>
  <Link to="/recherche" style={{ margin: '0 10px', textDecoration: 'none', color: 'inherit' }}>Rechercher</Link>
  <Link to="/Vendre" style={{ margin: '0 10px', textDecoration: 'none', color: 'inherit' }}>Vendre</Link>
  <Link to="/APropos" style={{ margin: '0 10px', textDecoration: 'none', color: 'inherit' }}>À propos</Link>
</nav>
      
      {/* Bouton modifié avec useNavigate */}
      <div style={{ float: 'right', display: 'flex', alignItems: 'center', gap: '10px' }}>
  {isAuthenticated && (
    <span style={{ color: '#2d8a4f', fontWeight: 'bold' }}>
      👤 {user.firstName} {user.lastName}
    </span>
  )}
  <button 
    onClick={handlePublishClick}
    style={{ 
      backgroundColor: '#2d8a4f', 
      color: 'white', 
      padding: '10px 15px', 
      border: 'none', 
      borderRadius: '5px', 
      cursor: 'pointer'
    }}
  >
    <span role="img" aria-label="user" style={{ marginRight: '5px' }}>👤</span>
    Publier une annonce
  </button>
</div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h1>Trouvez votre maison idéale</h1>
        <p>Découvrez des milliers d'annonces de maisons à vendre par des particuliers et professionnels</p>
        <div>
          <input type="text" placeholder="Ville, région..." style={{ padding: '10px', width: '200px', marginRight: '10px' }} />
          <select style={{ padding: '10px', marginRight: '10px' }}>
            <option>Tous les prix</option>
          </select>
          <select style={{ padding: '10px', marginRight: '10px' }}>
            <option>Tous types</option>
          </select>
          <button style={{ padding: '10px 20px', backgroundColor: '#2d8a4f', color: 'white', border: 'none', borderRadius: '5px' }}>
            Rechercher
          </button>
        </div>
      </div>
    </header>
  );
}

export default HeaderAccueil;