import { useState } from "react";
import "./Navigation.css";

function Navigation({ setPage }) {
    const [menuOpen, setMenuOpen] = useState(false);

    function changePage(event, pageName) {
        event.preventDefault();
        setPage(pageName);
        setMenuOpen(false);
        window.scrollTo(0, 0);
    }

    return (
        <nav className="main-nav">

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <ul className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
                <li>
                    <a href="#" onClick={(event) => changePage(event, "home")}>
                        Home
                    </a>
                </li>

                <li>
                    <a href="#" onClick={(event) => changePage(event, "buster")}>
                        Buster Sword
                    </a>
                </li>

                <li>
                    <a href="#" onClick={(event) => changePage(event, "weapons")}>
                        Weapons
                    </a>
                </li>

                <li>
                    <a href="#" onClick={(event) => changePage(event, "combat")}>
                        Combat and Materia
                    </a>
                </li>

                <li>
                    <a href="#" onClick={(event) => changePage(event, "locations")}>
                        Weapon Locations
                    </a>
                </li>
            </ul>

        </nav>
    );
}

export default Navigation;