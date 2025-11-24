import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#0f1b2d', color: 'white', padding: '30px', marginTop: '50px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div>
          <h3>MaisonConnect</h3>
          <p>La plateforme de référence pour vendre et acheter des maisons entre particuliers et professionnels.</p>
        </div>
        <div>
          <h4>Services</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Vendre ma maison</li>
            <li>Acheter une maison</li>
            <li>Estimation gratuite</li>
            <li>Conseils immobilier</li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Centre d'aide</li>
            <li>Contact</li>
            <li>CGU</li>
            <li>Confidentialité</li>
          </ul>
        </div>
        <div>
          <h4>Suivez-nous</h4>
          <p>Facebook | Twitter | Instagram | LinkedIn</p>
        </div>
      </div>
       <hr style={{ border: '1px solid #444', margin: '20px 0' }} />
      <p style={{ textAlign: 'center', marginTop: '20px' }}>© 2024 MaisonConnect. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
