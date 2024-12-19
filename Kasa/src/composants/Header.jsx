import { NavLink } from "react-router-dom";


export default function Header() {
    return (
        <header className="container">
            <h1>Kasa</h1>
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </header>
    )
}
