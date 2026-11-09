"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [playerCount, setPlayerCount] = useState<number | string>("35");
  const [copied, setCopied] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const navCategories = [
    {
      name: "Main Menu",
      links: [
        { title: "Home", path: "/", icon: "fa-solid fa-house" },
        { title: "Features", path: "/features", icon: "fa-solid fa-sparkles" },
        { title: "Store & Ranks", path: "https://store.pokefun.in", icon: "fa-solid fa-cart-shopping", highlight: true, external: true },
        { title: "Showcase & Videos", path: "/showcase", icon: "fa-solid fa-star", highlight: true },
        { title: "Wiki & FAQs", path: "/wiki", icon: "fa-solid fa-book" },
      ],
    },
    {
      name: "Wiki & Guides",
      links: [
        { title: "Beginner's Guide", path: "/wiki/begginer_guide", icon: "fa-solid fa-graduation-cap" },
        { title: "Kits & Ranks", path: "/wiki/kits", icon: "fa-solid fa-gift" },
        { title: "Gyms & Level Cap", path: "/wiki/levelcap", icon: "fa-solid fa-trophy" },
        { title: "Economy & Casino", path: "/wiki/economy", icon: "fa-solid fa-coins" },
        { title: "Bottle Caps & IVs", path: "/wiki/utility", icon: "fa-solid fa-wand-magic-sparkles" },
        { title: "10 Elemental Raids", path: "/wiki/raids", icon: "fa-solid fa-dungeon" },
        { title: "Skins & Sizes", path: "/wiki/cosmetics", icon: "fa-solid fa-shirt" },
        { title: "Land Claims", path: "/wiki/claims", icon: "fa-solid fa-shield-halved" },
        { title: "FAQ", path: "/wiki/faq", icon: "fa-solid fa-circle-question" },
      ],
    },
  ];

  return (
    <>
      {/* Emerald Mobile Top Bar */}
      <nav className="mobile-emerald-header">
        <div className="mobile-emerald-inner">
          <Link href="/" className="mobile-emerald-brand" title="CobbleFun Home">
            <div className="mobile-brand-badge">
              <img
                src="/images/cobblefun_icon_small.png"
                alt="CobbleFun Logo"
                className="mobile-brand-logo"
              />
            </div>
            <div className="mobile-brand-texts">
              <span className="mobile-brand-title">COBBLEFUN</span>
              <span className="mobile-brand-sub">POWERED BY POKEFUN</span>
            </div>
          </Link>

          <div className="mobile-emerald-actions">
            <a
              href="https://store.pokefun.in"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-store-btn"
            >
              <i className="fa-solid fa-cart-shopping"></i>
              <span>STORE</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-emerald-toggle"
              aria-label="Open Navigation Menu"
            >
              <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="mobile-emerald-backdrop" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Drawer */}
      <aside className={`mobile-emerald-drawer ${isOpen ? "open" : ""}`}>
        <div className="mobile-drawer-header">
          <div className="mobile-drawer-brand">
            <img
              src="/images/cobblefun_icon_small.png"
              alt="CobbleFun Logo"
              style={{ width: "32px", height: "32px", objectFit: "contain" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontFamily: "'Righteous', cursive, sans-serif", fontSize: "1.2rem", color: "#064E3B", fontWeight: 900 }}>
                COBBLEFUN
              </span>
              <span style={{ fontSize: "0.62rem", color: "#059669", fontWeight: 800 }}>
                POWERED BY POKEFUN
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="mobile-drawer-close"
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Quick Connect & Player Count */}
        <div className="mobile-gateway-subcard">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#059669", letterSpacing: "0.5px" }}>
              BEDROCK / MCPE SERVER
            </span>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#10B981", display: "flex", alignItems: "center", gap: "6px" }}>
              <span className="gateway-live-dot"></span>
              {playerCount} Online
            </span>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={handleCopyIP}
              className="mobile-gateway-copy-btn"
            >
              <i className={`fa-solid ${copied ? "fa-check" : "fa-copy"}`}></i>
              <span>{copied ? "Copied IP!" : "mcpe.pokefun.in"}</span>
            </button>
            <a
              href="minecraft://?addExternalServer=CobbleFun%20Bedrock|mcpe.pokefun.in:19132"
              className="mobile-gateway-join-btn"
            >
              <i className="fa-solid fa-play"></i>
              <span>Join</span>
            </a>
          </div>
        </div>

        {/* Navigation Categories */}
        <div className="mobile-drawer-content">
          {navCategories.map((category, catIdx) => (
            <div key={catIdx} className="mobile-nav-group">
              <div className="mobile-group-title">{category.name}</div>
              <div className="mobile-group-links">
                {category.links.map((link, linkIdx) => (
                  <Link
                    key={linkIdx}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`mobile-nav-item ${pathname === link.path ? "active" : ""} ${link.highlight ? "highlight" : ""}`}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    <div className="mobile-item-left">
                      <i className={`${link.icon} mobile-item-icon`}></i>
                      <span>{link.title}</span>
                    </div>
                    {link.highlight && (
                      <span className="mobile-hot-badge">POPULAR</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Social Links */}
          <div className="mobile-drawer-socials">
            <a
              href="https://discord.gg/NtE8QBkmwR"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-card discord"
            >
              <i className="fa-brands fa-discord"></i>
              <span>Join Discord</span>
            </a>
            <a
              href="https://store.pokefun.in"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-card store"
            >
              <i className="fa-solid fa-cart-shopping"></i>
              <span>Webstore</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

