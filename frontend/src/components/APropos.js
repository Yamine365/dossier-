import React from "react";
import { Link } from "react-router-dom";

export default function APropos() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', color: '#1f2937' }}>
      {/* Header (Green Banner) */}
      <header style={{ backgroundColor: '#2d8a4f', color: 'white', padding: '2rem 0', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center' }}>
  À propos de MaisonConnect
</h1>

        </div>
      </header>

    

      {/* Mission Section */}
      <main style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center', padding: '3rem 0' }}>
          <div>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>Notre Mission</h2>
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              MaisonConnect a été créé avec une vision simple : simplifier l'achat et la vente de biens immobiliers entre particuliers et professionnels. Nous croyons que chacun devrait avoir accès à un marché immobilier transparent et équitable.
            </p>
            <p style={{ color: '#6b7280' }}>
              Notre plateforme élimine les intermédiaires inutiles, réduisant les coûts et accélérant les transactions immobilières tout en maintenant la sécurité et la confiance.
            </p>
          </div>

          <div style={{ borderRadius: '0.75rem', overflow: 'hidden', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' }}>
            <img
              src="https://cdn.manomano.com/media/edison/6/3/3/8/63382b989b82.jpg"
              alt="Bureau moderne"
              style={{ width: '100%', height: '18rem', objectFit: 'cover' }}
            />
          </div>
        </section>

        {/* Values Section */}
        <section style={{ padding: '2rem 0' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '0.5rem' }}>Nos Valeurs</h3>
          <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '2rem' }}>Les principes qui guident notre approche et notre engagement envers nos utilisateurs</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <Card title="Transparence">
              <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Nous croyons en une transparence totale dans toutes les transactions. Pas de frais cachés, pas de surprises.</p>
            </Card>

            <Card title="Sécurité">
              <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>La sécurité de vos données et transactions est notre priorité absolue avec des protocoles de sécurité avancés.</p>
            </Card>

            <Card title="Innovation">
              <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Nous innovons constamment pour améliorer l'expérience utilisateur et simplifier le processus immobilier.</p>
            </Card>
          </div>
        </section>

        {/* Call-to-action / Ready to start */}
        <section style={{ marginTop: '3rem', backgroundColor: '#2d8a4f', borderRadius: '0.75rem', color: 'white', padding: '3rem 2rem', boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Prêt à Commencer ?</h2>
            <p style={{ marginBottom: '1.5rem' }}>Rejoignez des milliers d'utilisateurs qui font confiance à MaisonConnect pour leurs transactions immobilières</p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link 
                to="/auth" 
                style={{ 
                  backgroundColor: 'white', 
                  color: '#2d8a4f', 
                  fontWeight: '600', 
                  padding: '0.75rem 1.25rem',
                  borderRadius: '0.375rem',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  textDecoration: 'none'
                }}
              >
                Créer un Compte
              </Link>
              <Link 
                to="/recherche" 
                style={{ 
                  border: '1px solid rgba(255, 255, 255, 0.7)', 
                  color: 'white', 
                  padding: '0.75rem 1.25rem',
                  borderRadius: '0.375rem',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
              >
                Découvrir les Annonces
              </Link>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div style={{ backgroundColor: 'white', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
        <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '0.375rem', backgroundColor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L12 22" stroke="#2d8a4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12L22 12" stroke="#2d8a4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h5 style={{ fontWeight: '600' }}>{title}</h5>
      </div>

      <div>{children}</div>
    </div>
  );
}
