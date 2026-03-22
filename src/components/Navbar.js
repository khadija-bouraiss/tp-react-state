function Navbar({ theme, toggleTheme }) {
    return (
        <nav style={{
            backgroundColor: 'var(--primary)',
            padding: '0 30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '60px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.15)'
        }}>
            <span style={{ color: 'white', fontWeight: '700', fontSize: '1.2rem', letterSpacing: '0.05em' }}>
                TP React — État & Interactions
            </span>
            <button
                onClick={toggleTheme}
                style={{
                    background: 'rgba(255,255,255,0.2)',
                    border: '1.5px solid white',
                    color: 'white',
                    padding: '7px 16px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '0.9rem'
                }}>
                {theme === 'light' ? ' Sombre' : ' Clair'}
            </button>
        </nav>
    );
}

export default Navbar;