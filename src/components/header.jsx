// components/Header.js
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null); // Track active dropdown on mobile

  const location = useLocation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setActiveMobileDropdown(null); // Reset dropdowns when closing menu
  };

  const toggleMobileDropdown = (index, e) => {
    // Only toggle on mobile (when menu is open or screen width is small)
    // For simplicity, we can check if window.innerWidth < 992 or just rely on the click behavior being relevant 
    // mainly when in the mobile menu layout.
    if (window.innerWidth <= 992) {
      e.preventDefault(); // Prevent navigation on first click if it's a link
      setActiveMobileDropdown(activeMobileDropdown === index ? null : index);
    }
  };

  return (
    <div className="header-container">
      {/* Banner */}
      {showBanner && (
        <div className="banner">
          <div className="banner-content">
            <span className="banner-icon">🔥</span>
            <span>Offre à prix spécial : Votre premier mois à <span style={{ color: '#000', fontWeight: '900' }}>190 DHS</span></span>
          </div>
          <span className="banner-close" onClick={() => setShowBanner(false)}>✖</span>
        </div>
      )}

      {/* Main Header */}
      <header className={`main-header ${isScrolled || location.pathname !== "/" ? "scrolled" : ""}`}>

        <Link to="/" className="logo-section" style={{ textDecoration: 'none' }}>
          <span className="logo-text">FITNESS <span style={{ color: '#FFD600' }}>PARK</span></span>
          <span className="sub-logo">SE DÉPASSER • SE SURPASSER</span>
        </Link>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMobileMenuOpen ? "✖" : "☰"}
        </div>

        {/* Navigation */}
        <nav className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>

          <div className={`nav-item-dropdown ${activeMobileDropdown === 1 ? "mobile-active" : ""}`}>
            {/* Added onClick for mobile toggle */}
            <Link to="/concept" className="nav-link" onClick={(e) => toggleMobileDropdown(1, e)}>
              CONCEPT <span className="dropdown-arrow">▾</span>
            </Link>
            <div className="dropdown-menu">
              <Link to="/burning-park" className="dropdown-link">BURNING PARK</Link>
              <Link to="/fight-park" className="dropdown-link">FIGHT PARK</Link>
              <Link to="/cycle-park" className="dropdown-link">CYCLE PARK</Link>
              <Link to="/water-station" className="dropdown-link">WATER STATION</Link>
              <Link to="/boditrax" className="dropdown-link">BODITRAX</Link>
              <Link to="/hydromassage" className="dropdown-link">HYDROMASSAGE</Link>
              <Link to="/sismo" className="dropdown-link">SISMO</Link>
            </div>
          </div>

          <div className={`nav-item-dropdown ${activeMobileDropdown === 2 ? "mobile-active" : ""}`}>
            <Link to="/abonnements" className="nav-link" onClick={(e) => toggleMobileDropdown(2, e)}>
              ABONNEMENTS <span className="dropdown-arrow">▾</span>
            </Link>
            <div className="dropdown-menu">
              <Link to="/abonnements" className="dropdown-link">FORMULE CLASSIC</Link>
              <Link to="/abonnements" className="dropdown-link">FORMULE ULTIMATE</Link>
              <Link to="/abonnements" className="dropdown-link">OFFRES ÉTUDIANTS</Link>
              <Link to="/abonnements" className="dropdown-link">PARRAINAGE</Link>
            </div>
          </div>

          <div className={`nav-item-dropdown ${activeMobileDropdown === 3 ? "mobile-active" : ""}`}>
            <Link to="/clubs" className="nav-link" onClick={(e) => toggleMobileDropdown(3, e)}>
              CLUBS <span className="dropdown-arrow">▾</span>
            </Link>
            <div className="dropdown-menu">
              <Link to="/clubs" className="dropdown-link">CASABLANCA RACINE</Link>
              <Link to="/clubs" className="dropdown-link">AIN SEBAA</Link>
              <Link to="/clubs" className="dropdown-link">MOHAMMEDIA</Link>
              <Link to="/clubs" className="dropdown-link">RABAT AGDAL</Link>
              <Link to="/clubs" className="dropdown-link">TANGER</Link>
            </div>
          </div>

          <div className={`nav-item-dropdown ${activeMobileDropdown === 4 ? "mobile-active" : ""}`}>
            <Link to="/activites" className="nav-link" onClick={(e) => toggleMobileDropdown(4, e)}>
              ACTIVITÉS <span className="dropdown-arrow">▾</span>
            </Link>
            <div className="dropdown-menu">
              <Link to="/activites" className="dropdown-link">MUSCULATION</Link>
              <Link to="/activites" className="dropdown-link">CARDIO TRAINING</Link>
              <Link to="/activites" className="dropdown-link">COURS COLLECTIFS</Link>
              <Link to="/activites" className="dropdown-link">CROSS TRAINING</Link>
              <Link to="/burning-park" className="dropdown-link">BURNING PARK</Link>
              <Link to="/fight-park" className="dropdown-link">FIGHT PARK</Link>
              <Link to="/cycle-park" className="dropdown-link">CYCLE PARK</Link>
            </div>
          </div>

          <Link to="/boutique" className="nav-link">BOUTIQUE</Link>

          <div className="auth-buttons">
            {user ? (
              <>
                <Link to="/mon-espace" className="nav-link" style={{ color: '#FFD600' }}>MON ESPACE</Link>
                <button onClick={handleLogout} className="header-btn btn-logout">
                  DÉCONNEXION
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="header-btn btn-login">SE CONNECTER</button>
                </Link>
                <Link to="/inscription">
                  <button className="header-btn btn-signup">S'INSCRIRE</button>
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
