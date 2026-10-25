import "./Header.css";
import Navigation from "./Navigation";
import Logo from "./logo";

function Header({ setPage }) {
    return (
        <header className="main-header">
            <div className="header-content">
                <h1>Cloud Strife Arsenal</h1>

                <Navigation setPage={setPage} />

                <Logo />
            </div>
        </header>
    );
}

export default Header;