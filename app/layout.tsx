import "../styles/globals.css";

export const metadata = {
  title: "Thailand Trip Site",
  description: "Trip planner for Thailand",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/cities/bangkok">Bangkok</a>
          <a href="/cities/chiangmai">Chiang Mai</a>
          <a href="/cities/pai">Pai</a>
          <a href="/cities/islands">Islands</a> {/* replaces Koh Kood */}
          <a href="/packing">Packing</a>
          <a href="/vaccinations">Vaccinations</a>
        </nav>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}