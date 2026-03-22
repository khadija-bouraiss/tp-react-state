import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Horloge from './components/Horloge';
import TodoList from './components/TodoList';

import Compteur from './components/Compteur';
import MessageBouton from './components/MessageBouton';
import FormulaireNom from './components/FormulaireNom';
import CompteurEffet from './components/CompteurEffet';
import AffichageDynamique from './components/AffichageDynamique';
import FormulaireInscription from './components/FormulaireInscription';
import CompteurTitre from './components/CompteurTitre';

function App() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme === 'dark' ? 'dark' : '';
  }

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="app-content">

        <Horloge />

        <div className="card">
          <h2>🔢 Compteur simple</h2>
          <Compteur />
        </div>

        <div className="card">
          <h2>💬 Message bouton</h2>
          <MessageBouton />
        </div>

        <div className="card">
          <h2>🖱️ Affichage dynamique</h2>
          <AffichageDynamique />
        </div>

        <div className="card">
          <h2>📋 Formulaire Nom</h2>
          <FormulaireNom />
        </div>

        <div className="card">
          <h2>📝 Formulaire Inscription</h2>
          <FormulaireInscription />
        </div>

        <div className="card">
          <h2>⚡ Compteur avec effet</h2>
          <CompteurEffet />
        </div>

        <div className="card">
          <h2>🏷️ Compteur titre</h2>
          <CompteurTitre />
        </div>

        <TodoList />

      </div>
    </>
  );
}

export default App;