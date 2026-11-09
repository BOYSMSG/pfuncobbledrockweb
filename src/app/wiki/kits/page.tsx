"use client";

import React from "react";
import Link from "next/link";

const rankKits = [
  {
    name: "Starter Kit",
    badge: "FREE FOR EVERYONE",
    color: "#10B981",
    tagline: "Claimed automatically on first join or via /kit",
    oneTimeItems: [
      "Ash Cloth Set (Full Armor)",
      "Storage PC (Portable Box)",
      "Healing Machine (Nurse Joy Healer)",
      "Kindergarten (Egg Incubator)",
      "Pokemon Ranch Block",
      "Rare Candies x36",
      "EXP Candy XL x1, S x4, XS x8",
      "Medium Protection Stone x1",
      "White Cat Backpack",
      "Charizard X Mega Stone",
      "Diamond Blocks x3 & Iron Blocks x5",
      "PokeRadar x1",
      "Gachapon Money x1",
      "Ultra Balls x32 & Max Revive x6",
      "Diamond Sword",
      "Pokemon Crate Key x2",
      "Shiny Pokemon Crate Key x1"
    ],
    dailyItems: [
      "Poke Ball x16 & Great Ball x16",
      "Potion x10 & Super Potion x5",
      "Revive x3 & Rare Candy x3",
      "EXP Candy M x8 & XS x16",
      "Cooked Steak x32"
    ],
    weeklyItems: [
      "Poke Ball x64 & Great Ball x32",
      "Ultra Ball x16",
      "Rare Candy x10",
      "Pokemon Crate Key x3",
      "Weekly Cash Bounty: 1,000 PC"
    ]
  },
  {
    name: "Beginner Rank Kit",
    badge: "LEVEL 1 RANK",
    color: "#059669",
    tagline: "Unlocked with Beginner Rank tag",
    oneTimeItems: [
      "Ash Cloth Armor Set",
      "Storage PC & Healing Machine",
      "Rare Candies x36",
      "Mega Stone Voucher",
      "Medium Claim Stone",
      "Diamond Blocks x3",
      "Crate Keys x3"
    ],
    dailyItems: [
      "Poke Ball x16, Great Ball x16",
      "Potion x10, Super Potion x5",
      "Revive x3, Rare Candy x3",
      "EXP Candies M x8"
    ],
    weeklyItems: [
      "Poke Ball x64, Great Ball x32, Ultra Ball x16",
      "Pokemon Crate Key x3",
      "Weekly Cash: 1,000 PC"
    ]
  },
  {
    name: "Great Rank Kit",
    badge: "LEVEL 2 RANK",
    color: "#3B82F6",
    tagline: "Unlocked with Great Rank tag",
    oneTimeItems: [
      "Red Cloth Armor Set",
      "Storage PC & Healing Machine",
      "Kindergarten Blocks x2",
      "Poke Balls x64, Great Balls x64, Ultra Balls x32",
      "Rare Candies x64 & EXP Candies XL x5",
      "Diamonds x64 & Shulker Shells x10",
      "Keystone x1 & Leftovers x2",
      "Pokemon Crate Key x5",
      "Shiny Pokemon Crate Key x2",
      "Rare Pokemon Key x1"
    ],
    dailyItems: [
      "Hyper Potion x5, Super Potion x10",
      "Ultra Ball x16, Great Ball x24",
      "Diamonds x8, Rare Candy x5",
      "EXP Candy L x2, M x8"
    ],
    weeklyItems: [
      "Ultra Ball x32, Great Ball x48",
      "Rare Candies x12 & EXP Candy XL x1",
      "Diamonds x16, Max Revive x3",
      "Pokemon Crate Key x2",
      "Weekly Cash: 5,000 PC"
    ]
  },
  {
    name: "Ultra Rank Kit",
    badge: "LEVEL 3 RANK",
    color: "#8B5CF6",
    tagline: "Unlocked with Ultra Rank tag",
    oneTimeItems: [
      "Team Rocket Cloth Set",
      "Storage PC x5 & Healing Machine x5",
      "Kindergarten Blocks x5",
      "Netherite Ingots x10",
      "Ultra Balls x64, Quick Balls x32, Beast Balls x16",
      "Master Ball x1",
      "Large Protection Claim Stone x2",
      "Common Pokemon Egg x3",
      "Peculiar Pokemon Egg x1",
      "Pokemon Crate Key x5",
      "Rare Pokemon Crate Key x3",
      "Shiny Pokemon Crate Key x2"
    ],
    dailyItems: [
      "Max Potion x10, Full Restore x5",
      "Beast Ball x3, Ultra Ball x32",
      "Rare Candies x10",
      "Netherite Ingot x1"
    ],
    weeklyItems: [
      "Master Ball x1, Beast Ball x5",
      "Netherite Ingots x5, Diamonds x32",
      "Mythical Crate Key x1",
      "Shiny Crate Key x2",
      "Weekly Cash: 15,000 PC"
    ]
  },
  {
    name: "Master & Champion Rank Kit",
    badge: "LEVEL 4-5 APEX",
    color: "#F59E0B",
    tagline: "Supreme network tier with maximum perks",
    oneTimeItems: [
      "Legendary Champion Cloth Set",
      "Storage PC x10 & Healing Machine x10",
      "Netherite Ingots x25 & Diamonds x128",
      "Master Balls x5 & Beast Balls x32",
      "Mega Stone Capsule x5",
      "Huge Protection Claim Stone x3",
      "Legendary Pokemon Egg x1",
      "Legendary Crate Key x3",
      "Mystic Crate Key x5"
    ],
    dailyItems: [
      "Full Restore x16, Max Revive x8",
      "Master Ball x1, Beast Ball x5",
      "Rare Candies x20, EXP Candies XL x5",
      "Daily Cash: 5,000 PC"
    ],
    weeklyItems: [
      "Master Balls x3, Beast Balls x10",
      "Mega Stone Capsules x2",
      "Rare Candies x32, Dynamax Candies x10",
      "Legendary Crate Key x2",
      "Weekly Cash: 25,000 PC"
    ]
  }
];

export default function KitsWikiPage() {
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
          Official Server Kits (/kit)
        </span>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 900, color: "#064E3B", margin: "12px 0 8px 0" }}>
          Kits &amp; Rank Claim Guides
        </h1>
        <p style={{ color: "#134E4A", fontSize: "1rem", maxWidth: "650px", margin: "0 auto" }}>
          Everything about free starter kits, rank kit tiers, one-time rewards, daily survival items, and weekly Pokecoin cash bonuses!
        </p>
      </div>

      {/* Info Banner */}
      <div style={{ background: "#F0FDF4", padding: "20px 24px", borderRadius: "16px", border: "1.5px solid rgba(16, 185, 129, 0.35)", marginBottom: "36px" }}>
        <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#064E3B", margin: "0 0 6px 0", display: "flex", alignItems: "center", gap: "8px" }}>
          <i className="fa-solid fa-circle-info" style={{ color: "#10B981" }}></i>
          <span>How to Claim Kits In-Game:</span>
        </h3>
        <p style={{ color: "#134E4A", margin: 0, fontSize: "0.92rem", lineHeight: 1.6 }}>
          1. Type <code>/kit</code> or right-click your <strong>Ender Eye</strong> item to open the interactive UI.<br />
          2. Free players immediately receive the <strong>Starter Kit</strong> upon joining. Ensure you have empty inventory slots!<br />
          3. Daily kits refresh every 24 hours. Weekly kits refresh every 7 days and deposit direct Pokecoins to your balance.
        </p>
      </div>

      {/* Kits List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        {rankKits.map((kit, idx) => (
          <div key={idx} style={{ background: "#FFFFFF", borderRadius: "20px", padding: "28px", border: "1.5px solid rgba(16, 185, 129, 0.25)", boxShadow: "0 8px 24px rgba(6, 78, 59, 0.05)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px", flexWrap: "wrap", gap: "10px" }}>
              <div>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, padding: "3px 10px", borderRadius: "6px", background: "#F0FDF4", color: kit.color, border: `1px solid ${kit.color}` }}>
                  {kit.badge}
                </span>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#064E3B", margin: "6px 0 2px 0" }}>
                  {kit.name}
                </h2>
                <span style={{ color: "#059669", fontSize: "0.85rem", fontWeight: 600 }}>{kit.tagline}</span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginTop: "16px" }}>
              <div style={{ background: "#F0FDF4", padding: "16px", borderRadius: "14px", border: "1px solid rgba(16, 185, 129, 0.25)" }}>
                <strong style={{ display: "block", color: "#064E3B", fontSize: "0.88rem", marginBottom: "10px", textTransform: "uppercase" }}>
                  🎁 One-Time Unlock Loot:
                </strong>
                <ul style={{ margin: 0, paddingLeft: "16px", color: "#134E4A", fontSize: "0.82rem", lineHeight: 1.7 }}>
                  {kit.oneTimeItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div style={{ background: "#F0FDF4", padding: "16px", borderRadius: "14px", border: "1px solid rgba(16, 185, 129, 0.25)" }}>
                <strong style={{ display: "block", color: "#064E3B", fontSize: "0.88rem", marginBottom: "10px", textTransform: "uppercase" }}>
                  ☀️ Daily Claim (Every 24h):
                </strong>
                <ul style={{ margin: 0, paddingLeft: "16px", color: "#134E4A", fontSize: "0.82rem", lineHeight: 1.7 }}>
                  {kit.dailyItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div style={{ background: "#F0FDF4", padding: "16px", borderRadius: "14px", border: "1px solid rgba(16, 185, 129, 0.25)" }}>
                <strong style={{ display: "block", color: "#064E3B", fontSize: "0.88rem", marginBottom: "10px", textTransform: "uppercase" }}>
                  ⭐ Weekly Claim (Every 7d):
                </strong>
                <ul style={{ margin: 0, paddingLeft: "16px", color: "#134E4A", fontSize: "0.82rem", lineHeight: 1.7 }}>
                  {kit.weeklyItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
