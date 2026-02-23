import React from "react";
import { Link } from "react-router-dom";
import "./SubPage.css";
import bikingImg from "../assets/biking.png";
import cardioImg from "../assets/cardio.png";


const features = [
    { icon: "🚲", name: "RPM", sub: "Rhythm & Power", desc: "Séances chorégraphiées en musique avec simulation de montées, descentes et sprints sur terrain virtuel." },
    { icon: "🌊", name: "IMMERSION 360°", sub: "Expérience sensorielle", desc: "Ambiance audiovisuelle unique : effets sonores, lumières et projections pour vous plonger dans le peloton." },
    { icon: "📊", name: "POWER TRACKING", sub: "Performance mesurée", desc: "Vélos connectés avec suivi en temps réel de la puissance (watts), cadence et fréquence cardiaque." },
    { icon: "🔥", name: "BURN RIDE", sub: "Cardio intense", desc: "Sessions haute intensité pour brûler un maximum de calories et booster votre métabolisme." },
    { icon: "🧘", name: "RECOVERY RIDE", sub: "Récupération active", desc: "Séances à faible intensité pour favoriser la récupération musculaire tout en maintenant l'activité." },
    { icon: "🏆", name: "CHALLENGE", sub: "Compétition friendly", desc: "Défiez vos partenaires et battez vos records sur nos cycles virtuels classés en temps réel." },
];

const benefits = [
    { icon: "❤️", title: "Cardio sans impact", text: "Le vélo stationnaire préserve vos articulations tout en offrant un cardio intensif et efficace." },
    { icon: "🦵", title: "Sculpte le bas du corps", text: "Quadriceps, ischio-jambiers, fessiers et mollets sont intensément sollicités à chaque session." },
    { icon: "🔥", title: "500–800 cal/h", desc: "Selon l'intensité, une session de cycling brûle entre 500 et 800 calories." },
    { icon: "🎵", title: "Motivation maximale", text: "La musique et l'ambiance collective décuplent votre motivation et vous poussent à repousser vos limites." },
];

const CyclePark = () => (
    <div className="sp-page sp-cycle">
        <section className="sp-hero" style={{ backgroundImage: `url(${bikingImg})` }}>
            <div className="sp-hero-content">
                <p className="sp-hero-eyebrow">Concept Fitness Park</p>
                <h1 className="sp-hero-title">CYCLE<br /><span className="sp-accent">PARK</span></h1>
                <p className="sp-hero-desc">
                    Plongez dans une expérience de cycling immersive avec son et lumières.
                    Pédalez vers l'excellence, repoussez vos limites en groupe.
                </p>
                <div className="sp-hero-actions">
                    <Link to="/abonnements" className="sp-btn-primary">Je m'inscris</Link>
                    <Link to="/concept" className="sp-btn-outline">Retour au Concept</Link>
                </div>
            </div>
        </section>

        <div className="sp-stats-strip">
            {[
                { num: "500+", label: "Calories / séance" },
                { num: "45'", label: "Durée moyenne" },
                { num: "360°", label: "Immersion sonore" },
                { num: "0", label: "Impact articulaire" },
            ].map((s, i) => (
                <div className="sp-stat" key={i}>
                    <div className="sp-stat-num">{s.num}</div>
                    <div className="sp-stat-lbl">{s.label}</div>
                </div>
            ))}
        </div>

        <div className="sp-intro">
            <div className="sp-intro-img">
                <img src={cardioImg} alt="Cycle Park" />
                <span className="sp-intro-badge">🚲 Indoor Cycling</span>
            </div>
            <div className="sp-intro-text">
                <p className="sp-label">L'expérience cycling ultime</p>
                <h2 className="sp-section-title">PÉDALEZ VERS<br /><span className="sp-accent">L'EXCELLENCE</span></h2>
                <p className="sp-body-text">
                    Le Cycle Park vous transporte dans un univers sonore et visuel unique.
                    Entouré de vos partenaires d'entraînement et dynamisé par un coach passionné,
                    chaque session devient une aventure.
                </p>
                <p className="sp-body-text">
                    Nos vélos connectés mesurent votre puissance en temps réel pour adapter
                    l'intensité à votre niveau et maximiser vos progrès.
                </p>
                <Link to="/abonnements" className="sp-btn-primary">Commencer à pédaler</Link>
            </div>
        </div>

        <section className="sp-features">
            <div className="sp-features-header">
                <h2>NOS <span className="sp-accent">FORMATS</span></h2>
                <p>Des sessions variées pour tous les niveaux et tous les objectifs cardio.</p>
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
                    <p className="sp-label">Pourquoi choisir le cycling indoor ?</p>
                    <h2 className="sp-section-title">LES <span className="sp-accent">BÉNÉFICES</span></h2>
                    <ul className="sp-benefits-list">
                        {benefits.map((b, i) => (
                            <li className="sp-benefit-item" key={i}>
                                <div className="sp-benefit-icon">{b.icon}</div>
                                <div className="sp-benefit-text"><h4>{b.title}</h4><p>{b.text || b.desc}</p></div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sp-visual"><img src={bikingImg} alt="Bénéfices cycling" /></div>
            </div>
        </section>

        <section className="sp-cta">
            <h2>PRÊT À<br /><span className="sp-accent">PÉDALER ?</span></h2>
            <p>Rejoignez la communauté Cycle Park et vivez l'expérience cycling la plus immersive du Maroc.</p>
            <Link to="/abonnements" className="sp-btn-primary">Rejoindre Fitness Park</Link>
        </section>

        <div className="sp-back-nav">
            <Link to="/concept" className="sp-back-link">← Retour à tous les espaces</Link>
        </div>
    </div>
);

export default CyclePark;
