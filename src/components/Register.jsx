import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "./auth.css";

const Register = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const { registerUser } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setMessage("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const result = registerUser(formData);
        if (result.ok) {
            navigate('/mon-espace');
        } else {
            setMessage(result.message);
        }
        setLoading(false);
    };

    return (
        <div className="auth-page-container">
            <div className="auth-form-container">
                <h2 className="auth-title">REJOINS LA TEAM</h2>
                <p className="auth-subtitle">Crée ton compte et commence ton entraînement aujourd'hui.</p>
                {message && <p className="auth-message auth-message-error">⚠ {message}</p>}
                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="auth-input-group">
                        <input
                            type="text"
                            name="firstname"
                            placeholder="Prénom"
                            value={formData.firstname}
                            onChange={handleChange}
                            className="auth-input auth-input-half"
                            required
                        />
                        <input
                            type="text"
                            name="lastname"
                            placeholder="Nom"
                            value={formData.lastname}
                            onChange={handleChange}
                            className="auth-input auth-input-half"
                            required
                        />
                    </div>
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
                        placeholder="Mot de passe (6 caractères min.)"
                        value={formData.password}
                        onChange={handleChange}
                        className="auth-input"
                        minLength={6}
                        required
                    />
                    <button type="submit" className="auth-button" disabled={loading}>
                        {loading ? "Chargement..." : "S'INSCRIRE"}
                    </button>
                </form>
                <p className="auth-switch">
                    Déjà membre ? <Link to="/login">Se connecter</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
