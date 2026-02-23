import React from "react";
import { Link } from "react-router-dom";
import "./SubPage.css";
import coursImg from "../assets/cours.png";
import bikingImg from "../assets/biking.png";
import cardioImg from "../assets/cardio.png";

const features = [
    { icon: "💆", name: "MASSAGE DOS", sub: "Colonne & lombaires", desc: "Jets d'eau ciblés sur le dos pour soulager les tensions lombaires et cervicales après l'effort." },
    { icon: "🦵", name: "MASSAGE JAMBES", sub: "Récupération musculaire", desc: "Système de pression aquatique spécifique pour éliminer les toxines et réduire les courbatures." },
    { icon: "💪", name: "MASSAGE ÉPAULES", sub: "Relâchement profond", desc: "Détente des muscles trapèzes souvent contractés lors de l'entraînement en salle." },
    { icon: "🌊", name: "HYDROTHERAPY", sub: "Thérapie aquatique", desc: "Les bienfaits prouvés de l'hydrothérapie pour améliorer la circulation sanguine et lymphatique." },
    { icon: "⏱️", name: "SESSION 10 MIN", sub: "Efficace & rapide", desc: "10 minutes suffisent pour profiter des bienfaits complets du massage hydrodynamique Fitness Park." },
    { icon: "👔", name: "MASSAGE HABILLÉ", sub: "Confort & hygiène", desc: "Restez habillé — aucun contact direct avec l'eau. Propre, rapide et immédiatement disponible." },
];

const benefits = [
    { icon: "🩸", title: "Circulation sanguine", text: "L'hydrothérapie stimule la microcirculation et favorise l'élimination des toxines musculaires post-effort." },
    { icon: "😌", title: "Réduction du stress", text: "Le massage aquatique active le système parasympathique, induisant un état de relaxation profonde en quelques minutes." },
    { icon: "💪", title: "Anti-courbatures", text: "En éliminant l'acide lactique plus rapidement, l'hydromassage réduit les courbatures de 40% selon les études." },
    { icon: "😴", title: "Meilleure récupération", text: "Une séance d'hydromassage post-entraînement peut réduire de moitié le temps de récupération musculaire." },
];

const Hydromassage = () => (
    <div className="sp-page sp-hydro">
        <section className="sp-hero" style={{ backgroundImage: `url(${coursImg})` }}>
            <div className="sp-hero-content">
                <p className="sp-hero-eyebrow">Concept Fitness Park</p>
                <h1 className="sp-hero-title">HYDRO<br /><span className="sp-accent">MASSAGE</span></h1>
                <p className="sp-hero-desc">
                    Récupérez plus vite, détendez-vous profondément. Nos lits d'hydromassage
                    offrent une relaxation musculaire complète directement après votre séance.
                </p>
                <div className="sp-hero-actions">
                    <Link to="/abonnements" className="sp-btn-primary">Je m'inscris</Link>
                    <Link to="/concept" className="sp-btn-outline">Retour au Concept</Link>
                </div>
            </div>
        </section>

        <div className="sp-stats-strip">
            {[
                { num: "10'", label: "Durée de la session" },
                { num: "-40%", label: "Courbatures" },
                { num: "100%", label: "Habillé" },
                { num: "∞", label: "Bien-être" },
            ].map((s, i) => (
                <div className="sp-stat" key={i}>
                    <div className="sp-stat-num">{s.num}</div>
                    <div className="sp-stat-lbl">{s.label}</div>
                </div>
            ))}
        </div>

        <div className="sp-intro">
            <div className="sp-intro-img">
                <img src={bikingImg} alt="Hydromassage" />
                <span className="sp-intro-badge">💆 Récupération & Détente</span>
            </div>
            <div className="sp-intro-text">
                <p className="sp-label">La récupération active revisitée</p>
                <h2 className="sp-section-title">RÉCUPÉREZ<br /><span className="sp-accent">MIEUX</span></h2>
                <p className="sp-body-text">
                    Les lits d'hydromassage Fitness Park utilisent des jets d'eau pressurisée
                    pour massager profondément vos muscles en 10 minutes seulement,
                    sans que vous ayez à vous déshabiller.
                </p>
                <p className="sp-body-text">
                    Scientifiquement prouvé, l'hydromassage améliore la circulation sanguine,
                    réduit les inflammations et accélère la récupération musculaire post-effort.
                </p>
                <Link to="/abonnements" className="sp-btn-primary">Réserver une session</Link>
            </div>
        </div>

        <section className="sp-features">
            <div className="sp-features-header">
                <h2>ZONES <span className="sp-accent">MASSÉES</span></h2>
                <p>Une couverture complète du corps pour une récupération totale en une session.</p>
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
                    <p className="sp-label">Les bienfaits prouvés</p>
                    <h2 className="sp-section-title">SCIENCE &<br /><span className="sp-accent">BIEN-ÊTRE</span></h2>
                    <ul className="sp-benefits-list">
                        {benefits.map((b, i) => (
                            <li className="sp-benefit-item" key={i}>
                                <div className="sp-benefit-icon">{b.icon}</div>
                                <div className="sp-benefit-text"><h4>{b.title}</h4><p>{b.text}</p></div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sp-visual"><img src={cardioImg} alt="Bien-être" /></div>
            </div>
        </section>

        <section className="sp-cta">
            <h2>OFFREZ-VOUS<br /><span className="sp-accent">LA DÉTENTE</span></h2>
            <p>Terminez chaque séance par un hydromassage et transformez votre récupération en moment de pur bien-être.</p>
            <Link to="/abonnements" className="sp-btn-primary">Rejoindre Fitness Park</Link>
        </section>

        <div className="sp-back-nav">
            <Link to="/concept" className="sp-back-link">← Retour à tous les espaces</Link>
        </div>
    </div>
);

export default Hydromassage;
