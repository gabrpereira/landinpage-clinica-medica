

import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="h1">
            <h1 className="logo">Clínica Médica</h1>
            </div>
            <nav className="nav">
                <a className="nav-button"> Início</a>
                <a className="nav-button">Serviços</a>
                <a className="nav-button">Contato</a>
                <a className="nav-button">Sobre</a>
            </nav>
        </header>
    );
}

export default Header;