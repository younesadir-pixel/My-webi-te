import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./abonnements.css";
import musculationImg from "../assets/musculation.png";
import crossImg from "../assets/cross.png";

/* ── DATA ────────────────────────────────────────────────────────── */
const plans = [
    {
        icon: "🏅",
        label: "Pour débuter",
        name: "FORMULE CLASSIC",
        amount: "249",
        period: "DHS / MOIS — Engagement 12 mois",
        desc: "L'option idéale pour les pratiquants réguliers qui souhaitent un accès complet à leur club. Profitez de tout l'équipement haut de gamme pour vos séances quotidiennes.",
        features: [
            { text: "Accès illimité au club Racine", ok: true },
            { text: "Équipements Technogym dernière génération", ok: true },
            { text: "Accès 7j/7  de 06h à 23h", ok: true },
            { text: "Casiers sécurisés inclus", ok: true },
            { text: "Accès au réseau national", ok: false },
            { text: "Invité gratuit week-end", ok: false },
        ],
        featured: false,
        badgeText: null,
    },
    {
        icon: "👑",
        label: "Le plus populaire",
        name: "FORMULE ULTIMATE",
        amount: "349",
        period: "DHS / MOIS — Sans engagement",
        desc: "Ne vous fixez aucune limite. Entraînez-vous dans n'importe quel club Fitness Park Maroc, quand vous voulez. Le pass VIP pour viser l'excellence sans contrainte.",
        features: [
            { text: "Accès illimité à TOUT le réseau", ok: true },
            { text: "Équipements Technogym dernière génération", ok: true },
            { text: "Accès 7j/7 de 06h à 23h", ok: true },
            { text: "Invité gratuit tous les week-ends", ok: true },
            { text: "Boissons Yanga Sports incluses", ok: true },
            { text: "Session Boditrax mensuelle offerte", ok: true },
        ],
        featured: true,
        badgeText: "⚡ MEILLEUR CHOIX",
    },
    {
        icon: "🎓",
        label: "Moins de 26 ans",
        name: "OFFRE ÉTUDIANTS",
        amount: "199",
        period: "DHS / MOIS — Sur justificatif",
        desc: "Tu as soif de performance mais un budget serré ? Pas de compromis sur la qualité. Accède au meilleur du fitness à un tarif spécialement adapté à ton statut étudiant.",
        features: [
            { text: "Accès illimité au club Racine", ok: true },
            { text: "Équipements Technogym dernière génération", ok: true },
            { text: "Accès 7j/7 de 06h à 23h", ok: true },
            { text: "Frais d'inscription réduits", ok: true },
            { text: "Accès au réseau national", ok: false },
            { text: "Invité gratuit week-end", ok: false },
        ],
        featured: false,
        badgeText: null,
    },
    {
        icon: "🤝",
        label: "Partagez la passion",
        name: "PARRAINAGE",
        amount: "WIN",
        period: "WIN — Gagnant / Gagnant",
        desc: "Le sport, c'est mieux à deux. Parrainez un ami et profitez ensemble d'avantages exclusifs. Chaque parrainage récompensé, sans limite de parrainages.",
        features: [
            { text: "1 mois offert pour le parrain", ok: true },
            { text: "Frais de dossier offerts pour le filleul", ok: true },
            { text: "Accès aux challenges Duo", ok: true },
            { text: "Cadeaux exclusifs Fitness Park", ok: true },
            { text: "Cumulable avec votre abonnement", ok: true },
            { text: "Sans limite de parrainages", ok: true },
        ],
        featured: false,
        badgeText: null,
    },
];

const compareRows = [
    { label: "Accès au club de référence", classic: true, ultimate: true, student: true },
    { label: "Accès au réseau national", classic: false, ultimate: true, student: false },
    { label: "7j/7 — 06h à 23h", classic: true, ultimate: true, student: true },
    { label: "Équipements Technogym", classic: true, ultimate: true, student: true },
    { label: "Invité gratuit week-end", classic: false, ultimate: true, student: false },
    { label: "Boissons Yanga Sports", classic: false, ultimate: true, student: false },
    { label: "Session Boditrax mensuelle", classic: false, ultimate: true, student: false },
    { label: "Casiers sécurisés", classic: true, ultimate: true, student: true },
    { label: "Cours collectifs inclus", classic: true, ultimate: true, student: true },
    { label: "Sans engagement", classic: false, ultimate: true, student: false },
];

const includedFeatures = [
    { icon: "🏋️", title: "Équipements Technogym", desc: "Appareils dernière génération pour musculation, cardio et functional training." },
    { icon: "🚿", title: "Vestiaires Premium", desc: "Vestiaires spacieux, casiers sécurisés et douches à votre disposition." },
    { icon: "📱", title: "App Fitness Park", desc: "Suivez vos séances, réservez des cours et tracez votre progression sur l'appli." },
    { icon: "👨‍🏫", title: "Coachs Certifiés", desc: "Une équipe de coachs qualifiés pour vous guider à chaque étape de votre parcours." },
    { icon: "🧴", title: "Espace Bien-être", desc: "Espace étirement, zone récupération et services Hydromassage et Sismo." },
    { icon: "🌐", title: "Wi-Fi & Écrans HD", desc: "Connecté pendant vos séances avec Wi-Fi gratuit et écrans HD sur les cardios." },
    { icon: "🔒", title: "Sécurité 24h/24", desc: "Accès sécurisé par badge, surveillance et personnel disponible à chaque séance." },
    { icon: "📅", title: "Cours collectifs", desc: "Plus de 20 types de cours collectifs par semaine selon votre abonnement." },
];

const faqs = [
    { q: "Comment puis-je m'inscrire ?", a: "Vous pouvez vous inscrire directement en ligne sur notre site ou vous rendre dans l'un de nos clubs. Un conseiller vous accompagnera pour choisir la formule la mieux adaptée à vos objectifs." },
    { q: "Puis-je changer de formule en cours d'abonnement ?", a: "Oui, il est possible d'upgrader votre abonnement à tout moment. Pour downgrader, cela sera effectif à la date de renouvellement suivante." },
    { q: "Y a-t-il des frais d'inscription ?", a: "Des frais de dossier s'appliquent à l'inscription. Ils sont réduits pour la formule étudiants et offerts pour les filleuls dans le cadre du programme parrainage." },
    { q: "Que comprend l'accès au réseau national (Ultimate) ?", a: "La Formule Ultimate vous donne accès à tous les clubs Fitness Park du Maroc, sans supplément. Vous pouvez vous entraîner dans n'importe quel club de votre choix." },
    { q: "Comment fonctionne le programme de parrainage ?", a: "Parrainez un ami : il bénéficie de frais de dossier offerts, et vous recevez un mois gratuit crédité sur votre prochain prélèvement. Le parrainage est cumulable, sans limite." },
    { q: "La résiliation est-elle possible avant la fin d'engagement ?", a: "En dehors des cas prévus par la loi (déménagement, raisons médicales), la résiliation anticipée sur une formule avec engagement est soumise à des conditions spécifiques détaillées dans votre contrat." },
];

/* ── COMPONENT ──────────────────────────────────────────────────── */
const Abonnements = () => {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="abo-page">

            {/* ── HERO ── */}
            <section
                className="abo-hero"
                style={{ backgroundImage: `url(${musculationImg})` }}
            >
                <div className="abo-hero-content">
                    <p className="abo-hero-eyebrow">Fitness Park Maroc</p>
                    <h1 className="abo-hero-title">
                        VOS<br />
                        <span>ABONNEMENTS</span>
                    </h1>
                    <p className="abo-hero-desc">
                        Trouvez la formule qui correspond à vos objectifs et à votre style de vie.
                        Qualité premium, accès illimité, sans compromis.
                    </p>
                    <div className="abo-hero-badges">
                        <span className="abo-badge">6H – 23H</span>
                        <span className="abo-badge">7J / 7</span>
                        <span className="abo-badge">Haut de Gamme</span>
                    </div>
                </div>
            </section>

            {/* ── STRIP ── */}
            <div className="abo-strip">
                {[
                    { num: "+8", lbl: "Clubs au Maroc" },
                    { num: "6h–23h", lbl: "Ouvert 7j/7" },
                    { num: "0€", lbl: "Sans engagement Ultimate" },
                    { num: "24h", lbl: "Accès sécurisé" },
                ].map((s, i) => (
                    <div className="abo-strip-item" key={i}>
                        <div className="abo-strip-num">{s.num}</div>
                        <div className="abo-strip-lbl">{s.lbl}</div>
                    </div>
                ))}
            </div>

            {/* ── PLANS ── */}
            <section className="abo-plans">
                <div className="abo-plans-header">
                    <h2>NOS <span>FORMULES</span></h2>
                    <p>4 offres conçues pour s'adapter à chaque profil et chaque ambition.</p>
                </div>
                <div className="abo-plans-grid">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`abo-plan-card${plan.featured ? " featured" : ""}`}
                        >
                            {plan.badgeText && (
                                <div className="abo-plan-badge">{plan.badgeText}</div>
                            )}
                            <div>
                                <span className="abo-plan-icon">{plan.icon}</span>
                                <p className="abo-plan-label">{plan.label}</p>
                                <h3 className="abo-plan-name">{plan.name}</h3>
                                <div className="abo-plan-price">
                                    <span className="abo-plan-amount">{plan.amount}</span>
                                    {plan.amount !== "WIN" && (
                                        <span className="abo-plan-currency">DHS</span>
                                    )}
                                </div>
                                <p className="abo-plan-period">{plan.period}</p>
                                <p className="abo-plan-desc">{plan.desc}</p>
                                <ul className="abo-plan-features">
                                    {plan.features.map((f, j) => (
                                        <li
                                            key={j}
                                            className={`abo-plan-feature${!f.ok ? " disabled" : ""}`}
                                        >
                                            {f.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link
                                to="/inscription"
                                className={`abo-plan-btn ${plan.featured ? "primary" : "outline"}`}
                            >
                                Choisir cette offre
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── COMPARISON TABLE ── */}
            <section className="abo-compare">
                <div className="abo-compare-header">
                    <h2>COMPARER LES <span>FORMULES</span></h2>
                </div>
                <table className="abo-compare-table">
                    <thead>
                        <tr>
                            <th>Avantages</th>
                            <th>CLASSIC</th>
                            <th className="featured-col">ULTIMATE ⭐</th>
                            <th>ÉTUDIANTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {compareRows.map((row, i) => (
                            <tr key={i}>
                                <td>{row.label}</td>
                                <td>{row.classic ? <span className="abo-check">✓</span> : <span className="abo-cross">—</span>}</td>
                                <td>{row.ultimate ? <span className="abo-check">✓</span> : <span className="abo-cross">—</span>}</td>
                                <td>{row.student ? <span className="abo-check">✓</span> : <span className="abo-cross">—</span>}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {/* ── INCLUDED FEATURES ── */}
            <section className="abo-features">
                <div className="abo-features-header">
                    <h2>INCLUS DANS <span>TOUS LES ABONNEMENTS</span></h2>
                    <p>Chaque formule vous donne accès à l'ensemble de nos équipements premium.</p>
                </div>
                <div className="abo-features-grid">
                    {includedFeatures.map((f, i) => (
                        <div className="abo-feature-card" key={i}>
                            <span className="abo-feature-icon">{f.icon}</span>
                            <h4 className="abo-feature-title">{f.title}</h4>
                            <p className="abo-feature-desc">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="abo-faq">
                <div className="abo-faq-header">
                    <h2>QUESTIONS <span>FRÉQUENTES</span></h2>
                </div>
                <div className="abo-faq-list">
                    {faqs.map((faq, i) => (
                        <div className="abo-faq-item" key={i}>
                            <button
                                className={`abo-faq-question${openFaq === i ? " open" : ""}`}
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                {faq.q}
                                <span className="icon">+</span>
                            </button>
                            <div className={`abo-faq-answer${openFaq === i ? " open" : ""}`}>
                                <p className="abo-faq-answer-inner">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA FINAL ── */}
            <section
                className="abo-cta"
                style={{ backgroundImage: `url(${crossImg})` }}
            >
                <div className="abo-cta-content">
                    <h2>PRÊT À VOUS<br /><span>TRANSFORMER ?</span></h2>
                    <p>
                        Rejoignez des milliers de membres Fitness Park au Maroc et commencez
                        votre transformation dès aujourd'hui. Votre première séance vous attend.
                    </p>
                    <Link to="/inscription" className="abo-cta-btn">
                        Je m'inscris maintenant
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Abonnements;
