import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="light-blue darken-2">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">
                        E-Shop
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Contacts</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export { Header };
