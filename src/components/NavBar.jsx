import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-links">
                    <NavLink to="/dashboard/home" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                    <NavLink to="/dashboard/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink>
                    <NavLink to="/dashboard/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
                    <NavLink to="/dashboard/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
