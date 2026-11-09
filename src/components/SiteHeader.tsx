"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import GlobalSaleBanner from "./GlobalSaleBanner";

export default function SiteHeader() {
  const [playerCount, setPlayerCount] = useState<number | string>("35");
  const [ipCopied, setIpCopied] = useState(false);
  const pathname = usePathname() || '';

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

  const copyIp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("mcpe.pokefun.in");
      setIpCopied(true);
      setTimeout(() => setIpCopied(false), 2000);
    }
  };

  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false;
    return pathname.startsWith(path);
  };

  return (
    <>
      <GlobalSaleBanner />
      <header className="desktop-global-header">
        <nav className="desktop-nav-container">
          {/* Brand Logo & Title */}
          <a href="/" className="nav-brand-link" title="CobbleFun - Powered by Pokefun">
            <div className="nav-brand-logo-badge">
              <img 
                src="/images/cobblefun_icon_small.png" 
                alt="CobbleFun Logo" 
                style={{ width: "32px", height: "32px", objectFit: "contain" }} 
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="nav-brand-text">COBBLEFUN</span>
                <span className="nav-brand-edition-pill">BEDROCK</span>
              </div>
              <span style={{ fontSize: "0.62rem", color: "#059669", fontWeight: 800, letterSpacing: "0.5px" }}>
                POWERED BY POKEFUN
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="nav-links-center">
            <a href="/" className={`nav-link-item ${pathname === '/' ? 'active' : ''}`}>Home</a>
            <a href="/features" className={`nav-link-item ${isActive('/features') ? 'active' : ''}`}>Features</a>
            <a href="https://store.pokefun.in" target="_blank" rel="noopener noreferrer" className="nav-store-pill">
              <i className="fa-solid fa-cart-shopping"></i>
              <span>Store</span>
            </a>
            <a href="/showcase" className={`nav-link-item ${isActive('/showcase') ? 'active' : ''}`}>Showcase</a>
            <a href="/wiki" className={`nav-link-item ${isActive('/wiki') ? 'active' : ''}`}>Wiki &amp; FAQ</a>
            <a href="https://discord.gg/NtE8QBkmwR" target="_blank" rel="noopener noreferrer" className="nav-link-item" style={{ color: "#5865F2", display: "flex", alignItems: "center", gap: "6px" }}>
              <i className="fa-brands fa-discord"></i>
              <span>Discord</span>
            </a>
          </div>

          {/* Quick Connect & Player Count */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={copyIp}
              style={{
                background: "#F0FDF4",
                border: "1.5px solid rgba(16, 185, 129, 0.4)",
                padding: "8px 16px",
                borderRadius: "9999px",
                fontSize: "0.82rem",
                fontWeight: 800,
                color: "#064E3B",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.2s ease"
              }}
              title="Click to copy IP: mcpe.pokefun.in:19132"
            >
              <span className="gateway-live-dot"></span>
              <span>{ipCopied ? "Copied IP!" : `mcpe.pokefun.in \u2022 ${playerCount}`}</span>
              <i className={`fa-solid ${ipCopied ? "fa-check" : "fa-copy"}`} style={{ color: "#10B981" }}></i>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

