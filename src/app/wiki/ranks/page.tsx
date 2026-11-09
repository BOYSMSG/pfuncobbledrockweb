"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

interface RankItem {
  name: string;
  tag: string;
  homes: number;
  warps: number;
  fly: boolean;
  healCooldown: string;
  feedCooldown: string;
  pcCooldown: string;
  vault: string;
  badgeBg: string;
  badgeColor: string;
  borderTint: string;
  isPopular?: boolean;
  isInstantPc?: boolean;
  isUltimate?: boolean;
}

const RANKS_DATA: RankItem[] = [
  {
    name: "Trainer (Default)",
    tag: "(None)",
    homes: 2,
    warps: 2,
    fly: false,
    healCooldown: "10 Min (600s)",
    feedCooldown: "5 Min (300s)",
    pcCooldown: "60s",
    vault: "Vault #1",
    badgeBg: "#F1F5F9",
    badgeColor: "#475569",
    borderTint: "#CBD5E1",
  },
  {
    name: "Beginner",
    tag: "Beginner",
    homes: 3,
    warps: 3,
    fly: false,
    healCooldown: "8 Min (480s)",
    feedCooldown: "4 Min (240s)",
    pcCooldown: "45s",
    vault: "Vault #1",
    badgeBg: "#ECFDF5",
    badgeColor: "#059669",
    borderTint: "#A7F3D0",
  },
  {
    name: "Great",
    tag: "Great",
    homes: 4,
    warps: 4,
    fly: false,
    healCooldown: "6 Min (360s)",
    feedCooldown: "3 Min (180s)",
    pcCooldown: "30s",
    vault: "Vault #1-2",
    badgeBg: "#F0F9FF",
    badgeColor: "#0284C7",
    borderTint: "#BAE6FD",
  },
  {
    name: "Ultra",
    tag: "Ultra",
    homes: 6,
    warps: 6,
    fly: false,
    healCooldown: "5 Min (300s)",
    feedCooldown: "2 Min (120s)",
    pcCooldown: "20s",
    vault: "Vault #1-2",
    badgeBg: "#FEFCE8",
    badgeColor: "#CA8A04",
    borderTint: "#FDE047",
  },
  {
    name: "Master",
    tag: "Master",
    homes: 8,
    warps: 8,
    fly: true,
    healCooldown: "4 Min (240s)",
    feedCooldown: "90s",
    pcCooldown: "10s",
    vault: "Vault #1-3",
    badgeBg: "#F5F3FF",
    badgeColor: "#7C3AED",
    borderTint: "#DDD6FE",
    isPopular: true,
  },
  {
    name: "Beast",
    tag: "Beast",
    homes: 12,
    warps: 12,
    fly: true,
    healCooldown: "3 Min (180s)",
    feedCooldown: "60s",
    pcCooldown: "5s",
    vault: "Vault #1-4",
    badgeBg: "#FEF2F2",
    badgeColor: "#DC2626",
    borderTint: "#FECACA",
  },
  {
    name: "Elite",
    tag: "Elite",
    homes: 16,
    warps: 16,
    fly: true,
    healCooldown: "2 Min (120s)",
    feedCooldown: "45s",
    pcCooldown: "Instant (0s)",
    vault: "Vault #1-5",
    badgeBg: "#ECFEFF",
    badgeColor: "#0891B2",
    borderTint: "#A5F3FC",
    isInstantPc: true,
  },
  {
    name: "Ace",
    tag: "Ace",
    homes: 20,
    warps: 20,
    fly: true,
    healCooldown: "90s",
    feedCooldown: "30s",
    pcCooldown: "Instant (0s)",
    vault: "Vault #1-5",
    badgeBg: "#FDF2F8",
    badgeColor: "#DB2777",
    borderTint: "#FBCFE8",
    isInstantPc: true,
  },
  {
    name: "VIP",
    tag: "Vip",
    homes: 30,
    warps: 30,
    fly: true,
    healCooldown: "45s",
    feedCooldown: "15s",
    pcCooldown: "Instant (0s)",
    vault: "Vault #1-6",
    badgeBg: "#FEFCE8",
    badgeColor: "#B45309",
    borderTint: "#FDE68A",
    isUltimate: true,
  },
];

const STONES_DATA = [
  {
    name: "Small Protection Stone",
    blockId: "vex:tierone",
    coins: "250,000 (250k)",
    area: "33 × 33 blocks",
    radius: "16 Blocks",
    command: "/claim ya /protection",
    color: "#10B981",
    tag: "STARTER BASE",
  },
  {
    name: "Medium Protection Stone",
    blockId: "vex:tiertwo",
    coins: "750,000 (750k)",
    area: "65 × 65 blocks",
    radius: "32 Blocks",
    command: "/claim ya /protection",
    color: "#059669",
    tag: "CLAN HEADQUARTERS",
  },
];

const COMMANDS_DATA = [
  { command: "/perks", cat: "core", desc: "Master GUI menu — rank, cooldowns aur saare perks ek jagah dekhein", ex: "/perks" },
  { command: "/pc", cat: "core", desc: "Direct Cobblemon PC Box storage open karega (Pokemon team manage)", ex: "/pc" },
  { command: "/pv [1-6]", cat: "core", desc: "Personal portable vault (items store & withdraw securely)", ex: "/pv 1" },
  { command: "/pokeheal", cat: "rec", desc: "Poori party ke Pokémon ko full heal + revive karega", ex: "/pokeheal" },
  { command: "/heal", cat: "rec", desc: "Player ki health aur saturation full karega", ex: "/heal" },
  { command: "/feed", cat: "rec", desc: "Player ka hunger bar full karega", ex: "/feed" },
  { command: "/fly", cat: "core", desc: "Fly toggle on/off (Master rank ya uske upar ke liye unlocked)", ex: "/fly", req: "Master+ Rank" },
  { command: "/sethome <name>", cat: "tp", desc: "Apni current location ko home banayega", ex: "/sethome base" },
  { command: "/home [name]", cat: "tp", desc: "Home pe teleport karega (bina name ke homes ka GUI kholega)", ex: "/home base" },
  { command: "/homes", cat: "tp", desc: "Saare set kiye hue homes ka visual menu kholega", ex: "/homes" },
  { command: "/delhome <name>", cat: "tp", desc: "Home delete karega", ex: "/delhome base" },
  { command: "/pw ya /pwarps", cat: "warp", desc: "Public Warps Directory GUI kholega (Browse, Visit & TP to player shops)", ex: "/pw" },
  { command: "/pwarp set <name>", cat: "warp", desc: "Naya public warp banayega (Inventory se icon select hoga)", ex: "/pwarp set shop" },
  { command: "/pwarp update <name>", cat: "warp", desc: "Existing warp ki location apni jagah pe update karega", ex: "/pwarp update shop" },
  { command: "/pwarp del <name>", cat: "warp", desc: "Apna public warp delete karega", ex: "/pwarp del shop" },
  { command: "/claim", cat: "claim", desc: "Protection stone buy shop & claims management menu", ex: "/claim" },
];

export default function RanksWikiPage() {
  const [activeTab, setActiveTab] = useState<"ranks" | "guide" | "stones" | "commands">("ranks");
  const [cmdSearch, setCmdSearch] = useState("");
  const [cmdFilter, setCmdFilter] = useState("all");
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(text);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const filteredCommands = useMemo(() => {
    return COMMANDS_DATA.filter(c => {
      const matchCat = cmdFilter === "all" || c.cat === cmdFilter;
      const matchSearch = cmdSearch.trim() === "" ||
        c.command.toLowerCase().includes(cmdSearch.toLowerCase()) ||
        c.desc.toLowerCase().includes(cmdSearch.toLowerCase()) ||
        c.ex.toLowerCase().includes(cmdSearch.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [cmdFilter, cmdSearch]);

  return (
    <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "40px 20px 80px", fontFamily: "'Karla', sans-serif" }}>
      
      {/* Breadcrumb */}
      <div style={{ marginBottom: "24px" }}>
        <Link href="/wiki" style={{ color: "#059669", textDecoration: "none", fontWeight: 700, fontSize: "0.92rem", display: "inline-flex", alignItems: "center", gap: "6px" }}>
          <i className="fa-solid fa-arrow-left"></i> Back to Wiki Overview
        </Link>
      </div>

      {/* Main Header Card */}
      <div style={{
        background: "#FFFFFF",
        borderRadius: "24px",
        padding: "36px 28px",
        border: "1.5px solid rgba(16, 185, 129, 0.28)",
        boxShadow: "0 10px 32px rgba(5, 150, 105, 0.08)",
        textAlign: "center",
        marginBottom: "32px",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "180px",
          height: "180px",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none"
        }} />

        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "6px 16px",
          borderRadius: "9999px",
          background: "#F0FDF4",
          border: "1.5px solid rgba(16, 185, 129, 0.35)",
          color: "#059669",
          fontSize: "0.82rem",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          marginBottom: "14px"
        }}>
          <i className="fa-solid fa-crown"></i> CobbleFun Bedrock • Official Ranks &amp; Perks Guide
        </div>

        <h1 style={{
          fontFamily: "'Righteous', sans-serif",
          fontSize: "2.6rem",
          color: "#064E3B",
          margin: "0 0 10px 0"
        }}>
          Ranks Perks, Limits &amp; Commands Guide
        </h1>

        <p style={{
          color: "#134E4A",
          fontSize: "1.05rem",
          maxWidth: "750px",
          margin: "0 auto 26px auto",
          lineHeight: 1.6
        }}>
          CobbleFun Bedrock ke sabhi player ranks ka poora comparison chart dekhein: Homes, Public Warps, 
          Fly permissions, Pokeheal cooldowns, portable vaults, land protection stones aur command cheatsheet ek hi jagah!
        </p>

        {/* Tab Switcher */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
          <button
            onClick={() => setActiveTab("ranks")}
            style={{
              padding: "10px 20px",
              borderRadius: "12px",
              border: activeTab === "ranks" ? "1.5px solid #059669" : "1.5px solid rgba(16, 185, 129, 0.2)",
              background: activeTab === "ranks" ? "linear-gradient(135deg, #10B981, #059669)" : "#F8FCFA",
              color: activeTab === "ranks" ? "#FFFFFF" : "#134E4A",
              fontWeight: 800,
              fontSize: "0.92rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s ease"
            }}
          >
            <i className="fa-solid fa-table-list"></i> 1. Ranks Perks &amp; Limits
          </button>

          <button
            onClick={() => setActiveTab("guide")}
            style={{
              padding: "10px 20px",
              borderRadius: "12px",
              border: activeTab === "guide" ? "1.5px solid #059669" : "1.5px solid rgba(16, 185, 129, 0.2)",
              background: activeTab === "guide" ? "linear-gradient(135deg, #10B981, #059669)" : "#F8FCFA",
              color: activeTab === "guide" ? "#FFFFFF" : "#134E4A",
              fontWeight: 800,
              fontSize: "0.92rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s ease"
            }}
          >
            <i className="fa-solid fa-fire"></i> Rank Buyer's Guide &amp; Tips
          </button>

          <button
            onClick={() => setActiveTab("stones")}
            style={{
              padding: "10px 20px",
              borderRadius: "12px",
              border: activeTab === "stones" ? "1.5px solid #059669" : "1.5px solid rgba(16, 185, 129, 0.2)",
              background: activeTab === "stones" ? "linear-gradient(135deg, #10B981, #059669)" : "#F8FCFA",
              color: activeTab === "stones" ? "#FFFFFF" : "#134E4A",
              fontWeight: 800,
              fontSize: "0.92rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s ease"
            }}
          >
            <i className="fa-solid fa-shield-halved"></i> 2. Land Protection Stones
          </button>

          <button
            onClick={() => setActiveTab("commands")}
            style={{
              padding: "10px 20px",
              borderRadius: "12px",
              border: activeTab === "commands" ? "1.5px solid #059669" : "1.5px solid rgba(16, 185, 129, 0.2)",
              background: activeTab === "commands" ? "linear-gradient(135deg, #10B981, #059669)" : "#F8FCFA",
              color: activeTab === "commands" ? "#FFFFFF" : "#134E4A",
              fontWeight: 800,
              fontSize: "0.92rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s ease"
            }}
          >
            <i className="fa-solid fa-terminal"></i> 3. Commands Cheatsheet
          </button>
        </div>
      </div>

      {/* TAB 1: Ranks Perks & Limits */}
      {activeTab === "ranks" && (
        <div>
          {/* Quick Info & Store Action */}
          <div style={{
            background: "#FFFFFF",
            borderRadius: "18px",
            padding: "22px 26px",
            border: "1.5px solid rgba(16, 185, 129, 0.25)",
            boxShadow: "0 6px 20px rgba(5, 150, 105, 0.05)",
            marginBottom: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px"
          }}>
            <div>
              <h3 style={{ margin: "0 0 4px 0", color: "#064E3B", fontSize: "1.25rem", fontWeight: 800 }}>
                📊 Ranks Perks &amp; Limits Matrix
              </h3>
              <p style={{ margin: 0, color: "#475569", fontSize: "0.92rem" }}>
                Default Trainer se lekar VIP tak sabhi limits, cooldowns aur portable vaults:
              </p>
            </div>

            <a
              href="https://store.pokefun.in/?category=c-ranks&platform=cobbledrock"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg, #10B981, #059669)",
                color: "#FFFFFF",
                padding: "10px 22px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "0.92rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 14px rgba(16, 185, 129, 0.35)"
              }}
            >
              <i className="fa-solid fa-cart-shopping"></i> CobbleFun Store me Ranks Dekhein &rarr;
            </a>
          </div>

          {/* Matrix Table */}
          <div style={{
            background: "#FFFFFF",
            borderRadius: "20px",
            padding: "8px",
            border: "1.5px solid rgba(16, 185, 129, 0.25)",
            boxShadow: "0 8px 30px rgba(5, 150, 105, 0.06)",
            overflowX: "auto"
          }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "900px", fontSize: "0.92rem" }}>
              <thead>
                <tr style={{ background: "#F0FDF4", borderBottom: "2px solid rgba(16, 185, 129, 0.25)" }}>
                  <th style={{ padding: "14px 16px", textAlign: "left", color: "#064E3B", fontWeight: 800 }}>Rank</th>
                  <th style={{ padding: "14px 12px", textAlign: "left", color: "#064E3B", fontWeight: 800 }}>Chat Tag</th>
                  <th style={{ padding: "14px 10px", textAlign: "center", color: "#064E3B", fontWeight: 800 }}>Homes</th>
                  <th style={{ padding: "14px 10px", textAlign: "center", color: "#064E3B", fontWeight: 800 }}>Warps (/pw)</th>
                  <th style={{ padding: "14px 12px", textAlign: "center", color: "#064E3B", fontWeight: 800 }}>Fly (/fly)</th>
                  <th style={{ padding: "14px 12px", textAlign: "center", color: "#064E3B", fontWeight: 800 }}>/heal &amp; /pokeheal</th>
                  <th style={{ padding: "14px 12px", textAlign: "center", color: "#064E3B", fontWeight: 800 }}>/feed</th>
                  <th style={{ padding: "14px 12px", textAlign: "center", color: "#064E3B", fontWeight: 800 }}>/pc Box</th>
                  <th style={{ padding: "14px 14px", textAlign: "center", color: "#064E3B", fontWeight: 800 }}>/pv (Vault)</th>
                </tr>
              </thead>
              <tbody>
                {RANKS_DATA.map((rank, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: "1px solid rgba(16, 185, 129, 0.12)",
                      background: rank.isPopular ? "#F5F3FF" : rank.isUltimate ? "#FEFCE8" : idx % 2 === 0 ? "#FFFFFF" : "#FBFDFB"
                    }}
                  >
                    <td style={{ padding: "14px 16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: rank.badgeColor,
                          display: "inline-block",
                          flexShrink: 0
                        }}></span>
                        <div>
                          <strong style={{ color: "#06281E", fontSize: "0.98rem" }}>{rank.name}</strong>
                          {rank.isPopular && (
                            <span style={{ display: "block", fontSize: "0.68rem", fontWeight: 800, color: "#7C3AED", background: "#DDD6FE", padding: "1px 6px", borderRadius: "4px", width: "fit-content", marginTop: "2px" }}>
                              ★ MOST POPULAR
                            </span>
                          )}
                          {rank.isInstantPc && !rank.isUltimate && (
                            <span style={{ display: "block", fontSize: "0.68rem", fontWeight: 800, color: "#0891B2", background: "#CFFAFE", padding: "1px 6px", borderRadius: "4px", width: "fit-content", marginTop: "2px" }}>
                              ⚡ 0s INSTANT PC
                            </span>
                          )}
                          {rank.isUltimate && (
                            <span style={{ display: "block", fontSize: "0.68rem", fontWeight: 800, color: "#B45309", background: "#FDE68A", padding: "1px 6px", borderRadius: "4px", width: "fit-content", marginTop: "2px" }}>
                              👑 MAX PERKS
                            </span>
                          )}
                        </div>
                      </div>
                    </td>

                    <td style={{ padding: "14px 12px" }}>
                      <code style={{
                        background: rank.badgeBg,
                        color: rank.badgeColor,
                        padding: "3px 8px",
                        borderRadius: "6px",
                        fontWeight: 800,
                        border: `1px solid ${rank.borderTint}`,
                        fontSize: "0.85rem"
                      }}>
                        {rank.tag}
                      </code>
                    </td>

                    <td style={{ padding: "14px 10px", textAlign: "center", fontWeight: 800, color: "#064E3B" }}>
                      {rank.homes}
                    </td>

                    <td style={{ padding: "14px 10px", textAlign: "center", fontWeight: 800, color: "#064E3B" }}>
                      {rank.warps}
                    </td>

                    <td style={{ padding: "14px 12px", textAlign: "center" }}>
                      {rank.fly ? (
                        <span style={{ background: "#ECFDF5", color: "#059669", padding: "4px 10px", borderRadius: "20px", fontWeight: 800, fontSize: "0.8rem", border: "1px solid #A7F3D0" }}>
                          ✅ Unlocked
                        </span>
                      ) : (
                        <span style={{ color: "#94A3B8", fontSize: "0.85rem" }}>
                          ❌
                        </span>
                      )}
                    </td>

                    <td style={{ padding: "14px 12px", textAlign: "center", color: "#0F766E", fontWeight: 600 }}>
                      {rank.healCooldown}
                    </td>

                    <td style={{ padding: "14px 12px", textAlign: "center", color: "#0F766E", fontWeight: 600 }}>
                      {rank.feedCooldown}
                    </td>

                    <td style={{ padding: "14px 12px", textAlign: "center" }}>
                      {rank.pcCooldown.includes("Instant") ? (
                        <span style={{ background: "#CFFAFE", color: "#0891B2", padding: "4px 8px", borderRadius: "6px", fontWeight: 800, fontSize: "0.82rem" }}>
                          ⚡ Instant (0s)
                        </span>
                      ) : (
                        <span style={{ color: "#475569", fontWeight: 600 }}>{rank.pcCooldown}</span>
                      )}
                    </td>

                    <td style={{ padding: "14px 14px", textAlign: "center" }}>
                      <span style={{ background: "#F0FDF4", color: "#047857", padding: "4px 8px", borderRadius: "6px", fontWeight: 700, fontSize: "0.85rem", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                        {rank.vault}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: Smart Buyer's Guide */}
      {activeTab === "guide" && (
        <div>
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <h3 style={{ fontSize: "1.8rem", fontWeight: 900, color: "#064E3B", margin: "0 0 8px 0" }}>
              💡 Kaun sa Rank Aapke Liye Best Hai? (Buyer's Guide)
            </h3>
            <p style={{ color: "#134E4A", fontSize: "0.98rem", maxWidth: "680px", margin: "0 auto" }}>
              Har player ke playstyle ke hisab se hamari curated recommendations:
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {/* Starter */}
            <div style={{ background: "#FFFFFF", borderRadius: "18px", padding: "26px", border: "1.5px solid rgba(16, 185, 129, 0.25)", boxShadow: "0 8px 24px rgba(6, 78, 59, 0.05)" }}>
              <span style={{ background: "#ECFDF5", color: "#059669", padding: "4px 10px", borderRadius: "6px", fontWeight: 800, fontSize: "0.75rem", display: "inline-block", marginBottom: "12px" }}>
                🥉 STARTER &amp; BUDGET
              </span>
              <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#064E3B", margin: "0 0 10px 0" }}>Beginner ya Great</h4>
              <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.6, margin: "0 0 16px 0" }}>
                Pocket friendly price me 3-4 Homes, 3-4 Public Warps aur fast 6 min heal cooldown. New players ke survival ke liye best!
              </p>
              <div style={{ color: "#047857", fontWeight: 700, fontSize: "0.85rem" }}>
                ✓ +2 Extra Homes &amp; Warps<br />
                ✓ Cooldown 40% Kam<br />
                ✓ Vault #1-2 Storage
              </div>
            </div>

            {/* Master Rank */}
            <div style={{ background: "#FFFFFF", borderRadius: "18px", padding: "26px", border: "2px solid #7C3AED", boxShadow: "0 10px 30px rgba(124, 58, 237, 0.12)" }}>
              <span style={{ background: "#7C3AED", color: "#FFFFFF", padding: "4px 10px", borderRadius: "6px", fontWeight: 800, fontSize: "0.75rem", display: "inline-block", marginBottom: "12px" }}>
                ⭐ BEST VALUE &amp; POPULAR
              </span>
              <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#064E3B", margin: "0 0 10px 0" }}>Master Rank</h4>
              <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.6, margin: "0 0 16px 0" }}>
                <strong>Community ka #1 Most Popular Rank!</strong> Yahan se `/fly` command permanently unlock ho jaati hai + 8 Homes &amp; 3 Vaults!
              </p>
              <div style={{ color: "#7C3AED", fontWeight: 700, fontSize: "0.85rem" }}>
                ✓ 🪽 <strong>Fly (/fly) Unlocked!</strong><br />
                ✓ 8 Homes &amp; 8 Public Warps<br />
                ✓ /pc Cooldown sirf 10s<br />
                ✓ 3 Full Vaults
              </div>
            </div>

            {/* Elite / Ace */}
            <div style={{ background: "#FFFFFF", borderRadius: "18px", padding: "26px", border: "1.5px solid #0891B2", boxShadow: "0 8px 24px rgba(8, 145, 178, 0.08)" }}>
              <span style={{ background: "#CFFAFE", color: "#0891B2", padding: "4px 10px", borderRadius: "6px", fontWeight: 800, fontSize: "0.75rem", display: "inline-block", marginBottom: "12px" }}>
                ⚡ PRO GRINDER PICK
              </span>
              <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#064E3B", margin: "0 0 10px 0" }}>Elite ya Ace</h4>
              <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.6, margin: "0 0 16px 0" }}>
                Pokémon hunters aur traders ke liye game-changer perk: <strong>⚡ Instant (0s) /pc cooldown!</strong> Bina wait ke Pokémon swap karein.
              </p>
              <div style={{ color: "#0891B2", fontWeight: 700, fontSize: "0.85rem" }}>
                ✓ ⚡ <strong>0s Instant /pc Box!</strong><br />
                ✓ 16-20 Homes &amp; Warps<br />
                ✓ 5 Portable Vaults (/pv 1-5)<br />
                ✓ 90s - 2 Min Heal
              </div>
            </div>

            {/* VIP */}
            <div style={{ background: "#FFFFFF", borderRadius: "18px", padding: "26px", border: "2px solid #B45309", boxShadow: "0 10px 30px rgba(180, 83, 9, 0.1)" }}>
              <span style={{ background: "#FEF3C7", color: "#B45309", padding: "4px 10px", borderRadius: "6px", fontWeight: 800, fontSize: "0.75rem", display: "inline-block", marginBottom: "12px" }}>
                👑 ULTIMATE OVERLORD
              </span>
              <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#064E3B", margin: "0 0 10px 0" }}>VIP Rank</h4>
              <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.6, margin: "0 0 16px 0" }}>
                Maximum power, server pe sabse uncha rutba! 30 Homes, 30 Warps, 6 Vaults, aur super-fast 45s Pokeheal!
              </p>
              <div style={{ color: "#B45309", fontWeight: 700, fontSize: "0.85rem" }}>
                ✓ 👑 <strong>30 Homes &amp; 30 Warps!</strong><br />
                ✓ Sabhi 6 Vaults Unlocked<br />
                ✓ 45s Heal &amp; 15s Feed<br />
                ✓ Instant /pc &amp; /fly
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Land Protection Stones */}
      {activeTab === "stones" && (
        <div>
          <div style={{
            background: "#FFFFFF",
            borderRadius: "20px",
            padding: "28px",
            border: "1.5px solid rgba(16, 185, 129, 0.25)",
            boxShadow: "0 8px 30px rgba(5, 150, 105, 0.06)",
            marginBottom: "26px"
          }}>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 900, color: "#064E3B", margin: "0 0 6px 0" }}>
              🛡️ 2. Land Protection Stones Table
            </h3>
            <p style={{ color: "#134E4A", fontSize: "0.95rem", margin: "0 0 20px 0" }}>
              Apne base aur items ko safe rakhein! Protection stones in-game PokéCoins se ya webstore se buy kiye ja sakte hain:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              {STONES_DATA.map((stone, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#F8FCFA",
                    borderRadius: "16px",
                    padding: "24px",
                    border: `2px solid ${stone.color}`,
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px"
                  }}
                >
                  <span style={{
                    background: stone.color,
                    color: "#FFFFFF",
                    padding: "3px 10px",
                    borderRadius: "6px",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    width: "fit-content"
                  }}>
                    {stone.tag}
                  </span>

                  <h4 style={{ margin: 0, fontSize: "1.3rem", fontWeight: 800, color: "#064E3B" }}>
                    {stone.name}
                  </h4>

                  <div style={{ fontSize: "0.88rem", color: "#475569" }}>
                    Block ID: <code style={{ background: "#E2E8F0", padding: "2px 6px", borderRadius: "4px", color: "#064E3B", fontWeight: 700 }}>{stone.blockId}</code>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", margin: "8px 0" }}>
                    <div style={{ background: "#FFFFFF", padding: "10px", borderRadius: "10px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                      <span style={{ fontSize: "0.72rem", color: "#64748B", textTransform: "uppercase", fontWeight: 700 }}>Claim Area</span>
                      <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#059669" }}>{stone.area}</div>
                    </div>

                    <div style={{ background: "#FFFFFF", padding: "10px", borderRadius: "10px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                      <span style={{ fontSize: "0.72rem", color: "#64748B", textTransform: "uppercase", fontWeight: 700 }}>Radius</span>
                      <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0284C7" }}>{stone.radius}</div>
                    </div>
                  </div>

                  <div style={{ background: "#ECFDF5", padding: "10px 14px", borderRadius: "10px", border: "1px solid #A7F3D0" }}>
                    <span style={{ fontSize: "0.75rem", color: "#047857", fontWeight: 800, display: "block" }}>POKÉCOINS COST:</span>
                    <strong style={{ fontSize: "1.15rem", color: "#064E3B" }}>{stone.coins} PokéCoins</strong>
                  </div>

                  <div style={{ fontSize: "0.88rem", color: "#134E4A" }}>
                    In-Game Buy: <code>{stone.command}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: "#F0FDF4",
            borderRadius: "16px",
            padding: "20px 24px",
            border: "1.5px solid rgba(16, 185, 129, 0.35)",
            display: "flex",
            alignItems: "center",
            gap: "16px"
          }}>
            <i className="fa-solid fa-circle-info" style={{ color: "#059669", fontSize: "1.8rem" }}></i>
            <div style={{ color: "#064E3B", fontSize: "0.92rem", lineHeight: 1.6 }}>
              <strong>Kaise Use Karein:</strong> Protection stone ko zameen par place karte hi specified radius ka land claim automatically create ho jata hai. Kisi dost ko permission dene ke liye <code>/ps add &lt;player&gt;</code> use karein!
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: Commands Cheatsheet */}
      {activeTab === "commands" && (
        <div style={{
          background: "#FFFFFF",
          borderRadius: "20px",
          padding: "28px",
          border: "1.5px solid rgba(16, 185, 129, 0.25)",
          boxShadow: "0 8px 30px rgba(5, 150, 105, 0.06)"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
            <div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 900, color: "#064E3B", margin: "0 0 4px 0" }}>
                🎮 3. CobbleFun Commands Cheatsheet
              </h3>
              <p style={{ color: "#475569", fontSize: "0.92rem", margin: 0 }}>
                Sabhi zaroori in-game commands. Kisi bhi command par click karke copy karein:
              </p>
            </div>

            {/* Search Input */}
            <div style={{ position: "relative", minWidth: "260px" }}>
              <i className="fa-solid fa-magnifying-glass" style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#10B981" }}></i>
              <input
                type="text"
                placeholder="Search command (/fly, /pv, /heal)..."
                value={cmdSearch}
                onChange={(e) => setCmdSearch(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px 10px 38px",
                  borderRadius: "10px",
                  border: "1.5px solid rgba(16, 185, 129, 0.3)",
                  outline: "none",
                  fontSize: "0.9rem"
                }}
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
            {[
              { id: "all", label: "All Commands" },
              { id: "core", label: "⚡ Core & Vaults" },
              { id: "rec", label: "❤️ Heal & Hunger" },
              { id: "tp", label: "🏠 Homes & Teleport" },
              { id: "warp", label: "🌐 Public Warps (/pw)" },
              { id: "claim", label: "🛡️ Land & Claims" },
            ].map(pill => (
              <button
                key={pill.id}
                onClick={() => setCmdFilter(pill.id)}
                style={{
                  padding: "6px 14px",
                  borderRadius: "8px",
                  border: cmdFilter === pill.id ? "1.5px solid #059669" : "1px solid #E2E8F0",
                  background: cmdFilter === pill.id ? "#10B981" : "#F8FCFA",
                  color: cmdFilter === pill.id ? "#FFFFFF" : "#134E4A",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  cursor: "pointer"
                }}
              >
                {pill.label}
              </button>
            ))}
          </div>

          {/* Commands Table */}
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "650px", fontSize: "0.92rem" }}>
              <thead>
                <tr style={{ background: "#F0FDF4", borderBottom: "2px solid rgba(16, 185, 129, 0.25)" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", color: "#064E3B", fontWeight: 800 }}>Command</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", color: "#064E3B", fontWeight: 800 }}>Description</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", color: "#064E3B", fontWeight: 800 }}>Example Usage</th>
                  <th style={{ padding: "12px 16px", textAlign: "center", color: "#064E3B", fontWeight: 800 }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredCommands.map((cmd, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid rgba(16, 185, 129, 0.12)" }}>
                    <td style={{ padding: "12px 16px" }}>
                      <code style={{ background: "#ECFDF5", color: "#047857", padding: "4px 8px", borderRadius: "6px", fontWeight: 800, border: "1px solid #A7F3D0" }}>
                        {cmd.command}
                      </code>
                      {cmd.req && (
                        <span style={{ marginLeft: "8px", fontSize: "0.72rem", background: "#DDD6FE", color: "#7C3AED", padding: "2px 6px", borderRadius: "4px", fontWeight: 800 }}>
                          {cmd.req}
                        </span>
                      )}
                    </td>

                    <td style={{ padding: "12px 16px", color: "#334155" }}>
                      {cmd.desc}
                    </td>

                    <td style={{ padding: "12px 16px" }}>
                      <code
                        onClick={() => copyToClipboard(cmd.ex)}
                        title="Click to copy"
                        style={{ background: "#F1F5F9", color: "#0F766E", padding: "3px 8px", borderRadius: "4px", cursor: "pointer", fontWeight: 600 }}
                      >
                        {cmd.ex}
                      </code>
                    </td>

                    <td style={{ padding: "12px 16px", textAlign: "center" }}>
                      <button
                        onClick={() => copyToClipboard(cmd.ex)}
                        style={{
                          background: copiedCmd === cmd.ex ? "#10B981" : "#F8FCFA",
                          color: copiedCmd === cmd.ex ? "#FFFFFF" : "#059669",
                          border: "1px solid rgba(16, 185, 129, 0.35)",
                          padding: "5px 12px",
                          borderRadius: "6px",
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px"
                        }}
                      >
                        {copiedCmd === cmd.ex ? (
                          <>
                            <i className="fa-solid fa-check"></i> Copied!
                          </>
                        ) : (
                          <>
                            <i className="fa-regular fa-copy"></i> Copy
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
}
