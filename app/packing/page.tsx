"use client";
import { useState } from "react";
import Link from "next/link";

export default function Packing() {
  const topItems = [
    "📲 Download the Grab app",
    "🌐 Buy the internet package for Thailand",
  ];

  const groups = [
    {
      title: "Clothing 👕",
      items: [
        "10–12 T-shirts",
        "2 shorts",
        "1 light pants",
        "1 harem pants",
        "1 hoodie / poncho",
        "Boxers & socks",
        "Swimwear",
      ],
    },
    {
      title: "Daily Use 👜",
      items: [
        "Shoes 👟",
        "Slippers 🩴",
        "Sunglasses 🕶️",
        "Hats 🎩",
        "Charger 🔌",
        "Charge converter 🔌",
        "Headphones 🎧",
        "Notebook 📓",
        "Books 📚",
        "Extra small bag 🎒",
        "Water bottle 💧",
        "Coffee mug ☕",
        "Tissues & wet tissues 🧻",
      ],
    },
    {
      title: "Toiletries 🧴",
      items: ["Sunscreen 🧴", "Perfume / Deodorant", "Toothbrush & toothpaste 🪥", "Towel 🛏️"],
    },
  ];

  const flat = [...topItems, ...groups.flatMap((g) => g.items)];
  const [done, setDone] = useState<boolean[]>(flat.map(() => false));

  function toggle(i: number) {
    const copy = [...done];
    copy[i] = !copy[i];
    setDone(copy);
  }

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
      <Link href="/" style={{ display: "inline-block", marginBottom: "1.5rem" }}>
        ← Back to Summary
      </Link>
      <h1 style={{ marginBottom: "1.5rem" }}>Packing Checklist</h1>

      {/* Top items */}
      <section style={{ marginBottom: "1.5rem" }}>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          {topItems.map((item, idx) => (
            <li
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 8,
                backgroundColor: done[idx] ? "#e6f0ea" : "transparent",
                padding: "4px 8px",
                borderRadius: 6,
              }}
            >
              <input
                type="checkbox"
                checked={done[idx]}
                onChange={() => toggle(idx)}
              />
              <span style={{ textDecoration: done[idx] ? "line-through" : "none" }}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Existing groups */}
      {groups.map((g, gi) => (
        <section key={gi} style={{ marginTop: 20 }}>
          <h2 style={{ marginBottom: 12, fontSize: "1.3rem", color: "#6b4f3f" }}>{g.title}</h2>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {g.items.map((item, idx) => {
              const flatIndex = topItems.length + groups
                .slice(0, gi)
                .flatMap((x) => x.items).length + idx;

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
                  <span style={{ textDecoration: done[flatIndex] ? "line-through" : "none" }}>
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
