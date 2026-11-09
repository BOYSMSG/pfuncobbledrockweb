"use client";

import React from "react";
import Link from "next/link";

const bottleCaps = [
  { name: "Golden Bottle Cap", effect: "Hyper Trains ALL 6 IVs to 31", tag: "PERFECT IV", desc: "The holy grail of competitive breeding! Maxes HP, Attack, Defense, Sp. Atk, Sp. Def, and Speed simultaneously." },
  { name: "Speed Silver Cap", effect: "Hyper Trains Speed IV to 31", tag: "PRIORITY SPEED", desc: "Crucial for winning competitive speed ties and outspeeding opposing sweepers." },
  { name: "Attack Silver Cap", effect: "Hyper Trains Attack IV to 31", tag: "MAX ATTACK", desc: "Maximizes physical attack power for physical sweepers like Garchomp and Lucario." },
  { name: "Sp. Atk Silver Cap", effect: "Hyper Trains Sp. Atk IV to 31", tag: "MAX SP. ATK", desc: "Maximizes special firepower for special sweepers like Alakazam and Gengar." },
  { name: "HP Silver Cap", effect: "Hyper Trains HP IV to 31", tag: "MAX HP", desc: "Boosts base health pool to withstand powerful super-effective hits." },
  { name: "Defense Silver Cap", effect: "Hyper Trains Defense IV to 31", tag: "MAX DEFENSE", desc: "Maximizes physical bulk to sponge close combat and earthquake strikes." },
  { name: "Sp. Def Silver Cap", effect: "Hyper Trains Sp. Def IV to 31", tag: "MAX SP. DEF", desc: "Maximizes special resistance against devastating psychic and fairy blasts." },
  { name: "Speed Void Cap", effect: "Sets Speed IV to exactly 0", tag: "0 SPEED TRICK ROOM", desc: "Reduces Speed to the absolute minimum. Vital for Trick Room sweepers to move first!" },
  { name: "Attack Void Cap", effect: "Sets Attack IV to exactly 0", tag: "0 ATTACK ANTI-FOUL", desc: "Minimizes physical attack stat to reduce Foul Play damage and confusion self-hit recoil." },
];

const utilityArtifacts = [
  { name: "Shiny Modifier Card", tag: "RARE COSMETIC", desc: "Transforms any regular Pokemon into its ultra-rare sparkling Shiny form with unique custom colors!" },
  { name: "Devolution Relic", tag: "EVOLUTION REVERSAL", desc: "Safely reverses a Pokemon's evolution back to its prior pre-evolution form, retaining all moves and IVs." },
  { name: "Transmutation Orb", tag: "ABILITY ALTERATION", desc: "Cycles a Pokemon's ability slot between Primary, Secondary, and unlocks its rare Hidden Ability (HA)!" },
  { name: "Common Candy", tag: "LEVEL REDUCER (-1)", desc: "Reduces a Pokemon's level by exactly 1 level. Indispensable for staying below gym level caps!" },
  { name: "Master Candy", tag: "LEVEL BOOST (+5)", desc: "Instantly grants 5 full levels of concentrated power without EV dilution." },
  { name: "Special Poke Treat", tag: "MAX FRIENDSHIP", desc: "Increases friendship and happiness to 255 maximum, triggering instant friendship evolutions (Lucario, Togekiss)." },
];

export default function UtilityWikiPage() {
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
          CobbleUtility BP / RP
        </span>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 900, color: "#064E3B", margin: "12px 0 8px 0" }}>
          Bottle Caps &amp; Cobblemon Utility Guide
        </h1>
        <p style={{ color: "#134E4A", fontSize: "1rem", maxWidth: "680px", margin: "0 auto" }}>
          Perfect your Pokemon's IV genetics with Bottle Caps, manipulate 0 IV Trick Room builds, devolve specimens, and swap abilities with Transmutation Orbs!
        </p>
      </div>

      {/* Bottle Caps Grid */}
      <div style={{ background: "#FFFFFF", borderRadius: "20px", padding: "28px", border: "1.5px solid rgba(16, 185, 129, 0.25)", boxShadow: "0 8px 24px rgba(6, 78, 59, 0.05)", marginBottom: "36px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#064E3B", marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
          <i className="fa-solid fa-crown" style={{ color: "#10B981" }}></i>
          <span>Hyper Training Bottle Caps</span>
        </h2>
        <p style={{ color: "#134E4A", fontSize: "0.9rem", lineHeight: 1.6, margin: "0 0 20px 0" }}>
          Right-click a Bottle Cap while looking at your spawned Pokemon or interact from your hotbar to modify its individual IV values:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "18px" }}>
          {bottleCaps.map((cap, idx) => (
            <div key={idx} style={{ background: "#F0FDF4", padding: "18px", borderRadius: "14px", border: "1px solid rgba(16, 185, 129, 0.25)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#064E3B", margin: 0 }}>{cap.name}</h4>
                <span style={{ fontSize: "0.68rem", fontWeight: 800, background: "#10B981", color: "#FFFFFF", padding: "2px 8px", borderRadius: "6px" }}>{cap.tag}</span>
              </div>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#059669", marginBottom: "6px" }}>{cap.effect}</div>
              <p style={{ color: "#134E4A", fontSize: "0.8rem", margin: 0, lineHeight: 1.4 }}>{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Utility Artifacts Grid */}
      <div style={{ background: "#FFFFFF", borderRadius: "20px", padding: "28px", border: "1.5px solid rgba(16, 185, 129, 0.25)", boxShadow: "0 8px 24px rgba(6, 78, 59, 0.05)" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#064E3B", marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
          <i className="fa-solid fa-wand-magic-sparkles" style={{ color: "#10B981" }}></i>
          <span>Rare Utility Artifacts &amp; Candies</span>
        </h2>
        <p style={{ color: "#134E4A", fontSize: "0.9rem", lineHeight: 1.6, margin: "0 0 20px 0" }}>
          Powerful consumable items for competitive players, shiny hunters, and gym badge speedrunners:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "18px" }}>
          {utilityArtifacts.map((art, idx) => (
            <div key={idx} style={{ background: "#F0FDF4", padding: "18px", borderRadius: "14px", border: "1px solid rgba(16, 185, 129, 0.25)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#064E3B", margin: 0 }}>{art.name}</h4>
                <span style={{ fontSize: "0.68rem", fontWeight: 800, background: "#059669", color: "#FFFFFF", padding: "2px 8px", borderRadius: "6px" }}>{art.tag}</span>
              </div>
              <p style={{ color: "#134E4A", fontSize: "0.82rem", margin: 0, lineHeight: 1.5 }}>{art.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
