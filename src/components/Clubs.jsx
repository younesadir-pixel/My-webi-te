import React from "react";
import { Link } from "react-router-dom";
import "./Clubs.css";
import musculationImg from "./musculation.png";
import cardioImg from "./cardio.png";
import crossImg from "./cross.png";
import coursImg from "./cours.png";
import bikingImg from "./biking.png";
import salleImg from "./salle-casablanca.png";

/* ── DATA ────────────────────────────────────────────────────────── */
const schedule = [
    {
        title: "Lundi – Vendredi",
        rows: [
            { day: "Ouverture", time: "06:00", open: true },
            { day: "Fermeture", time: "23:00", open: false },
            { day: "Cours collectifs", time: "07h – 21h", open: true },
        ],
    },
    {
        title: "Samedi",
        rows: [
            { day: "Ouverture", time: "07:00", open: true },
            { day: "Fermeture", time: "22:00", open: false },
            { day: "Cours collectifs", time: "08h – 19h", open: true },
        ],
    },
    {
        title: "Dimanche & Jours fériés",
        rows: [
            { day: "Ouverture", time: "08:00", open: true },
            { day: "Fermeture", time: "20:00", open: false },
            { day: "Cours collectifs", time: "09h – 17h", open: true },
        ],
    },
];

const equipment = [
    { icon: "🏋️", name: "MUSCULATION", desc: "Plus de 50 appareils Technogym dernière génération pour un travail musculaire complet." },
    { icon: "🏃", name: "CARDIO ZONE", desc: "Tapis de course, vélos elliptiques et rameurs avec écrans tactiles connectés." },
    { icon: "🔥", name: "BURNING PARK", desc: "Espace HIIT dédié aux cours collectifs haute intensité avec coachs certifiés." },
    { icon: "🥊", name: "FIGHT PARK", desc: "Sacs de frappe, ring d'entraînement et équipements pour les sports de combat." },
    { icon: "🚲", name: "CYCLE PARK", desc: "Salle de cycling immersive avec vélos connectés et ambiance son & lumières." },
    { icon: "📊", name: "BODITRAX", desc: "Analyse de composition corporelle en 2 minutes avec technologie médicale." },
    { icon: "💆", name: "HYDROMASSAGE", desc: "Lits d'hydromassage pour une récupération musculaire profonde post-séance." },
    { icon: "〰️", name: "SISMO", desc: "Plateformes oscillantes pour tonifier la silhouette et drainer en douceur." },
];

const galleryImages = [
    { src: musculationImg, alt: "Salle de musculation", large: true },
    { src: cardioImg, alt: "Zone cardio" },
    { src: bikingImg, alt: "Cycle Park" },
    { src: crossImg, alt: "Espace functional" },
    { src: coursImg, alt: "Cours collectifs" },
];

const locationDetails = [
    { icon: "📍", title: "Adresse", desc: "Rue de Normandie, Quartier Racine, Casablanca 20000, Maroc" },
    { icon: "🕒", title: "Horaires", desc: "Lun–Ven : 06h–23h • Sam : 07h–22h • Dim : 08h–20h" },
    { icon: "📞", title: "Téléphone", desc: "+212 5 22 XX XX XX" },
    { icon: "📧", title: "Email", desc: "racine@fitnesspark.ma" },
    { icon: "🚗", title: "Parking", desc: "Parking gratuit disponible dans la rue et le parking souterrain voisin." },
    { icon: "🚌", title: "Transports", desc: "Bus lignes 6, 14 & 32 — Arrêt Racine Centre (2 min à pied)" },
];

/* ── COMPONENT ──────────────────────────────────────────────────── */
const Clubs = () => {
    return (
        <div className="clubs-page">

            {/* ── HERO ── */}
            <section
                className="clubs-hero"
                style={{ backgroundImage: `url(${salleImg})` }}
            >
                <div className="clubs-hero-content">
                    <p className="clubs-hero-eyebrow">Fitness Park Maroc</p>
                    <h1 className="clubs-hero-title">
                        NOS<br />
                        <span>CLUBS</span>
                    </h1>
                    <p className="clubs-hero-desc">
                        Découvrez nos espaces fitness haut de gamme au cœur du Maroc.
                        Des clubs conçus pour vous pousser à vous dépasser, jour après jour.
                    </p>
                </div>
            </section>

            {/* ── STRIP ── */}
            <div className="clubs-strip">
                {[
                    { num: "+8", lbl: "Clubs au Maroc" },
                    { num: "1000m²", lbl: "Surface de fitness" },
                    { num: "+50", lbl: "Appareils Technogym" },
                    { num: "24/7", lbl: "Sécurité" },
                ].map((s, i) => (
                    <div className="clubs-strip-item" key={i}>
                        <div className="clubs-strip-num">{s.num}</div>
                        <div className="clubs-strip-lbl">{s.lbl}</div>
                    </div>
                ))}
            </div>

            {/* ── CLUB CARD ── */}
            <section className="clubs-main">
                <div className="clubs-section-header">
                    <h2>CASABLANCA <span>RACINE</span></h2>
                    <p>Notre flagship club — 1000m² d'excellence au cœur de Casablanca.</p>
                </div>

                <div className="clubs-card">
                    {/* Top: Image + Info */}
                    <div className="clubs-card-top">
                        <div className="clubs-card-img">
                            <img src={musculationImg} alt="Club Casablanca Racine" />
                            <span className="clubs-card-img-badge">⭐ Flagship Club</span>
                        </div>
                        <div className="clubs-card-info">
                            <p className="clubs-card-label">Notre club principal</p>
                            <h2 className="clubs-card-name">
                                CASABLANCA<br /><span>RACINE</span>
                            </h2>
                            <p className="clubs-card-desc">
                                Situé au cœur du quartier Racine à Casablanca, notre club flagship
                                s'étend sur plus de 1000m². Équipements Technogym dernière génération,
                                espaces dédiés à chaque discipline et coachs certifiés à votre service.
                            </p>

                            <div className="clubs-card-meta">
                                <div className="clubs-meta-row">
                                    <div className="clubs-meta-icon">📍</div>
                                    <div className="clubs-meta-text">
                                        <strong>Adresse</strong>
                                        <span>Rue de Normandie, Quartier Racine, Casablanca</span>
                                    </div>
                                </div>
                                <div className="clubs-meta-row">
                                    <div className="clubs-meta-icon">🕒</div>
                                    <div className="clubs-meta-text">
                                        <strong>Horaires</strong>
                                        <span>Lun–Ven : 06h–23h • Sam : 07h–22h • Dim : 08h–20h</span>
                                    </div>
                                </div>
                                <div className="clubs-meta-row">
                                    <div className="clubs-meta-icon">📐</div>
                                    <div className="clubs-meta-text">
                                        <strong>Surface</strong>
                                        <span>+1 000 m² dédiés à la performance et au bien-être</span>
                                    </div>
                                </div>
                                <div className="clubs-meta-row">
                                    <div className="clubs-meta-icon">🚗</div>
                                    <div className="clubs-meta-text">
                                        <strong>Parking gratuit</strong>
                                        <span>Disponible dans la rue et parking souterrain voisin</span>
                                    </div>
                                </div>
                            </div>

                            <div className="clubs-card-actions">
                                <Link to="/abonnements" className="clubs-btn-primary">
                                    Rejoindre ce club
                                </Link>
                                <a
                                    href="https://maps.google.com/?q=Rue+de+Normandie+Casablanca"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="clubs-btn-outline"
                                >
                                    Voir sur la carte
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom: Horaires */}
                    <div className="clubs-card-bottom">
                        {schedule.map((col, i) => (
                            <div className="clubs-schedule-col" key={i}>
                                <p className="clubs-schedule-title">{col.title}</p>
                                {col.rows.map((row, j) => (
                                    <div className="clubs-schedule-row" key={j}>
                                        <span className="clubs-schedule-day">{row.day}</span>
                                        <span className={`clubs-schedule-time${row.open ? " open" : ""}`}>
                                            {row.time}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── EQUIPMENTS ── */}
            <section className="clubs-equipment">
                <div className="clubs-section-header">
                    <h2>NOS <span>ÉQUIPEMENTS</span></h2>
                    <p>Tout ce dont vous avez besoin pour atteindre vos objectifs, sous un même toit.</p>
                </div>
                <div className="clubs-equip-grid">
                    {equipment.map((eq, i) => (
                        <div className="clubs-equip-card" key={i}>
                            <span className="clubs-equip-icon">{eq.icon}</span>
                            <h4 className="clubs-equip-name">{eq.name}</h4>
                            <p className="clubs-equip-desc">{eq.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── GALLERY ── */}
            <section className="clubs-gallery">
                <div className="clubs-section-header">
                    <h2>GALERIE <span>PHOTOS</span></h2>
                    <p>Un aperçu de nos espaces et de l'ambiance qui vous attend.</p>
                </div>
                <div className="clubs-gallery-grid">
                    {galleryImages.map((img, i) => (
                        <div
                            key={i}
                            className={`clubs-gallery-item${img.large ? " large" : ""}`}
                        >
                            <img src={img.src} alt={img.alt} />
                        </div>
                    ))}
                </div>
            </section>

            {/* ── LOCATION ── */}
            <section className="clubs-location">
                <div className="clubs-section-header">
                    <h2>NOUS <span>TROUVER</span></h2>
                    <p>Facilement accessible depuis tout Casablanca.</p>
                </div>
                <div className="clubs-location-inner">
                    <div className="clubs-location-info">
                        {locationDetails.map((detail, i) => (
                            <div className="clubs-location-detail" key={i}>
                                <div className="clubs-location-icon">{detail.icon}</div>
                                <div className="clubs-location-text">
                                    <h4>{detail.title}</h4>
                                    <p>{detail.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a
                        href="https://maps.google.com/?q=Rue+de+Normandie+Casablanca"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="clubs-map-embed"
                    >
                        <span className="clubs-map-placeholder-icon">🗺️</span>
                        <span className="clubs-map-placeholder-text">Ouvrir dans Google Maps</span>
                        <span className="clubs-map-placeholder-sub">Rue de Normandie, Quartier Racine, Casablanca</span>
                    </a>
                </div>
            </section>

            {/* ── CTA ── */}
            <section
                className="clubs-cta"
                style={{ backgroundImage: `url(${crossImg})` }}
            >
                <div className="clubs-cta-content">
                    <h2>REJOIGNEZ<br /><span>NOTRE CLUB</span></h2>
                    <p>
                        Votre transformation commence ici. Choisissez votre formule et commencez
                        à vous entraîner dans le meilleur club de Casablanca dès aujourd'hui.
                    </p>
                    <Link to="/abonnements" className="clubs-btn-primary">
                        Voir les abonnements
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Clubs;
