// src/components/SkillsVisualizer.js
import React, { useState, useEffect } from "react";
import "./SkillsVisualizer.css"; // Tuodaan CSS-tiedosto

const SkillsVisualizer = () => {
  const [activeCategory, setActiveCategory] = useState("tech");
  const [animateItems, setAnimateItems] = useState(false);
  
  // Animaation hallinta kategorian vaihtuessa
  useEffect(() => {
    setAnimateItems(false);
    const timer = setTimeout(() => {
      setAnimateItems(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [activeCategory]);
  
  const skills = {
    tech: {
      title: "Tekninen osaaminen",
      description: "Ohjelmointitaidoissani painottuu web-kehitys:",
      items: [
        "Frontend: JavaScript, React, HTML, CSS",
        "Backend: Node.js, Express",
        "Python: Olio-ohjelmointi, modulaariset sovellukset, tiedostojen välinen kommunikointi",
        "Tietokannat: MongoDB, SQL",
        "Mobiilisovellukset: React Native (opiskeluvaiheessa), Expo, Android Studio (perusteet)",
        "Työkalut: Git, GitHub, VS Code, Figma",
      ],
      icon: "💻",
      category: "tech"
    },
    organization: {
      title: "Organisointitaidot",
      description: "Olen ollut merkittävässä roolissa VETO-tutkinto-ohjelman sisäisen viestinnän ja toimintamallien kehittämisessä. Vastuualueisiini kuului:",
      items: [
        "Teamsin työkalujen ja automaatiokulkujen optimointi oppimisympäristöön sopivaksi",
        "Viestintäkäytäntöjen luominen",
        "Tiimirakenteen uudelleenorganisointi eri vuosiluokille soveltuvaksi",
        "Clockify-ajanhallintapalvelun käyttöönotto ja mukauttaminen tutkinto-ohjelman tarpeisiin",
        "Kattavien työohjeiden laatiminen opiskelijoille ja henkilöstölle",
      ],
      footer: "Nämä kehitystoimet ovat merkittävästi tehostaneet tutkinto-ohjelman sisäistä viestintää ja yhteistyötä.",
      icon: "📊",
      category: "organization"
    },
    soft: {
      title: "Pehmeät taidot",
      description: "Muu osaaminen ja työskentelytavat:",
      items: [
        "Projektinhallinta, tiimityö",
        "UX/UI-suunnittelu ja käyttäjäkeskeinen ajattelu",
        "Microsoft 365 -työkalut ja niiden tehokas hyödyntäminen",
        "Verkostotyö ja yhteisön kehittäminen",
        "Tapahtumasuunnittelu ja viestintä",
        "Objektiivinen kehittävä ajattelu",
        "Vahvat dialogi- ja tiimityötaidot",
      ],
      footer: "Opiskeluideni varrella olen huomannut reflektiokykyni olevan erityinen vahvuuteni. Henkilökohtaisen kehittymisen haluni on kasvanut valtavasti, ja pyrin jatkuvasti kehittämään myös ympäröivää yhteisöäni ja kanssatyöskentelijöitäni.",
      icon: "🤝",
      category: "soft"
    }
  };

  const activeSkill = skills[activeCategory];

  // Tarkistetaan, että skills-objekti ja activeSkill ovat määritelty ennen renderöintiä
  if (!skills || !activeSkill) {
    return <div>Ladataan osaamistietoja...</div>;
  }

  return (
    <div className="skills-visualizer-root">
      {/* Modern Circular Category Tabs */}
      <div className="skills-tabs">
        {Object.entries(skills).map(([key, skill]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`tab-button ${activeCategory === key ? 'active' : ''}`}
          >
            <div className={`tab-icon ${skill.category}-bg`}>
              <span className="tab-icon-emoji">{skill.icon}</span>
            </div>
            <span className={`tab-text ${activeCategory === key ? `${skill.category}-color` : ''}`}>
              {skill.title.split(" ")[0]}
            </span>
            {activeCategory === key && (
              <div className={`tab-underline ${skill.category}-dot`}></div>
            )}
          </button>
        ))}
      </div>

      {/* Content Panel with Animation */}
      <div className={`skills-content ${animateItems ? 'animate-in' : 'animate-out'}`}>
        <div className="content-header">
          <h3 className={`content-title ${activeSkill.category}-color`}>{activeSkill.title}</h3>
          <p className="content-description">{activeSkill.description}</p>
        </div>

        {/* Skills List with Modern Styling */}
        <div className="skills-items">
          {activeSkill.items.map((item, index) => (
            <div 
              key={index}
              className="skill-item"
              style={{ 
                animationDelay: `${index * 0.08}s`, 
                opacity: animateItems ? 1 : 0,
                transform: animateItems ? 'translateY(0)' : 'translateY(10px)'
              }}
            >
              <div className={`skill-dot ${activeSkill.category}-dot`}></div>
              <p className="skill-text">{item}</p>
            </div>
          ))}
        </div>

        {activeSkill.footer && (
          <p className={`content-footer ${activeSkill.category}-border`}
             style={{ 
               opacity: animateItems ? 1 : 0,
               transform: animateItems ? 'translateY(0)' : 'translateY(10px)',
               transitionDelay: `${activeSkill.items.length * 0.08 + 0.1}s`
             }}>
            {activeSkill.footer}
          </p>
        )}
      </div>
    </div>
  );
};

export default SkillsVisualizer;