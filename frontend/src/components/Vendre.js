import React, { useState } from "react";

const Vendre = () => {
  const [formData, setFormData] = useState({
    titre: "",
    prix: "",
    pieces: "1",
    chambres: "1",
    surface: "",
    adresse: "",
    description: "",
    photos: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, photos: files }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Annonce publiée :", formData);
    alert("Annonce publiée avec succès !");
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Section bannière */}
      <section style={{ 
        backgroundColor: '#2d8a4f', 
        color: 'white', 
        padding: '5rem 1rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Vendez votre maison facilement
        </h1>
        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
          Publiez votre annonce en quelques clics et trouvez l'acheteur idéal pour votre propriété
        </p>
        <a
          href="#formulaire"
          style={{ 
            backgroundColor: 'white', 
            color: '#2d8a4f', 
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            fontWeight: '600',
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          + Publier une annonce
        </a>
      </section>

      {/* Étapes */}
      <section style={{ 
        padding: '4rem 1.5rem',
        maxWidth: '80rem',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2.5rem' }}>
          Comment vendre avec MaisonConnect
        </h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{ 
            backgroundColor: 'white', 
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            borderRadius: '1rem',
            padding: '1.5rem'
          }}>
            <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#2d8a4f' }}>
              1. Créez votre annonce
            </h3>
            <p>Ajoutez photos, description détaillée et prix de votre propriété.</p>
          </div>
          <div style={{ 
            backgroundColor: 'white', 
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            borderRadius: '1rem',
            padding: '1.5rem'
          }}>
            <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#2d8a4f' }}>
              2. Recevez des contacts
            </h3>
            <p>Les acheteurs intéressés vous contactent directement via la plateforme.</p>
          </div>
          <div style={{ 
            backgroundColor: 'white', 
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            borderRadius: '1rem',
            padding: '1.5rem'
          }}>
            <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#2d8a4f' }}>
              3. Finalisez la vente
            </h3>
            <p>Organisez des visites et négociez directement avec les acheteurs.</p>
          </div>
        </div>
      </section>

      {/* Formulaire de publication */}
      <section id="formulaire" style={{ 
        padding: '4rem 0',
        backgroundColor: 'white',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{ 
          maxWidth: '48rem',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            Publier votre annonce
          </h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Titre & Prix */}
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: '600' }}>
                  Titre de l'annonce
                </label>
                <input
                  type="text"
                  name="titre"
                  value={formData.titre}
                  onChange={handleChange}
                  placeholder="Ex: Maison familiale avec jardin"
                  style={{ 
                    width: '100%',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.5rem',
                    padding: '0.5rem',
                    boxSizing: 'border-box'
                  }}
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: '600' }}>
                  Prix (€)
                </label>
                <input
                  type="number"
                  name="prix"
                  value={formData.prix}
                  onChange={handleChange}
                  placeholder="250000"
                  style={{ 
                    width: '100%',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.5rem',
                    padding: '0.5rem',
                    boxSizing: 'border-box'
                  }}
                  required
                />
              </div>
            </div>

            {/* Pièces, chambres, surface */}
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '1.5rem'
            }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: '600' }}>
                  Pièces
                </label>
                <select
                  name="pieces"
                  value={formData.pieces}
                  onChange={handleChange}
                  style={{ 
                    width: '100%',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.5rem',
                    padding: '0.5rem',
                    boxSizing: 'border-box'
                  }}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: '600' }}>
                  Chambres
                </label>
                <select
                  name="chambres"
                  value={formData.chambres}
                  onChange={handleChange}
                  style={{ 
                    width: '100%',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.5rem',
                    padding: '0.5rem',
                    boxSizing: 'border-box'
                  }}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: '600' }}>
                  Surface (m²)
                </label>
                <input
                  type="number"
                  name="surface"
                  value={formData.surface}
                  onChange={handleChange}
                  placeholder="120"
                  style={{ 
                    width: '100%',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.5rem',
                    padding: '0.5rem',
                    boxSizing: 'border-box'
                  }}
                  required
                />
              </div>
            </div>

            {/* Adresse */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: '600' }}>
                Adresse
              </label>
              <input
                type="text"
                name="adresse"
                value={formData.adresse}
                onChange={handleChange}
                placeholder="123 Rue de la Paix, 75001 Paris"
                style={{ 
                  width: '100%',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  padding: '0.5rem',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>

            {/* Description */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: '600' }}>
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Décrivez votre propriété..."
                style={{ 
                  width: '100%',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  padding: '0.5rem',
                  height: '8rem',
                  boxSizing: 'border-box',
                  resize: 'vertical'
                }}
                required
              ></textarea>
            </div>

            {/* Photos */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: '600' }}>
                Photos
              </label>
              <div style={{ 
                border: '2px dashed #d1d5db',
                borderRadius: '0.5rem',
                padding: '1.5rem',
                textAlign: 'center',
                cursor: 'pointer'
              }}>
                <input
                  type="file"
                  name="photos"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                  id="photoUpload"
                />
                <label 
                  htmlFor="photoUpload" 
                  style={{ 
                    cursor: 'pointer', 
                    color: '#6b7280',
                    display: 'block'
                  }}
                >
                  Glissez-déposez vos photos ici ou cliquez pour sélectionner
                </label>
              </div>
            </div>

            {/* Bouton */}
            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                style={{ 
                  backgroundColor: '#2d8a4f',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                Publier l'annonce
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Vendre;