import { useState, useEffect } from 'react';

function CompteurTitre() {
    const [clics, setClics] = useState(0);

    useEffect(() => {
        document.title = `${clics} clic${clics > 1 ? 's' : ''} effectué${clics > 1 ? 's' : ''}`;
    }, [clics]);

    return (
        <div>
            <p>Nombre de clics : {clics}</p>
            <button onClick={() => setClics(clics + 1)}>Cliquer</button>
            <button onClick={() => setClics(0)}>Réinitialiser</button>
        </div>
    );
}

export default CompteurTitre;