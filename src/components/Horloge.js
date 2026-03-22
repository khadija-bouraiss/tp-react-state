import { useState, useEffect } from 'react';

function Horloge() {
    const [heure, setHeure] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setHeure(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formaterHeure = (d) =>
        d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const formaterDate = (d) =>
        d.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="card">
            <h2> Horloge en temps réel</h2>
            <div className="horloge-time">{formaterHeure(heure)}</div>
            <div className="horloge-date">{formaterDate(heure)}</div>
        </div>
    );
}

export default Horloge;