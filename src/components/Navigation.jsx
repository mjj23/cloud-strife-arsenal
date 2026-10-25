import "./Navigation.css";

function Navigation({ setPage }) {
    function changePage(event, pageName) {
        event.preventDefault();
        setPage(pageName);
        window.scrollTo(0, 0);
    }

    return (
        <nav>
            <ul className="nav-links">
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