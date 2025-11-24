import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HeaderVendre() {
  const navigate = useNavigate();

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
      
      {/* Bouton Publier une annonce */}
      <button 
        onClick={handlePublishClick}
        style={{ 
          float: 'right', 
          backgroundColor: '#2d8a4f', 
          color: 'white', 
          padding: '10px 15px', 
          border: 'none', 
          borderRadius: '5px', 
          marginLeft: '10px',
          cursor: 'pointer'
        }}
      >
        <span role="img" aria-label="user" style={{ marginRight: '5px' }}>👤</span>
        Publier une annonce
      </button>

      
    </header>
  );
}

export default HeaderVendre;