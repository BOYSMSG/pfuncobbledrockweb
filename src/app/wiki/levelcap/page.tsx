"use client";

import React from "react";
import Link from "next/link";

const badgeTiers = [
  { badges: "0 Badges (Starting)", cap: "Level 15 - 20", status: "Starter Trainer", desc: "Default starting cap. Pokemon above level 20 will disobey." },
  { badges: "1 - 2 Badges", cap: "Level 25 - 30", status: "Novice Trainer", desc: "Allows medium evolution stages (Charmeleon, Ivysaur, Wartortle)." },
  { badges: "3 - 5 Badges", cap: "Level 35 - 45", status: "Intermediate Trainer", desc: "Unlocks final evolutions for most standard species." },
  { badges: "6 - 9 Badges", cap: "Level 50 - 65", status: "Advanced Trainer", desc: "Unlocks Mega Evolution access and competitive tier held items." },
  { badges: "10 - 14 Badges", cap: "Level 70 - 85", status: "Expert Trainer", desc: "Allows high-level pseudo-legendaries and Battle Tower entry." },
  { badges: "15 - 17 Badges", cap: "Level 90 - 95", status: "Master Trainer", desc: "Allows high-tier elemental raid den boss captures." },
  { badges: "18 Badges (All Gyms)", cap: "Level 100 (MAX)", status: "CobbleFun Champion", desc: "Ultimate mastery! All Pokemon obey unconditionally with zero level restrictions." },
];

export default function LevelCapWiki() {
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px" }}>
      
      {/* Breadcrumb */}
      <div style={{ marginBottom: "20px" }}>
        <Link href="/wiki" style={{ color: "#059669", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem" }}>
          ← Back to Wiki Overview
        </Link>
      </div>

      {/* Header Title */}
      <div style={{ textAlign: "center", marginBottom: "35px" }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          height: "60px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, #10B981, #059669)",
          color: "white",
          fontSize: "24px",
          marginBottom: "12px",
          boxShadow: "0 8px 20px rgba(16, 185, 129, 0.3)"
        }}>
          <i className="fa-solid fa-compass"></i>
        </div>
        <h1 style={{ fontSize: "2.4rem", fontWeight: 900, color: "#064E3B", marginBottom: "8px" }}>
          Gym Locator &amp; Level Cap System
        </h1>
        <p style={{ color: "#134E4A", fontSize: "1rem", maxWidth: "680px", margin: "0 auto" }}>
          Track Gyms in real-time with your in-game Locator Bar HUD, defeat leaders, collect badges, and raise your Pokemon level cap!
        </p>
      </div>

      {/* KEY FEATURE: THE GYM LOCATOR BAR */}
      <div style={{
        background: "linear-gradient(135deg, #022c22 0%, #064e3b 50%, #047857 100%)",
        color: "white",
        borderRadius: "20px",
        padding: "32px 28px",
        marginBottom: "32px",
        boxShadow: "0 12px 35px rgba(2, 44, 34, 0.25)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
          <span style={{ background: "#10B981", color: "#022c22", padding: "4px 12px", borderRadius: "12px", fontSize: "11px", fontWeight: 900, textTransform: "uppercase" }}>
            CobbleFun Bedrock Innovation
          </span>
          <span style={{ color: "#a7f3d0", fontSize: "13px" }}>Smart Compass HUD</span>
        </div>

        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: "12px", color: "#ffffff" }}>
          How to Find Gyms: Check Your Screen Top HUD!
        </h2>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#e6fffa", marginBottom: "20px" }}>
          You never have to guess or get lost searching through infinite biomes! CobbleFun automatically tracks your current gym right on your screen top <strong>Locator Bar</strong>:
        </p>

        {/* Workflow Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
          <div style={{ background: "rgba(255, 255, 255, 0.1)", padding: "18px", borderRadius: "12px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
            <div style={{ fontSize: "1rem", fontWeight: 800, color: "#34D399", marginBottom: "6px" }}>
              <i className="fa-solid fa-location-crosshairs"></i> 1. Targeted Gym Icon
            </div>
            <p style={{ color: "#d1fae5", fontSize: "0.82rem", lineHeight: 1.5, margin: 0 }}>
              The HUD displays the specific icon and arrow for the next gym you need to beat (e.g. Rock Gym icon with meters away).
            </p>
          </div>

          <div style={{ background: "rgba(255, 255, 255, 0.1)", padding: "18px", borderRadius: "12px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
            <div style={{ fontSize: "1rem", fontWeight: 800, color: "#34D399", marginBottom: "6px" }}>
              <i className="fa-solid fa-trophy"></i> 2. Defeat the Leader
            </div>
            <p style={{ color: "#d1fae5", fontSize: "0.82rem", lineHeight: 1.5, margin: 0 }}>
              Approach the Gym arena, challenge the NPC Gym Leader, claim your Gym Badge, and unlock higher level Pokemon obedience.
            </p>
          </div>

          <div style={{ background: "rgba(255, 255, 255, 0.1)", padding: "18px", borderRadius: "12px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
            <div style={{ fontSize: "1rem", fontWeight: 800, color: "#34D399", marginBottom: "6px" }}>
              <i className="fa-solid fa-forward-step"></i> 3. Auto-Switches Next Gym
            </div>
            <p style={{ color: "#d1fae5", fontSize: "0.82rem", lineHeight: 1.5, margin: 0 }}>
              Defeating the leader immediately re-targets the HUD compass to point toward the subsequent Gym on your journey!
            </p>
          </div>
        </div>
      </div>

      {/* Why is my Pokemon not listening */}
      <div style={{
        background: "white",
        borderRadius: "18px",
        padding: "26px",
        border: "1.5px solid rgba(16, 185, 129, 0.25)",
        boxShadow: "0 8px 24px rgba(6, 78, 59, 0.05)",
        marginBottom: "32px"
      }}>
        <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#064E3B", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
          <i className="fa-solid fa-circle-question" style={{ color: "#10B981" }}></i>
          <span>Why is my Pokemon not listening in battle?</span>
        </h2>
        <p style={{ color: "#134E4A", fontSize: "0.9rem", lineHeight: 1.7, margin: "0 0 10px 0" }}>
          If your Pokemon falls asleep, disobeys orders, or hurts itself in confusion, it means <strong>its current level exceeds your server Level Cap</strong>!
        </p>
        <p style={{ color: "#134E4A", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
          To fix this, defeat the next Gym displayed on your Locator Bar. Alternatively, feed your Pokemon a <strong>Common Candy</strong> from <code>/shop</code> to de-level it by 1 level so it obeys commands again!
        </p>
      </div>

      {/* Progression Table */}
      <div style={{
        background: "white",
        borderRadius: "18px",
        padding: "26px",
        border: "1.5px solid rgba(16, 185, 129, 0.25)",
        boxShadow: "0 8px 24px rgba(6, 78, 59, 0.05)"
      }}>
        <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#064E3B", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
          <i className="fa-solid fa-chart-line" style={{ color: "#10B981" }}></i>
          <span>18-Stage Level Cap Progression Table</span>
        </h2>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.88rem" }}>
            <thead>
              <tr style={{ background: "#F0FDF4", borderBottom: "2px solid rgba(16, 185, 129, 0.3)" }}>
                <th style={{ padding: "12px 14px", color: "#064E3B", fontWeight: 800 }}>Gym Badges Earned</th>
                <th style={{ padding: "12px 14px", color: "#064E3B", fontWeight: 800 }}>Max Obedience Level Cap</th>
                <th style={{ padding: "12px 14px", color: "#064E3B", fontWeight: 800 }}>Trainer Rank Tier</th>
                <th style={{ padding: "12px 14px", color: "#064E3B", fontWeight: 800 }}>Unlocked Perks</th>
              </tr>
            </thead>
            <tbody>
              {badgeTiers.map((tier, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid rgba(16, 185, 129, 0.15)" }}>
                  <td style={{ padding: "12px 14px", fontWeight: 700, color: "#064E3B" }}>{tier.badges}</td>
                  <td style={{ padding: "12px 14px", fontWeight: 800, color: "#059669" }}>{tier.cap}</td>
                  <td style={{ padding: "12px 14px", color: "#134E4A" }}>{tier.status}</td>
                  <td style={{ padding: "12px 14px", color: "#64748B", fontSize: "0.82rem" }}>{tier.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
