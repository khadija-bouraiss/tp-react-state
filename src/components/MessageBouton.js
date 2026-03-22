import { useState } from 'react';

function MessageBouton() {
  const [message, setMessage] = useState('Cliquez sur le bouton');

  function changerMessage() {
    setMessage('Vous avez cliqué sur le bouton !');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={changerMessage}>Cliquer</button>
    </div>
  );
}

export default MessageBouton;