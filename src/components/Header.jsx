import "./Header.css";
import Navigation from "./Navigation";
import Logo from "./logo";

function Header() {
    return (
        <header className="main-header">
            <div className="header-content">
                <h1>Cloud Strife Arsenal</h1>
                <Navigation />
                <Logo />
            </div>
        </header>
    );
}

export default Header;