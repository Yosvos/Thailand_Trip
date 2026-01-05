import "../styles/globals.css";  // global styles
import "./styles/city.css";     // city-specific styles

export const metadata = {
  title: "Thailand Trip Site",
  description: "Trip planner for Thailand",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* ===== NAVIGATION BAR ===== */}
        <nav className="navbar" style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          padding: "12px 16px",
          backgroundColor: "#2e7d32",
          color: "#fff",
          justifyContent: "center",
        }}>
          <a href="/" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>Home</a>
          <a href="/cities/bangkok" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>Bangkok</a>
          <a href="/cities/chiangmai" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>Chiang Mai</a>
          <a href="/cities/pai" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>Pai</a>
          <a href="/cities/islands" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>Islands</a>
          <a href="/packing" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>Packing</a>
          <a href="/vaccinations" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>Vaccinations</a>
        </nav>

        {/* ===== PAGE CONTENT ===== */}
        <main className="container" style={{
          maxWidth: "100%",
          padding: "1rem",
          overflowX: "hidden" // prevent horizontal scrolling
        }}>
          {children}
        </main>
      </body>
    </html>
  );
}
