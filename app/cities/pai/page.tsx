import Link from "next/link";
import "../../styles/city.css";

export default function PaiPage() {
  return (
    <main className="city-page">
      {/* Page Title */}
      <section className="city-section">
        <h1 style={{ fontSize: "2rem", marginBottom: 16 }}>PAI 🌄</h1>
      </section>

      {/* Travel Info */}
      <section className="city-section">
        <h2>Travel Options 🚌🚖</h2>
        <ul>
          <li>🚌 From Chiang Mai: Mini van services from Bus Arcade 2 (~5 USD, 3 hours)</li>
          <li>🚖 Taxis are also an option</li>
        </ul>
      </section>

      {/* Festival / Accommodation */}
      <section className="hotel-section">
        <div className="hotel-header">
          <div className="hotel-logo" style={{ fontSize: "3rem" }}>🏕</div>
          <div className="hotel-info">
            <h1>Pai Handpan Festival 🎶</h1>
            <ul>
              <li>🎵 Pai World Rhythms</li>
              <li>📍 Dreamscape Pai, 8F93+94G, Mae Hi, Pai District, Mae Hong Son 58130, Thailand</li>
            </ul>
            <Link
              href="https://maps.app.goo.gl/nwHPnf3iedP5C5wg9"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", color: "#6b4f3f" }}
            >
              View on Google Maps
            </Link>
          </div>
        </div>
      </section>

      {/* Must To Do */}
      <section className="city-section">
        <h2>Must To Do 🌿🔥🎨</h2>
        <ul>
          <li>🌱 Visit an organic farm</li>
          <li>♨️ Go to hot springs</li>

          <li
            style={{
              fontWeight: "bold",
              color: "#c0392b",
              marginTop: 10,
              marginBottom: 10,
              fontSize: "1.05rem",
            }}
          >
            🌅 Watching Sunset (don’t miss!)
            <ul style={{ marginTop: 6 }}>
              <li>🏡 Two Huts</li>
              <li>🛕 White Buddha (lots of stairs – be prepared)</li>
            </ul>
          </li>

          <li>🏺 Make your own pottery (go early in the morning)</li>
        </ul>

        <Link
          href="https://maps.app.goo.gl/n7Fy9oPZX4gHMG3D8"
          target="_blank"
          rel="noopener noreferrer"
          className="maps-link"
        >
          View all must-do spots on Google Maps
        </Link>
      </section>

      {/* Yoga */}
      <section className="city-section">
        <h2>Attend a Yoga Class 🧘‍♀️</h2>
        <Link
          href="https://maps.app.goo.gl/V62xDFByoKi4xRW79"
          target="_blank"
          rel="noopener noreferrer"
          className="maps-link"
        >
          Yoga studios on Google Maps
        </Link>
      </section>

      {/* Food */}
      <section className="city-section">
        <h2>Enjoy the Food 🍜🥗</h2>
        <Link
          href="https://maps.app.goo.gl/r7Ubb4HJ1JzbPw7N7"
          target="_blank"
          rel="noopener noreferrer"
          className="maps-link"
        >
          Restaurants & food spots on Google Maps
        </Link>
      </section>

      {/* Music */}
      <section className="city-section">
        <h2>Live Music & Concerts 🎸🎶</h2>
        <p>🎵 24 / 7 live music vibes around Pai</p>
        <Link
          href="https://maps.app.goo.gl/Bh88SeGHqH7SVBWz6"
          target="_blank"
          rel="noopener noreferrer"
          className="maps-link"
        >
          Live music venues on Google Maps
        </Link>
      </section>

      {/* Closing */}
      <section className="city-section">
        <p style={{ fontStyle: "italic", fontSize: "1.05rem", marginTop: 24 }}>
          🌈 Enjoy Pai!! It seems like a nice hippie place :)
        </p>
      </section>
    </main>
  );
}
