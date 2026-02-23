import React from "react";
import { Link } from "react-router-dom";
import "./BurningPark.css";
import crossImg from "./cross.png";
import cardioImg from "./cardio.png";
import musculationImg from "./musculation.png";

/* ── DATA ────────────────────────────────────────────────────────── */
const stats = [
    { num: "600+", label: "Calories / séance" },
    { num: "45'", label: "Durée moyenne" },
    { num: "4×/sem", label: "Fréquence idéale" },
    { num: "100%", label: "Encadré" },
];

const programs = [
    {
        icon: "🔥",
        name: "HIIT",
        duration: "30 – 45 min",
        desc: "Alternez sprint et récupération pour brûler un maximum de calories en un minimum de temps. Le cardio ultime.",
    },
    {
        icon: "⚡",
        name: "TABATA",
        duration: "20 – 30 min",
        desc: "20 secondes d'effort intense, 10 secondes de repos. Un protocole scientifiquement prouvé pour booster vos performances.",
    },
    {
        icon: "🏋️",
        name: "CIRCUIT TRAINING",
        duration: "45 – 60 min",
        desc: "Enchaînez des stations poly-articulaires pour un travail complet du corps. Cardio + Force en une seule session.",
    },
    {
        icon: "💪",
        name: "BOOTCAMP",
        duration: "50 – 60 min",
        desc: "L'entraînement militaire revisité pour la salle. Endurance, force et cohésion de groupe au programme.",
    },
    {
        icon: "🎯",
        name: "ACTIVE BURN",
        duration: "45 min",
        desc: "Optimisez l'afterburn effect : votre corps continue à brûler des calories jusqu'à 48h après la séance.",
    },
    {
        icon: "🚀",
        name: "POWER BLAST",
        duration: "30 min",
        desc: "Sessions express ultra-intenses pour les emplois du temps chargés. Pas d'excuse pour ne pas s'entraîner !",
    },
];

const benefits = [
    {
        icon: "🔥",
        title: "Brûlage de graisses",
        text: "Le HIIT booste votre métabolisme et prolonge la combustion calorique bien après la séance, même au repos.",
    },
    {
        icon: "❤️",
        title: "Santé cardiovasculaire",
        text: "Amélioration de l'endurance, réduction du rythme cardiaque au repos et renforcement du cœur.",
    },
    {
        icon: "💪",
        title: "Préservation musculaire",
        text: "Contrairement au cardio classique, le HIIT préserve et développe la masse musculaire.",
    },
    {
        icon: "⏱️",
        title: "Efficacité maximale",
        text: "Des résultats prouvés en moins de temps qu'un entraînement cardio conventionnel.",
    },
];

/* ── COMPONENT ──────────────────────────────────────────────────── */
const BurningPark = () => {
    return (
        <div className="bp-page">

            {/* ── HERO ── */}
            <section
                className="bp-hero"
                style={{ backgroundImage: `url(${crossImg})` }}
            >
                <div className="bp-hero-content">
                    <p className="bp-hero-eyebrow">Concept Fitness Park</p>
                    <h1 className="bp-hero-title">
                        BURNING<br />
                        <span className="fire-word">PARK</span>
                    </h1>
                    <p className="bp-hero-desc">
                        Brûlez des calories, repoussez vos limites et transformez votre corps
                        avec nos cours haute intensité encadrés par des coachs certifiés.
                    </p>
                    <div className="bp-hero-actions">
                        <Link to="/abonnements" className="bp-btn-primary">
                            Je m'inscris
                        </Link>
                        <Link to="/concept" className="bp-btn-outline">
                            Retour au Concept
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── STATS STRIP ── */}
            <div className="bp-stats-strip">
                {stats.map((s, i) => (
                    <div className="bp-stat" key={i}>
                        <div className="bp-stat-num">{s.num}</div>
                        <div className="bp-stat-lbl">{s.label}</div>
                    </div>
                ))}
            </div>

            {/* ── INTRO ── */}
            <div className="bp-intro">
                <div className="bp-intro-img">
                    <img src={cardioImg} alt="Cours Burning Park" />
                    <span className="bp-intro-img-badge">🔥 Haute Intensité</span>
                </div>
                <div className="bp-intro-text">
                    <p className="bp-section-label">Qu'est-ce que le Burning Park ?</p>
                    <h2 className="bp-section-title">
                        L'ART DE BRÛLER<br />
                        <span>PLUS VITE</span>
                    </h2>
                    <p className="bp-section-body">
                        Le Burning Park est un espace dédié à l'entraînement haute intensité (HIIT).
                        Conçu pour maximiser la dépense calorique, chaque cours est encadré par un
                        coach certifié qui vous pousse à vous surpasser.
                    </p>
                    <p className="bp-section-body">
                        Grâce à des protocoles scientifiquement éprouvés, vous brûlez plus de calories
                        en 45 minutes qu'en 90 minutes de cardio classique — et votre corps continue à
                        brûler jusqu'à 48h après la séance !
                    </p>
                    <Link to="/abonnements" className="bp-btn-primary">
                        Commencer maintenant
                    </Link>
                </div>
            </div>

            {/* ── PROGRAMMES ── */}
            <section className="bp-programs">
                <div className="bp-programs-header">
                    <h2>NOS <span>PROGRAMMES</span></h2>
                    <p>6 formats de cours adaptés à tous les niveaux et tous les objectifs.</p>
                </div>
                <div className="bp-programs-grid">
                    {programs.map((p, i) => (
                        <div className="bp-program-card" key={i}>
                            <span className="bp-program-icon">{p.icon}</span>
                            <p className="bp-program-duration">{p.duration}</p>
                            <h3 className="bp-program-name">{p.name}</h3>
                            <p className="bp-program-desc">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── BENEFITS ── */}
            <section className="bp-benefits">
                <div className="bp-benefits-inner">
                    <div>
                        <p className="bp-section-label">Pourquoi choisir le HIIT ?</p>
                        <h2 className="bp-section-title" style={{ marginBottom: "40px" }}>
                            LES <span>BÉNÉFICES</span><br />SCIENTIFIQUES
                        </h2>
                        <ul className="bp-benefits-list">
                            {benefits.map((b, i) => (
                                <li className="bp-benefit-item" key={i}>
                                    <div className="bp-benefit-icon">{b.icon}</div>
                                    <div className="bp-benefit-text">
                                        <h4>{b.title}</h4>
                                        <p>{b.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bp-benefits-visual">
                        <img src={musculationImg} alt="Bénéfices HIIT" />
                    </div>
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <section className="bp-cta">
                <h2>PRÊT À TOUT<br /><span>BRÛLER ?</span></h2>
                <p>
                    Rejoignez la communauté Burning Park et commencez votre transformation dès aujourd'hui.
                    Vos premières séances vous attendent !
                </p>
                <Link to="/abonnements" className="bp-btn-primary">
                    Rejoindre Fitness Park
                </Link>
            </section>

            {/* ── BACK NAV ── */}
            <div className="bp-back-nav">
                <Link to="/concept" className="bp-back-link">
                    ← Retour à tous les espaces
                </Link>
            </div>

        </div>
    );
};

export default BurningPark;
