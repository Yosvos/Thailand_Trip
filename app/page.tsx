"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [netflixDone, setNetflixDone] = useState<boolean[]>([false, false]);
  const [ytDone, setYtDone] = useState(false);

  const netflixList = [
    "Street Food: Bangkok",
    "Midnight Asia: Chiang Mai",
  ];

  const flights = [
    {
      route: "VIE → BKK",
      time: "23.01.2026 · 20:15",
      airport: "Vienna Intl (VIE)",
      address: "1300 Schwechat, Austria",
    },
    {
      route: "BKK → VIE",
      time: "07.02.2026 · 14:00",
      airport: "Suvarnabhumi (BKK)",
      address: "999 Nong Prue, Bang Phli District, Samut Prakan 10540",
    },
  ];

  function toggleNetflix(i: number) {
    const copy = [...netflixDone];
    copy[i] = !copy[i];
    setNetflixDone(copy);
  }

  return (
    <div>
      {/* TITLE */}
      <section className="hero">
        <h1>Thailand Trip Summary</h1>
      </section>

      {/* FLIGHTS */}
      <section className="info-grid">
        {flights.map((f, i) => (
          <div className="info-card" key={i}>
            <div className="icon-box">✈️</div>
            <div>
              <h3>{f.route}</h3>
              <p>{f.time}</p>
              <p>{f.airport}</p>
              <p>{f.address}</p>
            </div>
          </div>
        ))}
      </section>

      {/* WATCH BEFORE */}
      <section className="watch-row">
        {/* NETFLIX */}
        <div className="watch-card">
          <h4>🎬 Watch Before – Netflix</h4>
          <ul>
            {netflixList.map((n, i) => (
              <li
                key={i}
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <input
                  type="checkbox"
                  checked={netflixDone[i]}
                  onChange={() => toggleNetflix(i)}
                />
                <span
                  style={{
                    textDecoration: netflixDone[i]
                      ? "line-through"
                      : "none",
                  }}
                >
                  🍿 {n}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* YOUTUBE */}
        <div className="watch-card">
          <h4>📺 Watch Before – YouTube</h4>
          <ul>
            <li
              style={{ display: "flex", gap: 10, alignItems: "center" }}
            >
              <input
                type="checkbox"
                checked={ytDone}
                onChange={() => setYtDone(!ytDone)}
              />
              <a
                href="https://www.youtube.com/watch?v=WhKSf70h3BE&list=PLIjBBxl6QtkpDiU95GrKdCnSA2BYaxnyt"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: ytDone
                    ? "line-through"
                    : "none",
                }}
              >
                ▶️ Thailand travel YouTube playlist
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* CITY LINKS */}
      <section style={{ marginTop: 36 }}>
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <Link href="/cities/bangkok">🏙 Bangkok →</Link>
          <Link href="/cities/chiangmai">🌿 Chiang Mai →</Link>
          <Link href="/cities/pai">⛰ Pai →</Link>
          <Link href="/cities/islands">🏝 Islands →</Link> {/* replaces Koh Kood */}
        </div>
      </section>
    </div>
  );
}
