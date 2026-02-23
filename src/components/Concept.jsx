import React from "react";
import { Link } from "react-router-dom";
import "./Concept.css";
import musculationImg from "../assets/musculation.png";
import cardioImg from "../assets/cardio.png";
import coursImg from "../assets/cours.png";
import crossImg from "../assets/cross.png";
import bikingImg from "../assets/biking.png";
import heroImg from "../assets/aaron-brogden-9y4MaTz2Js0-unsplash.jpg";

/* =====================================================================
   DATA
===================================================================== */
const spaces = [
    {
        id: "01",
        tag: "Force & Puissance",
        title: "BURNING PARK",
        desc: "Un espace 100% dédié aux cours collectifs haute intensité. Brûlez des calories, dépassez vos limites et atteignez votre meilleure forme avec des coachs certifiés.",
        img: crossImg,
        to: "/burning-park",
        reverse: false,
    },
    {
        id: "02",
        tag: "Arts Martiaux & Combat",
        title: "FIGHT PARK",
        desc: "Boxe, MMA, kick-boxing... Le Fight Park vous plonge dans l'univers du combat avec un équipement professionnel et des coachs spécialisés.",
        img: musculationImg,
        to: "/fight-park",
        reverse: true,
    },
    {
        id: "03",
        tag: "Cardio Indoor",
        title: "CYCLE PARK",
        desc: "Vivez l'expérience du cycling immersif avec une ambiance son et lumière unique. Sessions en groupe sur vélos connectés pour un cardio intense et motivant.",
        img: bikingImg,
        to: "/cycle-park",
        reverse: false,
    },
    {
        id: "04",
        tag: "Bien-être & Récupération",
        title: "WATER STATION",
        desc: "Hydratation intelligente et stations de récupération pour optimiser vos performances et accélérer votre récupération musculaire après l'effort.",
        img: cardioImg,
        to: "/water-station",
        reverse: true,
    },
    {
        id: "05",
        tag: "Analyse Corporelle",
        title: "BODITRAX",
        desc: "Mesurez votre composition corporelle avec précision grâce à notre technologie Boditrax. Suivez votre progression et adaptez votre entraînement à vos objectifs.",
        img: coursImg,
        to: "/boditrax",
        reverse: false,
    },
];

const stats = [
    { num: "+8", label: "Clubs au Maroc" },
    { num: "6h–23h", label: "Ouvert 7j/7" },
    { num: "+50", label: "Équipements Premium" },
    { num: "100%", label: "Haut de Gamme" },
];

const introItems = [
    { icon: "🏆", text: "Équipements Haut de Gamme" },
    { icon: "🔥", text: "Coachs Certifiés" },
    { icon: "🌟", text: "Ambiance Premium" },
    { icon: "💪", text: "Accessible à Tous" },
];

/* =====================================================================
   COMPONENT
===================================================================== */
const Concept = () => {
    return (
        <div className="concept-page">

            {/* ── HERO ── */}
            <section
                className="concept-hero"
                style={{ backgroundImage: `url(${heroImg})` }}
            >
                <div className="concept-hero-content">
                    <p className="concept-hero-eyebrow">Fitness Park Maroc</p>
                    <h1 className="concept-hero-title">
                        LE CONCEPT<br />
                        <span>FITNESS PARK</span>
                    </h1>
                    <p className="concept-hero-subtitle">
                        Bien plus qu'une salle de sport. Un univers dédié à la performance,
                        au dépassement de soi et au bien-être, accessible à tous.
                    </p>
                    <div className="concept-hero-tags">
                        <span className="concept-hero-tag">Haut de gamme</span>
                        <span className="concept-hero-tag">Liberté</span>
                        <span className="concept-hero-tag">Communauté</span>
                    </div>
                </div>
            </section>

            {/* ── INTRO STRIP ── */}
            <div className="concept-intro-strip">
                {introItems.map((item, i) => (
                    <div className="concept-intro-item" key={i}>
                        <span className="concept-intro-icon">{item.icon}</span>
                        <span className="concept-intro-text">{item.text}</span>
                    </div>
                ))}
            </div>

            {/* ── PHILOSOPHY ── */}
            <section style={{ background: "#0d0d0d" }}>
                <div className="concept-philosophy">
                    <div className="concept-philosophy-text">
                        <h2>
                            L&apos;EXCELLENCE<br />
                            <span>AU QUOTIDIEN</span>
                        </h2>
                        <p>
                            Chez Fitness Park, nous croyons que chacun mérite un accès aux meilleures
                            installations sportives. Notre concept repose sur une expérience premium,
                            des équipements Technogym dernière génération, et une ambiance qui vous
                            propulse vers vos objectifs.
                        </p>
                        <p>
                            Que vous soyez débutant ou athlète confirmé, nos espaces sont conçus
                            pour s'adapter à votre niveau et booster vos performances.
                        </p>
                        <Link to="/abonnements" className="concept-cta-btn">
                            Découvrir nos abonnements
                        </Link>
                    </div>
                    <div className="concept-philosophy-visual">
                        <img src={musculationImg} alt="Salle de musculation premium" />
                    </div>
                </div>
            </section>

            {/* ── SPACES ── */}
            <section className="concept-spaces">
                <div className="concept-spaces-header">
                    <h2>NOS <span>ESPACES</span></h2>
                    <p>
                        Chaque espace est pensé pour une discipline spécifique, avec les meilleurs
                        équipements du marché.
                    </p>
                </div>

                {spaces.map((space) => (
                    <div
                        key={space.id}
                        className={`concept-space-row${space.reverse ? " reverse" : ""}`}
                        style={{ marginBottom: "4px" }}
                    >
                        <div className="concept-space-img">
                            <img src={space.img} alt={space.title} />
                            <div className="concept-space-img-overlay" />
                        </div>
                        <div className="concept-space-info">
                            <div className="concept-space-num">{space.id}</div>
                            <p className="concept-space-tag">{space.tag}</p>
                            <h3 className="concept-space-title">{space.title}</h3>
                            <p className="concept-space-desc">{space.desc}</p>
                            <Link to={space.to} className="concept-space-link">
                                En savoir plus →
                            </Link>
                        </div>
                    </div>
                ))}
            </section>

            {/* ── STATS ── */}
            <div className="concept-stats">
                {stats.map((s, i) => (
                    <div className="concept-stat-item" key={i}>
                        <div className="concept-stat-num">{s.num}</div>
                        <div className="concept-stat-label">{s.label}</div>
                    </div>
                ))}
            </div>

            {/* ── BOTTOM CTA ── */}
            <section
                className="concept-bottom-cta"
                style={{ backgroundImage: `url(${crossImg})` }}
            >
                <div className="concept-bottom-cta-content">
                    <h2>REJOIGNEZ<br /><span>LA COMMUNAUTÉ</span></h2>
                    <p>
                        Intégrez un réseau de membres passionnés et bénéficiez d&apos;un accès illimité
                        à tous nos espaces haut de gamme dès aujourd&apos;hui.
                    </p>
                    <Link to="/abonnements" className="concept-cta-btn">
                        Je m&apos;inscris maintenant
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Concept;
