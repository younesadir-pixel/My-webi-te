import React from "react";
import { Link } from "react-router-dom";
import "./SubPage.css";
import musculationImg from "./musculation.png";
import crossImg from "./cross.png";
import cardioImg from "./cardio.png";

const features = [
    { icon: "🥊", name: "BOXE", sub: "Frappe & Technique", desc: "Sacs de frappe professionnels, ring d'entraînement, gants et équipements haut de gamme pour tous les niveaux." },
    { icon: "🥋", name: "MMA", sub: "Mixed Martial Arts", desc: "Combinez boxe, lutte et grappling dans un programme complet encadré par des coachs certifiés." },
    { icon: "⚡", name: "KICK-BOXING", sub: "Puissance & Vitesse", desc: "Développez votre coordination, votre puissance de frappe et votre cardio avec le kick-boxing." },
    { icon: "🔥", name: "MUAY THAI", sub: "8 Membres", desc: "La boxe thaïlandaise pour un travail complet du corps : poings, coudes, genoux et tibias." },
    { icon: "🎯", name: "TECHNICO-TACTIQUE", sub: "Stratégie de combat", desc: "Affinez votre technique, améliorez vos réflexes et apprenez à lire les mouvements de votre adversaire." },
    { icon: "💪", name: "CONDITIONING", sub: "Force & Endurance", desc: "Entraînements spécifiques pour les combattants : gainage, explosivité et endurance de combat." },
];

const benefits = [
    { icon: "🧠", title: "Confiance en soi", text: "L'entraînement au combat renforce votre mental, votre assurance et votre capacité à gérer le stress." },
    { icon: "❤️", title: "Cardio intensif", text: "Une heure de boxe brûle jusqu'à 800 calories tout en améliorant votre endurance cardiovasculaire." },
    { icon: "💪", title: "Corps complet", text: "Chaque session de combat sollicite l'intégralité du corps pour un développement musculaire harmonieux." },
    { icon: "🎯", title: "Coordination", text: "Améliorez vos réflexes, votre coordination et votre équilibre grâce aux disciplines martiales." },
];

const FightPark = () => (
    <div className="sp-page sp-fight">
        <section className="sp-hero" style={{ backgroundImage: `url(${musculationImg})` }}>
            <div className="sp-hero-content">
                <p className="sp-hero-eyebrow">Concept Fitness Park</p>
                <h1 className="sp-hero-title">FIGHT<br /><span className="sp-accent">PARK</span></h1>
                <p className="sp-hero-desc">
                    Entrez dans l'arène. Boxe, MMA, Kick-Boxing, Muay Thaï — le Fight Park
                    vous offre un espace dédié aux arts martiaux avec un équipement professionnel.
                </p>
                <div className="sp-hero-actions">
                    <Link to="/abonnements" className="sp-btn-primary">Je m'inscris</Link>
                    <Link to="/concept" className="sp-btn-outline">Retour au Concept</Link>
                </div>
            </div>
        </section>

        <div className="sp-stats-strip">
            {[
                { num: "800+", label: "Calories / séance" },
                { num: "6", label: "Disciplines" },
                { num: "100%", label: "Encadré" },
                { num: "Tous", label: "Niveaux" },
            ].map((s, i) => (
                <div className="sp-stat" key={i}>
                    <div className="sp-stat-num">{s.num}</div>
                    <div className="sp-stat-lbl">{s.label}</div>
                </div>
            ))}
        </div>

        <div className="sp-intro">
            <div className="sp-intro-img">
                <img src={crossImg} alt="Fight Park" />
                <span className="sp-intro-badge">🥊 Arts Martiaux</span>
            </div>
            <div className="sp-intro-text">
                <p className="sp-label">L'esprit du combat</p>
                <h2 className="sp-section-title">FORGE TON<br /><span className="sp-accent">MENTAL</span></h2>
                <p className="sp-body-text">
                    Le Fight Park est bien plus qu'un espace de combat. C'est un lieu où vous
                    développez votre discipline, votre force mentale et votre confiance en vous.
                </p>
                <p className="sp-body-text">
                    Avec des sacs de frappe de qualité professionnelle, un ring d'entraînement
                    et des coachs expérimentés, chaque séance vous rapproche de votre meilleure version.
                </p>
                <Link to="/abonnements" className="sp-btn-primary">Commencer maintenant</Link>
            </div>
        </div>

        <section className="sp-features">
            <div className="sp-features-header">
                <h2>NOS <span className="sp-accent">DISCIPLINES</span></h2>
                <p>6 arts martiaux et sports de combat pour tous les niveaux et toutes les envies.</p>
            </div>
            <div className="sp-features-grid">
                {features.map((f, i) => (
                    <div className="sp-feature-card" key={i}>
                        <span className="sp-feature-icon">{f.icon}</span>
                        <p className="sp-feature-sub">{f.sub}</p>
                        <h3 className="sp-feature-name">{f.name}</h3>
                        <p className="sp-feature-desc">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        <section className="sp-benefits">
            <div className="sp-benefits-inner">
                <div>
                    <p className="sp-label">Pourquoi pratiquer un sport de combat ?</p>
                    <h2 className="sp-section-title">LES <span className="sp-accent">BÉNÉFICES</span></h2>
                    <ul className="sp-benefits-list">
                        {benefits.map((b, i) => (
                            <li className="sp-benefit-item" key={i}>
                                <div className="sp-benefit-icon">{b.icon}</div>
                                <div className="sp-benefit-text"><h4>{b.title}</h4><p>{b.text}</p></div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sp-visual"><img src={musculationImg} alt="Bénéfices" /></div>
            </div>
        </section>

        <section className="sp-cta">
            <h2>ENTRE DANS<br /><span className="sp-accent">L'ARÈNE</span></h2>
            <p>Rejoignez la communauté Fight Park et commencez votre parcours de combattant dès aujourd'hui.</p>
            <Link to="/abonnements" className="sp-btn-primary">Rejoindre Fitness Park</Link>
        </section>

        <div className="sp-back-nav">
            <Link to="/concept" className="sp-back-link">← Retour à tous les espaces</Link>
        </div>
    </div>
);

export default FightPark;
