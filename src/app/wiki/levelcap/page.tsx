import React from "react";
import Head from "next/head";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function LevelCapWiki() {
  return (
    <div className="viewport">
      <Head>
        <title>Gyms & Level Cap | COBBLEDROCK POKEFUN</title>
      </Head>
      <SiteHeader />
      <main id="site-main" className="site-main outer" style={{ background: '#f8fafc', margin: 0, padding: 0 }}>
        <div className="inner posts" style={{ width: '100%', maxWidth: 'none', padding: 0 }}>
          <div className="container-wrapper" style={{ padding: '40px 20px', minHeight: '80vh', maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Header Title */}
            <div style={{ textAlign: 'center', marginBottom: '35px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '65px',
                height: '65px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00d2ae, #059669)',
                color: 'white',
                fontSize: '28px',
                marginBottom: '15px',
                boxShadow: '0 8px 20px rgba(0, 210, 174, 0.35)'
              }}>
                <i className="fa-solid fa-compass"></i>
              </div>
              <h1 style={{ fontSize: '32px', fontWeight: 900, color: '#1e293b', marginBottom: '10px' }}>
                Gym Locator & Level Cap Guide
              </h1>
              <p style={{ color: '#64748b', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>
                Find Gyms easily using your in-game Locator Bar, defeat leaders, collect badges, and raise your Pokémon level cap!
              </p>
            </div>

            {/* KEY FEATURE: THE GYM LOCATOR BAR */}
            <div style={{
              background: 'linear-gradient(135deg, #022c22 0%, #064e3b 50%, #047857 100%)',
              color: 'white',
              borderRadius: '16px',
              padding: '35px 30px',
              marginBottom: '30px',
              boxShadow: '0 12px 35px rgba(2, 44, 34, 0.25)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                  <span style={{ background: '#00d2ae', color: '#022c22', padding: '5px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    CobbleDrock Feature
                  </span>
                  <span style={{ color: '#a7f3d0', fontSize: '14px' }}>Smart Navigation HUD</span>
                </div>

                <h2 style={{ fontSize: '26px', fontWeight: 900, marginBottom: '15px', color: '#ffffff' }}>
                  🧭 How to Find Gyms: Check Your Locator Bar!
                </h2>

                <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#e6fffa', marginBottom: '20px' }}>
                  You never have to get lost searching through endless biomes! On <strong>COBBLEDROCK</strong>, simply keep an eye on your <strong>Locator Bar / Compass HUD</strong> at the top of your screen.
                </p>

                {/* Locator Bar Workflow Steps */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '15px', marginTop: '20px' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(0, 210, 174, 0.3)', backdropFilter: 'blur(5px)' }}>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#00d2ae', marginBottom: '8px' }}>
                      <i className="fa-solid fa-location-crosshairs"></i> 1. Targeted Gym Icon
                    </div>
                    <p style={{ color: '#d1fae5', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                      The locator bar always shows the icon of the gym you currently need to battle. For example, if you haven&apos;t defeated the <strong>Rock Gym</strong> yet, it will display the <strong>Rock Gym icon</strong> pointing in its exact direction!
                    </p>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(0, 210, 174, 0.3)', backdropFilter: 'blur(5px)' }}>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#00d2ae', marginBottom: '8px' }}>
                      <i className="fa-solid fa-trophy"></i> 2. Battle &amp; Defeat Leader
                    </div>
                    <p style={{ color: '#d1fae5', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                      Follow the indicator straight to the Gym building. Challenge the Gym Leader NPC, win the battle, claim your Gym Badge, and unlock your next Pokémon Level Cap tier.
                    </p>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(0, 210, 174, 0.3)', backdropFilter: 'blur(5px)' }}>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#00d2ae', marginBottom: '8px' }}>
                      <i className="fa-solid fa-forward-step"></i> 3. Auto-Tracks Next Gym
                    </div>
                    <p style={{ color: '#d1fae5', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                      As soon as you defeat the Gym, the locator bar dynamically updates! It automatically acquires and points to the <strong>Next Gym</strong> in your journey step-by-step!
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: '20px', padding: '12px 18px', background: 'rgba(0, 210, 174, 0.15)', borderRadius: '10px', borderLeft: '4px solid #00d2ae', fontSize: '14px', color: '#e6fffa' }}>
                  <strong>💡 Pro Tip:</strong> Follow the arrow and distance number on the bar — as you get closer to the Gym, the distance will decrease until you arrive at the Gym arena!
                </div>
              </div>
            </div>

            {/* Why is my Pokemon not listening */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '30px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              marginBottom: '30px'
            }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#1e293b', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-circle-question" style={{ color: '#059669' }}></i> Why is my Pokémon not listening?
              </h2>
              <p style={{ color: '#475569', fontSize: '16px', lineHeight: 1.8, marginBottom: '15px' }}>
                If your Pokémon disobeys or does not listen to your battle commands, it means <strong>your current Level Cap is lower than their level</strong>, or they lack bond/friendship with you.
              </p>
              <p style={{ color: '#475569', fontSize: '16px', lineHeight: 1.8, margin: 0 }}>
                To make higher-level Pokémon obey, you must progress through the Gyms using your locator bar, defeat leaders, and earn Gym Badges. Each badge increases your maximum allowed Pokémon level!
              </p>
            </div>

            {/* Server Progression & Formula */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '30px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              marginBottom: '30px'
            }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#1e293b', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-chart-line" style={{ color: '#059669' }}></i> Progression &amp; Level Cap Formula
              </h2>
              
              <div style={{ background: '#f0fdf4', padding: '16px', borderRadius: '10px', borderLeft: '4px solid #059669', marginBottom: '20px' }}>
                <strong style={{ color: '#166534' }}>Level Cap Formula:</strong> <code style={{ background: '#dcfce7', padding: '3px 8px', borderRadius: '4px', color: '#15803d', fontWeight: 'bold' }}>floor(15 + (85 ÷ 18 × Badges))</code>
                <div style={{ marginTop: '8px', color: '#166534', fontSize: '14px' }}>
                  The server features <strong>18 progression stages</strong> scaling smoothly up to the ultimate <strong>Lv. 100</strong> cap.
                </div>
              </div>

              {/* Badges Table */}
              <div style={{ overflowX: 'auto', marginTop: '20px' }}>
                <table style={{ minWidth: '350px', width: '100%', borderCollapse: 'collapse', textAlign: 'center', color: '#333' }}>
                  <thead>
                    <tr style={{ background: '#f1f5f9' }}>
                      <th style={{ padding: '12px 16px', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 700 }}>Badges Defeated</th>
                      <th style={{ padding: '12px 16px', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 700 }}>Pokémon Level Cap</th>
                      <th style={{ padding: '12px 16px', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 700 }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>0 (Start)</td><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}><strong>Lv. 15</strong></td><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0', color: '#059669', fontWeight: 'bold' }}>Starter Tier</td></tr>
                    <tr><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>1 Badge</td><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}><strong>Lv. 19</strong></td><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>Early Game</td></tr>
                    <tr><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>2 Badges</td><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}><strong>Lv. 24</strong></td><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>Early Game</td></tr>
                    <tr><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>3 Badges</td><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}><strong>Lv. 29</strong></td><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>Mid Game</td></tr>
                    <tr><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>4 Badges</td><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}><strong>Lv. 33</strong></td><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>Mid Game</td></tr>
                    <tr><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>6 Badges</td><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}><strong>Lv. 43</strong></td><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>Mid Game</td></tr>
                    <tr><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>8 Badges</td><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}><strong>Lv. 52</strong></td><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0', color: '#0284c7', fontWeight: 'bold' }}>Veteran Trainer</td></tr>
                    <tr><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>10 Badges</td><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}><strong>Lv. 62</strong></td><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>Advanced</td></tr>
                    <tr><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>12 Badges</td><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}><strong>Lv. 71</strong></td><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>Advanced</td></tr>
                    <tr><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>14 Badges</td><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}><strong>Lv. 81</strong></td><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0', color: '#7c3aed', fontWeight: 'bold' }}>Elite Tier</td></tr>
                    <tr><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>16 Badges</td><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}><strong>Lv. 90</strong></td><td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0', color: '#7c3aed', fontWeight: 'bold' }}>Master Tier</td></tr>
                    <tr style={{ background: '#f0fdf4' }}><td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0', fontWeight: 'bold' }}>18 Badges (All)</td><td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0', color: '#059669', fontSize: '18px', fontWeight: 900 }}>Lv. 100</td><td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0', color: '#059669', fontWeight: 'bold' }}>Champion</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Loop Summary */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '25px',
              border: '1px solid #e2e8f0',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              marginBottom: '30px'
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#1e293b', marginBottom: '12px' }}>
                🔥 The CobbleDrock Journey Loop
              </h3>
              <div style={{
                display: 'inline-block',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#059669'
              }}>
                Locator Bar → Target Gym → Defeat Leader → Higher Cap → Auto-Track Next Gym!
              </div>
              <p style={{ color: '#64748b', fontSize: '14px', marginTop: '12px', marginBottom: 0 }}>
                This creates fair, exciting progression where every trainer earns their strength step by step!
              </p>
            </div>

            {/* Back Button */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Link href="/wiki" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#e2e8f0',
                color: '#334155',
                padding: '10px 20px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                transition: 'all 0.2s'
              }}>
                <i className="fa-solid fa-arrow-left"></i> Back to Wiki
              </Link>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
