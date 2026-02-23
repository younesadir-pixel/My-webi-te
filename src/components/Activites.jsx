import React from "react";
import { Link } from "react-router-dom";
import "./activites.css";
import musculationImg from "../assets/musculation.png";
import cardioImg from "../assets/cardio.png";
import crossImg from "../assets/cross.png";
import coursImg from "../assets/cours.png";
import bikingImg from "../assets/biking.png";
import salleImg from "../assets/salle-casablanca.png";

/* ── DATA ─────────────────────────────────────────────────────────── */
const activities = [
    {
        num: "01",
        icon: "🏋️",
        label: "Force & Gainage",
        title: "MUSCULATION",
        desc: "Plus de 50 appareils Technogym pour un travail musculaire complet. Des zones poids libres aux machines guidées, tout est à votre disposition.",
        img: musculationImg,
        to: "/concept",
    },
    {
        num: "02",
        icon: "🚲",
        label: "Cardio Indoor",
        title: "BIKING",
        desc: "Sessions de cycling immersives avec vélos connectés, effets son & lumières et coachs certifiés pour un cardio intense et motivant.",
        img: bikingImg,
        to: "/cycle-park",
    },
    {
        num: "03",
        icon: "🔥",
        label: "Haute Intensité",
        title: "CROSS-TRAINING",
        desc: "Entraînement fonctionnel haute intensité avec TRX, kettlebells, caisses pliométriques. Le meilleur pour brûler des calories et sculpter le corps.",
        img: crossImg,
        to: "/burning-park",
    },
    {
        num: "04",
        icon: "🏃",
        label: "Endurance & Forme",
        title: "CARDIO-TRAINING",
        desc: "Tapis de course, rameurs, vélos elliptiques et steppers avec écrans tactiles connectés. Choisissez votre program et suivez votre progression.",
        img: cardioImg,
        to: "/concept",
    },
    {
        num: "05",
        icon: "🎵",
        label: "Énergie Collective",
        title: "COURS COLLECTIFS",
        desc: "Plus de 20 types de cours : Zumba, Pilates, Step, Body Combat, Sport Club, Yoga... Coachés et virtuels en libre accès selon votre abonnement.",
        img: coursImg,
        to: "/concept",
    },
    {
        num: "06",
        icon: "🥊",
        label: "Arts Martiaux",
        title: "FIGHT PARK",
        desc: "Ring de boxe, sacs de frappe professionnels et équipements MMA. Coachs spécialisés pour vous initier ou perfectionner votre technique.",
        img: musculationImg,
        to: "/fight-park",
    },
];

const coursCollectifs = [
    { icon: "🔥", name: "BODY COMBAT", duration: "45 min", desc: "Inspiré des arts martiaux pour brûler jusqu'à 600 cal/h tout en développant votre coordination." },
    { icon: "💃", name: "ZUMBA", duration: "55 min", desc: "Dansez et brûlez des calories avec ce cours festif et dynamique qui mêle musique latine et fitness." },
    { icon: "🧘", name: "PILATES", duration: "50 min", desc: "Renforcez votre cœur musculaire et améliorez votre posture avec cette méthode de gainage précise." },
    { icon: "🏋️", name: "BODY PUMP", duration: "55 min", desc: "Entraînement à la barre pour tonifier l'ensemble du corps avec des répétitions à haute cadence." },
    { icon: "🚲", name: "CYCLING", duration: "45 min", desc: "Session de vélo indoor immersive avec musique et simulation de terrain en group pour un cardio intense." },
    { icon: "⚡", name: "HIIT BLAST", duration: "30 min", desc: "30 minutes ultra-intenses en style tabata pour brûler un maximum de calories post-effort." },
    { icon: "🏃", name: "STEP AEROBIC", duration: "50 min", desc: "Choreographies sur marche pour améliorer l'endurance, la coordination et le tonus musculaire." },
    { icon: "🌊", name: "YOGA FLOW", duration: "60 min", desc: "Enchaînements fluides pour gagner en souplesse, en équilibre et en sérénité mentale." },
];

/* Planning hebdomadaire */
const scheduleData = [
    {
        time: "07:00 – 07:45",
        lun: { label: "BODY PUMP", type: "force" },
        mar: { label: "HIIT BLAST", type: "hiit" },
        mer: { label: "CYCLING", type: "cycling" },
        jeu: { label: "BODY PUMP", type: "force" },
        ven: { label: "HIIT BLAST", type: "hiit" },
        sam: { label: "YOGA FLOW", type: "yoga" },
    },
    {
        time: "09:00 – 10:00",
        lun: { label: "YOGA FLOW", type: "yoga" },
        mar: { label: "PILATES", type: "yoga" },
        mer: { label: "BODY PUMP", type: "force" },
        jeu: { label: "PILATES", type: "yoga" },
        ven: { label: "YOGA FLOW", type: "yoga" },
        sam: { label: "CYCLING", type: "cycling" },
    },
    {
        time: "12:00 – 12:45",
        lun: { label: "CYCLING", type: "cycling" },
        mar: { label: "BODY COMBAT", type: "boxing" },
        mer: { label: "ZUMBA", type: "hiit" },
        jeu: { label: "CYCLING", type: "cycling" },
        ven: { label: "BODY COMBAT", type: "boxing" },
        sam: { label: "BODY PUMP", type: "force" },
    },
    {
        time: "17:30 – 18:15",
        lun: { label: "HIIT BLAST", type: "hiit" },
        mar: { label: "STEP AEROBIC", type: "hiit" },
        mer: { label: "BODY COMBAT", type: "boxing" },
        jeu: { label: "ZUMBA", type: "hiit" },
        ven: { label: "CYCLING", type: "cycling" },
        sam: { label: "HIIT BLAST", type: "hiit" },
    },
    {
        time: "19:00 – 20:00",
        lun: { label: "BODY COMBAT", type: "boxing" },
        mar: { label: "YOGA FLOW", type: "yoga" },
        mer: { label: "PILATES", type: "yoga" },
        jeu: { label: "BODY COMBAT", type: "boxing" },
        ven: { label: "BODY PUMP", type: "force" },
        sam: { label: "—", type: "none" },
    },
];

const coaches = [
    { img: crossImg, name: "AHMED B.", specialty: "HIIT & Cross-Training", bio: "Coach certifié NASM avec 8 ans d'expérience. Spécialiste du functional training et HIIT." },
    { img: cardioImg, name: "SARA M.", specialty: "Yoga & Pilates", bio: "Instructrice certifiée, 200h RYT Yoga Alliance. Elle transforme chaque séance en moment de recentrage." },
    { img: bikingImg, name: "KARIM O.", specialty: "Boxing & MMA", bio: "Champion régional de boxe thaïlandaise 2019. Coach passionné par le dépassement de soi en combat." },
    { img: musculationImg, name: "LEILA Z.", specialty: "Cycling & Cardio", bio: "Ex-athlète de cyclisme sur route reconvertie en coach indoor. Elle pousse chacun à ses limites." },
];

/* ── COMPONENT ───────────────────────────────────────────────────── */
const Activites = () => {
    return (
        <div className="act-page">

            {/* ── HERO ── */}
            <section
                className="act-hero"
                style={{ backgroundImage: `url(${crossImg})` }}
            >
                <div className="act-hero-content">
                    <p className="act-hero-eyebrow">Fitness Park Maroc</p>
                    <h1 className="act-hero-title">
                        NOS<br /><span>ACTIVITÉS</span>
                    </h1>
                    <p className="act-hero-desc">
                        Musculation, cardio, cours collectifs, arts martiaux… Découvrez
                        l'ensemble de nos espaces et disciplines pour atteindre vos objectifs.
                    </p>
                    <div className="act-hero-tags">
                        <span className="act-tag">+20 disciplines</span>
                        <span className="act-tag">Coachs certifiés</span>
                        <span className="act-tag">Tous niveaux</span>
                    </div>
                </div>
            </section>

            {/* ── STRIP ── */}
            <div className="act-strip">
                {[
                    { num: "6+", lbl: "Espaces dédiés" },
                    { num: "+20", lbl: "Cours / semaine" },
                    { num: "4", lbl: "Coachs certifiés" },
                    { num: "100%", lbl: "Tous niveaux" },
                ].map((s, i) => (
                    <div className="act-strip-item" key={i}>
                        <div className="act-strip-num">{s.num}</div>
                        <div className="act-strip-lbl">{s.lbl}</div>
                    </div>
                ))}
            </div>

            {/* ── ACTIVITIES GRID ── */}
            <section className="act-main">
                <div className="act-section-header">
                    <h2>NOS <span>DISCIPLINES</span></h2>
                    <p>6 espaces spécialisés pour une expérience fitness complète.</p>
                </div>
                <div className="act-grid">
                    {activities.map((act, i) => (
                        <Link key={i} to={act.to} className="act-card">
                            <img src={act.img} alt={act.title} />
                            <div className="act-card-overlay">
                                <span className="act-card-num">{act.num}</span>
                                <span className="act-card-icon">{act.icon}</span>
                                <p className="act-card-label">{act.label}</p>
                                <h3 className="act-card-title">{act.title}</h3>
                                <p className="act-card-desc">{act.desc}</p>
                                <span className="act-card-arrow">En savoir plus →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ── COURS COLLECTIFS ── */}
            <section className="act-cours">
                <div className="act-section-header">
                    <h2>COURS <span>COLLECTIFS</span></h2>
                    <p>Plus de 20 cours chaque semaine, encadrés par des coachs passionnés.</p>
                </div>
                <div className="act-cours-grid">
                    {coursCollectifs.map((c, i) => (
                        <div className="act-cours-card" key={i}>
                            <span className="act-cours-icon">{c.icon}</span>
                            <p className="act-cours-duration">{c.duration}</p>
                            <h3 className="act-cours-name">{c.name}</h3>
                            <p className="act-cours-desc">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── PLANNING ── */}
            <section className="act-schedule">
                <div className="act-section-header">
                    <h2>PLANNING <span>HEBDOMADAIRE</span></h2>
                    <p>Retrouvez tous nos cours collectifs du lundi au samedi.</p>
                </div>
                <div className="act-schedule-table-wrap">
                    <table className="act-schedule-table">
                        <thead>
                            <tr>
                                <th>Horaire</th>
                                <th>Lun</th>
                                <th>Mar</th>
                                <th>Mer</th>
                                <th>Jeu</th>
                                <th>Ven</th>
                                <th>Sam</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scheduleData.map((row, i) => (
                                <tr key={i}>
                                    <td>{row.time}</td>
                                    {[row.lun, row.mar, row.mer, row.jeu, row.ven, row.sam].map((cell, j) => (
                                        <td key={j}>
                                            <span className={`act-schedule-tag ${cell.type}`}>
                                                {cell.label}
                                            </span>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ── COACHES ── */}
            <section className="act-coaches">
                <div className="act-section-header">
                    <h2>NOS <span>COACHS</span></h2>
                    <p>Des professionnels certifiés, passionnés et dédiés à votre progression.</p>
                </div>
                <div className="act-coaches-grid">
                    {coaches.map((coach, i) => (
                        <div className="act-coach-card" key={i}>
                            <div className="act-coach-img">
                                <img src={coach.img} alt={coach.name} />
                            </div>
                            <div className="act-coach-info">
                                <p className="act-coach-specialty">{coach.specialty}</p>
                                <h4 className="act-coach-name">{coach.name}</h4>
                                <p className="act-coach-bio">{coach.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section
                className="act-cta"
                style={{ backgroundImage: `url(${salleImg})` }}
            >
                <div className="act-cta-content">
                    <h2>CHOISISSEZ<br /><span>VOTRE ACTIVITÉ</span></h2>
                    <p>
                        Rejoignez Fitness Park et profitez d'un accès illimité à toutes nos disciplines.
                        Vos premières séances vous attendent dès aujourd'hui.
                    </p>
                    <Link to="/abonnements" className="act-cta-btn">
                        Voir les abonnements
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Activites;
