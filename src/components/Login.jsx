import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./auth.css";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { loginUser } = useAuth();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setMessage("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const result = loginUser(formData);
        if (result.ok) {
            navigate('/mon-espace');
        } else {
            setMessage(result.message);
        }
        setLoading(false);
    };

    return (
        <div className="auth-page-container">
            <div className="auth-form-container login">
                <h2 className="auth-title">CONNEXION</h2>
                <p className="auth-subtitle">Accédez à votre espace membre.</p>
                {message && <p className="auth-message auth-message-error">⚠ {message}</p>}
                <form onSubmit={handleSubmit} className="auth-form">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="auth-input"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Mot de passe"
                        value={formData.password}
                        onChange={handleChange}
                        className="auth-input"
                        required
                    />
                    <button type="submit" className="auth-button" disabled={loading}>
                        {loading ? "Chargement..." : "SE CONNECTER"}
                    </button>
                </form>
                <p className="auth-switch">
                    Pas encore inscrit ? <Link to="/inscription">Créer un compte</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
