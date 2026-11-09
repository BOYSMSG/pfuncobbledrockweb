"use client";

import React from "react";
import Link from "next/link";

export default function EconomyWikiPage() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" }}>
      
      {/* Breadcrumb */}
      <div style={{ marginBottom: "20px" }}>
        <Link href="/wiki" style={{ color: "#059669", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem" }}>
          ← Back to Wiki Overview
        </Link>
      </div>

      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <span style={{ fontSize: "0.8rem", fontWeight: 800, padding: "4px 14px", borderRadius: "9999px", background: "#F0FDF4", color: "#059669", border: "1px solid rgba(16, 185, 129, 0.4)", textTransform: "uppercase" }}>
          Server Economy Guide
        </span>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 900, color: "#064E3B", margin: "12px 0 8px 0" }}>
          Money Earning, Banknotes &amp; Casino
        </h1>
        <p style={{ color: "#134E4A", fontSize: "1rem", maxWidth: "680px", margin: "0 auto" }}>
          Learn how to earn Pokecoins (PC), withdraw physical banknotes, trade on the GTS, claim 30-day streak bonuses, and play casino mini-games!
        </p>
      </div>

      {/* Grid of Money Earning Methods */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginBottom: "40px" }}>
        
        {/* Method 1: Wild Battles */}
        <div style={{ background: "#FFFFFF", borderRadius: "20px", padding: "26px", border: "1.5px solid rgba(16, 185, 129, 0.25)", boxShadow: "0 8px 24px rgba(6, 78, 59, 0.05)" }}>
          <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "linear-gradient(135deg, #10B981, #059669)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: "1.4rem", marginBottom: "16px" }}>
            <i className="fa-solid fa-swords"></i>
          </div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#064E3B", marginBottom: "10px" }}>
            1. Wild Battle Bounties
          </h3>
          <p style={{ color: "#134E4A", fontSize: "0.88rem", lineHeight: 1.6, margin: "0 0 14px 0" }}>
            Every wild Pokemon defeated in battle rewards automatic Pokecoins directly to your scoreboard balance! Rewards dynamically scale with the level of the target:
          </p>
          <div style={{ background: "#F0FDF4", padding: "12px", borderRadius: "10px", fontSize: "0.82rem", color: "#064E3B", fontWeight: 700 }}>
            Formula: <code>Level x 1.5 PC</code><br />
            Example: Defeating a Level 50 wild Pokemon yields <strong>75 PC</strong> instantly!
          </div>
        </div>

        {/* Method 2: 30-Day Daily Login Streak */}
        <div style={{ background: "#FFFFFF", borderRadius: "20px", padding: "26px", border: "1.5px solid rgba(16, 185, 129, 0.25)", boxShadow: "0 8px 24px rgba(6, 78, 59, 0.05)" }}>
          <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "linear-gradient(135deg, #10B981, #059669)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: "1.4rem", marginBottom: "16px" }}>
            <i className="fa-solid fa-calendar-days"></i>
          </div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#064E3B", marginBottom: "10px" }}>
            2. 30-Day Login Streak
          </h3>
          <p style={{ color: "#134E4A", fontSize: "0.88rem", lineHeight: 1.6, margin: "0 0 14px 0" }}>
            Log in daily to escalate your streak tier! Milestones grant massive payouts, Evolution Stones, and exclusive Crate Keys:
          </p>
          <div style={{ background: "#F0FDF4", padding: "12px", borderRadius: "10px", fontSize: "0.82rem", color: "#064E3B", fontWeight: 700 }}>
            • Day 7: 5,000 PC + 3x Crate Keys<br />
            • Day 14: 15,000 PC + EXP XL Candies<br />
            • Day 30: 50,000 PC + Random Mega Stone!
          </div>
        </div>

        {/* Method 3: Global Trade System (/gts) */}
        <div style={{ background: "#FFFFFF", borderRadius: "20px", padding: "26px", border: "1.5px solid rgba(16, 185, 129, 0.25)", boxShadow: "0 8px 24px rgba(6, 78, 59, 0.05)" }}>
          <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "linear-gradient(135deg, #10B981, #059669)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: "1.4rem", marginBottom: "16px" }}>
            <i className="fa-solid fa-store"></i>
          </div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#064E3B", marginBottom: "10px" }}>
            3. Player Market (/gts)
          </h3>
          <p style={{ color: "#134E4A", fontSize: "0.88rem", lineHeight: 1.6, margin: "0 0 14px 0" }}>
            Sell your high-IV specimens, shiny Pokemon, custom RPG weapons, and rare stones to other trainers:
          </p>
          <div style={{ background: "#F0FDF4", padding: "12px", borderRadius: "10px", fontSize: "0.82rem", color: "#064E3B", fontWeight: 700 }}>
            Command: <code>/gts</code> to open the auction house.<br />
            Command: <code>/gts sell [price]</code> to list the item in your hand.
          </div>
        </div>

        {/* Method 4: Physical Serialized Banknotes */}
        <div style={{ background: "#FFFFFF", borderRadius: "20px", padding: "26px", border: "1.5px solid rgba(16, 185, 129, 0.25)", boxShadow: "0 8px 24px rgba(6, 78, 59, 0.05)" }}>
          <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "linear-gradient(135deg, #10B981, #059669)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: "1.4rem", marginBottom: "16px" }}>
            <i className="fa-solid fa-money-bill-transfer"></i>
          </div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#064E3B", marginBottom: "10px" }}>
            4. Banknotes (/withdraw)
          </h3>
          <p style={{ color: "#134E4A", fontSize: "0.88rem", lineHeight: 1.6, margin: "0 0 14px 0" }}>
            Turn digital scoreboard money into tangible physical banknote items with verified anti-dupe serial tracking:
          </p>
          <div style={{ background: "#F0FDF4", padding: "12px", borderRadius: "10px", fontSize: "0.82rem", color: "#064E3B", fontWeight: 700 }}>
            Command: <code>/withdraw [amount]</code><br />
            Right-click any banknote in hand to deposit the money back into your balance.
          </div>
        </div>

        {/* Method 5: Server Casino NPC Dealer */}
        <div style={{ background: "#FFFFFF", borderRadius: "20px", padding: "26px", border: "1.5px solid rgba(16, 185, 129, 0.25)", boxShadow: "0 8px 24px rgba(6, 78, 59, 0.05)" }}>
          <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "linear-gradient(135deg, #10B981, #059669)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: "1.4rem", marginBottom: "16px" }}>
            <i className="fa-solid fa-dice-six"></i>
          </div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#064E3B", marginBottom: "10px" }}>
            5. Casino Mini-Games
          </h3>
          <p style={{ color: "#134E4A", fontSize: "0.88rem", lineHeight: 1.6, margin: "0 0 14px 0" }}>
            Visit the Hub City Casino to interact with the RGB hologram dealer NPC (<code>ajay:casino</code>):
          </p>
          <div style={{ background: "#F0FDF4", padding: "12px", borderRadius: "10px", fontSize: "0.82rem", color: "#064E3B", fontWeight: 700 }}>
            • Dice: Predict Odd or Even (5k - 500k bet) for 2x win!<br />
            • Guess the Number: 1-10 multiplier jackpot.<br />
            • Lucky Card Draw: Instant token &amp; buff payouts.
          </div>
        </div>

        {/* Method 6: Server Shop & NPC Traders */}
        <div style={{ background: "#FFFFFF", borderRadius: "20px", padding: "26px", border: "1.5px solid rgba(16, 185, 129, 0.25)", boxShadow: "0 8px 24px rgba(6, 78, 59, 0.05)" }}>
          <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "linear-gradient(135deg, #10B981, #059669)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: "1.4rem", marginBottom: "16px" }}>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#064E3B", marginBottom: "10px" }}>
            6. In-Game Shop (/shop)
          </h3>
          <p style={{ color: "#134E4A", fontSize: "0.88rem", lineHeight: 1.6, margin: "0 0 14px 0" }}>
            Spend your hard-earned Pokecoins on essential training supplies, evolution items, and competitive held items:
          </p>
          <div style={{ background: "#F0FDF4", padding: "12px", borderRadius: "10px", fontSize: "0.82rem", color: "#064E3B", fontWeight: 700 }}>
            Command: <code>/shop</code><br />
            Available: Master Balls, Mega Evolution Stones, Nature Mints, EXP Candies XL, and Bottle Caps!
          </div>
        </div>

      </div>

    </div>
  );
}
