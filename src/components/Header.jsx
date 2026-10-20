import "./Header.css";
import Navigation from "./Navigation";

function Header() {
    return (
        <header className="main-header">
            <div className="header-content">
                <h1>Cloud Strife Arsenal</h1>
                <Navigation />
            </div>
        </header>
    );
}

export default Header;