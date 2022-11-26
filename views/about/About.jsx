import React from "react";
import styles from "./about.module.scss";
const About = () => {
  return (
    <div className={styles.about} name="about">
      <div className={styles.about_text}>
        <h2>O Firmie</h2>
        <p>
          Spedycja i logistyka to branża, która wymaga planowania,
          skrupulatności w realizacji oraz rozliczaniu procesu przewozów z
          miejsca początkowego do docelowego. Jako nowoczesna firma spedycyjna,
          doskonale zdajemy sobie sprawę z tego, że klient biznesowy nie chce
          zajmować się tymi procesami samodzielnie i liczy na to, że nasze
          usługi będą nie tylko kompleksowe, ale również dopasowane do jego
          potrzeb, trasy, jaką ma przebyć przesyłka oraz optymalnego czasu
          dostawy. Postęp oraz nowoczesne rozwiązania technologiczne pozwalają
          wyjść naprzeciw tym oczekiwaniom. Obecnie jesteśmy w stanie realizować
          zlecenia na terenie firmy lub magazynku klienta, gdzie odbieramy
          towar. Dzięki temu przedsiębiorstwa, które decydują się na współpracę
          z nami, muszą jedynie dokonać płatności oraz podpisać dokumentację.
          Doskonale zdajemy sobie także sprawę z roli spedycji we współczesnym
          świecie. Obecnie wymiana towarowa odbywa się nie tylko pomiędzy
          firmami na terenie kraju, ale również pomiędzy różnymi państwami,
          nierzadko bardzo od siebie odległymi. Wiedząc o tym, oferujemy różne
          rodzaje transportu. Wśród nich wymienić możemy między innymi transport
          lotniczy, morski oraz drogowy. Podobnie jak inne firmy kurierskie
          dbamy o to, by wykorzystywać nowoczesne technologie, techniki
          komunikacji czy transportu. Dzięki temu skracamy czas doręczenia
          przesyłki oraz dbamy o jej maksymalne bezpieczeństwo. Przyjrzyjmy się
          więc nieco bliżej usługom transportowym oferowanym przez
          Transcomlogistics.
        </p>
      </div>
      <div className={styles.about_pic}>
        <div>
          <span>5+</span>
          <span>lata doswiadczenia</span>
        </div>
        <div>
          <span>2000</span>
          <span>deklaracje miesięcznie</span>
        </div>
        <div>
          <span>1</span>
          <span>mln wysyłek rocznie</span>
        </div>
      </div>
    </div>
  );
};

export default About;
