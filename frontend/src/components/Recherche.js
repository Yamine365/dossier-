import React from 'react';

function Recherche() {
  return (
    <div>
      

      {/* Section principale avec filtres à gauche et résultats à droite */}
      <section style={{ padding: '40px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '30px' }}>
          
          {/* Colonne de gauche - Filtres */}
          <div style={{ width: '300px', flexShrink: 0 }}>
            <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '10px', border: '1px solid #ddd' }}>
              <h3 style={{ marginBottom: '20px', color: '#2d8a4f' }}>Filtres</h3>
              
              {/* Nombre de pièces */}
              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '12px', fontWeight: 'bold', fontSize: '14px' }}>Nombre de pièces</label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {[1, 2, 3, 4, '5+'].map((pieces) => (
                    <button 
                      key={pieces}
                      style={{ 
                        padding: '8px 12px', 
                        border: '1px solid #ddd', 
                        borderRadius: '5px', 
                        backgroundColor: 'white',
                        cursor: 'pointer',
                        fontSize: '14px',
                        minWidth: '40px',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#2d8a4f';
                        e.target.style.color = 'white';
                        e.target.style.borderColor = '#2d8a4f';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'white';
                        e.target.style.color = 'inherit';
                        e.target.style.borderColor = '#ddd';
                      }}
                    >
                      {pieces}
                    </button>
                  ))}
                </div>
              </div>

              {/* Surface */}
              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '12px', fontWeight: 'bold', fontSize: '14px' }}>Surface</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <input 
                    type="range" 
                    min="0" 
                    max="500" 
                    style={{ width: '100%', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#666' }}>
                    <span>0 m²</span>
                    <span>500+ m²</span>
                  </div>
                </div>
              </div>

              {/* Équipements */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '12px', fontWeight: 'bold', fontSize: '14px' }}>Équipements</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['Jardin', 'Garage', 'Piscine', 'Terrasse'].map((equipement) => (
                    <label key={equipement} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
                      <input type="checkbox" style={{ transform: 'scale(1.2)', cursor: 'pointer' }} />
                      {equipement}
                    </label>
                  ))}
                </div>
              </div>

              <button style={{ 
                width: '100%', 
                padding: '12px', 
                backgroundColor: '#2d8a4f', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer',
                fontSize: '14px',
                marginTop: '10px',
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#247a3d'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#2d8a4f'}>
                Appliquer les filtres
              </button>
            </div>
          </div>

          {/* Colonne de droite - Résultats */}
          <div style={{ flex: '1' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0 }}>Résultats de recherche</h3>
              <p style={{ color: '#666', margin: 0 }}>142 biens trouvés</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Premier résultat */}
              <div style={{ 
                display: 'flex', 
                gap: '20px', 
                backgroundColor: 'white', 
                padding: '20px', 
                borderRadius: '10px', 
                border: '1px solid #ddd',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ width: '150px', height: '120px', backgroundColor: '#e9ecef', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
                  <img 
      src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
      alt="Maison moderne" 
      style={{ 
        width: '100%', 
        height: '100%', 
        objectFit: 'cover'
      }}
    />
                </div>
                <div style={{ flex: '1' }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#2d8a4f' }}>Maison moderne</h4>
                  <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Lyon, Rhône-Alpes</p>
                  <p style={{ margin: '5px 0', fontSize: '14px' }}>4 chambres • 2 sdb • 120 m²</p>
                  <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Pierre Martin • Il y a 2 jours</p>
                  <p style={{ margin: '10px 0 0 0', fontSize: '18px', fontWeight: 'bold', color: '#2d8a4f' }}>285 000 €</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ backgroundColor: '#e7f3ff', color: '#0066cc', padding: '4px 10px', borderRadius: '3px', fontSize: '12px', fontWeight: 'bold' }}>Plus récent</span>
                </div>
              </div>

              {/* Les autres résultats avec le même effet hover */}
              {/* Deuxième résultat */}
              <div style={{ 
                display: 'flex', 
                gap: '20px', 
                backgroundColor: 'white', 
                padding: '20px', 
                borderRadius: '10px', 
                border: '1px solid #ddd',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ width: '150px', height: '120px', backgroundColor: '#e9ecef', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
                  <img 
      src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
      alt="Villa avec piscine" 
      style={{ 
        width: '100%', 
        height: '100%', 
        objectFit: 'cover'
      }}
    />
                </div>
                <div style={{ flex: '1' }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#2d8a4f' }}>Villa avec piscine</h4>
                  <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Marseille, PACA</p>
                  <p style={{ margin: '5px 0', fontSize: '14px' }}>5 chambres • 3 sdb • 180 m²</p>
                  <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Sophie Dubois • Il y a 3 jours</p>
                  <p style={{ margin: '10px 0 0 0', fontSize: '18px', fontWeight: 'bold', color: '#2d8a4f' }}>420 000 €</p>
                </div>
              </div>

              {/* Troisième résultat */}
              <div style={{ 
                display: 'flex', 
                gap: '20px', 
                backgroundColor: 'white', 
                padding: '20px', 
                borderRadius: '10px', 
                border: '1px solid #ddd',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ width: '150px', height: '120px', backgroundColor: '#e9ecef', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
                  <img 
      src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
      alt="Maison familiale" 
      style={{ 
        width: '100%', 
        height: '100%', 
        objectFit: 'cover'
      }}
    />
                </div>
                <div style={{ flex: '1' }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#2d8a4f' }}>Maison familiale</h4>
                  <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Toulouse, Occitanie</p>
                  <p style={{ margin: '5px 0', fontSize: '14px' }}>3 chambres • 2 sdb • 95 m²</p>
                  <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Marc Leroy • Il y a 1 semaine</p>
                  <p style={{ margin: '10px 0 0 0', fontSize: '18px', fontWeight: 'bold', color: '#2d8a4f' }}>195 000 €</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Recherche;