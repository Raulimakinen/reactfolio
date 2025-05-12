


import { useState } from 'react';
import "../data/timeline.css";  // Tyyli tähän tiedostoon


export default function MetroMapCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Sample learning experiences
  const experiences = [
    { title: "Vaikuttaja", description: "<strong>Ohjaus ja vaikuttajaosaaminen</strong>\n\nKevään aikana osallistuin monen esityksen suunnitteluun ja toteutukseen, joissa avattiin työelämälähtöisiä dialogisia työtapoja. Näistä esityksistä nousi esiin uusia mahdollisuuksia: esim. <strong>Dialogia insinööreille</strong> tyopaja, sekä <strong>Musta ry:n järjestämä työpaja</strong>, joka tähtää musiikkipedagogien opiskelurakenteen uudistukseen. Hyvin paljon osaamisen sanoittamista, idean myymistä ja yhteisön inspirointia.\n\n<strong>Perehdytys</strong>\n\nViestintäprojekti löysi uuden motivoituneen tiimin. Haasteena oli <strong>kaiken oleellisen perehdyttäminen uudelle tiimille</strong>, joka oli täynnä intoa toteuttaa jo uusiakin asioita. Perehdytystyötä jatketaan osittain matkan varrella. <strong>Teams-uudistus</strong> saatiin käyntiin Tammikuussa, ja tämä otettiin vastaan todella hyvin.\n\nKeväällä perehdytin myös VETO-kerhon hallituksen uutta verkostovastaavaa, ja tämän tehtävän suunnittelu on edelleen kasvava prosessi."},
    { title: "Design ja kestävyys", description: "<strong>UI/UX ja saavutettavuus</strong>\n\nViimeisen lukuvuoden suurena teemana, on ollut <strong>käytettävyyden suunnittelu, ja saavutettavuuden varmistaminen.</strong> Näitä teemoja olen päässyt hyödyntämään mobiilisovelluksen kehityksessä, sekä kevään Tamko-projektissa. Tukena näissä toimii mm. heuristinen arvointi, erilaiset käyttäjätestit sekä sekä perehtyminen WCAG 2.1 kriteereihin.\n\nHyviä uusia työkaluja esimerkiksi Figma ja sen avulla <strong>prototyyppien rakentaminen</strong> sekä Miro ja Mural, erilaisten karttojen ja suunnitelmien tekemiseen." },
    { title: "Frontend sukellus", description: "Aloitin frontend kehitykseen syventymisen, sukeltamalla syvemmälle Reactin maailmaan. Olen ohjelmoinut muutamia pieniä sovelluksia kokeilumielessä, ja tätä kautta oppinut paremmin sovelluksen rakennetta ja käytäntöjä. Opiskelin myös erilaisia tapoja saada sovellus verkkoon näkyväksi <strong>Renderin ja Vercelin</strong> avulla, esimerkkinä toimii tämä portfolio" },
    { title: "Mobiilikehitys", description: "Opiskelin <srong>React Native -kehitystä, Android-ympäristön emulointia</strong> ja mobiilisovelluskehityksen periaatteita. Ympäristön toimivuus osoittautui haasteellisemmaksi kuin itse kehitys. Näiden opiskelu on antanut uskoa ja motivaatiota siihen, että uusiin teknologioihin siirtyminen ei välttämättä ole niin hankalaa.\n\nHarjoituksen vuoksi rakensin mobiilisovellukseen <strong>Node.js-pohjaisen back-endin, React Native -pohjaisen front-endin Expo-alustalla sekä yhdistin sovelluksen MongoDB-tietokantaan.</strong>" },
    { title: "Elämän täyskäännökset", description: "Noin puolivälissä lukukautta huomasin, etteivät voimavarat ja keskittyminen riitä kaikkeen mitä haluan tehdä. Suuntaa voi, ja kannattaa muuttaa näissä hetkissä. Lopetin kesken olevan laajan kurssikokonaisuuden, ja etsin uusia motivoivia tehtäviä ja asioita.\n\nReflektoin paljon, mitän haluan tehdä, ja mitä työkentällä tapahtuu. Kiinnostukseni on toisinaan ylitsevuotavaa ja innostun helposti, joten fokus johonkin eteenpäinvievään suuntaan on löydettävä.\n\nEn ole varma vieläkään mitä tulevaisuus tuo, ja työtilanteet näyttävät hankalilta, mutta aion ruokkia kiinnostuksiani ja katsoa mitä tulee. Aion jatkaa fullstack kehityksen parissa vielä pidemmälle, sillä haastavuustaso on sopiva. Mielenkiinto on herännyt myös tietoturvaa kohtaan." },
    { title: "Seuraavaksi?", description: "Full Stack -projekti: REST API (Node.js, Express) + MongoDB + React\n\nLukukauden puolesta välistä alkaen, opiskelin Node.js backendin ja MongoDB:n yhdistämistä React fronendin kanssa. Monen eri konsolin tarkkailu ja virheiden debuggaus on ollut aluksi haastavaa, ja paljon ajatustyötä vaativaa. Aion jatkaa tätä opiskelua, ja tavoitella mahdollisimman laajaa teknistä ymmärrystä.\n\nOn kuitenkin huomattavan palkitsevaa ymmärtää, <strong>miten sovellus kommunikoi minkäkin osan kanssa ja miksi</strong>, ja nähdä työnsä kokonaistulos. Olen aina pitänyt <strong>suurempien kokonaisuuksien hahmottamisesta</strong>, ja hyvin toimiva sovellus kulkee kuin toimiva työkone." }, 
  ];

  const handleStationClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="metro-map-container">
      <h2 className="metro-map-title">Oppimismatkani</h2>
      
      {/* Metro Map */}
      <div className="metro-line-container">
        {/* The Line */}
        <div className="metro-line"></div>
        
        {/* The Stations */}
        {experiences.map((experience, index) => {
          const isActive = index === activeIndex;
          const position = `${(index / (experiences.length - 1)) * 100}%`;
          
          return (
            <div 
              key={index}
              className={`metro-station ${isActive ? 'active' : ''}`}
              style={{ left: position }}
              onClick={() => handleStationClick(index)}
            >
              <div className="station-content">
                <div className={`station-circle ${isActive ? 'active' : ''}`}></div>
                <div className={`station-title ${isActive ? 'active' : ''}`}>
                  {experience.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Content Area */}
      <div className="station-details">
        <div className="station-header">
          <div className="station-icon"></div>
          <h3 className="station-name">{experiences[activeIndex].title}</h3>
        </div>
        <div
  className="station-description"
  dangerouslySetInnerHTML={{
    __html: experiences[activeIndex].description.replace(/\n/g, "<br />")
  }}
></div>
      </div>
    </div>
  );
}