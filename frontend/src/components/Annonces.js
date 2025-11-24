import React from 'react';


// Exemple de données pour les annonces
const annonces = [
  {
    title: "Maison moderne avec jardin",
    location: "Lyon, Rhône-Alpes",
    chambres: 4,
    sdb: 2,
    surface: 120,
    price: "285 000€",
    tag: "Nouveau",
    img: "https://www.maisons-mca.com/wp-content/uploads/2024/12/2024-design-AR-1350x900-1.webp"
  },
  {
    title: "Villa avec terrasse",
    location: "Marseille, PACA",
    chambres: 5,
    sdb: 3,
    surface: 180,
    price: "420 000€",
    tag: "Urgent",
    img: "https://cdn.pap.fr/image/cms/1f/78/1f78a016726ad332cf987f55dd0d0d7d/1-1500x1109-s10.jpg"
  },
  {
    title: "Maison familiale",
    location: "Toulouse, Occitanie",
    chambres: 3,
    sdb: 2,
    surface: 95,
    price: "195 000€",
    tag: "",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFO0L2XRJUSkia7aeXQ9qi2-s8w1JxERVRCw&s"
  },
  
];

function Annonces() {
  return (
    <section style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Dernières annonces</h2>

      <p style={{ marginTop: '20px', marginBottom: '20px' }}>
 
  <select style={{ padding: '8px', marginRight: '10px' }}>
    <option>Tous les prix</option>
    <option>Moins de 200 000€</option>
    <option>200 000€ - 400 000€</option>
    <option>Plus de 400 000€</option>
  </select>
  <select style={{ padding: '8px', marginRight: '10px' }}>
    <option>Tous types</option>
    <option>Maison</option>
    <option>Villa</option>
  </select>
  <button style={{ padding: '8px 15px', backgroundColor: '#2d548aff', color: 'white', border: 'none', borderRadius: '5px' }}>Filtrer</button>
</p>


      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
        {annonces.map((annonce, index) => (
          <div key={index} style={{ border: '1px solid #ddd', borderRadius: '10px', width: '300px', padding: '10px' }}>
            <img src={annonce.img} alt={annonce.title} style={{ width: '100%', borderRadius: '10px' }} />
            <h3>{annonce.title}</h3>
            {annonce.tag && <span style={{ backgroundColor: '#f0c14b', padding: '2px 6px', borderRadius: '5px' }}>{annonce.tag}</span>}
            <p>{annonce.location}</p>
            <p>{annonce.chambres} chambres • {annonce.sdb} SDB • {annonce.surface}m²</p>
            <p style={{ fontWeight: 'bold', color: '#2d8a4f' }}>{annonce.price}</p>
          </div>
        ))}
      </div>

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
  <button style={{ margin: '0 5px' }}>{'<'}</button>
  {[1,2,3,4,5].map(num => (
    <button key={num} style={{ margin: '0 5px' }}>{num}</button>
  ))}
  <button style={{ margin: '0 5px' }}>{'>'}</button>
</div>


    </section>
  );
}

export default Annonces;
