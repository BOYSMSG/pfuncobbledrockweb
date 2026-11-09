"use client";

import React from "react";
import Link from "next/link";

const cosmeticPokemonSkins = [
  { name: "Boundary Mewtwo", form: "Dimensional Cosmic", desc: "Forged in dimensional rifts, this Mewtwo skin features a dark cosmic exoskeleton with luminescent boundary waves." },
  { name: "Mega Greninja Ceruledge", form: "Water/Ghost Blade", desc: "Infuses Ceruledge's flaming swords with spectral water shurikens reminiscent of Ash-Greninja." },
  { name: "Aurora Umbreon", form: "Luminescent Neon", desc: "Rings glow with shifting cyan and mint aurora borealis hues, glowing in dark caverns." },
  { name: "Eternal Tinkaton", form: "Runic Alloy", desc: "Features a massive rune-carved hammer forged from ancient Corviknight metal and a royal tiara." },
  { name: "Steampunk Articuno", form: "Clockwork Aerial", desc: "Brass clockwork wings with working gears and steam exhaust plumes trailing its flight path." },
  { name: "Holiday Alolan Vulpix", form: "Winter Festive", desc: "A cozy knitted holiday scarf and glowing crystal snowflake particles following every step." },
  { name: "Chef Typhlosion", form: "Culinary Master", desc: "Equipped with a chef toque and a sizzling charcoal collar that ignites during flame attacks." },
  { name: "Fighter Latios", form: "Mach 3 Supersonic", desc: "Aerodynamic wing markings, supersonic cockpit HUD lines, and afterburner vapor trails." },
];

const sizeTiers = [
  { tier: "XS (Tiny)", scale: "0.95x", essence: "Tiny Essence", color: "#3B82F6", desc: "Compact hitbox and agile profile. Extremely rare in the wild." },
  { tier: "S (Small)", scale: "0.98x", essence: "Shrink Essence", color: "#10B981", desc: "Slightly smaller than average species size." },
  { tier: "M (Normal)", scale: "1.00x", essence: "Normal Essence", color: "#6B7280", desc: "Canonical Pokedex dimensions for standard battle matches." },
  { tier: "L (Large)", scale: "1.02x", essence: "Growth Essence", color: "#F59E0B", desc: "Noticeably larger than wild specimens with imposing presence." },
  { tier: "XL (Huge / Colossus)", scale: "1.05x", essence: "Huge Essence", color: "#EF4444", desc: "Towering boss-like dimensions that dominate battle arenas." },
];

export default function CosmeticsWikiPage() {
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
          Custom Addons &amp; Models
        </span>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 900, color: "#064E3B", margin: "12px 0 8px 0" }}>
          Pokemon Skins, Wings &amp; Size Variations
        </h1>
        <p style={{ color: "#134E4A", fontSize: "1rem", maxWidth: "680px", margin: "0 auto" }}>
          Customize your trainer and team with authentic Bedrock cosmetic forms, 5-tier size essences, animated player wings, and floating orbital trails!
        </p>
      </div>

      {/* Pokemon Skins Section */}
      <div style={{ background: "#FFFFFF", borderRadius: "20px", padding: "28px", border: "1.5px solid rgba(16, 185, 129, 0.25)", boxShadow: "0 8px 24px rgba(6, 78, 59, 0.05)", marginBottom: "36px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#064E3B", marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
          <i className="fa-solid fa-shirt" style={{ color: "#10B981" }}></i>
          <span>Cobblemon MoreCosmetics System</span>
        </h2>
        <p style={{ color: "#134E4A", fontSize: "0.9rem", lineHeight: 1.6, margin: "0 0 20px 0" }}>
          Obtain a <strong>Cosmetic Form Pass</strong> from crates or the store to unlock exclusive custom forms on your Pokemon:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
          {cosmeticPokemonSkins.map((skin, idx) => (
            <div key={idx} style={{ background: "#F0FDF4", padding: "16px", borderRadius: "14px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#064E3B", margin: 0 }}>{skin.name}</h4>
                <span style={{ fontSize: "0.68rem", fontWeight: 800, background: "#10B981", color: "#FFFFFF", padding: "2px 6px", borderRadius: "4px" }}>{skin.form}</span>
              </div>
              <p style={{ color: "#134E4A", fontSize: "0.8rem", margin: 0, lineHeight: 1.4 }}>{skin.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5-Tier Size Variation System */}
      <div style={{ background: "#FFFFFF", borderRadius: "20px", padding: "28px", border: "1.5px solid rgba(16, 185, 129, 0.25)", boxShadow: "0 8px 24px rgba(6, 78, 59, 0.05)", marginBottom: "36px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#064E3B", marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
          <i className="fa-solid fa-up-right-and-down-left-from-center" style={{ color: "#10B981" }}></i>
          <span>Pokemon Size Variation &amp; Essences</span>
        </h2>
        <p style={{ color: "#134E4A", fontSize: "0.9rem", lineHeight: 1.6, margin: "0 0 20px 0" }}>
          Wild Pokemon naturally spawn with distinct size variations. You can modify your Pokemon's size using craftable or shop <strong>Essences</strong>:
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {sizeTiers.map((tier, idx) => (
            <div key={idx} style={{ background: "#F0FDF4", padding: "14px 18px", borderRadius: "12px", border: "1px solid rgba(16, 185, 129, 0.25)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
              <div>
                <strong style={{ color: tier.color, fontSize: "1.05rem" }}>{tier.tier}</strong>
                <span style={{ color: "#064E3B", fontSize: "0.82rem", fontWeight: 700, marginLeft: "10px" }}>Scale: {tier.scale}</span>
                <p style={{ color: "#134E4A", fontSize: "0.8rem", margin: "4px 0 0 0" }}>{tier.desc}</p>
              </div>
              <div style={{ background: "#FFFFFF", border: `1.5px solid ${tier.color}`, color: tier.color, padding: "4px 12px", borderRadius: "8px", fontWeight: 800, fontSize: "0.8rem" }}>
                Essence: {tier.essence}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trainer Cosmetics & Wardrobe */}
      <div style={{ background: "#FFFFFF", borderRadius: "20px", padding: "28px", border: "1.5px solid rgba(16, 185, 129, 0.25)", boxShadow: "0 8px 24px rgba(6, 78, 59, 0.05)" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#064E3B", marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
          <i className="fa-solid fa-wand-magic-sparkles" style={{ color: "#10B981" }}></i>
          <span>Trainer Wings, Orbitals &amp; Wardrobe</span>
        </h2>
        <p style={{ color: "#134E4A", fontSize: "0.9rem", lineHeight: 1.6, margin: "0 0 16px 0" }}>
          Equip cosmetic back pieces, particle trails, and interactive headwear using the in-game <strong>Wardrobe</strong> or <strong>Hatter Table</strong> blocks:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
          <div style={{ background: "#F0FDF4", padding: "16px", borderRadius: "12px", border: "1px solid rgba(16, 185, 129, 0.25)" }}>
            <h4 style={{ fontSize: "0.98rem", fontWeight: 800, color: "#064E3B", margin: "0 0 6px 0" }}>Back Cosmetics</h4>
            <p style={{ color: "#134E4A", fontSize: "0.82rem", margin: 0, lineHeight: 1.5 }}>
              • Angel Wings (Pure feathered white)<br />
              • Bat Wings (Demon dark with flap physics)<br />
              • Butterfly Wings &amp; Rosy Maple Moth Wings<br />
              • Seraphim Multi-Wings
            </p>
          </div>

          <div style={{ background: "#F0FDF4", padding: "16px", borderRadius: "12px", border: "1px solid rgba(16, 185, 129, 0.25)" }}>
            <h4 style={{ fontSize: "0.98rem", fontWeight: 800, color: "#064E3B", margin: "0 0 6px 0" }}>Floating Trails &amp; Orbitals</h4>
            <p style={{ color: "#134E4A", fontSize: "0.82rem", margin: 0, lineHeight: 1.5 }}>
              • Solar System (Planets revolve around head)<br />
              • Nyan Cat (Rainbow sprint particles)<br />
              • Rubber Ducke &amp; UFO Orbitals<br />
              • Pet Rock (Floating companion)
            </p>
          </div>

          <div style={{ background: "#F0FDF4", padding: "16px", borderRadius: "12px", border: "1px solid rgba(16, 185, 129, 0.25)" }}>
            <h4 style={{ fontSize: "0.98rem", fontWeight: 800, color: "#064E3B", margin: "0 0 6px 0" }}>Interactive Costumes</h4>
            <p style={{ color: "#134E4A", fontSize: "0.82rem", margin: 0, lineHeight: 1.5 }}>
              • Hornet Silksong full body suit<br />
              • Ghostface &amp; Krueger Sweater<br />
              • General Chungus &amp; Tenna Costumes<br />
              • Living Axolotl &amp; Baby Turtle on head
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
