import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const MemberSpace = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    // Mock Data for progression
    const stats = [
        { label: "Séances cette semaine", value: "3" },
        { label: "Calories brûlées", value: "1,250" },
        { label: "Temps d'entraînement", value: "4h 30m" }
    ];

    if (!user) return <p style={{ color: 'white', textAlign: 'center', marginTop: '100px' }}>Chargement...</p>;

    return (
        <div style={styles.pageContainer}>
            <div style={styles.dashboardContainer}>
                <div style={styles.header}>
                    <div>
                        <h1 style={styles.welcome}>Bonjour, <span style={{ color: '#FFD600' }}>{user.firstname}</span> !</h1>
                        <p style={styles.subtitle}>Bienvenue dans votre espace membre.</p>
                    </div>
                    <button onClick={handleLogout} style={styles.logoutButton}>DÉCONNEXION</button>
                </div>

                <div style={styles.sectionTitle}>VOTRE PROGRESSION</div>
                <div style={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <div key={index} style={styles.statCard}>
                            <div style={styles.statValue}>{stat.value}</div>
                            <div style={styles.statLabel}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div style={styles.sectionTitle}>VOS INFORMATIONS</div>
                <div style={styles.infoCard}>
                    <p><strong>Nom complet :</strong> {user.firstname} {user.lastname}</p>
                    <p><strong>Email :</strong> {user.email}</p>
                    <p><strong>Membre depuis le :</strong> {new Date(user.created_at).toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    pageContainer: {
        minHeight: "100vh",
        backgroundColor: "#121212",
        padding: "120px 20px",
        color: "white",
        fontFamily: "'Segoe UI', sans-serif"
    },
    dashboardContainer: {
        maxWidth: "1000px",
        margin: "0 auto",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "40px",
        borderBottom: "1px solid #333",
        paddingBottom: "20px"
    },
    welcome: {
        fontSize: "36px",
        fontFamily: "'Impact', sans-serif",
        letterSpacing: "1px",
        margin: 0
    },
    subtitle: {
        color: "#aaa",
        marginTop: "5px"
    },
    logoutButton: {
        backgroundColor: "transparent",
        border: "1px solid #FFD600",
        color: "#FFD600",
        padding: "10px 20px",
        cursor: "pointer",
        fontWeight: "bold",
        transition: "all 0.3s"
    },
    sectionTitle: {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "20px",
        color: "#FFD600",
        textTransform: "uppercase"
    },
    statsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        marginBottom: "40px"
    },
    statCard: {
        backgroundColor: "#1e1e1e",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
    },
    statValue: {
        fontSize: "40px",
        fontWeight: "bold",
        color: "white",
        marginBottom: "5px"
    },
    statLabel: {
        color: "#aaa",
        fontSize: "14px",
        textTransform: "uppercase"
    },
    infoCard: {
        backgroundColor: "#1e1e1e",
        padding: "30px",
        borderRadius: "8px",
        lineHeight: "1.8",
        fontSize: "16px"
    }
};

export default MemberSpace;
