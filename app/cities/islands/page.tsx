import Link from "next/link";
import "../../styles/city.css";

export default function IslandPage() {
  return (
    <main className="city-page">
      {/* Page Title */}
      <section className="city-section">
        <h1 style={{ fontSize: "2rem", marginBottom: 16 }}>KOH KOOD 🏝️</h1>
      </section>

      {/* Travel Options */}
      <section className="city-section">
        <h2>Travel Options from Pai ✈️🚌⛴️</h2>
        <ul>
          <li>🚌 Pai → Chiang Mai: Mini van (~3 hours, ~$5)</li>
          <li>✈️ Chiang Mai → Bangkok: Flight (~1–1.5 hours) or Bus/Train (~10–12 hours)</li>
          <li>✈️ Chiang Mai → Trat: Flight (~1.5–2 hours with 1 stop, limited availability)</li>
          <li>✈️ Bangkok → Trat: Flight (~1 hour) or Bus (~5–6 hours)</li>
          <li>⛴️ Trat → Koh Kood: Ferry (~1.5–2 hours from Laem Sok Pier)</li>
        </ul>
      </section>

      {/* Transport on the Island */}
      <section className="city-section">
        <h2>Getting Around 🛵🚕</h2>
        <ul>
          <li>🛵 Rent a motorbike</li>
          <li>🚕 Find a taxi (mainly pickup trucks)</li>
        </ul>
      </section>

      {/* Nature & Villages */}
      <section className="city-section">
        <h2>Lovely Beaches & Waterfalls 🌊💦</h2>
        <Link
          href="https://maps.app.goo.gl/4jDdp7WrueYETCTc9"
          target="_blank"
          rel="noopener noreferrer"
          className="maps-link"
        >
          Beaches & waterfalls on Google Maps
        </Link>
      </section>

      <section className="city-section">
        <h2>Fishing Villages 🎣</h2>
        <Link
          href="https://maps.app.goo.gl/UNh1L387hHSM4vku5"
          target="_blank"
          rel="noopener noreferrer"
          className="maps-link"
        >
          Fishing villages on Google Maps
        </Link>
      </section>

      <section className="city-section">
        <h2>Night Market 🌙🍢</h2>
        <Link
          href="https://maps.app.goo.gl/cUvehv89XfxtoLd47"
          target="_blank"
          rel="noopener noreferrer"
          className="maps-link"
        >
          Night market on Google Maps
        </Link>
      </section>

      {/* Diving Highlight */}
      <section className="city-section">
        <h2 style={{ color: "#1e8449" }}>Diving 🤿🐠</h2>
        <p style={{ fontWeight: "bold", marginBottom: 8 }}>
          First time diving? This might be the perfect place to try it 🌊✨
        </p>
        <Link
          href="https://maps.app.goo.gl/tBwtRzog9K68KBN96"
          target="_blank"
          rel="noopener noreferrer"
          className="maps-link"
        >
          Diving spots & schools on Google Maps
        </Link>
      </section>

      {/* Food */}
      <section className="city-section">
        <h2>Eat Lots of Seafood 🦞🐟</h2>
        <Link
          href="https://maps.app.goo.gl/rzvFMMP16Fxy7kG28"
          target="_blank"
          rel="noopener noreferrer"
          className="maps-link"
        >
          Seafood spots on Google Maps
        </Link>
      </section>

      {/* Coffee & Sunsets */}
      <section className="city-section">
        <h2>Coffee, Bars & Sunsets ☕🍹🌅</h2>
        <Link
          href="https://maps.app.goo.gl/1HFkxdcBVu6vaKV66"
          target="_blank"
          rel="noopener noreferrer"
          className="maps-link"
        >
          Cafés, bars & sunset spots on Google Maps
        </Link>
      </section>

      {/* Other Island Options */}
      <section className="city-section">
        <h2>Other Island Options from Pai 🏝️</h2>

        <div
          style={{
            overflowX: "auto",
            marginTop: 12,
            borderRadius: 12,
            border: "2px solid #ccc",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: "0 12px",
              textAlign: "left",
            }}
          >
            <thead>
              <tr>
                <th style={{ padding: "12px", borderBottom: "2px solid #ccc" }}>Island</th>
                <th style={{ padding: "12px", borderBottom: "2px solid #ccc" }}>Travel Time</th>
                <th style={{ padding: "12px", borderBottom: "2px solid #ccc" }}>Vibe</th>
                <th style={{ padding: "12px", borderBottom: "2px solid #ccc" }}>Recommended Stay</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: "#f9f9f9" }}>
                <td style={{ padding: "10px" }}>🐢 Koh Tao</td>
                <td style={{ padding: "10px" }}>~8–10h</td>
                <td style={{ padding: "10px" }}>Diving paradise, backpacker-friendly</td>
                <td style={{ padding: "10px" }}>3–5 days</td>
              </tr>
              <tr>
                <td style={{ padding: "10px" }}>🌴 Koh Samui</td>
                <td style={{ padding: "10px" }}>~8–10h</td>
                <td style={{ padding: "10px" }}>Resorts, beaches, nightlife</td>
                <td style={{ padding: "10px" }}>3–5 days</td>
              </tr>
              <tr style={{ backgroundColor: "#f9f9f9" }}>
                <td style={{ padding: "10px" }}>🌙 Koh Phangan</td>
                <td style={{ padding: "10px" }}>~9–10h</td>
                <td style={{ padding: "10px" }}>Chill beaches & party energy</td>
                <td style={{ padding: "10px" }}>3–4 days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
