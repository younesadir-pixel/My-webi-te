import React from "react";
import { Link } from "react-router-dom";
import "./GenericPage.css";

const GenericPage = ({ title, subtitle, description, items, bgImage }) => {
    return (
        <div className="generic-page-container">
            <section className="generic-hero" style={{ backgroundImage: `url(${bgImage || '/Capture111111111111.jpg'})` }}>
                <div className="generic-overlay">
                    <h1 className="generic-title">{title}</h1>
                    {subtitle && <h2 className="generic-subtitle">{subtitle}</h2>}
                </div>
            </section>

            <section className="generic-content-section">
                <div className="generic-max-width">
                    <p className="generic-description">{description}</p>

                    {items && items.length > 0 && (
                        <div className="generic-grid">
                            {items.map((item, index) => (
                                <div key={index} className="generic-card">
                                    <h3 className="generic-card-title">{item.title}</h3>
                                    <p className="generic-card-text">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="generic-back-button-container">
                        <Link to="/concept" style={{ textDecoration: 'none' }}>
                            <button className="btn-outline generic-back-btn">RETOUR AU CONCEPT</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GenericPage;
