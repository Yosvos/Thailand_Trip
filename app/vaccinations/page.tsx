"use client";

import { useState } from "react";
import Link from "next/link";

export default function Vaccinations() {
  const groups = [
    { title: "Strongly recommended 💉", items: ["Hepatitis A 🧪", "Tetanus–Diphtheria 💊"] },
    { title: "Recommended for rural trips 🌾", items: ["Typhoid 🦠", "Hepatitis B 🧪"] },
    { title: "Optional ✨", items: ["Rabies 🐶", "Japanese Encephalitis 🧬"] },
  ];

  const flat = groups.flatMap((g) => g.items);
  const [done, setDone] = useState(flat.map(() => false));

  const toggle = (i: number) => {
    const copy = [...done];
    copy[i] = !copy[i];
    setDone(copy);
  };

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
      <Link href="/" style={{ display: "inline-block", marginBottom: "1.5rem" }}>
        ← Back to Summary
      </Link>
      <h1 style={{ marginBottom: "1.5rem" }}>Vaccinations Checklist</h1>

      {groups.map((g, gi) => (
        <section key={gi} style={{ marginTop: 20 }}>
          <h2 style={{ marginBottom: 12, fontSize: "1.3rem", color: "#6b4f3f" }}>
            {g.title}
          </h2>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {g.items.map((item, idx) => {
              const flatIndex =
                groups.slice(0, gi).flatMap((x) => x.items).length + idx;
              return (
                <li
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 8,
                    backgroundColor: done[flatIndex] ? "#e6f0ea" : "transparent",
                    padding: "4px 8px",
                    borderRadius: 6,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={done[flatIndex]}
                    onChange={() => toggle(flatIndex)}
                  />
                  <span
                    style={{
                      textDecoration: done[flatIndex] ? "line-through" : "none",
                    }}
                  >
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
