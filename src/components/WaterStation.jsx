import React from "react";
import { Link } from "react-router-dom";
import "./SubPage.css";
import cardioImg from "../assets/cardio.png";
import coursImg from "../assets/cours.png";
import bikingImg from "../assets/biking.png";

const features = [
    { icon: "💧", name: "YANGA SPORTS", sub: "Eau vitaminée", desc: "Boissons vitaminées fraîches et fruitées, spécialement formulées pour les sportifs actifs." },
    { icon: "🍋", name: "CITRON", sub: "Goût frais", desc: "Notre eau vitaminée Citron pour une hydratation désaltérante et riche en vitamine C." },
    { icon: "🥥", name: "COCO", sub: "Énergie tropicale", desc: "La saveur Coco pour une hydratation exotic et une recharge électrolytique naturelle après l'effort." },
    { icon: "🍓", name: "FRUITS ROUGES", sub: "Antioxydants", desc: "Riche en antioxydants, la saveur Fruits Rouges pour récupérer plus vite après vos sessions." },
    { icon: "🌿", name: "MENTHE", sub: "Fraîcheur intense", desc: "Un boost de fraîcheur mentholée pour vous revitaliser instantanément après l'effort." },
    { icon: "🌍", name: "ÉCOLOGIQUE", sub: "Gourde rechargeable", desc: "Remplissez votre gourde à nos stations et réduisez votre empreinte plastique. Un geste pour la planète." },
];

const benefits = [
    { icon: "⚡", title: "Recharge électrolytique", text: "Nos boissons compensent la perte de minéraux (sodium, potassium, magnésium) causée par la transpiration." },
    { icon: "🔋", title: "Énergie maintenue", text: "Les vitamines B ajoutées soutiennent votre métabolisme énergétique tout au long de la séance." },
    { icon: "💪", title: "Récupération rapide", text: "Une bonne hydratation post-effort réduit les courbatures et accélère la régénération musculaire." },
    { icon: "🌿", title: "Naturel & Sain", text: "Sans conservateurs artificiels, nos boissons sont formulées pour respecter votre corps et vos performances." },
];

const WaterStation = () => (
    <div className="sp-page sp-water">
        <section className="sp-hero" style={{ backgroundImage: `url(${cardioImg})` }}>
            <div className="sp-hero-content">
                <p className="sp-hero-eyebrow">Concept Fitness Park</p>
                <h1 className="sp-hero-title">WATER<br /><span className="sp-accent">STATION</span></h1>
                <p className="sp-hero-desc">
                    L'hydratation est la clé de la performance. Découvrez nos boissons
                    Yanga Sports, vitaminées et fruitées, conçues pour les athlètes.
                </p>
                <div className="sp-hero-actions">
                    <Link to="/abonnements" className="sp-btn-primary">Je m'inscris</Link>
                    <Link to="/concept" className="sp-btn-outline">Retour au Concept</Link>
                </div>
            </div>
        </section>

        <div className="sp-stats-strip">
            {[
                { num: "5+", label: "Saveurs" },
                { num: "0%", label: "Conservateurs" },
                { num: "100%", label: "Vitaminé" },
                { num: "♻️", label: "Écologique" },
            ].map((s, i) => (
                <div className="sp-stat" key={i}>
                    <div className="sp-stat-num">{s.num}</div>
                    <div className="sp-stat-lbl">{s.label}</div>
                </div>
            ))}
        </div>

        <div className="sp-intro">
            <div className="sp-intro-img">
                <img src={bikingImg} alt="Water Station" />
                <span className="sp-intro-badge">💧 Hydratation Premium</span>
            </div>
            <div className="sp-intro-text">
                <p className="sp-label">Votre hydratation, notre priorité</p>
                <h2 className="sp-section-title">BUVEZ<br /><span className="sp-accent">MIEUX</span></h2>
                <p className="sp-body-text">
                    La Water Station Fitness Park propose les boissons Yanga Sports,
                    une gamme unique de d'eaux vitaminées fraîches et fruitées, pensées
                    pour optimiser votre récupération et doper vos performances.
                </p>
                <p className="sp-body-text">
                    Remplissez votre gourde à nos fontaines connectées et réduisez votre
                    impact environnemental tout en restant au top de votre hydratation.
                </p>
                <Link to="/abonnements" className="sp-btn-primary">Accéder à la Water Station</Link>
            </div>
        </div>

        <section className="sp-features">
            <div className="sp-features-header">
                <h2>NOS <span className="sp-accent">SAVEURS</span></h2>
                <p>Découvrez notre gamme de boissons vitaminées pour chaque moment de votre entraînement.</p>
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
                    <p className="sp-label">L'importance de l'hydratation</p>
                    <h2 className="sp-section-title">HYDRATEZ<br /><span className="sp-accent">MIEUX</span></h2>
                    <ul className="sp-benefits-list">
                        {benefits.map((b, i) => (
                            <li className="sp-benefit-item" key={i}>
                                <div className="sp-benefit-icon">{b.icon}</div>
                                <div className="sp-benefit-text"><h4>{b.title}</h4><p>{b.text}</p></div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sp-visual"><img src={coursImg} alt="Hydratation" /></div>
            </div>
        </section>

        <section className="sp-cta">
            <h2>RESTEZ<br /><span className="sp-accent">HYDRATÉ</span></h2>
            <p>La performance commence par l'hydratation. Rejoignez Fitness Park et découvrez l'expérience Yanga Sports.</p>
            <Link to="/abonnements" className="sp-btn-primary">Rejoindre Fitness Park</Link>
        </section>

        <div className="sp-back-nav">
            <Link to="/concept" className="sp-back-link">← Retour à tous les espaces</Link>
        </div>
    </div>
);

export default WaterStation;
