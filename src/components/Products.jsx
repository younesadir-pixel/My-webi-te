import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./products.css";
import crossImg from "../assets/cross.png";

/* ── DATA ─────────────────────────────────────────────────────────── */
const PRODUCTS = [
    {
        id: 1,
        name: "WHEY GOLD STANDARD",
        price: 650,
        category: "PROTEIN",
        badge: "top",
        badgeLabel: "⭐ TOP VENTE",
        imgClass: "protein",
        image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop",
        desc: "Isolat de whey premium 24g de protéines par dose. Idéal pour la prise de masse sèche et la récupération.",
        flavors: ["Chocolat", "Vanille", "Fraise"],
    },
    {
        id: 2,
        name: "CREATINE MONOHYDRATE",
        price: 250,
        category: "PERFORMANCE",
        badge: "new",
        badgeLabel: "NEW",
        imgClass: "performance",
        image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&h=400&fit=crop",
        desc: "5g par dose. Améliore la force explosive, la récupération et la composition corporelle.",
        flavors: ["Neutre"],
    },
    {
        id: 3,
        name: "BCAA XPLODE",
        price: 300,
        category: "RECOVERY",
        badge: null,
        imgClass: "recovery",
        image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=400&fit=crop",
        desc: "Ratio 2:1:1 Leucine / Isoleucine / Valine. Préserve la masse musculaire et accélère la récupération.",
        flavors: ["Pastèque", "Citron", "Fruits rouges"],
    },
    {
        id: 4,
        name: "PRE-WORKOUT C4",
        price: 350,
        category: "ENERGY",
        badge: "promo",
        badgeLabel: "-15%",
        imgClass: "energy",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop",
        desc: "Formule explosive : caféine, bêta-alanine, arginine. Pour des séances d'entraînement au niveau supérieur.",
        flavors: ["Blue Razz", "Pastèque", "Orange"],
    },
    {
        id: 5,
        name: "MASS GAINER PRO",
        price: 550,
        category: "MASS",
        badge: "top",
        badgeLabel: "⭐ TOP VENTE",
        imgClass: "mass",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
        desc: "1250 calories par portion. Formule hypercalorique pour une prise de masse rapide et efficace.",
        flavors: ["Chocolat", "Vanilla Cream"],
    },
    {
        id: 6,
        name: "OMEGA 3 SUPREME",
        price: 150,
        category: "HEALTH",
        badge: "new",
        badgeLabel: "NEW",
        imgClass: "health",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
        desc: "EPA & DHA de haute qualité. Soutien cardiovasculaire, anti-inflammatoire et santé cognitive.",
        flavors: ["Capsules"],
    },
    {
        id: 7,
        name: "VITAMIN PACK",
        price: 120,
        category: "HEALTH",
        badge: null,
        imgClass: "health",
        image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=400&fit=crop",
        desc: "Pack complet de vitamines et minéraux pour sportifs. Vitamine D3, C, B12, magnésium, zinc.",
        flavors: ["30 sachets / mois"],
    },
    {
        id: 8,
        name: "SHAKER FITNESS PARK",
        price: 80,
        category: "ACCESSORIES",
        badge: null,
        imgClass: "accessories",
        image: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?w=400&h=400&fit=crop",
        desc: "Shaker étanche 700ml avec boule mélangeur inox, compartiment poudre et bague de mesure.",
        flavors: ["Noir / Jaune", "Blanc / Jaune"],
    },
    {
        id: 9,
        name: "ISOLAT ZERO CARB",
        price: 720,
        category: "PROTEIN",
        badge: "new",
        badgeLabel: "NEW",
        imgClass: "protein",
        image: "https://images.unsplash.com/photo-1622484212850-eb596d769edc?w=400&h=400&fit=crop",
        desc: "Isolat de whey ultra-filtré : 27g protéines, 0g sucre, 0g graisses. Définition musculaire maximale.",
        flavors: ["Chocolat intense", "Double vanille"],
    },
    {
        id: 10,
        name: "GANTS D'ENTRAÎNEMENT",
        price: 190,
        category: "ACCESSORIES",
        badge: null,
        imgClass: "accessories",
        image: "https://images.unsplash.com/photo-1614532537190-23171c0c283f?w=400&h=400&fit=crop",
        desc: "Gants de musculation avec soutien du poignet renforcé. Cuir synthétique anti-transpiration.",
        flavors: ["S", "M", "L", "XL"],
    },
    {
        id: 11,
        name: "GLUTAMINE PURE",
        price: 200,
        category: "RECOVERY",
        badge: null,
        imgClass: "recovery",
        image: "https://images.unsplash.com/photo-1681181923426-ff34d6f4b44a?w=400&h=400&fit=crop",
        desc: "L-Glutamine 5g par dose. Renforce l'immunité et accélère la récupération musculaire profonde.",
        flavors: ["Neutre"],
    },
    {
        id: 12,
        name: "RESISTANCE BANDS SET",
        price: 160,
        category: "ACCESSORIES",
        badge: "promo",
        badgeLabel: "-20%",
        imgClass: "accessories",
        image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
        desc: "Set de 5 élastiques de résistance variable. Idéal pour la mobilité, l'activation et le renforcement.",
        flavors: ["XS → XL"],
    },
];

const CATEGORIES = ["ALL", "PROTEIN", "PERFORMANCE", "ENERGY", "RECOVERY", "MASS", "HEALTH", "ACCESSORIES"];

/* ── COMPONENT ───────────────────────────────────────────────────── */
const Products = () => {
    const [cart, setCart] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);
    const [filter, setFilter] = useState("ALL");
    const [addedId, setAddedId] = useState(null);

    const filtered = filter === "ALL"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === filter);

    const total = cart.reduce((s, i) => s + i.price, 0);

    const handleAdd = (product) => {
        setCart(prev => [...prev, product]);
        setAddedId(product.id);
        setTimeout(() => setAddedId(null), 1200);
    };

    const removeFromCart = (idx) => {
        setCart(prev => prev.filter((_, i) => i !== idx));
    };

    const badgeClass = (badge) => badge === "promo" ? "promo" : badge === "top" ? "top" : "new";

    return (
        <div className="shop-page">

            {/* ── HERO ── */}
            <section
                className="shop-hero"
                style={{ backgroundImage: `url(${crossImg})` }}
            >
                <div className="shop-hero-content">
                    <p className="shop-hero-eyebrow">Fitness Park Store</p>
                    <h1 className="shop-hero-title">
                        BOUTIQUE<br /><span>PERFORMANCE</span>
                    </h1>
                    <p className="shop-hero-desc">
                        Compléments alimentaires, équipements et accessoires premium
                        sélectionnés par nos coachs pour optimiser vos résultats.
                    </p>
                </div>
            </section>

            {/* ── PROMO STRIP ── */}
            <div className="shop-promo-strip">
                {[
                    { icon: "🚚", text: "Livraison gratuite dès 500 DHS" },
                    { icon: "✅", text: "Produits authentiques garantis" },
                    { icon: "🔄", text: "Retour sous 14 jours" },
                    { icon: "🏆", text: "Sélection par nos coachs" },
                ].map((p, i) => (
                    <div className="shop-promo-item" key={i}>
                        <span className="shop-promo-icon">{p.icon}</span>
                        <span className="shop-promo-text">{p.text}</span>
                    </div>
                ))}
            </div>

            {/* ── STICKY TOOLBAR ── */}
            <div className="shop-toolbar">
                <div className="shop-filters">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            className={`shop-filter-btn${filter === cat ? " active" : ""}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat === "ALL" ? "Tous les produits" : cat}
                        </button>
                    ))}
                </div>
                <button className="shop-cart-trigger" onClick={() => setCartOpen(true)}>
                    🛒 Panier
                    <span className="shop-cart-count">{cart.length}</span>
                </button>
            </div>

            {/* ── PRODUCTS GRID ── */}
            <section className="shop-products">
                <p className="shop-section-label">
                    {filtered.length} produit{filtered.length > 1 ? "s" : ""} —{" "}
                    <span>{filter === "ALL" ? "Toute la boutique" : filter}</span>
                </p>
                <div className="shop-grid">
                    {filtered.map(product => (
                        <div className="shop-card" key={product.id}>
                            <div className={`shop-card-img ${product.imgClass}`} style={product.image ? { background: '#1a1a2e' } : {}}>
                                {product.badge && (
                                    <span className={`shop-card-badge ${badgeClass(product.badge)}`}>
                                        {product.badgeLabel}
                                    </span>
                                )}
                                {product.image
                                    ? <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '16px' }}
                                    />
                                    : product.emoji
                                }
                            </div>
                            <div className="shop-card-body">
                                <p className="shop-card-cat">{product.category}</p>
                                <h3 className="shop-card-name">{product.name}</h3>
                                <p className="shop-card-desc">{product.desc}</p>
                                <div className="shop-card-footer">
                                    <div className="shop-card-price">
                                        <span className="shop-card-amount">{product.price}</span>
                                        <span className="shop-card-currency">DHS</span>
                                    </div>
                                    <button
                                        className={`shop-add-btn${addedId === product.id ? " added" : ""}`}
                                        onClick={() => handleAdd(product)}
                                    >
                                        {addedId === product.id ? "✓ Ajouté" : "+ Ajouter"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── PROMO BANNER ── */}
            <div className="shop-promo-banner">
                <div>
                    <h3>MEMBRES FITNESS PARK :<br /><span>-10% SUR TOUTE LA BOUTIQUE</span></h3>
                    <p>Connectez-vous à votre espace membre pour activer votre réduction exclusive.</p>
                </div>
                <div className="shop-promo-code">
                    <p className="shop-promo-code-label">Code promo membre</p>
                    <div className="shop-promo-code-value">FP2026</div>
                </div>
            </div>

            {/* ── CART SIDEBAR ── */}
            {cartOpen && (
                <div className="shop-cart-overlay" onClick={(e) => e.target === e.currentTarget && setCartOpen(false)}>
                    <div className="shop-cart-panel">
                        <div className="shop-cart-head">
                            <h2>Votre Panier</h2>
                            <button className="shop-cart-close" onClick={() => setCartOpen(false)}>✕</button>
                        </div>

                        <div className="shop-cart-items">
                            {cart.length === 0 ? (
                                <div className="shop-cart-empty">
                                    <div className="shop-cart-empty-icon">🛒</div>
                                    <p>Votre panier est vide</p>
                                </div>
                            ) : (
                                cart.map((item, idx) => (
                                    <div className="shop-cart-item" key={idx}>
                                        <div className="shop-cart-item-icon">{item.emoji}</div>
                                        <div className="shop-cart-item-info">
                                            <div className="shop-cart-item-name">{item.name}</div>
                                            <div className="shop-cart-item-price">{item.price} DHS</div>
                                        </div>
                                        <button
                                            className="shop-cart-item-remove"
                                            onClick={() => removeFromCart(idx)}
                                        >🗑</button>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="shop-cart-foot">
                            <div className="shop-cart-total">
                                <span className="shop-cart-total-label">Total</span>
                                <span className="shop-cart-total-amount">{total} DHS</span>
                            </div>
                            <button
                                className="shop-checkout-btn"
                                onClick={() => alert("Redirection vers le paiement...")}
                                disabled={cart.length === 0}
                            >
                                Commander →
                            </button>
                            <p className="shop-cart-note">🔒 Paiement sécurisé · Livraison 2–5 jours</p>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Products;
