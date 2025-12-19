import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "fatimah" && password === "fatimah123") {
      localStorage.setItem("isLoggedIn", true);
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="contact-form" style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: "2rem" }}>Login</h2>

        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && (
          <p style={{ color: "#ef4444", marginBottom: "1rem", fontSize: "0.875rem" }}>
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          className="submit-btn"
          style={{ width: '100%' }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
