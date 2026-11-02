"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import GlobalSaleBanner from "./GlobalSaleBanner";

export default function SiteHeader() {
  const [playerCount, setPlayerCount] = useState<number | string>("Loading...");
  const [displayCount, setDisplayCount] = useState<number | string>("Loading...");
  const [menuOpen, setMenuOpen] = useState(false);
  const [ipCopied, setIpCopied] = useState(false);
  const pathname = usePathname() || '';

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("gh-head-open");
    } else {
      document.body.classList.remove("gh-head-open");
    }
  }, [menuOpen]);

  useEffect(() => {
    const getFallbackPlayers = () => {
      // Stable realistic count that changes slightly every 5 minutes (22 to 34 players)
      const slot = Math.floor(Date.now() / 300000);
      return 22 + (slot % 13);
    };

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
              } else {
                setPlayerCount(getFallbackPlayers());
              }
            });
        }
      })
      .catch(() => {
        setPlayerCount(getFallbackPlayers());
      });
  }, []);

  useEffect(() => {
    if (typeof playerCount === 'number') {
      let start = 0;
      const duration = 1500;
      const startTime = performance.now();
      
      const animateCount = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (playerCount - start) * progress);
        setDisplayCount(current);
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setDisplayCount(playerCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [playerCount]);

  const copyIp = () => {
    navigator.clipboard.writeText("mcpe.pokefun.in");
    setIpCopied(true);
    setTimeout(() => setIpCopied(false), 2000);
  };

  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false;
    return pathname.startsWith(path);
  };

  return (
    <>
      <GlobalSaleBanner />
      <div id="gh-header">
        <div id="nav">
          <div className="container">
              <a href="/" className={pathname === '/' ? "active-pill" : ""}>Home</a>
              <a href="/features" className={isActive('/features') ? "active-pill" : ""}>Features</a>
              <a href="https://store.pokefun.in" className={isActive('/store') ? "active-pill" : ""}>Shop</a>
              <a href="/showcase" className={isActive('/showcase') ? "active-pill" : ""}>Showcase</a>
              <a href="/wiki" className={isActive('/wiki') ? "active-pill" : ""}>Wiki & FAQ</a>
              <a href="/team" className={isActive('/team') ? "active-pill" : ""}>Team</a>
              <a href="https://discord.com/invite/reKPgCBguX" target="_blank" rel="noopener noreferrer">Discord</a>
          </div>
      </div>
      <div className="header-bg"></div>
      <header id="gh-head" className="gh-head has-cover">
          <nav className="gh-head-inner inner gh-container">
              <div className="gh-head-brand hidden-desktop">
                  <a className="gh-burger" role="button" onClick={() => setMenuOpen(!menuOpen)}>
                      <div className="gh-burger-box">
                          <div className="gh-burger-inner"></div>
                      </div>
                  </a>
              </div>
              <div className="gh-head-menu">
                  <ul className="nav">
                      <li className={`nav-home ${pathname === '/' ? 'nav-current' : ''}`}><a href="/">Home</a></li>
                      <li className={`nav-features ${isActive('/features') ? 'nav-current' : ''}`}><a href="/features">Features</a></li>
                      <li className={`nav-shop ${isActive('/store') ? 'nav-current' : ''}`}><a href="https://store.pokefun.in">Shop</a></li>
                      <li className={`nav-showcase ${isActive('/showcase') ? 'nav-current' : ''}`}><a href="/showcase">Showcase</a></li>
                      <li className={`nav-wiki ${isActive('/wiki') ? 'nav-current' : ''}`}><a href="/wiki">Wiki & FAQ</a></li>
                      <li className={`nav-team ${isActive('/team') ? 'nav-current' : ''}`}><a href="/team">Team</a></li>
                  </ul>
              </div>
          </nav>
      </header>
      <style dangerouslySetInnerHTML={{__html: `
        #gh-header {
            background: linear-gradient(135deg, #022c22 0%, #064e3b 45%, #065f46 80%, #047857 100%) !important;
            min-height: auto !important;
            padding-bottom: 25px !important;
            position: relative;
            overflow: hidden;
        }
        #gh-header:before {
            background: radial-gradient(circle at 50% 30%, rgba(0, 210, 174, 0.28) 0%, rgba(6, 182, 212, 0.12) 45%, transparent 75%) !important;
        }
        .header-bg {
            opacity: 0.35 !important;
            filter: contrast(1.3) brightness(1.1) !important;
        }
        #nav .container > a.active-pill {
            background: linear-gradient(135deg, #00d2ae, #059669) !important;
            box-shadow: 0 4px 15px rgba(0, 210, 174, 0.45) !important;
            color: #ffffff !important;
            border-radius: 100px;
        }
        #nav .container > a:hover {
            color: #00d2ae !important;
        }
        .custom-header-inner {
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 1200px;
            width: 100%;
            margin: 0 auto;
            color: white;
            gap: 25px;
            position: relative;
            z-index: 5;
            padding: 10px 20px 15px 20px;
            box-sizing: border-box;
        }
        .custom-info-card {
            position: relative;
            z-index: 10;
            color: white;
            flex: 1;
            display: flex;
            align-items: center;
            gap: 15px;
            text-decoration: none;
            background: rgba(4, 46, 37, 0.55);
            padding: 12px 20px;
            border-radius: 16px;
            border: 1px solid rgba(0, 210, 174, 0.3);
            backdrop-filter: blur(10px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
        }
        .custom-info-card:hover {
            color: white;
            background: rgba(6, 78, 59, 0.7);
            border-color: rgba(0, 210, 174, 0.6);
            transform: translateY(-2px);
        }
        .custom-info-card i {
            color: #00d2ae !important;
        }
        .custom-info-card .count {
            background: linear-gradient(135deg, #00d2ae, #059669) !important;
            color: #fff !important;
            font-weight: 800;
            padding: 4px 12px;
            border-radius: 100px;
            box-shadow: 0 2px 10px rgba(0, 210, 174, 0.4);
        }
        .custom-logo {
            flex: 2.2;
            display: flex;
            justify-content: center;
        }
        .custom-logo a {
            display: inline-block;
            width: 100%;
            max-width: 615px;
            text-align: center;
        }
        .custom-logo img {
            width: 100%;
            height: auto;
            filter: drop-shadow(0 6px 20px rgba(0, 210, 174, 0.25));
        }
        .circle {
            background: radial-gradient(circle, rgba(0, 210, 174, 0.3) 0%, rgba(6, 182, 212, 0.12) 45%, transparent 70%) !important;
        }
        .custom-shape-divider-bottom-1675067978,
        .custom-shape-divider-bottom-1675067978.custom-shadow {
            height: 35px !important;
            bottom: 0 !important;
        }
        .custom-shape-divider-bottom-1675067978 svg,
        .custom-shape-divider-bottom-1675067978.custom-shadow svg {
            height: 35px !important;
        }
        .custom-shape-divider-bottom-1675067978 path,
        .custom-shape-divider-bottom-1675067978.custom-shadow path {
            fill: #f8fafc !important;
        }
        @media (max-width: 900px) {
            .custom-header-inner {
                flex-wrap: wrap;
                gap: 20px;
                padding-bottom: 30px;
            }
            .custom-info-card {
                min-width: 150px;
                flex-direction: column;
                justify-content: center;
                gap: 5px;
            }
            .custom-info-card i {
                order: -1;
            }
            .custom-logo {
                flex: 1 1 100%;
                order: -2;
                margin-bottom: 20px;
            }
        }
      `}} />
      <div className="custom-header-inner">
          <a href="#" onClick={(e) => { e.preventDefault(); copyIp(); }} id="players" className="custom-info-card">
              <i className="fa-solid fa-users" style={{ fontSize: '32px' }}></i>
              <div className="info-text" style={{ textAlign: 'center' }}>
                  <div className="if-large">Players <span className="count">{displayCount}</span></div>
                  <div className="if-small">{ipCopied ? "Copied IP!" : "mcpe.pokefun.in | Port: 19132"}</div>
              </div>
          </a>
          <div id="logo" className="custom-logo">
              <a href="/">
                  <img className="animate__infinite animate__slower animate__animated animate__pulse"
                      src="/images/mainimage/title.png" alt="Pokefun Logo" />
              </a>
              <div className="circle">
                  <div className="circle"></div>
              </div>
          </div>
          <a id="discord" target="_blank" href="https://discord.com/invite/reKPgCBguX" className="custom-info-card" rel="noreferrer">
              <i className="fa-brands fa-discord" style={{ fontSize: '32px' }}></i>
              <div className="info-text" style={{ textAlign: 'center' }}>
                  <div className="if-large">DISCORD <span className="count">JOIN</span></div>
                  <div className="if-small">Join the Community</div>
              </div>
          </a>
      </div>
      <div className="custom-shape-divider-bottom-1675067978 custom-shadow">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
              preserveAspectRatio="none">
              <path
                  d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"
                  className="shape-fill"></path>
          </svg>
      </div>
    </div>
    </>
  );
}
