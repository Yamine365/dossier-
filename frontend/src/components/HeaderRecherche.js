import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HeaderRecherche() {
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
      
      {/* Bouton modifié avec useNavigate */}
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
      
      {/* Section barre de recherche sous le header */}
      <section style={{ padding: '40px 20px', backgroundColor: '#E6F4EA' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Box avec effet hover */}
          <div style={{ 
            backgroundColor: '#d6ebdcff', 
            padding: '40px', 
            borderRadius: '15px', 
            border: '1px solid #e0e0e0',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            ':hover': {
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
              transform: 'translateY(-2px)'
            }
          }}>
            <h2 style={{ 
              textAlign: 'center', 
              marginBottom: '10px', 
              color: '#2d8a4f',
              fontSize: '28px',
              fontWeight: '600'
            }}>
              Trouvez votre maison idéale
            </h2>
            <p style={{ 
              textAlign: 'center', 
              marginBottom: '40px',
              color: '#666',
              fontSize: '16px',
              lineHeight: '1.5'
            }}>
              Recherchez parmi des milliers d'annonces de maisons
            </p>

            {/* Barre de recherche principale */}
            <div style={{ 
              display: 'flex', 
              gap: '15px', 
              marginBottom: '20px', 
              flexWrap: 'wrap', 
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <input 
                type="text" 
                placeholder="Localisation (Ville, région...)" 
                style={{ 
                  padding: '15px', 
                  border: '2px solid #e0e0e0', 
                  borderRadius: '8px', 
                  minWidth: '200px', 
                  flex: '1', 
                  maxWidth: '250px',
                  fontSize: '14px',
                  transition: 'border-color 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#2d8a4f'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
              
              <select style={{ 
                padding: '15px', 
                border: '2px solid #e0e0e0', 
                borderRadius: '8px', 
                minWidth: '150px',
                fontSize: '14px',
                backgroundColor: 'white',
                cursor: 'pointer',
                transition: 'border-color 0.3s ease',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#2d8a4f'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}>
                <option>Type de bien</option>
                <option>Tous types</option>
                <option>Maison</option>
                <option>Appartement</option>
                <option>Villa</option>
              </select>
              
              <select style={{ 
                padding: '15px', 
                border: '2px solid #e0e0e0', 
                borderRadius: '8px', 
                minWidth: '150px',
                fontSize: '14px',
                backgroundColor: 'white',
                cursor: 'pointer',
                transition: 'border-color 0.3s ease',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#2d8a4f'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}>
                <option>Prix min</option>
                <option>Aucun minimum</option>
                <option>50 000 €</option>
                <option>100 000 €</option>
                <option>200 000 €</option>
              </select>
              
              <select style={{ 
                padding: '15px', 
                border: '2px solid #e0e0e0', 
                borderRadius: '8px', 
                minWidth: '150px',
                fontSize: '14px',
                backgroundColor: 'white',
                cursor: 'pointer',
                transition: 'border-color 0.3s ease',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#2d8a4f'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}>
                <option>Prix max</option>
                <option>Aucun maximum</option>
                <option>200 000 €</option>
                <option>400 000 €</option>
                <option>600 000 €</option>
              </select>
              
              <button style={{ 
                padding: '15px 30px', 
                backgroundColor: '#2d8a4f', 
                color: 'white', 
                border: 'none', 
                borderRadius: '8px', 
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                minWidth: '150px'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#247a3d'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#2d8a4f'}>
                Rechercher
              </button>
            </div>

            {/* Ligne décorative */}
            <div style={{
              height: '3px',
              background: 'linear-gradient(90deg, #2d8a4f, #4caf50)',
              borderRadius: '2px',
              marginTop: '20px',
              width: '100px',
              margin: '20px auto 0'
            }}></div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default HeaderRecherche;