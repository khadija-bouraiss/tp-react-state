import { useState } from 'react';

function FormulaireInscription() {
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Prénom : ${prenom}\nEmail : ${email}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Prénom :
                    <input
                        type="text"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        placeholder="Votre prénom"
                    />
                </label>
            </div>
            <div>
                <label>
                    Email :
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Votre email"
                    />
                </label>
            </div>
            <button type="submit">S'inscrire</button>
        </form>
    );
}

export default FormulaireInscription;