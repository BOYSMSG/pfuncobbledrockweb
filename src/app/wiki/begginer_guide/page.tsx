"use client";

import React from "react";
import Link from "next/link";

export default function BeginnerGuideWiki() {
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px" }}>
      
      {/* Breadcrumb */}
      <div style={{ marginBottom: "20px" }}>
        <Link href="/wiki" style={{ color: "#059669", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem" }}>
          ← Back to Wiki Overview
        </Link>
      </div>

      <div style={{ textAlign: "center", marginBottom: "40px" }}>
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
          <i className="fa-solid fa-graduation-cap"></i>
        </div>
        <h1 style={{ fontSize: "2.4rem", fontWeight: 900, color: "#064E3B", margin: "0 0 8px 0" }}>
          Beginner's Complete Survival Guide
        </h1>
        <p style={{ color: "#134E4A", fontSize: "1rem", maxWidth: "680px", margin: "0 auto" }}>
          Welcome to CobbleFun Bedrock! Here is everything you need to start your adventure, claim starter kits, heal your team, and build your base.
        </p>
      </div>

      {/* Step by step */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        
        {/* Step 1 */}
        <div style={{ background: "#FFFFFF", borderRadius: "18px", padding: "26px", border: "1.5px solid rgba(16, 185, 129, 0.25)", boxShadow: "0 8px 24px rgba(6, 78, 59, 0.05)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#10B981", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900 }}>
              1
            </div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#064E3B", margin: 0 }}>
              Pick Your Starter &amp; Claim Starter Kit
            </h3>
          </div>
          <p style={{ color: "#134E4A", fontSize: "0.9rem", lineHeight: 1.6, margin: "0 0 14px 0" }}>
            When you first connect to the server, you will be prompted to select your favorite Starter Pokemon! Next, open your inventory or type <code>/kit</code> to receive the massive <strong>Starter Kit</strong>:
          </p>
          <div style={{ background: "#F0FDF4", padding: "14px 18px", borderRadius: "12px", border: "1px solid rgba(16, 185, 129, 0.3)", fontSize: "0.85rem", color: "#064E3B", lineHeight: 1.7 }}>
            • <strong>Storage PC:</strong> Place anywhere to access your Pokemon storage boxes.<br />
            • <strong>Healing Machine:</strong> Infinite free instant healing for your full party.<br />
            • <strong>Kindergarten:</strong> Egg incubation station to hatch eggs quickly.<br />
            • <strong>Cat Backpack:</strong> Wearable backpack providing extra inventory slots.<br />
            • <strong>Medium Protection Stone:</strong> Place to claim your first secure land.
          </div>
        </div>

        {/* Step 2 */}
        <div style={{ background: "#FFFFFF", borderRadius: "18px", padding: "26px", border: "1.5px solid rgba(16, 185, 129, 0.25)", boxShadow: "0 8px 24px rgba(6, 78, 59, 0.05)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#10B981", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900 }}>
              2
            </div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#064E3B", margin: 0 }}>
              Use the Ender Eye Main Menu
            </h3>
          </div>
          <p style={{ color: "#134E4A", fontSize: "0.9rem", lineHeight: 1.6, margin: "0 0 14px 0" }}>
            The <strong>Ender Eye</strong> item in your inventory is your all-in-one server control panel! Right-click or hold it on your mobile screen to open:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px", fontSize: "0.85rem", color: "#064E3B", fontWeight: 700 }}>
            <div style={{ background: "#F0FDF4", padding: "10px", borderRadius: "8px" }}>• Server Shop (/shop)</div>
            <div style={{ background: "#F0FDF4", padding: "10px", borderRadius: "8px" }}>• Kit Claims (/kit)</div>
            <div style={{ background: "#F0FDF4", padding: "10px", borderRadius: "8px" }}>• Global Market (/gts)</div>
            <div style={{ background: "#F0FDF4", padding: "10px", borderRadius: "8px" }}>• Warps &amp; Hub Cities</div>
            <div style={{ background: "#F0FDF4", padding: "10px", borderRadius: "8px" }}>• Set Home &amp; Teleport</div>
            <div style={{ background: "#F0FDF4", padding: "10px", borderRadius: "8px" }}>• Casino Mini-Games</div>
          </div>
        </div>

        {/* Step 3 */}
        <div style={{ background: "#FFFFFF", borderRadius: "18px", padding: "26px", border: "1.5px solid rgba(16, 185, 129, 0.25)", boxShadow: "0 8px 24px rgba(6, 78, 59, 0.05)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#10B981", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900 }}>
              3
            </div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#064E3B", margin: 0 }}>
              Essential Server Commands
            </h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem" }}>
            <div style={{ background: "#F0FDF4", padding: "10px 14px", borderRadius: "8px" }}>
              <code>/sethome [name]</code> &mdash; Set your base waypoint. Return anytime with <code>/home [name]</code>.
            </div>
            <div style={{ background: "#F0FDF4", padding: "10px 14px", borderRadius: "8px" }}>
              <code>/spawn</code> &mdash; Teleport back to Central Hub City.
            </div>
            <div style={{ background: "#F0FDF4", padding: "10px 14px", borderRadius: "8px" }}>
              <code>/shop</code> &mdash; Open the live Pokecoin item shop for balls, mints, and caps.
            </div>
            <div style={{ background: "#F0FDF4", padding: "10px 14px", borderRadius: "8px" }}>
              <code>/withdraw [amount]</code> &mdash; Turn digital money into physical tradeable banknotes.
            </div>
            <div style={{ background: "#F0FDF4", padding: "10px 14px", borderRadius: "8px" }}>
              <code>/gts</code> &mdash; Access the global player auction house to buy/sell items.
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
