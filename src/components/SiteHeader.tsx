"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import GlobalSaleBanner from "./GlobalSaleBanner";

export default function SiteHeader() {
  const [playerCount, setPlayerCount] = useState<number | string>("35");
  const [ipCopied, setIpCopied] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname() || '';
  const { data: session } = useSession();

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
            {session ? (
              <a href="/messages" className={`nav-link-item ${isActive('/messages') ? 'active' : ''}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <i className="fa-solid fa-message" style={{ color: '#10B981' }}></i>
                <span>Messages</span>
              </a>
            ) : null}
            <a href="https://discord.gg/NtE8QBkmwR" target="_blank" rel="noopener noreferrer" className="nav-link-item" style={{ color: "#5865F2", display: "flex", alignItems: "center", gap: "6px" }}>
              <i className="fa-brands fa-discord"></i>
              <span>Discord</span>
            </a>
          </div>

          {/* Quick Connect, Player Count & Sign In / User Profile */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            <button
              onClick={copyIp}
              className="header-server-ip-btn"
              style={{
                background: "#F0FDF4",
                border: "1.5px solid rgba(16, 185, 129, 0.4)",
                padding: "6px 14px",
                borderRadius: "9999px",
                fontSize: "0.78rem",
                fontWeight: 800,
                color: "#064E3B",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap"
              }}
              title="Click to copy IP: mcpe.pokefun.in:19132"
            >
              <span className="gateway-live-dot"></span>
              <span>{ipCopied ? "Copied IP!" : `mcpe.pokefun.in \u2022 ${playerCount}`}</span>
              <i className={`fa-solid ${ipCopied ? "fa-check" : "fa-copy"}`} style={{ color: "#10B981" }}></i>
            </button>

            {/* User Account / Sign In Button */}
            {session ? (
              <div style={{ position: "relative" }}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  style={{
                    background: "#F0FDF4",
                    border: "1.5px solid rgba(16, 185, 129, 0.5)",
                    padding: "5px 14px 5px 6px",
                    borderRadius: "9999px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(16, 185, 129, 0.15)"
                  }}
                >
                  <img
                    src={session.user?.image || "/images/default-avatar.png"}
                    alt="User"
                    style={{ width: "30px", height: "30px", borderRadius: "50%", objectFit: "cover", border: "1.5px solid #10B981" }}
                  />
                  <span style={{ fontWeight: 800, fontSize: "0.85rem", color: "#064E3B" }}>
                    {session.user?.name?.split(' ')[0]}
                  </span>
                  <i className="fa-solid fa-chevron-down" style={{ fontSize: "0.7rem", color: "#059669" }}></i>
                </button>

                {userMenuOpen && (
                  <div style={{
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    right: 0,
                    background: "#FFFFFF",
                    border: "1.5px solid rgba(16, 185, 129, 0.25)",
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(6, 78, 59, 0.2)",
                    padding: "12px",
                    minWidth: "210px",
                    zIndex: 9999,
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px"
                  }}>
                    <div style={{ padding: "6px 10px 10px", borderBottom: "1px solid #E2E8F0" }}>
                      <div style={{ fontWeight: 800, color: "#064E3B", fontSize: "0.9rem" }}>{session.user?.name}</div>
                      <div style={{ fontSize: "0.72rem", color: "#64748B", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {session.user?.email}
                      </div>
                    </div>
                    <a 
                      href="/profile" 
                      style={{ padding: "8px 12px", borderRadius: "8px", color: "#134E4A", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}
                    >
                      <i className="fa-solid fa-user" style={{ color: "#10B981" }}></i>
                      My Profile
                    </a>
                    <a 
                      href="/messages" 
                      style={{ padding: "8px 12px", borderRadius: "8px", color: "#134E4A", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}
                    >
                      <i className="fa-solid fa-message" style={{ color: "#10B981" }}></i>
                      Direct Messages
                    </a>
                    {['OWNER', 'ADMIN'].includes((session.user as any)?.role) && (
                      <a 
                        href="/admin" 
                        style={{ padding: "8px 12px", borderRadius: "8px", color: "#064E3B", fontWeight: 800, fontSize: "0.85rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px", background: "rgba(16, 185, 129, 0.1)" }}
                      >
                        <i className="fa-solid fa-shield-halved" style={{ color: "#10B981" }}></i>
                        Admin Panel
                      </a>
                    )}
                    <button
                      onClick={() => signOut()}
                      style={{
                        background: "#FEE2E2",
                        border: "none",
                        borderRadius: "8px",
                        padding: "8px 12px",
                        color: "#DC2626",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginTop: "4px"
                      }}
                    >
                      <i className="fa-solid fa-arrow-right-from-bracket"></i>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <a
                href="/login"
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('openLoginModal'));
                  }
                }}
                style={{
                  background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                  color: "#FFFFFF",
                  padding: "8px 18px",
                  borderRadius: "9999px",
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  boxShadow: "0 2px 10px rgba(16, 185, 129, 0.35)",
                  transition: "transform 0.15s ease"
                }}
              >
                <i className="fa-solid fa-user"></i>
                <span>Sign In</span>
              </a>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
