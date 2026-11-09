"use client";

import React, { useState } from "react";

interface ShopItem {
  name: string;
  category: "balls" | "evolution" | "mints" | "battle" | "utility";
  price: string;
  icon: string;
  desc: string;
  rarity: "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary";
}

const shopItems: ShopItem[] = [
  // Pokeballs
  { name: "Master Ball", category: "balls", price: "50,000 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/master_ball.png", desc: "Catches any wild Pokemon without fail 100% of the time.", rarity: "Legendary" },
  { name: "Ultra Ball", category: "balls", price: "1,200 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/ultra_ball.png", desc: "An ultra-high performance ball with high capture rate.", rarity: "Rare" },
  { name: "Beast Ball", category: "balls", price: "25,000 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/beast_ball.png", desc: "Special ball crafted to catch Ultra Beasts & rare spawns.", rarity: "Epic" },
  { name: "Cherish Ball", category: "balls", price: "15,000 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/cherish_ball.png", desc: "Rare commemorative ball for special events & tournaments.", rarity: "Epic" },
  { name: "Ancient Gigaton Ball", category: "balls", price: "8,500 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/ancient_gigaton_ball.png", desc: "Heavy ancient ball that strikes unsuspecting Pokemon.", rarity: "Epic" },
  { name: "Ancient Feather Ball", category: "balls", price: "4,500 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/ancient_feather_ball.png", desc: "Flies straight and fast at flying Pokemon in the wild.", rarity: "Rare" },
  { name: "Great Ball", category: "balls", price: "600 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/great_ball.png", desc: "Reliable Pokeball with higher catch rate than standard ball.", rarity: "Uncommon" },
  { name: "Poke Ball", category: "balls", price: "200 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/poke_ball.png", desc: "Standard device used for catching wild Pokemon in the wild.", rarity: "Common" },

  // Evolution & Mega
  { name: "Alakazite (Mega Stone)", category: "evolution", price: "35,000 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/mega/alakazite.png", desc: "Triggers Mega Evolution for Alakazam during battles.", rarity: "Legendary" },
  { name: "Absolite (Mega Stone)", category: "evolution", price: "35,000 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/mega/absolite.png", desc: "Triggers Mega Evolution for Absol during battles.", rarity: "Legendary" },
  { name: "Aerodactylite", category: "evolution", price: "35,000 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/mega/aerodactylite.png", desc: "Unleashes the primeval power of Mega Aerodactyl.", rarity: "Legendary" },
  { name: "Aggronite", category: "evolution", price: "35,000 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/mega/aggronite.png", desc: "Triggers Mega Evolution for Aggron in combat.", rarity: "Legendary" },
  { name: "Thunder Stone", category: "evolution", price: "3,500 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/evolution/thunder_stone.png", desc: "Evolves Pikachu, Eevee, Eelektrik and other Electric Pokemon.", rarity: "Rare" },
  { name: "Ice Stone", category: "evolution", price: "3,500 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/evolution/ice_stone.png", desc: "Evolves Alolan Vulpix, Alolan Sandshrew, and Galarian Darumaka.", rarity: "Rare" },
  { name: "Link Cable", category: "evolution", price: "5,000 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/evolution/link_cable.png", desc: "Simulates trade evolution for Haunter, Machoke, Kadabra & Graveler.", rarity: "Epic" },
  { name: "Upgrade", category: "evolution", price: "4,000 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/evolution/upgrade.png", desc: "Transparent device containing mysterious data. Evolves Porygon.", rarity: "Rare" },

  // Mints & Candies
  { name: "Adamant Mint", category: "mints", price: "7,500 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/mints/adamant_mint.png", desc: "Changes stat growth to boost Attack at cost of Sp. Attack.", rarity: "Epic" },
  { name: "Modest Mint", category: "mints", price: "7,500 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/mints/modest_mint.png", desc: "Changes stat growth to boost Sp. Attack at cost of Attack.", rarity: "Epic" },
  { name: "Jolly Mint", category: "mints", price: "7,500 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/mints/jolly_mint.png", desc: "Changes stat growth to boost Speed at cost of Sp. Attack.", rarity: "Epic" },
  { name: "Timid Mint", category: "mints", price: "7,500 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/mints/timid_mint.png", desc: "Changes stat growth to boost Speed at cost of Attack.", rarity: "Epic" },
  { name: "Rare Candy", category: "mints", price: "2,500 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/rare_candy.png", desc: "Instantly levels up any chosen Pokemon by exactly 1 level.", rarity: "Rare" },
  { name: "EXP Candy XL", category: "mints", price: "4,000 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/exp_candy_xl.png", desc: "Grants 30,000 EXP points directly to chosen Pokemon.", rarity: "Epic" },
  { name: "EXP Candy L", category: "mints", price: "2,000 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/exp_candy_l.png", desc: "Grants 10,000 EXP points directly to chosen Pokemon.", rarity: "Rare" },
  { name: "Eviolite (Held Item)", category: "mints", price: "12,000 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/held_items/eviolite.png", desc: "Boosts Defense & Sp. Def by 50% for unevolved Pokemon.", rarity: "Epic" },

  // Battle & Recovery
  { name: "Max Potion", category: "battle", price: "1,500 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/max_potion.png", desc: "Fully restores all HP of a single fainted or damaged Pokemon.", rarity: "Rare" },
  { name: "Full Restore", category: "battle", price: "2,200 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/full_restore.png", desc: "Restores all HP and heals all status conditions.", rarity: "Epic" },
  { name: "Max Revive", category: "battle", price: "3,000 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/max_revive.png", desc: "Revives a fainted Pokemon with its HP fully restored.", rarity: "Epic" },
  { name: "X Attack", category: "battle", price: "800 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/x_attack.png", desc: "Sharply raises the Attack stat of your active Pokemon.", rarity: "Uncommon" },
  { name: "Sitrus Berry", category: "battle", price: "400 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/sitrus_berry.png", desc: "Restores 25% of max HP when health drops below 50%.", rarity: "Uncommon" },
  { name: "Lum Berry", category: "battle", price: "500 PC", icon: "/server-assets/Pokefun_Pokecoin_Economy_RP/textures/items/lum_berry.png", desc: "Cures any status ailment (Burn, Freeze, Paralyze, Sleep, Poison).", rarity: "Uncommon" },
];

const utilityItems = [
  { name: "Golden Bottle Cap", price: "85,000 PC", icon: "/server-assets/CobbleUtility_RP/textures/items/golden_cap.png", desc: "Hyper Trains ALL 6 IV stats of a Pokemon to the absolute maximum 31 IVs!", tag: "PERFECT IV" },
  { name: "Speed Silver Cap", price: "20,000 PC", icon: "/server-assets/CobbleUtility_RP/textures/items/speed_silver_cap.png", desc: "Maximizes your Pokemon's Speed IV to 31 for competitive priority speed tiers.", tag: "MAX SPEED" },
  { name: "Attack Silver Cap", price: "20,000 PC", icon: "/server-assets/CobbleUtility_RP/textures/items/atk_silver_cap.png", desc: "Maximizes your Pokemon's Physical Attack IV to 31 for maximum physical damage.", tag: "MAX ATTACK" },
  { name: "Sp. Atk Silver Cap", price: "20,000 PC", icon: "/server-assets/CobbleUtility_RP/textures/items/spatk_silver_cap.png", desc: "Maximizes Special Attack IV to 31 for devastating elemental blast power.", tag: "MAX SP. ATK" },
  { name: "Speed Void Cap", price: "35,000 PC", icon: "/server-assets/CobbleUtility_RP/textures/items/speed_void_cap.png", desc: "Sets Speed IV to exactly 0! Essential for competitive Trick Room meta strategies.", tag: "0 IV TRICK ROOM" },
  { name: "Attack Void Cap", price: "35,000 PC", icon: "/server-assets/CobbleUtility_RP/textures/items/atk_void_cap.png", desc: "Sets Attack IV to exactly 0 to minimize Foul Play damage and confusion recoil.", tag: "0 IV ANTI-FOUL" },
  { name: "Shiny Modifier Card", price: "120,000 PC", icon: "/server-assets/CobbleUtility_RP/textures/items/shiny_card.png", desc: "Special card that bestows the rare sparkling Shiny coloration upon your Pokemon!", tag: "SHINY CARD" },
  { name: "Devolution Relic", price: "45,000 PC", icon: "/server-assets/CobbleUtility_RP/textures/items/devolution_relic.png", desc: "Ancient mysterious artifact that safely devolves a Pokemon back to its previous evolutionary stage.", tag: "DEVOLVE" },
  { name: "Transmutation Orb", price: "60,000 PC", icon: "/server-assets/CobbleUtility_RP/textures/items/transmutation_orb.png", desc: "Alters the genetic aura of a Pokemon to swap between regular abilities and unlock Hidden Abilities.", tag: "ABILITY SWAP" },
  { name: "Common Candy", price: "3,000 PC", icon: "/server-assets/CobbleUtility_RP/textures/items/common_candy.png", desc: "Lowers a Pokemon's level by exactly 1. Perfect for staying below server gym level caps!", tag: "LEVEL REDUCER" },
  { name: "Master Candy", price: "40,000 PC", icon: "/server-assets/CobbleUtility_RP/textures/items/master_candy.png", desc: "Infuses extraordinary concentrated experience to immediately grant 5 levels at once.", tag: "+5 LEVELS" },
  { name: "Special Poke Treat", price: "5,000 PC", icon: "/server-assets/CobbleUtility_RP/textures/items/poke_treat.png", desc: "Delicious handcrafted Pokemon treat that skyrockets friendship and happiness to max.", tag: "MAX HAPPINESS" },
];

const sizeEssences = [
  { name: "Tiny Essence", scale: "0.95x Scale", badge: "XS TIER", icon: "/server-assets/Pokemon_SizeVariation_RP/textures/items/szv/tiny_essence.png", color: "#3B82F6", desc: "Mutates your Pokemon into the adorable Tiny (XS) size tier with compact hitboxes." },
  { name: "Normal Essence", scale: "1.00x Scale", badge: "M TIER", icon: "/server-assets/Pokemon_SizeVariation_RP/textures/items/szv/normal_essence.png", color: "#10B981", desc: "Restores your Pokemon to standard canonical Pokedex dimensions." },
  { name: "Huge Essence", scale: "1.05x Scale", badge: "XL TIER", icon: "/server-assets/Pokemon_SizeVariation_RP/textures/items/szv/huge_essence.png", color: "#EF4444", desc: "Transforms your Pokemon into a towering Extra Large (XL) colossus that dominates the arena." },
  { name: "Growth Essence", scale: "+1 Tier Up", badge: "GROWTH", icon: "/server-assets/Pokemon_SizeVariation_RP/textures/items/szv/growth_essence.png", color: "#F59E0B", desc: "Increases your Pokemon's size bracket by one tier (XS -> S -> M -> L -> XL)." },
  { name: "Shrink Essence", scale: "-1 Tier Down", badge: "SHRINK", icon: "/server-assets/Pokemon_SizeVariation_RP/textures/items/szv/shrink_essence.png", color: "#8B5CF6", desc: "Decreases your Pokemon's size bracket by one tier (XL -> L -> M -> S -> XS)." },
];

const cosmeticSkins = [
  { name: "Boundary Mewtwo", category: "Legendary Skin", desc: "Dark dimensional cosmic aura armor for Mewtwo with glowing boundary pulses." },
  { name: "Mega Greninja Ceruledge", category: "Fusion Skin", desc: "Spectral dark-water flame blades transforming Ceruledge into Ash-Greninja style armor." },
  { name: "Aurora Umbreon", category: "Seasonal Skin", desc: "Luminescent iridescent neon rings that shimmer like the Northern Lights in nighttime battles." },
  { name: "Eternal Tinkaton", category: "Fairy/Steel Skin", desc: "Towering ancient rune-forged alloy hammer and glowing royal crown embellishments." },
  { name: "Steampunk Articuno", category: "Steamworks Skin", desc: "Brass clockwork wings, steam exhaust vents, and crystalline chilled copper plumage." },
  { name: "Holiday Alolan Vulpix", category: "Winter Festival", desc: "Cozy woolen winter scarf, frosted crystal antlers, and snowflake trail particles." },
  { name: "Chef Typhlosion", category: "Gourmet Skin", desc: "Master culinary chef outfit with sizzling flame neck collar for fiery cooking action." },
  { name: "Fighter Latios", category: "Aviation Skin", desc: "Aerodynamic jet fighter markings, supersonic cockpit canopy, and Mach 3 vapor trails." }
];

const playerCosmetics = [
  { name: "Angel & Seraphim Wings", type: "Back Cosmetic", desc: "Majestic feathered celestial wings with soft radiant glow." },
  { name: "Bat & Dragon Wings", type: "Back Cosmetic", desc: "Intimidating leathery wings animated with realistic flapping physics." },
  { name: "Animated Solar System", type: "Orbiting Trail", desc: "Planets dynamically orbiting around your trainer head in real-time." },
  { name: "Nyan Cat Rainbow Trail", type: "Particle Trail", desc: "Pop-tart rainbow cat trail flowing behind you as you sprint through cities." },
  { name: "Hornet Silksong & Ghostface", type: "Full Body Suit", desc: "Iconic collector suits usable with server wardrobe stations." },
  { name: "Axolotl & Baby Turtle Hats", type: "Head Cosmetic", desc: "Animated living pet resting gently on your character's head." }
];

const crateTiers = [
  {
    name: "Legendary Crate",
    badge: "TIER S+",
    color: "#F59E0B",
    chestImg: "/server-assets/pokemonCratesRP/textures/items/pokelegendarychest_spawn_egg.png",
    keyImg: "/server-assets/pokemonCratesRP/textures/items/keys/pokelegendarycrate_key.png",
    desc: "Guaranteed legendary or shiny Cobblemon with perfect IVs, Master Balls, and Ultra Weapons.",
    drops: ["Shiny Rayquaza / Mewtwo", "Master Balls x3", "RPG Destroyer Claymore", "50,000 Pokecoins"]
  },
  {
    name: "Mystic Crate",
    badge: "TIER S",
    color: "#8B5CF6",
    chestImg: "/server-assets/pokemonCratesRP/textures/items/pokemysticchest_spawn_egg.png",
    keyImg: "/server-assets/pokemonCratesRP/textures/items/keys/pokemysticcrate_key.png",
    desc: "Mythical Pokemon spawns, Mega Evolution Stones, and Ancient Pokeballs.",
    drops: ["Mew / Jirachi / Celebi", "Random Mega Stones", "Ancient Gigaton Balls", "25,000 Pokecoins"]
  },
  {
    name: "Galaxy Crate",
    badge: "TIER A+",
    color: "#3B82F6",
    chestImg: "/server-assets/pokemonCratesRP/textures/items/pokegalaxychest_spawn_egg.png",
    keyImg: "/server-assets/pokemonCratesRP/textures/items/keys/pokegalaxycrate_key.png",
    desc: "Cosmic skins, custom DNA Fusions, and massive EXP Candy bundles.",
    drops: ["Exclusive DNA Fusion Egg", "Cosmic Skin Voucher", "EXP Candies XL x15", "15,000 Pokecoins"]
  },
  {
    name: "Power Crate",
    badge: "TIER A",
    color: "#EF4444",
    chestImg: "/server-assets/pokemonCratesRP/textures/items/pokepowerchest_spawn_egg.png",
    keyImg: "/server-assets/pokemonCratesRP/textures/items/keys/pokepowercrate_key.png",
    desc: "Complete RPG armor sets, warhammers, heavy crossbows, and raid loot.",
    drops: ["Lightbringer Armor Set", "Unique Glaive & Shield", "Rare Candies x10", "10,000 Pokecoins"]
  },
  {
    name: "Crazy Crate",
    badge: "TIER B+",
    color: "#EC4899",
    chestImg: "/server-assets/pokemonCratesRP/textures/items/pokecrazychest_spawn_egg.png",
    keyImg: "/server-assets/pokemonCratesRP/textures/items/keys/pokecrazycrate_key.png",
    desc: "Surprise jackpots, casino tokens, rare berries, and physical banknotes.",
    drops: ["10,000 PC Banknote", "Gold Casino Chips", "Ultra Balls x16", "Nature Mints x3"]
  },
  {
    name: "Halloween Crate",
    badge: "TIER B",
    color: "#F97316",
    chestImg: "/server-assets/pokemonCratesRP/textures/items/pokehalloweenchest_spawn_egg.png",
    keyImg: "/server-assets/pokemonCratesRP/textures/items/keys/pokehalloweencrate_key.png",
    desc: "Spooky ghost Pokemon, Gengar cosmetics, and pumpkin armor sets.",
    drops: ["Shiny Chandelure / Gengar", "Spooky Scythe", "Dark Void Caps", "7,500 Pokecoins"]
  },
  {
    name: "TNT Crate",
    badge: "TIER C+",
    color: "#DC2626",
    chestImg: "/server-assets/pokemonCratesRP/textures/items/poketntchest_spawn_egg.png",
    keyImg: "/server-assets/pokemonCratesRP/textures/items/keys/poketntcrate_key.png",
    desc: "High risk, high explosion rewards! Volatile items and rare candies.",
    drops: ["Explosive Voltorb / Electrode", "TNT Armor Piece", "Rare Candy x5", "5,000 Pokecoins"]
  },
  {
    name: "Basic Crate",
    badge: "TIER C",
    color: "#10B981",
    chestImg: "/server-assets/pokemonCratesRP/textures/items/pokebasicchest_spawn_egg.png",
    keyImg: "/server-assets/pokemonCratesRP/textures/items/keys/pokebasiccrate_key.png",
    desc: "Daily free crate for all trainers! Claimable via /kit or server voting.",
    drops: ["Pokeballs x16", "Great Balls x8", "Potions & Revives", "1,000 Pokecoins"]
  }
];

const banknoteTiers = [
  { value: "100 PC", color: "#10B981", tag: "Pocket Cash", desc: "Common denomination for quick player-to-player trades and berry snacks." },
  { value: "500 PC", color: "#10B981", tag: "Pocket Cash", desc: "Standard note used for purchasing Pokeballs and basic recovery potions." },
  { value: "1,000 PC", color: "#059669", tag: "Silver Note", desc: "Convenient note for Evolution Stones and competitive breeding items." },
  { value: "5,000 PC", color: "#0D9488", tag: "Gold Note", desc: "High value banknote for Mint items, trade cables, and EXP Candies." },
  { value: "10,000 PC", color: "#2563EB", tag: "Platinum Note", desc: "Major currency note used for purchasing Crate Keys and held items." },
  { value: "50,000 PC", color: "#7C3AED", tag: "Royal Note", desc: "Elite wealth note for buying Master Balls, Mega Stones, and Rare mounts." },
  { value: "100,000 PC", color: "#DB2777", tag: "Treasury Note", desc: "Highest denomination banknote on the server, featuring anti-counterfeit tracking." },
];

type TabType = "economy" | "utility" | "cosmetics" | "crates" | "casino" | "rpg" | "banknotes";

export default function ServerFeaturesShowcase() {
  const [activeTab, setActiveTab] = useState<TabType>("economy");
  const [shopCategory, setShopCategory] = useState<"all" | "balls" | "evolution" | "mints" | "battle">("all");

  const filteredShop = shopCategory === "all" 
    ? shopItems 
    : shopItems.filter(item => item.category === shopCategory);

  return (
    <section style={{
      width: "100%",
      maxWidth: "1280px",
      margin: "0 auto 60px",
      padding: "0 20px"
    }}>
      
      {/* Header Badge & Title */}
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "6px 18px",
          borderRadius: "9999px",
          background: "#F0FDF4",
          border: "1.5px solid rgba(16, 185, 129, 0.4)",
          color: "#059669",
          fontSize: "0.82rem",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "1px",
          marginBottom: "12px"
        }}>
          <i className="fa-solid fa-server"></i>
          <span>Authentic Bedrock Features</span>
        </div>
        
        <h2 style={{
          fontSize: "2.4rem",
          fontWeight: 900,
          color: "#064E3B",
          margin: "0 0 10px 0"
        }}>
          Complete Server Systems &amp; Economy
        </h2>
        
        <p style={{
          color: "#134E4A",
          fontSize: "1rem",
          maxWidth: "680px",
          margin: "0 auto",
          lineHeight: 1.6
        }}>
          Explore all custom addons, Bottle Cap IV modifiers, 8 Reward Crates, Pokemon skins, and the physical Pokecoin economy directly from our Bedrock Dedicated Server!
        </p>
      </div>

      {/* Main Tab Navigation */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginBottom: "36px",
        flexWrap: "wrap",
        background: "#F0FDF4",
        padding: "8px",
        borderRadius: "16px",
        border: "1.5px solid rgba(16, 185, 129, 0.25)"
      }}>
        {[
          { id: "economy", label: "Pokecoin Shop (/shop)", icon: "fa-solid fa-coins" },
          { id: "utility", label: "Bottle Caps & Utilities", icon: "fa-solid fa-wand-magic-sparkles" },
          { id: "cosmetics", label: "Skins & Cosmetics", icon: "fa-solid fa-shirt" },
          { id: "crates", label: "8 Server Crates", icon: "fa-solid fa-gift" },
          { id: "casino", label: "Casino Mini-Games", icon: "fa-solid fa-dice" },
          { id: "rpg", label: "RPG Armors & Weapons", icon: "fa-solid fa-shield-halved" },
          { id: "banknotes", label: "Physical Banknotes", icon: "fa-solid fa-money-bill-wave" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabType)}
            style={{
              padding: "10px 20px",
              borderRadius: "12px",
              border: "none",
              background: activeTab === tab.id ? "linear-gradient(135deg, #10B981, #059669)" : "transparent",
              color: activeTab === tab.id ? "#FFFFFF" : "#064E3B",
              fontWeight: 800,
              fontSize: "0.88rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s ease"
            }}
          >
            <i className={tab.icon}></i>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* =================================================================
          TAB 1: POKECOIN SHOP (/shop)
          ================================================================= */}
      {activeTab === "economy" && (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "22px", flexWrap: "wrap", gap: "12px" }}>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {(["all", "balls", "evolution", "mints", "battle"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setShopCategory(cat)}
                  style={{
                    padding: "6px 16px",
                    borderRadius: "8px",
                    border: shopCategory === cat ? "1.5px solid #10B981" : "1.5px solid rgba(16, 185, 129, 0.2)",
                    background: shopCategory === cat ? "#10B981" : "#FFFFFF",
                    color: shopCategory === cat ? "#FFFFFF" : "#064E3B",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    cursor: "pointer",
                    textTransform: "capitalize"
                  }}
                >
                  {cat === "all" ? "All Items" : cat === "balls" ? "Pokeballs" : cat === "evolution" ? "Mega & Evolution" : cat === "mints" ? "Mints & Candies" : "Battle Items"}
                </button>
              ))}
            </div>

            <div style={{ fontSize: "0.88rem", color: "#059669", fontWeight: 700 }}>
              <i className="fa-solid fa-circle-check" style={{ marginRight: "6px" }}></i>
              <span>Live In-Game Prices in Pokecoins (PC)</span>
            </div>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px"
          }}>
            {filteredShop.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "18px",
                  padding: "20px",
                  border: "1.5px solid rgba(16, 185, 129, 0.2)",
                  boxShadow: "0 6px 20px rgba(6, 78, 59, 0.05)",
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                  transition: "all 0.2s ease"
                }}
              >
                <div style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "14px",
                  background: "#F0FDF4",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  <img src={item.icon} alt={item.name} style={{ width: "40px", height: "40px", objectFit: "contain", imageRendering: "pixelated" }} />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px", marginBottom: "4px" }}>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#064E3B", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {item.name}
                    </h4>
                    <span style={{ fontSize: "0.88rem", fontWeight: 900, color: "#059669", whiteSpace: "nowrap" }}>
                      {item.price}
                    </span>
                  </div>
                  <p style={{ color: "#134E4A", fontSize: "0.78rem", margin: 0, lineHeight: 1.4, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =================================================================
          TAB 2: BOTTLE CAPS, IVS & COBBLEUTILITY
          ================================================================= */}
      {activeTab === "utility" && (
        <div>
          <div style={{ background: "#FFFFFF", borderRadius: "20px", padding: "26px", border: "1.5px solid rgba(16, 185, 129, 0.25)", marginBottom: "30px" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 900, color: "#064E3B", margin: "0 0 8px 0", display: "flex", alignItems: "center", gap: "10px" }}>
              <i className="fa-solid fa-wand-magic-sparkles" style={{ color: "#10B981" }}></i>
              <span>CobbleUtility &amp; Hyper Training System</span>
            </h3>
            <p style={{ color: "#134E4A", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
              Use custom Bottle Caps to modify your Pokemon's IV values with pinpoint accuracy! Gold Bottle Caps grant 100% 31 IV perfection, Silver Caps train individual stats, and Void Caps set stats to 0 for Trick Room and Anti-Foul Play builds.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
            marginBottom: "36px"
          }}>
            {utilityItems.map((u, idx) => (
              <div
                key={idx}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "18px",
                  padding: "20px",
                  border: "1.5px solid rgba(16, 185, 129, 0.25)",
                  boxShadow: "0 6px 20px rgba(6, 78, 59, 0.05)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
                  <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: "#F0FDF4", border: "1px solid rgba(16, 185, 129, 0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={u.icon} alt={u.name} style={{ width: "36px", height: "36px", objectFit: "contain", imageRendering: "pixelated" }} />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.7rem", fontWeight: 800, background: "#F0FDF4", color: "#059669", padding: "2px 8px", borderRadius: "6px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                      {u.tag}
                    </span>
                    <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#064E3B", margin: "4px 0 0 0" }}>{u.name}</h4>
                  </div>
                </div>
                <p style={{ color: "#134E4A", fontSize: "0.82rem", lineHeight: 1.5, margin: "0 0 10px 0" }}>{u.desc}</p>
                <div style={{ fontSize: "0.85rem", fontWeight: 900, color: "#059669" }}>Shop Price: {u.price}</div>
              </div>
            ))}
          </div>

          {/* Size Variation Sub-section */}
          <div style={{ background: "#FFFFFF", borderRadius: "20px", padding: "26px", border: "1.5px solid rgba(16, 185, 129, 0.25)" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 900, color: "#064E3B", margin: "0 0 8px 0" }}>
              5-Tier Pokemon Size Variation Essences
            </h3>
            <p style={{ color: "#134E4A", fontSize: "0.92rem", lineHeight: 1.6, margin: "0 0 20px 0" }}>
              Mutate your Pokemon with authentic Size Essences! All 5 tiers scale visual models, hitboxes, and wild encounter rarities.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
              {sizeEssences.map((sz, idx) => (
                <div key={idx} style={{ background: "#F0FDF4", padding: "16px", borderRadius: "14px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <img src={sz.icon} alt={sz.name} style={{ width: "32px", height: "32px", objectFit: "contain", imageRendering: "pixelated" }} />
                    <div>
                      <h5 style={{ fontSize: "0.92rem", fontWeight: 800, color: sz.color, margin: 0 }}>{sz.name}</h5>
                      <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#064E3B" }}>{sz.scale}</span>
                    </div>
                  </div>
                  <p style={{ color: "#134E4A", fontSize: "0.78rem", margin: 0, lineHeight: 1.4 }}>{sz.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =================================================================
          TAB 3: COSMETICS & POKEMON SKINS
          ================================================================= */}
      {activeTab === "cosmetics" && (
        <div>
          <div style={{ background: "#FFFFFF", borderRadius: "20px", padding: "26px", border: "1.5px solid rgba(16, 185, 129, 0.25)", marginBottom: "30px" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 900, color: "#064E3B", margin: "0 0 8px 0", display: "flex", alignItems: "center", gap: "10px" }}>
              <i className="fa-solid fa-shirt" style={{ color: "#10B981" }}></i>
              <span>Custom Pokemon Skins &amp; Trainer Wardrobe</span>
            </h3>
            <p style={{ color: "#134E4A", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
              Use Cosmetic Form Passes and in-game Wardrobe Stations to equip custom-modeled seasonal skins, animated wings, and dynamic floating orbital pets!
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginBottom: "36px" }}>
            <div style={{ background: "#FFFFFF", borderRadius: "18px", padding: "22px", border: "1.5px solid rgba(16, 185, 129, 0.25)" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#064E3B", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <i className="fa-solid fa-dragon" style={{ color: "#10B981" }}></i>
                <span>Exclusive Cobblemon Skins</span>
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {cosmeticSkins.map((s, idx) => (
                  <div key={idx} style={{ background: "#F0FDF4", padding: "12px 16px", borderRadius: "12px", border: "1px solid rgba(16, 185, 129, 0.25)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <strong style={{ fontSize: "0.92rem", color: "#064E3B" }}>{s.name}</strong>
                      <span style={{ fontSize: "0.72rem", background: "#10B981", color: "#FFFFFF", padding: "2px 8px", borderRadius: "6px", fontWeight: 800 }}>{s.category}</span>
                    </div>
                    <p style={{ color: "#134E4A", fontSize: "0.8rem", margin: 0, lineHeight: 1.4 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "#FFFFFF", borderRadius: "18px", padding: "22px", border: "1.5px solid rgba(16, 185, 129, 0.25)" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#064E3B", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <i className="fa-solid fa-vest-patches" style={{ color: "#10B981" }}></i>
                <span>Player Wings &amp; Animated Trails</span>
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {playerCosmetics.map((p, idx) => (
                  <div key={idx} style={{ background: "#F0FDF4", padding: "12px 16px", borderRadius: "12px", border: "1px solid rgba(16, 185, 129, 0.25)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <strong style={{ fontSize: "0.92rem", color: "#064E3B" }}>{p.name}</strong>
                      <span style={{ fontSize: "0.72rem", background: "#059669", color: "#FFFFFF", padding: "2px 8px", borderRadius: "6px", fontWeight: 800 }}>{p.type}</span>
                    </div>
                    <p style={{ color: "#134E4A", fontSize: "0.8rem", margin: 0, lineHeight: 1.4 }}>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================
          TAB 4: 8 SERVER CRATES
          ================================================================= */}
      {activeTab === "crates" && (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "24px"
        }}>
          {crateTiers.map((crate, idx) => (
            <div
              key={idx}
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                padding: "24px",
                border: "1.5px solid rgba(16, 185, 129, 0.25)",
                boxShadow: "0 8px 24px rgba(6, 78, 59, 0.06)",
                display: "flex",
                flexDirection: "column",
                position: "relative"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, padding: "4px 10px", borderRadius: "8px", background: "#F0FDF4", color: crate.color, border: `1px solid ${crate.color}` }}>
                  {crate.badge}
                </span>
                <img src={crate.keyImg} alt="Crate Key" style={{ width: "32px", height: "32px", objectFit: "contain", imageRendering: "pixelated" }} title="Required Crate Key" />
              </div>

              <div style={{ display: "flex", justifyContent: "center", marginBottom: "14px", height: "90px" }}>
                <img src={crate.chestImg} alt={crate.name} style={{ height: "90px", objectFit: "contain", imageRendering: "pixelated" }} />
              </div>

              <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#064E3B", margin: "0 0 6px 0", textAlign: "center" }}>
                {crate.name}
              </h4>
              <p style={{ color: "#134E4A", fontSize: "0.82rem", lineHeight: 1.5, margin: "0 0 16px 0", textAlign: "center" }}>
                {crate.desc}
              </p>

              <div style={{ marginTop: "auto", background: "#F0FDF4", padding: "12px", borderRadius: "12px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                <span style={{ display: "block", fontSize: "0.72rem", fontWeight: 800, color: "#059669", textTransform: "uppercase", marginBottom: "6px" }}>
                  Featured Loot:
                </span>
                <ul style={{ margin: 0, paddingLeft: "16px", color: "#064E3B", fontSize: "0.78rem", lineHeight: 1.6 }}>
                  {crate.drops.map((drop, dIdx) => (
                    <li key={dIdx}>{drop}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* =================================================================
          TAB 5: CASINO MINI-GAMES
          ================================================================= */}
      {activeTab === "casino" && (
        <div style={{ background: "#FFFFFF", borderRadius: "24px", padding: "32px", border: "1.5px solid rgba(16, 185, 129, 0.3)", boxShadow: "0 10px 30px rgba(6, 78, 59, 0.08)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px", flexWrap: "wrap" }}>
            <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg, #10B981, #059669)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: "1.8rem" }}>
              <i className="fa-solid fa-dice"></i>
            </div>
            <div>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#064E3B", margin: 0 }}>
                Server Casino &amp; Mini-Games
              </h3>
              <span style={{ color: "#059669", fontSize: "0.88rem", fontWeight: 700 }}>
                Interactive NPC Dealer (ajay:casino) with RGB Animated Hologram!
              </span>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            <div style={{ background: "#F0FDF4", padding: "24px", borderRadius: "18px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#10B981", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, marginBottom: "14px" }}>
                1
              </div>
              <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#064E3B", marginBottom: "8px" }}>Dice Game (Even / Odd)</h4>
              <p style={{ color: "#134E4A", fontSize: "0.85rem", lineHeight: 1.6, margin: "0 0 10px 0" }}>
                Place your bet between <strong>5,000 PC and 500,000 PC</strong>. Predict whether the 6-sided dice roll will land on Even or Odd to double your payout!
              </p>
              <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#059669" }}>Win Condition: 2x Payout + Levelup Sound &amp; Fireworks!</div>
            </div>

            <div style={{ background: "#F0FDF4", padding: "24px", borderRadius: "18px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#10B981", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, marginBottom: "14px" }}>
                2
              </div>
              <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#064E3B", marginBottom: "8px" }}>Guess the Number</h4>
              <p style={{ color: "#134E4A", fontSize: "0.85rem", lineHeight: 1.6, margin: "0 0 10px 0" }}>
                Put your instincts to the test! Guess the exact winning number selected by the automated dealer from 1 to 10 for massive jackpot multipliers.
              </p>
              <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#059669" }}>Multiplier: Up to 5x Jackpot Payout!</div>
            </div>

            <div style={{ background: "#F0FDF4", padding: "24px", borderRadius: "18px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#10B981", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, marginBottom: "14px" }}>
                3
              </div>
              <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#064E3B", marginBottom: "8px" }}>Lucky Card Draw</h4>
              <p style={{ color: "#134E4A", fontSize: "0.85rem", lineHeight: 1.6, margin: "0 0 10px 0" }}>
                Draw from the deck to uncover rare cards granting instant Pokecoins, rare candy vouchers, and exclusive temporary server buffs.
              </p>
              <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#059669" }}>Includes Village Hero Effect &amp; Token Drops!</div>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================
          TAB 6: RPG ARMORS & WEAPONS
          ================================================================= */}
      {activeTab === "rpg" && (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px"
        }}>
          <div style={{ background: "#FFFFFF", borderRadius: "20px", padding: "26px", border: "1.5px solid rgba(16, 185, 129, 0.25)" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 900, color: "#064E3B", margin: "0 0 16px 0", display: "flex", alignItems: "center", gap: "10px" }}>
              <i className="fa-solid fa-shield-halved" style={{ color: "#10B981" }}></i>
              <span>16 Custom RPG Armor Sets</span>
            </h3>
            <p style={{ color: "#134E4A", fontSize: "0.88rem", lineHeight: 1.6, margin: "0 0 16px 0" }}>
              Equip your trainer with high-tier custom 3D armor sets offering enhanced health, resistance, and set bonuses:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", fontSize: "0.85rem", color: "#064E3B", fontWeight: 700 }}>
              <div>• Paladin Armor</div>
              <div>• Berserker Set</div>
              <div>• Lightbringer Armor</div>
              <div>• Voidwalker Robes</div>
              <div>• Shadow Assassin</div>
              <div>• Dragon Knight</div>
              <div>• Frost Warden</div>
              <div>• Phoenix Crest Armor</div>
            </div>
          </div>

          <div style={{ background: "#FFFFFF", borderRadius: "20px", padding: "26px", border: "1.5px solid rgba(16, 185, 129, 0.25)" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 900, color: "#064E3B", margin: "0 0 16px 0", display: "flex", alignItems: "center", gap: "10px" }}>
              <i className="fa-solid fa-khanda" style={{ color: "#10B981" }}></i>
              <span>14 Custom RPG Weapon Classes</span>
            </h3>
            <p style={{ color: "#134E4A", fontSize: "0.88rem", lineHeight: 1.6, margin: "0 0 16px 0" }}>
              Conquer boss dens and wild raid dens with devastating custom-crafted fantasy weapons:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", fontSize: "0.85rem", color: "#064E3B", fontWeight: 700 }}>
              <div>• Heavy Claymores</div>
              <div>• Warhammers</div>
              <div>• Dual Daggers</div>
              <div>• Combat Glaives</div>
              <div>• Heavy Crossbows</div>
              <div>• Arcane Battle Staves</div>
              <div>• Halberds &amp; Spears</div>
              <div>• Spooky Reaper Scythes</div>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================
          TAB 7: PHYSICAL BANKNOTES & ECONOMY
          ================================================================= */}
      {activeTab === "banknotes" && (
        <div>
          <div style={{ background: "#FFFFFF", borderRadius: "20px", padding: "26px", border: "1.5px solid rgba(16, 185, 129, 0.25)", marginBottom: "30px" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 900, color: "#064E3B", margin: "0 0 8px 0" }}>
              Physical Serialized Banknotes (/withdraw)
            </h3>
            <p style={{ color: "#134E4A", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
              Our server features a true physical economy! You can withdraw your Pokecoins into physical serialized Banknotes to trade with players, deposit into your personal vault, or sell on the GTS (/gts).
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "20px" }}>
            {banknoteTiers.map((note, idx) => (
              <div
                key={idx}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "18px",
                  padding: "20px",
                  border: "1.5px solid rgba(16, 185, 129, 0.25)",
                  boxShadow: "0 6px 20px rgba(6, 78, 59, 0.05)"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <span style={{ fontSize: "0.72rem", fontWeight: 800, padding: "3px 8px", borderRadius: "6px", background: "#F0FDF4", color: note.color, border: `1px solid ${note.color}` }}>
                    {note.tag}
                  </span>
                  <i className="fa-solid fa-money-bill-wave" style={{ color: note.color, fontSize: "1.2rem" }}></i>
                </div>

                <div style={{ fontSize: "1.6rem", fontWeight: 900, color: "#064E3B", marginBottom: "6px" }}>
                  {note.value}
                </div>
                <p style={{ color: "#134E4A", fontSize: "0.82rem", lineHeight: 1.5, margin: 0 }}>
                  {note.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

    </section>
  );
}
