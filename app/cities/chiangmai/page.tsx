import Link from "next/link";
import "../../styles/city.css";

export default function ChiangMaiPage() {
  return (
    <main className="city-page">
      {/* Page Title */}
      <section className="city-section">
        <h1 style={{ fontSize: "2rem", marginBottom: 16 }}>CHIANG MAI 🌿</h1>
      </section>

      {/* Travel Options */}
      <section className="city-section">
        <h2>Travel Options ✈️🚌🚂</h2>
        <ul>
          <li>✈️ Flight - 2.5 hours</li>
          <li>🚌 Bus - 10.5 hours</li>
          <li>🚂 Night Train - 12.5 hours</li>
        </ul>
      </section>

      {/* Hotel Section */}
      <section className="hotel-section">
        <div className="hotel-header">
          <div className="hotel-logo" style={{ fontSize: "3rem" }}>🏨</div>
          <div className="hotel-info">
            <h1>Chiang Mai Hotel</h1>
            <ul>
              <li>📍 Find the hotel in the east of the old town</li>
              <li>📍 Or around the main gate</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Must Do */}
      <section className="city-section">
        <h2>Must Do 🐘🍳💆‍♂️</h2>
        <ul>
          <li>🐘 Elephant Sanctuary - Find a good one, not a zoo!</li>
          <li>🍳 Cooking Classes</li>
          <li>💆‍♂️ Blind Massage</li>
          <li>💆 Ex-Con Massage</li>
          <li>💆‍♀️ Massage, Massage, Massage :)</li>
          <li>🗺️ Day trips</li>
        </ul>
        <Link
          href="https://maps.app.goo.gl/iqTK77y5Bo6rb7577"
          target="_blank"
          rel="noopener noreferrer"
          className="maps-link"
        >
          View all day trips on Google Maps
        </Link>
      </section>

      {/* What To Do */}
      <section className="city-section">
        <h2>What To Do 🕌☕🍹</h2>
        <ul>
          <li>🕌 Temples</li>
          <li>🚶 Old City Walking</li>
          <li>🍹 Bars & Night Life</li>
          <li>☕ Drink Good Coffee</li>
        </ul>
        <Link
          href="https://maps.app.goo.gl/twmkGxBnNrQaYsmd6"
          target="_blank"
          rel="noopener noreferrer"
          className="maps-link"
        >
          See places to visit on Google Maps
        </Link>
        <br />
        <Link
          href="https://maps.app.goo.gl/uyad4XNGC4FGPpJw5"
          target="_blank"
          rel="noopener noreferrer"
          className="maps-link"
        >
          Best coffee spots on Google Maps
        </Link>
      </section>

      {/* What To Eat */}
      <section className="city-section">
        <h2>What To Eat 🍲🌭</h2>
        <ul>
          <li>🍜 Khao Soi</li>
          <li>🌭 Sai Ua</li>
          <li>🥣 Nam Prik Ong</li>
        </ul>
        <Link
          href="https://maps.app.goo.gl/YLhG8GMa8uCpJ5MK8"
          target="_blank"
          rel="noopener noreferrer"
          className="maps-link"
        >
          View restaurants on Google Maps
        </Link>
      </section>
    </main>
  );
}
