import { useState, useEffect } from 'react';

function TodoList() {
    const [taches, setTaches] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        document.title = `${taches.filter(t => !t.done).length} tâche(s) restante(s)`;
    }, [taches]);

    function ajouterTache() {
        if (input.trim() === '') return;
        setTaches([...taches, { id: Date.now(), texte: input, done: false }]);
        setInput('');
    }

    function toggleTache(id) {
        setTaches(taches.map(t => t.id === id ? { ...t, done: !t.done } : t));
    }

    function supprimerTache(id) {
        setTaches(taches.filter(t => t.id !== id));
    }

    return (
        <div className="card full-width">
            <h2> Liste de tâches</h2>
            <div className="todo-input-row">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && ajouterTache()}
                    placeholder="Nouvelle tâche..."
                />
                <button className="btn" onClick={ajouterTache}>Ajouter</button>
            </div>
            <ul className="todo-list">
                {taches.length === 0 && (
                    <p style={{ color: 'var(--text-muted)', textAlign: 'center' }}>Aucune tâche pour l'instant.</p>
                )}
                {taches.map(tache => (
                    <li key={tache.id} className={`todo-item ${tache.done ? 'done' : ''}`}>
                        <span onClick={() => toggleTache(tache.id)}>{tache.texte}</span>
                        <button className="todo-delete" onClick={() => supprimerTache(tache.id)}>✕</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;