"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import DynamicHero3D from "@/components/3d/DynamicHero3D";
import AtmosphereEngine from "@/components/effects/AtmosphereEngine";
import CinematicScroll from "@/components/effects/CinematicScroll";
import MagneticButton from "@/components/effects/MagneticButton";
import ServerFeaturesShowcase from "@/components/server/ServerFeaturesShowcase";

const showcaseVideos = [
  { id: "9I7zFIpuUCM", title: "Main Server Showcase", description: "Discover the breathtaking world of CobbleFun Bedrock powered by Pokefun." },
  { id: "OjylkKg7JAg", title: "Custom Gameplay & Cities", description: "Explore massive cities, spawn hubs, and wild Cobblemon spawns." },
  { id: "IfKqJ3UYoV0", title: "Grass Gym Battle", description: "Take on challenging player and NPC Gym Leaders to earn official Badges!" },
  { id: "T1xsUX1MrFg", title: "Central Hub City Tour", description: "Explore the bustling central hub city with interactive NPC traders and quests." },
];

const featureItems = [
  { title: "Natural Bosses", desc: "Powerful bosses spawn naturally in the wild! Defeat them for epic loot and rare items.", img: "/images/features/image09_bosspokemons1.png" },
  { title: "Custom Raids", desc: "Team up with fellow trainers in the new Bedrock Raid System to battle legendary Pokemon.", img: "/images/features/image27_Team_Raids_Battle.png" },
  { title: "Battle Gimmicks", desc: "Mega Evolution, Dynamax, Gigantamax, and Z-Moves are fully active in battles!", img: "/images/features/image29_Z_Mega1s.png" },
  { title: "Pokemon Fusions", desc: "Create unique and devastating Pokemon through our advanced DNA splicing fusion system.", img: "/images/features/fusion_pokemons1.png" },
  { title: "18 Gym Badges", desc: "Challenge player-run and NPC gyms across various biomes to earn official gym badges.", img: "/images/features/battletower.png" },
  { title: "Battle Tower", desc: "Test your tactical skills in the endless Battle Tower and earn rare competitive rewards.", img: "/images/features/image26_primal_forms.png" },
  { title: "Custom Fakemons", desc: "Discover hundreds of unique custom Fakemons and regional forms to catch and train.", img: "/images/features/coolfakemons.png" },
  { title: "Dungeons & Quests", desc: "Explore multi-level challenging dungeons filled with custom mobs and legendary rewards.", img: "/images/features/dungeon.png" },
  { title: "Huge Custom Cities", desc: "Explore vibrant custom cities teeming with quests, traders, and interactive NPCs.", img: "/images/features/hugecity.png" },
  { title: "Epic Armours & Gear", desc: "Equip your trainer with custom RPG armor sets providing stat boosts and set bonuses.", img: "/images/features/image15_epicarmours.png" },
  { title: "Poke Costumes", desc: "Customize your favorite Pokemon with special seasonal outfits, hats, and cosmetics.", img: "/images/features/image22_pokecostume.png" },
  { title: "Safari Zone", desc: "Venture into the dedicated Safari Zone to hunt elusive shinies and high-IV specimens.", img: "/images/features/safarizone.png" },
];

export default function HomeClient() {
  const [playerCount, setPlayerCount] = useState<number | string>("35");
  const [copied, setCopied] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [activeJoinTab, setActiveJoinTab] = useState<"direct" | "console" | "guide">("direct");

  useEffect(() => {
    fetch("https://api.mcstatus.io/v2/status/bedrock/mcpe.pokefun.in:19132")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.online) {
          setPlayerCount((data.players?.online || 0) + 20);
        } else {
          return fetch("https://api.mcsrvstat.us/bedrock/3/mcpe.pokefun.in:19132")
            .then((r) => r.json())
            .then((backup) => {
              if (backup && backup.online) {
                setPlayerCount((backup.players?.online || 0) + 20);
              }
            });
        }
      })
      .catch(() => {});
  }, []);

  const handleCopyIP = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("mcpe.pokefun.in");
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "100%", minHeight: "100vh" }}>
      
      {/* GSAP Smooth Reveal Script */}
      <CinematicScroll />

      {/* =================================================================
          CINEMATIC HERO SECTION
          ================================================================= */}
      <section className="cinematic-hero-section">
        {/* Full-width Minecraft Cobblemon City Environmental Background */}
        <img 
          src="/images/hero-cinematic-world.png?v=8" 
          alt="CobbleFun Cobblemon Living World" 
          className="cinematic-hero-world-img" 
        />

        {/* Readability Gradient Layer */}
        <div className="cinematic-hero-readability"></div>

        {/* Atmospheric Floating Emerald Particles */}
        <AtmosphereEngine />

        {/* Two-Column Responsive Container */}
        <div className="cinematic-hero-container">
          
          {/* Left Column: Brand & Server Gateway */}
          <div className="cinematic-hero-left">
            
            {/* Top Pill: Powered by Pokefun */}
            <div className="cinematic-edition-pill">
              <span className="pill-live-dot"></span>
              <span className="pill-brand">COBBLEFUN</span>
              <span className="pill-dot">&bull;</span>
              <span className="pill-platform">POWERED BY POKEFUN</span>
            </div>

            {/* Main Heading */}
            <h1 className="cinematic-title">
              Cobblemon on Bedrock.<br />
              <span className="cinematic-title-gradient">Play CobbleFun Now!</span>
            </h1>

            {/* Subtitle */}
            <p className="cinematic-description">
              The ultimate <strong>Minecraft Bedrock &amp; MCPE Cobblemon Server</strong>. Catch, train, battle, and trade with thousands of trainers across Mobile, Windows, and Consoles!
            </p>

            {/* =================================================================
                SERVER GATEWAY CARD
                ================================================================= */}
            <div className="cinematic-gateway-card">
              {/* Gateway Header */}
              <div className="cinematic-gateway-header">
                <div className="gateway-header-label">
                  <i className="fa-solid fa-server" style={{ color: "#10B981" }}></i>
                  <span>BEDROCK / MCPE GATEWAY</span>
                </div>
                <div className="gateway-live-badge">
                  <span className="gateway-live-dot"></span>
                  <span>ONLINE &bull; {playerCount} TRAINERS ACTIVE</span>
                </div>
              </div>

              {/* Gateway Main Row */}
              <div className="cinematic-gateway-main-row">
                <div className="gateway-ip-subcard">
                  <div className="gateway-ip-subcard-text">
                    <span className="gateway-ip-subcard-label">Server IP Address</span>
                    <span className="gateway-ip-subcard-ip">mcpe.pokefun.in</span>
                  </div>
                  <button 
                    onClick={handleCopyIP} 
                    className="gateway-copy-icon-btn"
                    title="Copy Server IP Address"
                    aria-label="Copy Server IP Address"
                  >
                    <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i>
                  </button>
                </div>

                <MagneticButton strength={0.22}>
                  <button
                    onClick={handleCopyIP}
                    className="cinematic-primary-cta"
                    title="Click to copy server IP and join"
                  >
                    <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i>
                    <span>{copied ? 'IP COPIED! ⚡' : 'COPY IP'}</span>
                  </button>
                </MagneticButton>

                <MagneticButton strength={0.22}>
                  <a
                    href="minecraft://?addExternalServer=CobbleFun%20Bedrock|mcpe.pokefun.in:19132"
                    className="cinematic-play-btn"
                    title="One-click direct connect on Bedrock & Mobile"
                  >
                    <i className="fa-solid fa-gamepad"></i>
                    <span>PLAY NOW</span>
                  </a>
                </MagneticButton>
              </div>

              {/* Gateway Footer Details */}
              <div className="cinematic-gateway-footer">
                <div className="gateway-footer-item">
                  <i className="fa-solid fa-bolt" style={{ color: "#F59E0B" }}></i>
                  <span>Bedrock Port: <strong>19132</strong></span>
                </div>
                <div className="gateway-footer-item">
                  <i className="fa-solid fa-mobile-screen-button" style={{ color: "#10B981" }}></i>
                  <span>Mobile, Windows, Xbox, PS &amp; Switch</span>
                </div>
              </div>
            </div>

            {/* =================================================================
                SECONDARY QUICK ACTION BUTTONS
                ================================================================= */}
            <div className="cinematic-secondary-row">
              {/* Discord */}
              <a 
                href="https://discord.gg/NtE8QBkmwR" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cinematic-secondary-btn btn-discord"
              >
                <div className="btn-icon-wrap">
                  <i className="fa-brands fa-discord"></i>
                </div>
                <div className="btn-text-wrap">
                  <span className="btn-main-title">Discord</span>
                  <span className="btn-sub-title">10K+ Trainers ↗</span>
                </div>
              </a>

              {/* Store */}
              <a 
                href="https://store.pokefun.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cinematic-secondary-btn btn-store"
              >
                <div className="btn-icon-wrap">
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <div className="btn-text-wrap">
                  <span className="btn-main-title">Store</span>
                  <span className="btn-sub-title">Ranks &amp; Keys ↗</span>
                </div>
              </a>

              {/* Wiki */}
              <a 
                href="/wiki" 
                className="cinematic-secondary-btn btn-wiki"
              >
                <div className="btn-icon-wrap">
                  <i className="fa-solid fa-book-open"></i>
                </div>
                <div className="btn-text-wrap">
                  <span className="btn-main-title">Wiki</span>
                  <span className="btn-sub-title">Guides &amp; FAQ ↗</span>
                </div>
              </a>

              {/* Pokefun Hub */}
              <a 
                href="https://pokefun.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cinematic-secondary-btn btn-pokefun"
                title="Powered by Pokefun Network"
              >
                <div className="btn-icon-wrap">
                  <i className="fa-solid fa-crown"></i>
                </div>
                <div className="btn-text-wrap">
                  <span className="btn-main-title">Pokefun</span>
                  <span className="btn-sub-title">Network ↗</span>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive 3D Cobblemon Showcase */}
          <div className="cinematic-hero-right">
            <DynamicHero3D />
          </div>

        </div>

        {/* Bottom Soft World Dissolve Layer */}
        <div className="cinematic-hero-bottom-fade"></div>
      </section>

      {/* =================================================================
          5-ITEM FEATURE STRIP
          ================================================================= */}
      <div className="cinematic-feature-strip">
        <div className="cinematic-feature-card">
          <div className="feature-icon-badge">
            <i className="fa-solid fa-mobile-screen"></i>
          </div>
          <div className="feature-text-group">
            <span className="feature-main-text">Native Bedrock &amp; MCPE</span>
            <span className="feature-sub-text">Touch &amp; Controller Optimized</span>
          </div>
        </div>

        <div className="cinematic-feature-card">
          <div className="feature-icon-badge">
            <i className="fa-solid fa-cubes-stacked"></i>
          </div>
          <div className="feature-text-group">
            <span className="feature-main-text">3D Models &amp; DNA Fusions</span>
            <span className="feature-sub-text">100+ Exclusive Cobblemon</span>
          </div>
        </div>

        <div className="cinematic-feature-card">
          <div className="feature-icon-badge">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <div className="feature-text-group">
            <span className="feature-main-text">Epic Boss Dens &amp; Raids</span>
            <span className="feature-sub-text">Server-Wide Legendary Hunts</span>
          </div>
        </div>

        <div className="cinematic-feature-card">
          <div className="feature-icon-badge">
            <i className="fa-solid fa-trophy"></i>
          </div>
          <div className="feature-text-group">
            <span className="feature-main-text">18 Competitive Gyms</span>
            <span className="feature-sub-text">Player &amp; NPC Gym Leaders</span>
          </div>
        </div>

        <div className="cinematic-feature-card">
          <div className="feature-icon-badge">
            <i className="fa-solid fa-network-wired"></i>
          </div>
          <div className="feature-text-group">
            <span className="feature-main-text">Powered by Pokefun</span>
            <span className="feature-sub-text">Backed by 10K+ Community</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* =================================================================
            HOW TO JOIN COBBLEFUN BEDROCK (INTERACTIVE GUIDE TABS)
            ================================================================= */}
        <section style={{
          background: "#FFFFFF",
          borderRadius: "24px",
          border: "1.5px solid rgba(16, 185, 129, 0.28)",
          boxShadow: "0 10px 36px rgba(6, 78, 59, 0.08)",
          padding: "36px 32px",
          marginBottom: "50px"
        }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <span style={{
              display: "inline-block",
              padding: "4px 14px",
              borderRadius: "9999px",
              background: "#F0FDF4",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              color: "#059669",
              fontSize: "0.78rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.8px"
            }}>
              Quick Setup Guide
            </span>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "#064E3B", margin: "10px 0 6px" }}>
              How to Join CobbleFun on Bedrock &amp; MCPE
            </h2>
            <p style={{ color: "#134E4A", fontSize: "0.95rem", margin: 0 }}>
              Connect easily from Mobile (Android / iOS), Windows 10/11, or Gaming Consoles (Xbox, PlayStation, Nintendo Switch).
            </p>

            {/* Tab Selector */}
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px", flexWrap: "wrap" }}>
              <button
                onClick={() => setActiveJoinTab("direct")}
                style={{
                  padding: "10px 20px",
                  borderRadius: "12px",
                  border: activeJoinTab === "direct" ? "1.5px solid #10B981" : "1.5px solid rgba(16, 185, 129, 0.2)",
                  background: activeJoinTab === "direct" ? "linear-gradient(135deg, #10B981, #059669)" : "#F0FDF4",
                  color: activeJoinTab === "direct" ? "#FFFFFF" : "#064E3B",
                  fontWeight: 800,
                  fontSize: "0.88rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <i className="fa-solid fa-mobile-screen"></i>
                <span>Mobile &amp; Windows</span>
              </button>

              <button
                onClick={() => setActiveJoinTab("console")}
                style={{
                  padding: "10px 20px",
                  borderRadius: "12px",
                  border: activeJoinTab === "console" ? "1.5px solid #10B981" : "1.5px solid rgba(16, 185, 129, 0.2)",
                  background: activeJoinTab === "console" ? "linear-gradient(135deg, #10B981, #059669)" : "#F0FDF4",
                  color: activeJoinTab === "console" ? "#FFFFFF" : "#064E3B",
                  fontWeight: 800,
                  fontSize: "0.88rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <i className="fa-solid fa-gamepad"></i>
                <span>Consoles (Xbox / PS / Switch)</span>
              </button>

              <button
                onClick={() => setActiveJoinTab("guide")}
                style={{
                  padding: "10px 20px",
                  borderRadius: "12px",
                  border: activeJoinTab === "guide" ? "1.5px solid #10B981" : "1.5px solid rgba(16, 185, 129, 0.2)",
                  background: activeJoinTab === "guide" ? "linear-gradient(135deg, #10B981, #059669)" : "#F0FDF4",
                  color: activeJoinTab === "guide" ? "#FFFFFF" : "#064E3B",
                  fontWeight: 800,
                  fontSize: "0.88rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <i className="fa-solid fa-circle-question"></i>
                <span>Visual Screenshots</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Mobile & Windows */}
          {activeJoinTab === "direct" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              <div style={{ background: "#F0FDF4", padding: "24px", borderRadius: "18px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(16, 185, 129, 0.2)", color: "#059669", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, marginBottom: "14px" }}>
                  1
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#064E3B", marginBottom: "8px" }}>Open Minecraft Bedrock</h3>
                <p style={{ color: "#134E4A", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                  Launch Minecraft Bedrock Edition on your Android phone, iPhone, iPad, or Windows 10/11 PC.
                </p>
              </div>

              <div style={{ background: "#F0FDF4", padding: "24px", borderRadius: "18px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(16, 185, 129, 0.2)", color: "#059669", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, marginBottom: "14px" }}>
                  2
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#064E3B", marginBottom: "8px" }}>Add External Server</h3>
                <p style={{ color: "#134E4A", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                  Go to <strong>Play &gt; Servers &gt; Add Server</strong>.<br />
                  Name: <code>CobbleFun</code><br />
                  Server Address: <code>mcpe.pokefun.in</code><br />
                  Port: <code>19132</code>
                </p>
              </div>

              <div style={{ background: "#F0FDF4", padding: "24px", borderRadius: "18px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(16, 185, 129, 0.2)", color: "#059669", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, marginBottom: "14px" }}>
                  3
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#064E3B", marginBottom: "8px" }}>Join &amp; Enjoy!</h3>
                <p style={{ color: "#134E4A", fontSize: "0.9rem", lineHeight: 1.6, margin: "0 0 14px" }}>
                  Click Play and the Cobblemon resource pack will automatically download!
                </p>
                <a
                  href="minecraft://?addExternalServer=CobbleFun%20Bedrock|mcpe.pokefun.in:19132"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "linear-gradient(135deg, #10B981, #059669)",
                    color: "#FFFFFF",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontSize: "0.82rem",
                    fontWeight: 800,
                    textDecoration: "none"
                  }}
                >
                  <i className="fa-solid fa-bolt"></i>
                  <span>One-Click Play Now</span>
                </a>
              </div>
            </div>
          )}

          {/* Tab 2: Console Support */}
          {activeJoinTab === "console" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              <div style={{ background: "#F0FDF4", padding: "24px", borderRadius: "18px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#064E3B", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <i className="fa-solid fa-mobile-screen-button" style={{ color: "#10B981" }}></i>
                  <span>Method 1: BedrockTogether App</span>
                </h3>
                <p style={{ color: "#134E4A", fontSize: "0.92rem", lineHeight: 1.6 }}>
                  1. Download <strong>BedrockTogether</strong> from Google Play Store or Apple App Store on your phone.<br />
                  2. Ensure your phone and Console are on the same Wi-Fi.<br />
                  3. Enter IP: <code>mcpe.pokefun.in</code> and Port: <code>19132</code>.<br />
                  4. Press Run. On your Console, look under <strong>Friends &gt; LAN Games</strong> to join!
                </p>
              </div>

              <div style={{ background: "#F0FDF4", padding: "24px", borderRadius: "18px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#064E3B", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <i className="fa-solid fa-server" style={{ color: "#10B981" }}></i>
                  <span>Method 2: Custom DNS Server</span>
                </h3>
                <p style={{ color: "#134E4A", fontSize: "0.92rem", lineHeight: 1.6 }}>
                  1. Go into your Console Network Settings &gt; Advanced DNS.<br />
                  2. Set Primary DNS to: <code>104.238.130.180</code> and Secondary to <code>8.8.8.8</code>.<br />
                  3. Open Minecraft, click any featured server, and the Server Selector menu will open.<br />
                  4. Add <code>mcpe.pokefun.in:19132</code> and connect!
                </p>
              </div>
            </div>
          )}

          {/* Tab 3: Visual Guide */}
          {activeJoinTab === "guide" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              <div style={{ background: "#F0FDF4", padding: "18px", borderRadius: "18px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#064E3B", marginBottom: "10px" }}>How to Add Server:</h4>
                <img 
                  src="/images/mainimage/server_add_name_ip.png" 
                  alt="Server Add Name and IP" 
                  style={{ width: "100%", borderRadius: "12px", border: "1px solid rgba(16, 185, 129, 0.2)" }} 
                />
              </div>

              <div style={{ background: "#F0FDF4", padding: "18px", borderRadius: "18px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#064E3B", marginBottom: "10px" }}>Console Support Available:</h4>
                <img 
                  src="/images/mainimage/consoles_support.png" 
                  alt="Supported Consoles" 
                  style={{ width: "100%", borderRadius: "12px", border: "1px solid rgba(16, 185, 129, 0.2)" }} 
                />
              </div>
            </div>
          )}
        </section>

        {/* =================================================================
            AUTHENTIC BEDROCK SERVER ECONOMY & GAMEPLAY SHOWCASE
            ================================================================= */}
        <ServerFeaturesShowcase />

        {/* =================================================================
            EPIC SERVER FEATURES GRID
            ================================================================= */}
        <section style={{ marginBottom: "60px" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <div style={{
              display: "inline-block",
              padding: "5px 16px",
              fontSize: "0.78rem",
              fontWeight: 800,
              color: "#059669",
              background: "#F0FDF4",
              border: "1.5px solid rgba(16, 185, 129, 0.35)",
              borderRadius: "20px",
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}>
              CobbleFun Innovations
            </div>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 900, color: "#064E3B", margin: "12px 0 6px 0" }}>
              Epic Server Features
            </h2>
            <p style={{ color: "#134E4A", fontSize: "1rem", maxWidth: "600px", margin: "0 auto" }}>
              Experience handcrafted Cobblemon Bedrock gameplay mechanics built for smooth, high-FPS multiplayer fun!
            </p>
          </div>

          <div className="features-grid-container" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px"
          }}>
            {featureItems.map((item, idx) => (
              <div 
                key={idx}
                className="feature-card-item"
                style={{
                  borderRadius: "22px",
                  background: "#FFFFFF",
                  border: "1.5px solid rgba(16, 185, 129, 0.24)",
                  boxShadow: "0 8px 30px rgba(6, 78, 59, 0.05)",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  transition: "all 0.25s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "#10B981";
                  e.currentTarget.style.boxShadow = "0 16px 40px rgba(16, 185, 129, 0.22)";
                  const img = e.currentTarget.querySelector('.feature-card-img') as HTMLElement;
                  if (img) img.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.24)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(6, 78, 59, 0.05)";
                  const img = e.currentTarget.querySelector('.feature-card-img') as HTMLElement;
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                <div style={{
                  width: "100%",
                  height: "175px",
                  overflow: "hidden",
                  position: "relative",
                  background: "#F0FDF4",
                  borderBottom: "1.5px solid rgba(16, 185, 129, 0.2)"
                }}>
                  <img 
                    loading="eager" 
                    src={item.img} 
                    alt={item.title} 
                    className="feature-card-img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                      transition: "transform 0.35s ease"
                    }}
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (!img.src.includes('image09_bosspokemons1.png')) {
                        img.src = '/images/features/image09_bosspokemons1.png';
                      }
                    }}
                  />
                </div>

                <div style={{ padding: "20px 22px 24px", display: "flex", flexDirection: "column", flex: 1, textAlign: "left" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#064E3B", margin: "0 0 8px 0" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#134E4A", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =================================================================
            VIDEO SHOWCASE SECTION
            ================================================================= */}
        <section style={{
          background: "#FFFFFF",
          borderRadius: "24px",
          border: "1.5px solid rgba(16, 185, 129, 0.28)",
          boxShadow: "0 10px 36px rgba(6, 78, 59, 0.08)",
          padding: "36px 32px",
          marginBottom: "60px"
        }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <span style={{
              display: "inline-block",
              padding: "4px 14px",
              borderRadius: "9999px",
              background: "#F0FDF4",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              color: "#059669",
              fontSize: "0.78rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.8px"
            }}>
              Server In Action
            </span>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "#064E3B", margin: "10px 0 6px" }}>
              CobbleFun Video Showcase
            </h2>
            <p style={{ color: "#134E4A", fontSize: "0.95rem", margin: 0 }}>
              Watch live adventures, gym challenges, and city tours on CobbleFun!
            </p>

            {/* Video Selector Buttons */}
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px", flexWrap: "wrap" }}>
              {showcaseVideos.map((vid, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveVideoIndex(idx)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "10px",
                    border: activeVideoIndex === idx ? "1.5px solid #10B981" : "1.5px solid rgba(16, 185, 129, 0.2)",
                    background: activeVideoIndex === idx ? "linear-gradient(135deg, #10B981, #059669)" : "#F0FDF4",
                    color: activeVideoIndex === idx ? "#FFFFFF" : "#064E3B",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    cursor: "pointer"
                  }}
                >
                  <i className="fa-solid fa-play" style={{ marginRight: "6px" }}></i>
                  <span>{vid.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div style={{
            position: "relative",
            width: "100%",
            maxWidth: "960px",
            margin: "0 auto",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(6, 40, 30, 0.15)",
            border: "1.5px solid rgba(16, 185, 129, 0.25)"
          }}>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe
                src={`https://www.youtube.com/embed/${showcaseVideos[activeVideoIndex].id}`}
                title={showcaseVideos[activeVideoIndex].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0
                }}
              />
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "14px", color: "#134E4A", fontSize: "0.92rem", fontWeight: 600 }}>
            {showcaseVideos[activeVideoIndex].description}
          </div>
        </section>

        {/* =================================================================
            COMMUNITY & DISCORD CTA BANNER
            ================================================================= */}
        <section style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "24px",
          padding: "40px 36px",
          marginBottom: "60px",
          background: "linear-gradient(135deg, #F0FDF4 0%, #FFFFFF 100%)",
          border: "1.5px solid rgba(16, 185, 129, 0.35)",
          boxShadow: "0 10px 35px rgba(6, 78, 59, 0.08)"
        }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                <i className="fa-solid fa-users" style={{ color: "#10B981" }}></i>
                <span style={{ color: "#059669", fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px" }}>
                  Powered by Pokefun Network
                </span>
              </div>
              <h2 style={{ fontSize: "2rem", fontWeight: 900, margin: "0 0 8px 0", color: "#064E3B" }}>
                Join the CobbleFun Community
              </h2>
              <p style={{ color: "#134E4A", margin: 0, fontSize: "0.95rem", maxWidth: "620px" }}>
                Connect with thousands of active Cobblemon trainers, participate in weekly tournaments, win free crates in community giveaways, and get 24/7 staff support.
              </p>
            </div>
            
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a 
                href="https://discord.gg/NtE8QBkmwR" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "13px 26px",
                  borderRadius: "14px",
                  fontWeight: 800,
                  fontSize: "0.92rem",
                  background: "#5865F2",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 4px 18px rgba(88, 101, 242, 0.35)"
                }}
              >
                <i className="fa-brands fa-discord" style={{ fontSize: "1.1rem" }}></i>
                <span>Join Discord (10K+)</span>
              </a>

              <a 
                href="https://store.pokefun.in" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "13px 26px",
                  borderRadius: "14px",
                  fontWeight: 800,
                  fontSize: "0.92rem",
                  background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 4px 18px rgba(16, 185, 129, 0.35)"
                }}
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <span>Visit Store</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
