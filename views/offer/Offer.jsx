import React from "react";
import styles from "./offer.module.scss";
import Image from "next/image";
import Land from "../../public/land.png";
const Offer = () => {
  return (
    <div className={styles.offer} name="offer">
      <h2>Oferta</h2>

      <div className={styles.offer_box}>
        <img src="./land.svg" alt="land" />
        <h3>Transport drogowy</h3>
        <p>
          Sprawna relokacja towarów stanowi obecnie podstawę funkcjonowania
          każdej gospodarki i firmy. Dzięki możliwości szybkiego i bezpiecznego
          transportowania ładunków możliwe są procesy produkcyjne, a konsumenci
          mają dostęp do szerokiej gamy wyrobów. Wśród trzech standardowych
          gałęzi transportu – morskiego, lotniczego i drogowego – każdy ma swoją
          specyfikę i jest wykorzystywany w określonym obszarze usług
          spedycyjnych. Towarowy transport drogowy ma wiele zalet, wśród których
          najważniejsze to: łatwa dostępność środków transportu oraz ich duża
          różnorodność (samochody chłodnie, cysterny, wywrotki, pojazdy
          specjalne do przewozu drutu czy papieru w kręgach i wiele innych),
          rozbudowana sieć dróg, które pozwalają dotrzeć jednym pojazdem do
          najdalszego zakątka kontynentu, bez potrzeby kosztownych przestojów
          czy przeładunku, relatywnie niskie koszty transportu (bez kosztów
          magazynowania, przeładunku, opłat tranzytowych, czarterowych i wielu
          innych – koszty uzależnione od odległości), możliwość dostawy
          door-to-door, dzięki której zlecenie jest realizowane szybciej, taniej
          i bez strat delikatnych materiałów. Transcomlogistics jest firmą
          spedycyjną, dla której nie istnieją granice i lokalizacje niedostępne.
          Planujemy i organizujemy przewozy zarówno na krótkich dystansach, jak
          i w odległe zakątki świata. Naszą specjalnością jest zarówno krajowy
          transport drogowy, w ramach którego ekspediujemy przesyłki
          kontenerowe, drobnicowe, ponadgabarytowe i specjalne. Organizujemy
          również międzynarodowy transport drogowy, zarówno do państw Unii
          Europejskiej jak i poza nią. Towarowe przewozy drogowe planujemy też
          za potrzeby spedycji łączonej ze spedycją morską lub lotniczą.
        </p>
      </div>

      <div className={styles.offer_box}>
        <img src="./sea.svg" alt="sea" />
        <h3>Transport morski</h3>
        <p>
          Spedycja to szereg procesów, których celem jest transport towarów
          zgodnie z wymaganiami klienta. W przesyłaniu ładunków wykorzystuje się
          różne środki transportowe. Bezpieczną i ekonomiczną formą transportu
          dóbr jest transport morski. CZYM JEST TRANSPORT MORSKI? Transport
          morski to jedna z usług spedycyjnych, która do przesyłania różnego
          rodzaju ładunków wykorzystuje statki morskie. Fracht morski
          wykorzystywany jest przede wszystkim dla towarów, które nie wymagają
          ekspresowego transportu. Czas realizacji w przypadku frachtu morskiego
          zdecydowanie się wydłuża, dlatego nie może on być priorytetem.
          Spedycja morska perfekcyjnie sprawdza się w przesyłaniu ładunków o
          dużych gabarytach. Regularne linie żeglugowe wykorzystywane są
          najczęściej w przewożeniu ładunków, do czego firmy spedycyjne
          wykorzystują dostępne serwisy armatorów morskich. Najważniejsze
          rodzaje spedycji morskiej, to transport pełnokontenerowy (FCL – Full
          Container Load) oraz transport drobnicowy (LCL – Less Container Load).
          CZY WYSYŁKA ŁADUNKÓW DROGĄ MORSKĄ JEST OPŁACALNA? Transport
          kontenerowy to zdecydowanie najbardziej ekonomiczny rodzaj frachtu.
          Drogą morską przesyłać można ładunki o każdym gabarycie oraz w
          dowolnej ilości. Ta forma transportu towarów jest niezwykle
          bezpieczna. Niskie koszty sprawiają, że wciąż duża liczba klientów
          korzysta ze spedycji morskiej. Warto jednak pamiętać, że atrakcyjna
          cena, w porównaniu do transportu lotniczego, wiąże się z długim
          terminem realizacji. Dobrze jest zatem odpowiednio wcześnie zaplanować
          nadanie towaru.
        </p>
      </div>

      <div className={styles.offer_box}>
        <img src="./air.svg" alt="air" />
        <h3>Transport lotniczy</h3>
        <p>
          Transport towarów może odbywać się na wiele sposobów. Zadaniem firm
          świadczących usługi spedycyjne jest zapewnienie kompleksowych usług
          transportowych dostosowanych do potrzeb klientów. Formą przewozu
          towarów, która gwarantuje bezpieczeństwo oraz szybki czas realizacji
          na dużych odległościach jest transport lotniczy i logistyka przesyłek
          przesyłanych drogą powietrzną. SPEDYCJA LOTNICZA – NA CO POZWALA?
          Każda forma spedycji zaspokaja różne potrzeby klienta. Wybierając
          transport lotniczy klient otrzymuje gwarancję szybkiego i niezawodnego
          przesłania towarów. Wykorzystanie drogi powietrznej w spedycji
          doskonale sprawdza się w wysyłce dóbr wysokoprzetworzonych jak i
          wartościowych na duże odległości. Wykorzystanie frachtu lotniczego
          pozwala na wysyłkę niemal każdego rodzaju towarów i dóbr. Transport
          lotniczy cargo umożliwia przewożenie na pokładzie samolotu ciężkich
          elementów oraz towarów o niestandardowych wymiarach, dużych gabarytach
          oraz masie. Drogą powietrzną skutecznie i w ekspresowym czasie
          transportuje się towary o krótkim terminie przydatności, w tym łatwo
          psujące się. TRANSPORT LOTNICZY – ZALETY Niezwykle ważną zaletą
          transportu lotniczego jest termin realizacji. Obecnie droga powietrzna
          to wariant pozwalający na bardzo szybkie dostarczanie towarów do
          wybranych destynacji, gdyż zdecydowana większość portów lotniczych na
          świecie umożliwia prowadzenie działań spedycyjnych. Ta forma
          transportu zapewnia także bezpieczeństwo. Wykorzystując transport
          lotniczy towarowy realizować można import oraz eksport wszystkich
          dóbr, nawet ładunków niebezpiecznych na terenie kraju oraz na całym
          świecie. Ze spedycji lotniczej korzystać mogą zarówno klienci
          biznesowi, jak i klienci indywidualni.
        </p>
      </div>
    </div>
  );
};

export default Offer;
