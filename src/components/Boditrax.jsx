import React from "react";
import { Link } from "react-router-dom";
import "./SubPage.css";
import coursImg from "../assets/cours.png";
import cardioImg from "../assets/cardio.png";
import crossImg from "../assets/cross.png";

const features = [
    { icon: "⚖️", name: "POIDS CORPOREL", sub: "Composition précise", desc: "Masse grasse totale et segmentaire, masse maigre, eau corporelle totale et intracellulaire." },
    { icon: "💪", name: "MASSE MUSCULAIRE", sub: "Par segment", desc: "Analyse de la masse musculaire de chaque membre séparément pour détecter les déséquilibres." },
    { icon: "💧", name: "HYDRATATION", sub: "Taux d'eau", desc: "Mesure précise de votre niveau d'hydratation pour optimiser votre récupération et performances." },
    { icon: "🦴", name: "MASSE OSSEUSE", sub: "Densité & santé", desc: "Estimation de la densité osseuse pour prévenir les risques de fracture et adapter l'entraînement." },
    { icon: "📈", name: "SUIVI TEMPOREL", sub: "Historique & progression", desc: "Consultez vos mesures précédentes et visualisez votre progression sur l'application Boditrax." },
    { icon: "🎯", name: "OBJECTIFS", sub: "Plan personnalisé", desc: "Recevez des recommandations personnalisées basées sur votre composition corporelle actuelle." },
];

const benefits = [
    { icon: "🔍", title: "Précision médicale", text: "La technologie impédancemétrie bioélectrique de Boditrax est utilisée dans les milieux médicaux et sportifs." },
    { icon: "🎯", title: "Objectifs ciblés", text: "Connaître sa composition corporelle précise permet d'adapter son programme d'entraînement avec exactitude." },
    { icon: "📱", title: "Suivi digital", text: "Toutes vos mesures sont accessibles sur l'application Boditrax pour un suivi de progression en temps réel." },
    { icon: "💡", title: "Coaching basé sur les données", text: "Nos coachs utilisent vos résultats Boditrax pour personnaliser chaque plan d'entraînement." },
];

const Boditrax = () => (
    <div className="sp-page sp-boditrax">
        <section className="sp-hero" style={{ backgroundImage: `url(${coursImg})` }}>
            <div className="sp-hero-content">
                <p className="sp-hero-eyebrow">Concept Fitness Park</p>
                <h1 className="sp-hero-title">BODI<br /><span className="sp-accent">TRAX</span></h1>
                <p className="sp-hero-desc">
                    Découvrez votre composition corporelle avec une précision médicale.
                    Masse grasse, musculaire, hydratation — mesurez ce qui compte vraiment.
                </p>
                <div className="sp-hero-actions">
                    <Link to="/abonnements" className="sp-btn-primary">Je m'inscris</Link>
                    <Link to="/concept" className="sp-btn-outline">Retour au Concept</Link>
                </div>
            </div>
        </section>

        <div className="sp-stats-strip">
            {[
                { num: "8+", label: "Mesures analysées" },
                { num: "< 2'", label: "Durée de l'analyse" },
                { num: "99%", label: "Précision" },
                { num: "∞", label: "Historique" },
            ].map((s, i) => (
                <div className="sp-stat" key={i}>
                    <div className="sp-stat-num">{s.num}</div>
                    <div className="sp-stat-lbl">{s.label}</div>
                </div>
            ))}
        </div>

        <div className="sp-intro">
            <div className="sp-intro-img">
                <img src={cardioImg} alt="Boditrax" />
                <span className="sp-intro-badge">📊 Analyse Corporelle</span>
            </div>
            <div className="sp-intro-text">
                <p className="sp-label">La science au service de la performance</p>
                <h2 className="sp-section-title">MESUREZ<br /><span className="sp-accent">CHAQUE DÉTAIL</span></h2>
                <p className="sp-body-text">
                    La technologie Boditrax utilise l'impédancemétrie bioélectrique pour analyser
                    votre composition corporelle en moins de 2 minutes avec une précision de niveau médical.
                </p>
                <p className="sp-body-text">
                    Ces données précieuses vous permettent d'adapter votre entraînement et votre
                    alimentation pour atteindre vos objectifs plus rapidement et efficacement.
                </p>
                <Link to="/abonnements" className="sp-btn-primary">Analyser mon corps</Link>
            </div>
        </div>

        <section className="sp-features">
            <div className="sp-features-header">
                <h2>CE QUE <span className="sp-accent">NOUS MESURONS</span></h2>
                <p>6 métriques clés analysées avec une précision médicale en moins de 2 minutes.</p>
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
                    <p className="sp-label">Pourquoi analyser sa composition corporelle ?</p>
                    <h2 className="sp-section-title">LES <span className="sp-accent">AVANTAGES</span></h2>
                    <ul className="sp-benefits-list">
                        {benefits.map((b, i) => (
                            <li className="sp-benefit-item" key={i}>
                                <div className="sp-benefit-icon">{b.icon}</div>
                                <div className="sp-benefit-text"><h4>{b.title}</h4><p>{b.text}</p></div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sp-visual"><img src={crossImg} alt="Analyse données" /></div>
            </div>
        </section>

        <section className="sp-cta">
            <h2>CONNAISSEZ<br /><span className="sp-accent">VOTRE CORPS</span></h2>
            <p>Faites votre première analyse Boditrax et obtenez un plan d'entraînement personnalisé basé sur vos données réelles.</p>
            <Link to="/abonnements" className="sp-btn-primary">Rejoindre Fitness Park</Link>
        </section>

        <div className="sp-back-nav">
            <Link to="/concept" className="sp-back-link">← Retour à tous les espaces</Link>
        </div>
    </div>
);

export default Boditrax;
