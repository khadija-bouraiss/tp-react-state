import { useState } from 'react';

function AffichageDynamique() {
  const [clic, setClic] = useState(0);

  const messages = [
    'Cliquez sur le bouton',
    'Premier clic',
    'Deuxième clic',
    'Troisième clic',
  ];

  function handleClic() {
    if (clic < messages.length - 1) {
      setClic(clic + 1);
    }
  }

  return (
    <div>
      <p>{messages[clic]}</p>
      <button onClick={handleClic}>Cliquer</button>
    </div>
  );
}

export default AffichageDynamique;