import type { Metadata } from 'next';
import './tailwind.css';
import './globals.css';
import './cobblefun-emerald.css';
import Script from 'next/script';
import { Providers } from '@/components/Providers';
import { Analytics } from "@vercel/analytics/next";
import MobileNavigation from '@/components/MobileNavigation';
import SiteHeader from '@/components/SiteHeader';
import AIChatWidget from '@/components/AIChatWidget';
import PushManager from '@/components/PushManager';
import WelcomeLoginModal from '@/components/WelcomeLoginModal';

export const metadata: Metadata = {
  metadataBase: new URL('https://cobblefun.pokefun.in'),
  title: 'CobbleFun | Cobblemon Bedrock & MCPE Server | Powered by Pokefun',
  description: 'Join CobbleFun, powered by Pokefun - the premier Minecraft Bedrock / MCPE Cobblemon Server! Catch, train, and battle on Mobile, Windows & Consoles.',
  keywords: [
    'CobbleFun',
    'CobbleFun server',
    'Cobblemon Bedrock',
    'Minecraft Bedrock Pokemon server',
    'MCPE Cobblemon',
    'Pokefun Bedrock',
    'Cobblemon MCPE',
    'Minecraft PE Pokemon',
    'Bedrock Cobblemon crossplay'
  ],
  openGraph: {
    title: 'CobbleFun | Cobblemon Bedrock & MCPE Server | Powered by Pokefun',
    description: 'Join CobbleFun, the #1 Cobblemon Bedrock & MCPE Minecraft server! Catch, train, and battle across all devices.',
    url: 'https://cobblefun.pokefun.in',
    siteName: 'CobbleFun',
    images: [
      {
        url: 'https://cobblefun.pokefun.in/images/cobblefun_logo.png',
        width: 1200,
        height: 630,
        alt: 'CobbleFun Cobblemon Bedrock Server',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'CobbleFun | Cobblemon Bedrock & MCPE Server | Powered by Pokefun',
    description: 'Join CobbleFun - premier Minecraft Bedrock & MCPE Cobblemon experience powered by Pokefun.',
    images: ['https://cobblefun.pokefun.in/images/cobblefun_logo.png'],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "CobbleFun",
  "description": "CobbleFun is the premier Minecraft Bedrock / MCPE Cobblemon server, powered by the Pokefun network.",
  "genre": ["Role-playing game", "Multiplayer", "Cobblemon"],
  "playMode": "MultiPlayer",
  "applicationCategory": "Game",
  "gamePlatform": ["Android", "iOS", "Windows Bedrock", "Xbox", "PlayStation", "Nintendo Switch"],
  "publisher": {
    "@type": "Organization",
    "name": "CobbleFun (Pokefun Network)"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="HandheldFriendly" content="True" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="icon" href="/images/cobblefun_icon_small.png?v=cf3" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico?v=cf3" />
        <link rel="apple-touch-icon" href="/images/cobblefun_icon_small.png?v=cf3" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="/css/animate.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" type="text/css" href="/css/cards.min.css" />
      </head>
      <body>
        <Providers>
          <div className="viewport">
            <MobileNavigation />
            <SiteHeader />
            
            <main className="site-main-viewport">
              <div className="site-page-content">
                {children}
              </div>
            </main>

            {/* Modern Emerald CobbleFun Footer */}
            <footer style={{
              background: "#FFFFFF",
              borderTop: "1.5px solid rgba(16, 185, 129, 0.25)",
              padding: "50px 24px 30px",
              marginTop: "40px"
            }}>
              <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "36px",
                  marginBottom: "40px"
                }}>
                  {/* Brand Column */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                      <div className="nav-brand-logo-badge">
                        <img 
                          src="/images/cobblefun_icon_small.png" 
                          alt="CobbleFun Logo" 
                          style={{ width: "32px", height: "32px", objectFit: "contain" }} 
                        />
                      </div>
                      <div>
                        <div style={{ fontFamily: "'Righteous', cursive, sans-serif", fontSize: "1.4rem", fontWeight: 900, color: "#064E3B" }}>
                          COBBLEFUN
                        </div>
                        <div style={{ fontSize: "0.68rem", fontWeight: 800, color: "#059669", letterSpacing: "0.5px" }}>
                          POWERED BY POKEFUN
                        </div>
                      </div>
                    </div>
                    <p style={{ color: "#134E4A", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                      The premier Minecraft Bedrock / MCPE Cobblemon Server. Free to join for Mobile, Windows, and Console players worldwide!
                    </p>
                    <div style={{ marginTop: "14px", display: "inline-block", background: "#F0FDF4", padding: "6px 14px", borderRadius: "8px", border: "1px solid rgba(16, 185, 129, 0.3)", fontSize: "0.8rem", color: "#064E3B", fontWeight: 700 }}>
                      <i className="fa-solid fa-server" style={{ color: "#10B981", marginRight: "6px" }}></i>
                      IP: mcpe.pokefun.in | Port: 19132
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <div>
                    <h4 style={{ fontSize: "0.82rem", fontWeight: 800, textTransform: "uppercase", color: "#059669", letterSpacing: "1px", marginBottom: "14px" }}>
                      Quick Links
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                      <li><a href="/" style={{ color: "#134E4A", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Home</a></li>
                      <li><a href="/features" style={{ color: "#134E4A", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Server Features</a></li>
                      <li><a href="/showcase" style={{ color: "#134E4A", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Video Showcase</a></li>
                      <li><a href="https://store.pokefun.in" target="_blank" rel="noopener noreferrer" style={{ color: "#059669", textDecoration: "none", fontSize: "0.9rem", fontWeight: 700 }}>CobbleFun Webstore &rarr;</a></li>
                    </ul>
                  </div>

                  {/* Wiki & Guides */}
                  <div>
                    <h4 style={{ fontSize: "0.82rem", fontWeight: 800, textTransform: "uppercase", color: "#059669", letterSpacing: "1px", marginBottom: "14px" }}>
                      Knowledgebase
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                      <li><a href="/wiki/ranks" style={{ color: "#059669", textDecoration: "none", fontSize: "0.9rem", fontWeight: 700 }}>⭐ Ranks &amp; Commands Guide</a></li>
                      <li><a href="/wiki/begginer_guide" style={{ color: "#134E4A", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Beginner's Guide</a></li>
                      <li><a href="/wiki/kits" style={{ color: "#134E4A", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Kits &amp; Ranks Guide</a></li>
                      <li><a href="/wiki/levelcap" style={{ color: "#134E4A", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Gyms &amp; Level Cap</a></li>
                      <li><a href="/wiki/economy" style={{ color: "#134E4A", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Economy &amp; Casino</a></li>
                      <li><a href="/wiki/utility" style={{ color: "#134E4A", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Bottle Caps &amp; IVs</a></li>
                      <li><a href="/wiki/raids" style={{ color: "#134E4A", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>10 Elemental Raids</a></li>
                      <li><a href="/wiki/cosmetics" style={{ color: "#134E4A", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Skins &amp; Sizes</a></li>
                      <li><a href="/wiki/claims" style={{ color: "#134E4A", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Land Claims Tutorial</a></li>
                      <li><a href="/wiki/faq" style={{ color: "#134E4A", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Frequently Asked Questions</a></li>
                    </ul>
                  </div>

                  {/* Community & Discord */}
                  <div>
                    <h4 style={{ fontSize: "0.82rem", fontWeight: 800, textTransform: "uppercase", color: "#059669", letterSpacing: "1px", marginBottom: "14px" }}>
                      Official Community
                    </h4>
                    <p style={{ color: "#134E4A", fontSize: "0.88rem", lineHeight: 1.5, marginBottom: "14px" }}>
                      Join over 10,000+ trainers on our official Discord server for updates, giveaways, and support.
                    </p>
                    <a
                      href="https://discord.gg/NtE8QBkmwR"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "#5865F2",
                        color: "#FFFFFF",
                        padding: "10px 18px",
                        borderRadius: "10px",
                        fontWeight: 800,
                        fontSize: "0.88rem",
                        textDecoration: "none",
                        boxShadow: "0 4px 15px rgba(88, 101, 242, 0.3)"
                      }}
                    >
                      <i className="fa-brands fa-discord"></i>
                      <span>Join Discord</span>
                    </a>
                  </div>
                </div>

                {/* Bottom Disclaimer */}
                <div style={{
                  paddingTop: "24px",
                  borderTop: "1px solid rgba(16, 185, 129, 0.15)",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  fontSize: "0.78rem",
                  color: "#64748B"
                }}>
                  <div>
                    2026 &copy; <strong>CobbleFun SMP</strong>. Powered by <strong>Pokefun Network</strong>. All rights reserved.
                  </div>
                  <div>
                    Not an official Minecraft or Pokemon product. Not approved by or associated with Mojang or Nintendo.
                  </div>
                </div>
              </div>
            </footer>

            <WelcomeLoginModal />
            {/* <AIChatWidget /> */}
            <PushManager />
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}

