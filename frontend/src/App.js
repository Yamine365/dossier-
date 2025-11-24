import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderAccueil from './components/HeaderAccueil';
import HeaderRecherche from './components/HeaderRecherche';
import HeaderVendre from './components/HeaderVendre';
import Annonces from './components/Annonces';
import Footer from './components/Footer';
import Recherche from './components/Recherche';
import Auth from './pages/Auth';
import Vendre from './components/Vendre';
import APropos from './components/APropos';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Page d'accueil avec HeaderAccueil */}
          <Route path="/" element={
            <>
              <HeaderAccueil />
              <Annonces />
              <Footer />
            </>
          } />
          
          {/* Page recherche avec HeaderRecherche */}
          <Route path="/recherche" element={
            <>
              <HeaderRecherche />
              <Recherche />
              <Footer />
            </>
          } />

          {/* Page vendre avec HeaderVendre */}
          <Route path="/vendre" element={
            <>
              <HeaderVendre />
              <Vendre />
              <Footer />
            </>
          } />

          {/* Page d'authentification */}
          <Route path="/auth" element={<Auth />} />

          
        {/* Page À propos */}
          <Route path="/apropos" element={
            <>
              <HeaderVendre />
              <APropos />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;