import logo from "../assets/cloud-logo.png";

function Logo() {
    return (
        <img
            className="header-logo"
            src={logo}
            alt="Cloud Strife"
        />
    );
}

export default Logo;