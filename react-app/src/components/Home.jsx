import React from "react";
import videoSrc from "../assets/images/video.mp4"; // Importuojame vaizdo įrašą

function Home() {
  return (
    <main>
      <section>
        <h1>Apie veiklą</h1>
        <p>
          Blizgi Rožė specializuojasi kuriant išskirtines gyvų blizgių rožių puokštes ypatingoms progoms.
          Kiekviena puokštė kruopščiai sukurta, kad suteiktų džiaugsmą ir eleganciją.
        </p>
        <h3>Mūsų teikiamos paslaugos:</h3>
        <ul> 
          <li>Gyvų rožių puokščių kūrimas</li>
          <li>Individualūs užsakymai</li>
          <li>Gėlių pristatymas į namus</li>
        </ul>
      </section>

      {/* Sekcija su vaizdo įrašu */}
      <section>
        <h3>Susipažinkite su mūsų darbu:</h3>
        <video controls width="600">
          <source src={videoSrc} type="video/mp4" />
          Jūsų naršyklė nepalaiko vaizdo įrašo formato.
        </video>
      </section>

      {/* Puslapio žemėlapis */}
      <footer className="page-footer">
        <h3>Puslapio žemėlapis</h3>
        <ul className="sitemap">
          <li><a href="/">Pagrindinis</a></li>
          <li><a href="/catalog">Prekių katalogas</a></li>
          <li><a href="/order">Užsakymai</a></li>
          <li><a href="/admin">Admin prisijungimas</a></li>
        </ul>
      </footer>
    </main>
  );
}

export default Home;
