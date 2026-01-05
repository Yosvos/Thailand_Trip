import Link from "next/link";
import "../../styles/city.css";

export default function BangkokPage() {
  return (
    <main className="city-page">
      {/* Page Title */}
      <section className="city-section">
        <h1 style={{ fontSize: "2rem", marginBottom: 16 }}>BANGKOK 🏙️</h1>
      </section>

      {/* Hotel Section */}
      <section className="hotel-section">
        <div className="hotel-header">
          <div className="hotel-logo" style={{ fontSize: "3rem" }}>🏨</div>
          <div className="hotel-info">
            <h1>Mangkon Hostel</h1>
            <p>
              815 Song Wat Rd, Chakkrawat, Samphanthawong, Bangkok 10100, Thailand
            </p>
            <Link
              href="https://maps.app.goo.gl/zxPER5Sf4mDVCM2S9"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </Link>
          </div>
        </div>
      </section>

      {/* What To Do */}
      <section className="city-section">
        <h2>What To Do</h2>
        <ul>
          {/* Highlighted must-go */}
          <li style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            color: "#d35400",
            marginBottom: 8,
          }}>
            🛍️ Sunday: Chatuchak Market - Don't miss it!
          </li>

          <li>🏰 Palace & Temples</li>
          <li>🏮 China Town</li>
          <li>🌳 Lumphini Park</li>
          <li>🛶 Floating Markets</li>
          <li>🛒 If there is time, Terminal 21 Shopping Mall</li>
        </ul>
        <Link
          href="https://maps.app.goo.gl/N73UFgmioXHpVMRN9"
          target="_blank"
          rel="noopener noreferrer"
          className="maps-link"
        >
          View all places on Google Maps
        </Link>
      </section>

      {/* What To Eat */}
      <section className="city-section">
        <h2>What To Eat</h2>
        <ul>
          <li>🍜 Pad Thai</li>
          <li>🥘 Green Curry</li>
          <li>🍲 Fish Ball Noodle Soup</li>
          <li>🍜 Tom Yun Noodle</li>
          <li>🥗 Thai Salads</li>
        </ul>
        <Link
          href="https://maps.app.goo.gl/aouPP1W2C31vMfRQ7"
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
