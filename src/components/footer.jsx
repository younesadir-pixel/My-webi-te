import React from "react";
import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-column">
        <h3 className="footer-heading">REJOINDRE FITNESS PARK GROUP</h3>
        <ul className="footer-list">
          <li className="footer-list-item"><a className="footer-link" href="#">Proposer un local</a></li>
          <li className="footer-list-item"><a className="footer-link" href="#">Recrutement</a></li>
          <li className="footer-list-item"><a className="footer-link" href="#">Devenir franchisé</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="footer-heading">AIDE & INFORMATIONS</h3>
        <ul className="footer-list">
          <li className="footer-list-item"><a className="footer-link" href="#">Abonnements</a></li>
          <li className="footer-list-item"><a className="footer-link" href="#">Contact</a></li>
          <li className="footer-list-item"><a className="footer-link" href="#">FAQ</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="footer-heading">CLUBS</h3>
        <ul className="footer-list">
          <li className="footer-list-item"><a className="footer-link" href="/clubs#ain-sebaa">Ain Sebaa</a></li>
          <li className="footer-list-item"><a className="footer-link" href="/clubs#casablanca-racine">Casablanca Racine</a></li>
          <li className="footer-list-item"><a className="footer-link" href="/clubs#mohammedia-plaza">Mohammedia Plaza</a></li>
          <li className="footer-list-item"><a className="footer-link" href="/clubs#rabat-agdal">Rabat Arribat Center</a></li>
          <li className="footer-list-item"><a className="footer-link" href="/clubs#tanger">Tanger</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="footer-heading">ACTIVITÉS</h3>
        <ul className="footer-list">
          <li className="footer-list-item"><a className="footer-link" href="/fight-park">Fight Park</a></li>
          <li className="footer-list-item"><a className="footer-link" href="/burning-park">Burning Park</a></li>
          <li className="footer-list-item"><a className="footer-link" href="/cycle-park">Cycle Park</a></li>
          <li className="footer-list-item"><a className="footer-link" href="/activites">Cross training</a></li>
        </ul>
      </div>
      <div className="footer-logo-column">
        <div className="footer-brand-title">FITNESS PARK</div>
        <div className="footer-social-icons">
          <a href="#" className="footer-social-link">FB</a>
          <a href="#" className="footer-social-link">IG</a>
          <a href="#" className="footer-social-link">TK</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom-bar">
      <a className="footer-bottom-link" href="#">Mentions légales</a>
      <a className="footer-bottom-link" href="#">CGV</a>
      <a className="footer-bottom-link" href="#">CGU</a>
      <a className="footer-bottom-link" href="#">Plan du site</a>
      <a className="footer-bottom-link" href="#">Données Personnelles</a>
    </div>
  </footer>
);

export default Footer;
