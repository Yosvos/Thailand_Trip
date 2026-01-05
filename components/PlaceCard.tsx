"use client";

import React from "react";

type PlaceProps = {
  title: string;
  description: string;
  mapsLink: string;
  transport: string;
};

export default function PlaceCard({ title, description, mapsLink, transport }: PlaceProps) {
  return (
    <div className="place-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Transportation:</strong> {transport}</p>
      <a href={mapsLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
    </div>
  );
}
