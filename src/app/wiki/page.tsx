"use client";

import React, { useState } from "react";
import Link from "next/link";

const wikiPages = [
  {
    title: "Ranks, Perks & Commands",
    description: "Complete comparison of all 9 ranks (Trainer to VIP), /fly unlock, cooldowns, portable vaults, land protection stones, and commands cheatsheet.",
    path: "/wiki/ranks",
    icon: "fa-crown",
    badge: "RANKS & PERKS",
    color: "linear-gradient(135deg, #10B981 0%, #047857 100%)",
  },
  {
    title: "Beginner Survival Guide",
    description: "Starter kits, Nurse Joy healers, storage PC boxes, cat backpacks, and essential player commands.",
    path: "/wiki/begginer_guide",
    icon: "fa-book-open",
    badge: "ESSENTIAL",
    color: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
  },
  {
    title: "Kits & Rank Claims",
    description: "Complete guide to /kit, Starter kit, Beginner, Great, Ultra, Master, and Champion rank kits with daily/weekly loot.",
    path: "/wiki/kits",
    icon: "fa-gift",
    badge: "LOOT & PERKS",
    color: "linear-gradient(135deg, #059669 0%, #064E3B 100%)",
  },
  {
    title: "Gym Locator & Level Cap",
    description: "Track Gyms in real-time with the screen top Locator Bar, defeat leaders, and unlock up to Lv 100 cap.",
    path: "/wiki/levelcap",
    icon: "fa-compass",
    badge: "18 BADGES",
    color: "linear-gradient(135deg, #047857 0%, #022C22 100%)",
  },
  {
    title: "Economy, Banknotes & Casino",
    description: "Battle bounties (1.5 PC/Lv), 30-day streak bonuses, physical banknotes (/withdraw), /gts, and casino games.",
    path: "/wiki/economy",
    icon: "fa-coins",
    badge: "MONEY SYSTEM",
    color: "linear-gradient(135deg, #0D9488 0%, #115E59 100%)",
  },
  {
    title: "Bottle Caps & CobbleUtility",
    description: "Golden bottle caps (31 IVs), Silver caps, Void caps (0 IV for Trick Room), shiny cards, and devolution relics.",
    path: "/wiki/utility",
    icon: "fa-wand-magic-sparkles",
    badge: "HYPER TRAINING",
    color: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
  },
  {
    title: "10 Elemental Raid Dens",
    description: "4-player co-op raid arenas across 10 biomes! Challenge bosses, beat the timer, and claim legendary captures.",
    path: "/wiki/raids",
    icon: "fa-dungeon",
    badge: "CO-OP RAIDS",
    color: "linear-gradient(135deg, #DC2626 0%, #991B1B 100%)",
  },
  {
    title: "Pokemon Skins & 5 Size Tiers",
    description: "Boundary Mewtwo, Mega Greninja Ceruledge, Aurora Umbreon, 5-tier size essences, player wings, and animated trails.",
    path: "/wiki/cosmetics",
    icon: "fa-shirt",
    badge: "CUSTOM MODELS",
    color: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
  },
  {
    title: "Protection Stones (Land Claim)",
    description: "Keep your builds, bases, and chests safe using Small, Medium, Large, and Huge Protection Stones.",
    path: "/wiki/claims",
    icon: "fa-shield-halved",
    badge: "BASE DEFENSE",
    color: "linear-gradient(135deg, #059669 0%, #047857 100%)",
  },
  {
    title: "FAQs & Common Issues",
    description: "Find solutions for Bedrock / MCPE connection time-outs, console DNS setup, and common gameplay questions.",
    path: "/wiki/faq",
    icon: "fa-circle-question",
    badge: "SUPPORT",
    color: "linear-gradient(135deg, #475569 0%, #1E293B 100%)",
  }
];

export default function WikiPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPages = wikiPages.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "40px 20px 80px" }}>
      
      {/* Search Header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <div style={{
          display: "inline-block",
          padding: "5px 16px",
          borderRadius: "9999px",
          background: "#F0FDF4",
          border: "1.5px solid rgba(16, 185, 129, 0.4)",
          color: "#059669",
          fontSize: "0.82rem",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "1px",
          marginBottom: "12px"
        }}>
          CobbleFun Official Knowledgebase
        </div>

        <h1 style={{ fontSize: "2.8rem", fontWeight: 900, color: "#064E3B", margin: "0 0 10px 0" }}>
          Wiki &amp; Player Guides
        </h1>

        <p style={{ color: "#134E4A", fontSize: "1.05rem", maxWidth: "660px", margin: "0 auto 28px auto", lineHeight: 1.6 }}>
          Everything you need to master CobbleFun Bedrock: in-game economy, raid dens, level cap progression, bottle caps, and cosmetics.
        </p>

        {/* Search Bar */}
        <div style={{ maxWidth: "600px", margin: "0 auto", position: "relative" }}>
          <i className="fa-solid fa-magnifying-glass" style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", color: "#10B981" }}></i>
          <input 
            type="text" 
            placeholder="Search guides, kits, gyms, bottle caps, raids..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "16px 20px 16px 52px",
              borderRadius: "16px",
              border: "1.5px solid rgba(16, 185, 129, 0.35)",
              background: "#FFFFFF",
              color: "#064E3B",
              fontSize: "1rem",
              outline: "none",
              boxShadow: "0 6px 20px rgba(6, 78, 59, 0.05)"
            }}
          />
        </div>
      </div>

      {/* Wiki Cards Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "24px"
      }}>
        {filteredPages.map((page, index) => (
          <Link href={page.path} key={index} style={{ textDecoration: "none" }}>
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                padding: "32px 26px",
                border: "1.5px solid rgba(16, 185, 129, 0.25)",
                boxShadow: "0 8px 24px rgba(6, 78, 59, 0.05)",
                transition: "all 0.25s ease",
                height: "100%",
                display: "flex",
                flexDirection: "column"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = "#10B981";
                e.currentTarget.style.boxShadow = "0 14px 35px rgba(16, 185, 129, 0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.25)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(6, 78, 59, 0.05)";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "18px" }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  background: page.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontSize: "1.5rem",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.12)"
                }}>
                  <i className={`fa-solid ${page.icon}`}></i>
                </div>
                <span style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  padding: "4px 10px",
                  borderRadius: "8px",
                  background: "#F0FDF4",
                  color: "#059669",
                  border: "1px solid rgba(16, 185, 129, 0.35)",
                  letterSpacing: "0.5px"
                }}>
                  {page.badge}
                </span>
              </div>

              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#064E3B", margin: "0 0 10px 0" }}>
                {page.title}
              </h3>
              <p style={{ color: "#134E4A", fontSize: "0.88rem", lineHeight: 1.6, margin: "0 0 16px 0", flex: 1 }}>
                {page.description}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#10B981", fontWeight: 800, fontSize: "0.85rem", marginTop: "auto" }}>
                <span>Read Full Guide</span>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
