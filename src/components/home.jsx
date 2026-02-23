import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import musculationImg from "../assets/musculation.png";
import cardioImg from "../assets/cardio.png";
import coursImg from "../assets/cours.png";
import crossImg from "../assets/cross.png";
import bikingImg from "../assets/biking.png";
import heroImg from "../assets/aaron-brogden-9y4MaTz2Js0-unsplash.jpg";

const backgroundImage = heroImg;

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="home-container">

      {/* 1. INFO BAR */}
      <section className="info-bar">
        <div className="info-content">
          <div className="info-col">
            <h2 className="info-title">CASABLANCA RACINE</h2>
            <p>Rue piétonne – Rue de Normandie, 20100 Casablanca</p>
            <p>0663-864706 | casa.racine@fitnesspark.ma</p>
          </div>
          <div className="info-col">
            <div className="schedule-box">
              <span style={{ color: '#FFD600', fontWeight: 'bold' }}>SALLE & ACCUEIL</span>
              <span>OUVERT 7J/7</span>
              <span>06:00 - 23:00</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HERO */}
      <section className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              DÉPASSE TES LIMITES<br />
              <span style={{ color: "#FFD600" }}>CHEZ FITNESS PARK</span>
            </h1>
            <p className="hero-subtitle">
              LE CLUB HAUT DE GAMME ACCESSIBLE À TOUS
            </p>
            <div className="hero-badges">
              <div className="badge">OUVERT 6H - 23H</div>
              <div className="badge">7J/7</div>
            </div>
            <Link to="/inscription" style={{ textDecoration: 'none' }}>
              <button className="btn-yellow cta-button">JE M'INSCRIS</button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. INTRO */}
      <section className="section-dark">
        <div className="max-width-container">
          <h2 className="section-title">FITNESS PARK <span style={{ color: "#FFD600" }}>CASABLANCA</span></h2>
          <p className="lead-text">
            Le club situé dans le centre ville de Casablanca au coeur du quartier Racine. Nous te proposons une salle immersive haut de gamme à la pointe de la technologie : Cardio connecté, Sismo, Hydromassage, Musculation (Guidée et Poids libres), Cross Training...
          </p>
          <p className="body-text">
            Et nous te réservons encore des tonnes de surprises... Oui oui, on en garde encore sous le pied !!! Pour en savoir plus, il faudra venir nous rencontrer :-). Tu l'auras compris, ici, il y en aura pour tous les goûts (ou presque) et pour tous les niveaux de pratique.
          </p>
        </div>
      </section>

      {/* 4. PRACTICAL INFO (AMENITIES) */}
      <section className="section-grey">
        <div className="max-width-container">
          <h3 className="section-subtitle">INFORMATIONS PRATIQUES</h3>
          <div className="amenities-grid">
            <AmenityItem icon="❄️" text="Climatisation" />
            <AmenityItem icon="🔋" text="Casier de recharge" />
            <AmenityItem icon="🚿" text="Douche individuelle" />
            <AmenityItem icon="🧼" text="Produit désinfectant" />
            <AmenityItem icon="📶" text="Wifi gratuit" />
            <AmenityItem icon="🥤" text="Distributeur auto." />
          </div>
        </div>
      </section>

      {/* 5. SERVICES ICONS */}
      <section className="section-dark">
        <div className="max-width-container">
          <h3 className="section-subtitle">SERVICES DU CLUB</h3>
          <div className="services-grid">
            <ServiceIcon title="Musculation" />
            <ServiceIcon title="Cardio training" />
            <ServiceIcon title="Biking" />
            <ServiceIcon title="Espace Abdos" />
            <ServiceIcon title="Cours vidéo" />
          </div>
        </div>
      </section>

      {/* 6. DETAILED ACTIVITIES */}
      <ActivitySection
        title="ESPACE MUSCULATION"
        subtitle="Conçu pour développer ta force"
        text="Nous te proposons 3 espaces dédiés pour te modeler, te sculpter ou encore prendre en masse : 80 m2 de musculation guidée Technogym, 220 m2 de plateau machines Technogym et poids libres jusqu'à 60kg, 40 m2 de zone équipée Hammer Strength."
        align="left"
        image={musculationImg}
      />
      <ActivitySection
        title="ESPACE CARDIO-TRAINING"
        subtitle="Idéal pour te remettre en forme"
        text="Notre espace te procure des équipements Hi-Tech très variés et surtout connectés : tapis, rameurs, vélos... Alors transpirer... Oui... Mais Transpirer ludique !"
        align="right"
        bg="#1F1F1F"
        image={cardioImg}
      />
      <ActivitySection
        title="ESPACE COURS COLLECTIFS"
        subtitle="Plus de 160 cours disponibles"
        text="Dépense calorique, perte de poids, musculation, force, endurance... Tu trouveras toujours un cours qui permet de répondre à ton besoin. Les cours collectifs sont disponibles toute la journée via rétroprojecteur sur écran géant ou animés par des coachs."
        align="left"
        image={coursImg}
      />
      <ActivitySection
        title="ESPACE CROSS-TRAINING"
        subtitle="Repousse tes limites"
        text="Ton espace entièrement dédié à la haute intensité ! Tu trouveras tout le nécessaire pour tester ton endurance, ta force, ta souplesse, ta puissance, ta vitesse, ton agilité, ta motricité, ton équilibre et ta précision."
        align="right"
        bg="#1F1F1F"
        image={crossImg}
      />
      <ActivitySection
        title="ESPACE BIKING"
        subtitle="Haute intensité assurée"
        text="Tu peux venir faire du vélo en lançant ton cours vidéo quand tu le souhaites, quelle que soit l'heure. Une vraie liberté ! Viens challenger tes amis !!!"
        align="left"
        image={bikingImg}
      />

      {/* 7. OPTIONS */}
      <section className="section-dark">
        <div className="max-width-container">
          <h2 className="section-title">CHOISIS TES <span style={{ color: "#FFD600" }}>OPTIONS</span></h2>
          <p style={{ fontSize: '18px', color: '#ccc', textAlign: 'center', marginBottom: '40px' }}>Construis tes entraînements à la perfection</p>
          <div className="options-grid">
            <OptionCard
              title="BOISSONS SPORTIVES"
              desc="Prends plaisir à te réhydrater avec nos eaux sportives vitaminées, sans sucre ajouté."
            />
            <OptionCard
              title="SISMO"
              desc="Remodèle ta silhouette en associant le cardio et la machine Sismo qui brûle les graisses."
            />
            <OptionCard
              title="HYDROMASSAGE"
              desc="Relaxe-toi après tes trainings. Soulage tes tensions musculaires en 10 minutes seulement."
            />
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="section-grey">
        <div className="max-width-container">
          <h2 className="section-title" style={{ color: '#000' }}>QUESTIONS & <span style={{ color: "#FFD600" }}>RÉPONSES</span></h2>
          <div className="faq-container">
            {[
              "Quelles sont les activités proposées dans les clubs Fitness Park ?",
              "Quelles sont les offres proposées dans les salles de sport Fitness Park ?",
              "Y-a-t-il des coachs présents dans la salle de sport Fitness Park de Casablanca ?",
              "Est-il possible de pratiquer de pratiquer le Cross-Training dans le club Fitness Park de Casablanca ?"
            ].map((q, i) => (
              <div key={i} className="faq-item" onClick={() => toggleFaq(i)}>
                <div className="faq-question">
                  {q}
                  <span style={{ color: '#FFD600', fontSize: '24px' }}>{activeFaq === i ? '-' : '+'}</span>
                </div>
                {activeFaq === i && (
                  <div className="faq-answer">
                    Réponse à venir prochainement. Contactez le club pour plus de détails.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHY US */}
      <section className="section-dark">
        <div className="max-width-container">
          <h2 className="section-title">POURQUOI S'ENTRAÎNER <span style={{ color: "#FFD600" }}>CHEZ NOUS ?</span></h2>
          <div className="why-grid">
            <FeatureItem text="Fitness Park, la marque de fitness préférée des Français*" />
            <FeatureItem text="Accès à tout le réseau Fitness Park au Maroc" />
            <FeatureItem text="Espaces Cardio-Training, Musculation libre et guidée" />
            <FeatureItem text="Une communauté de passionnés !" />
            <FeatureItem text="Cage de Cross-Training et accessoires complets" />
            <FeatureItem text="Matériel haut de gamme et connecté" />
            <FeatureItem text="Cours collectifs vidéo exclusifs" />
            <FeatureItem text="Wifi gratuit" />
          </div>
        </div>
      </section>

      {/* BRANDS BAR */}
      <div className="brands-bar">
        <span style={{ fontWeight: 'bold', color: '#555' }}>ÉQUIPÉ PAR :</span>
        <span className="brand-name">TECHNOGYM</span>
        <span className="brand-name">HAMMER STRENGTH</span>
        <span className="brand-name">ELEIKO</span>
      </div>

    </div>
  );
};

// --- SUB-COMPONENTS ---

const AmenityItem = ({ icon, text }) => (
  <div className="amenity-item">
    <span style={{ fontSize: '24px' }}>{icon}</span>
    <span style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{text}</span>
  </div>
);

const ServiceIcon = ({ title }) => (
  <div className="service-item">
    <div className="service-circle">💪</div>
    <span>{title}</span>
  </div>
);

const ActivitySection = ({ title, subtitle, text, align, bg = "#121212", image }) => (
  <section className={`activity-section ${align === 'right' ? 'reverse' : ''}`} style={{ backgroundColor: bg }}>
    <div className="activity-content">
      <h3 className="activity-title-text">{title}</h3>
      <h4 className="activity-subtitle-text">{subtitle}</h4>
      <p className="activity-desc">{text}</p>
      <button className="link-button">EN SAVOIR PLUS &gt;</button>
    </div>
    <div className="activity-image">
      {image ? (
        <img src={image} alt={title} className="activity-img-element" />
      ) : (
        <div className="activity-placeholder">IMAGE</div>
      )}
    </div>
  </section>
);

const OptionCard = ({ title, desc }) => (
  <div className="option-card">
    <h3 className="option-title">{title}</h3>
    <p className="option-desc">{desc}</p>
    <button className="link-button-yellow">EN SAVOIR PLUS</button>
  </div>
);

const FeatureItem = ({ text }) => (
  <div className="feature-item">
    <span style={{ color: '#FFD600', marginRight: '10px' }}>✔</span>
    {text}
  </div>
);

export default Home;
