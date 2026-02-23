import React from "react";
import { Link } from "react-router-dom";
import "./SubPage.css";
import cardioImg from "./cardio.png";
import coursImg from "./cours.png";
import musculationImg from "./musculation.png";

const features = [
    { icon: "〰️", name: "VIBRATIONS", sub: "Technologie oscillante", desc: "La plateforme Sismo génère des vibrations de 5 à 35 Hz sollicitant les fibres musculaires profondes inaccessibles autrement." },
    { icon: "🏋️", name: "EXERCICES INTÉGRÉS", sub: "Squats, fentes, gainage", desc: "Combinez les exercices classiques sur la plateforme oscillante pour décupler leur efficacité." },
    { icon: "🌊", name: "DRAINAGE", sub: "Anti-cellulite", desc: "Les vibrations mécaniques stimulent la circulation lymphatique pour réduire la cellulite et la rétention d'eau." },
    { icon: "🦵", name: "TONIFICATION", sub: "Muscles profonds", desc: "Chaque vibration provoque des micro-contractions musculaires involontaires qui tonifient votre silhouette." },
    { icon: "🦴", name: "DENSITÉ OSSEUSE", sub: "Prévention ostéoporose", desc: "Les vibrations mécaniques stimulent la production de tissu osseux et améliorent la densité osseuse." },
    { icon: "⚡", name: "SESSION EXPRESS", sub: "10 minutes suffisent", desc: "10 minutes sur la plateforme Sismo équivalent à 60 minutes d'exercice traditionnel selon les études." },
];

const benefits = [
    { icon: "🏃", title: "Silhouette affinée", text: "L'entraînement par vibrations cible les zones rebelles et aide à remodeler la silhouette durablement." },
    { icon: "⚡", title: "Gain de temps", text: "10 minutes de Sismo remplacent une heure de gainage classique. Idéal pour les emplois du temps chargés." },
    { icon: "💆", title: "Soulagement des douleurs", text: "Les vibrations à basse fréquence soulagent les douleurs chroniques, notamment celles du dos et des articulations." },
    { icon: "🌊", title: "Anti-rétention d'eau", text: "Le drainage lymphatique induit par les vibrations réduit la rétention d'eau et améliore le galbe des membres." },
];

const Sismo = () => (
    <div className="sp-page sp-sismo">
        <section className="sp-hero" style={{ backgroundImage: `url(${cardioImg})` }}>
            <div className="sp-hero-content">
                <p className="sp-hero-eyebrow">Concept Fitness Park</p>
                <h1 className="sp-hero-title">SISMO<br /><span className="sp-accent">FITNESS</span></h1>
                <p className="sp-hero-desc">
                    La technologie des plateformes oscillantes pour tonifier, drainer
                    et remodeler votre silhouette en 10 minutes par session.
                </p>
                <div className="sp-hero-actions">
                    <Link to="/abonnements" className="sp-btn-primary">Je m'inscris</Link>
                    <Link to="/concept" className="sp-btn-outline">Retour au Concept</Link>
                </div>
            </div>
        </section>

        <div className="sp-stats-strip">
            {[
                { num: "10'", label: "= 60' classique" },
                { num: "35 Hz", label: "Fréquence max" },
                { num: "-X cm", label: "Tour de taille" },
                { num: "100%", label: "Indolore" },
            ].map((s, i) => (
                <div className="sp-stat" key={i}>
                    <div className="sp-stat-num">{s.num}</div>
                    <div className="sp-stat-lbl">{s.label}</div>
                </div>
            ))}
        </div>

        <div className="sp-intro">
            <div className="sp-intro-img">
                <img src={coursImg} alt="Sismo" />
                <span className="sp-intro-badge">〰️ Oscillation Fitness</span>
            </div>
            <div className="sp-intro-text">
                <p className="sp-label">La technologie vibratoire au service du fitness</p>
                <h2 className="sp-section-title">VIBREZ POUR<br /><span className="sp-accent">VOUS TRANSFORMER</span></h2>
                <p className="sp-body-text">
                    Les plateformes oscillantes Sismo utilisent des vibrations mécaniques contrôlées
                    pour déclencher des contractions musculaires involontaires dans l'ensemble du corps,
                    ciblant notamment les muscles profonds et stabilisateurs.
                </p>
                <p className="sp-body-text">
                    Résultat : une tonification musculaire profonde, un drainage lymphatique naturel
                    et un remodelage de la silhouette, le tout en un temps record.
                </p>
                <Link to="/abonnements" className="sp-btn-primary">Commencer à vibrer</Link>
            </div>
        </div>

        <section className="sp-features">
            <div className="sp-features-header">
                <h2>LES <span className="sp-accent">BÉNÉFICES</span> SISMO</h2>
                <p>6 effets prouvés scientifiquement de l'entraînement par vibrations mécaniques.</p>
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
                    <p className="sp-label">Pourquoi choisir le Sismo ?</p>
                    <h2 className="sp-section-title">DES RÉSULTATS<br /><span className="sp-accent">VISIBLES</span></h2>
                    <ul className="sp-benefits-list">
                        {benefits.map((b, i) => (
                            <li className="sp-benefit-item" key={i}>
                                <div className="sp-benefit-icon">{b.icon}</div>
                                <div className="sp-benefit-text"><h4>{b.title}</h4><p>{b.text}</p></div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sp-visual"><img src={musculationImg} alt="Résultats Sismo" /></div>
            </div>
        </section>

        <section className="sp-cta">
            <h2>VIBREZ VERS<br /><span className="sp-accent">VOS OBJECTIFS</span></h2>
            <p>10 minutes par jour sur la plateforme Sismo peuvent transformer votre silhouette en quelques semaines.</p>
            <Link to="/abonnements" className="sp-btn-primary">Rejoindre Fitness Park</Link>
        </section>

        <div className="sp-back-nav">
            <Link to="/concept" className="sp-back-link">← Retour à tous les espaces</Link>
        </div>
    </div>
);

export default Sismo;
