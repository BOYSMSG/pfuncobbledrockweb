"use client";

import React from "react";
import Link from "next/link";

const raidArenas = [
  { name: "Fire Raid Arena", element: "Fire", color: "#EF4444", boss: "Moltres / Primal Groudon / Charizard", desc: "Magma-filled arena with rising lava hazards and intense heat burns." },
  { name: "Water Raid Arena", element: "Water", color: "#3B82F6", boss: "Kyogre / Suicune / Gyarados", desc: "Submerged deep-sea platform with whirlpool current challenges." },
  { name: "Grass Raid Arena", element: "Grass", color: "#10B981", boss: "Celebi / Zarude / Sceptile", desc: "Dense jungle canopy arena with spore traps and regenerative foliage." },
  { name: "Electric Raid Arena", element: "Electric", color: "#F59E0B", boss: "Zapdos / Raikou / Zekrom", desc: "High-voltage lightning spire platform with chain shock surges." },
  { name: "Ice Raid Arena", element: "Ice", color: "#06B6D4", boss: "Articuno / Kyurem / Glaceon", desc: "Glacial frozen citadel with slipping surfaces and blizzard debuffs." },
  { name: "Psychic Raid Arena", element: "Psychic", color: "#EC4899", boss: "Mewtwo / Deoxys / Alakazam", desc: "Floating gravity-defying dimensional rift with telekinetic distortion." },
  { name: "Dark Raid Arena", element: "Dark", color: "#6B7280", boss: "Darkrai / Yveltal / Zoroark", desc: "Eclipse shadows arena where blindness and dark pulses restrict visibility." },
  { name: "Fairy Raid Arena", element: "Fairy", color: "#F43F5E", boss: "Xerneas / Diancie / Sylveon", desc: "Enchanted crystalline sanctuary with misty mist shields and dazzle." },
  { name: "Fighting Raid Arena", element: "Fighting", color: "#B45309", boss: "Lucario / Urshifu / Machamp", desc: "Colosseum ring where physical brute force and close combat rule." },
  { name: "Normal Raid Arena", element: "Normal", color: "#9CA3AF", boss: "Regigigas / Snorlax / Slaking", desc: "Grand fortress courtyard testing pure stamina and unyielding endurance." },
];

export default function RaidsWikiPage() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" }}>
      
      {/* Breadcrumb */}
      <div style={{ marginBottom: "20px" }}>
        <Link href="/wiki" style={{ color: "#059669", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem" }}>
          ← Back to Wiki Overview
        </Link>
      </div>

      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <span style={{ fontSize: "0.8rem", fontWeight: 800, padding: "4px 14px", borderRadius: "9999px", background: "#F0FDF4", color: "#059669", border: "1px solid rgba(16, 185, 129, 0.4)", textTransform: "uppercase" }}>
          Cobblemon Raid Den Designs BP
        </span>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 900, color: "#064E3B", margin: "12px 0 8px 0" }}>
          10 Elemental Raid Dens &amp; Boss Battles
        </h1>
        <p style={{ color: "#134E4A", fontSize: "1rem", maxWidth: "680px", margin: "0 auto" }}>
          Team up in 4-player cooperative Raid Dens across 10 distinct elemental biomes! Defeat raid bosses before the timer runs out to capture mythical and legendary Pokemon!
        </p>
      </div>

      {/* Mechanics Explanation */}
      <div style={{ background: "#FFFFFF", borderRadius: "20px", padding: "28px", border: "1.5px solid rgba(16, 185, 129, 0.25)", boxShadow: "0 8px 24px rgba(6, 78, 59, 0.05)", marginBottom: "36px" }}>
        <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#064E3B", marginBottom: "14px" }}>
          How Raid Dens Work:
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          <div style={{ background: "#F0FDF4", padding: "18px", borderRadius: "14px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
            <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#064E3B", margin: "0 0 6px 0" }}>1. Locate a Raid Beacon</h4>
            <p style={{ color: "#134E4A", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>
              Raid Dens generate across the overworld with luminous elemental light pillars. Right-click the central pedestal to view boss level and type.
            </p>
          </div>

          <div style={{ background: "#F0FDF4", padding: "18px", borderRadius: "14px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
            <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#064E3B", margin: "0 0 6px 0" }}>2. 4-Player Co-op Team</h4>
            <p style={{ color: "#134E4A", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>
              Up to 4 trainers enter simultaneously. Synchronize your type match-ups and set up support moves like Reflect and Light Screen!
            </p>
          </div>

          <div style={{ background: "#F0FDF4", padding: "18px", borderRadius: "14px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
            <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#064E3B", margin: "0 0 6px 0" }}>3. Guaranteed Catch Chance</h4>
            <p style={{ color: "#134E4A", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>
              Defeating the boss unlocks an unmissable bonus capture phase where every participating trainer can throw a Premier or Master Ball!
            </p>
          </div>
        </div>
      </div>

      {/* 10 Elemental Arenas Grid */}
      <h3 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#064E3B", marginBottom: "20px" }}>
        10 Custom Elemental Raid Arenas:
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
        {raidArenas.map((arena, idx) => (
          <div key={idx} style={{ background: "#FFFFFF", borderRadius: "18px", padding: "22px", border: "1.5px solid rgba(16, 185, 129, 0.25)", boxShadow: "0 6px 20px rgba(6, 78, 59, 0.05)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, padding: "3px 10px", borderRadius: "6px", background: "#F0FDF4", color: arena.color, border: `1px solid ${arena.color}` }}>
                {arena.element} ELEMENT
              </span>
            </div>
            <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#064E3B", margin: "0 0 6px 0" }}>{arena.name}</h4>
            <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#059669", marginBottom: "8px" }}>Boss: {arena.boss}</div>
            <p style={{ color: "#134E4A", fontSize: "0.82rem", lineHeight: 1.5, margin: 0 }}>{arena.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
