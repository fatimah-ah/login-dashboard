import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
    };

    return (
        <header className="app-header">
            <div className="container header-content">
                <h1>Dashboard Website</h1>
                <button className="logout-btn" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </header>
    );
}

export default Header;
