"use client";

import React from "react";

const newFeatures = [
    {
      title: "Real Gyms & Badges",
      desc: "Step up to the ultimate challenge! Test your skills against real Gym Leaders spread across the world. Build the perfect team, exploit type advantages, and claim victory to collect exclusive Gym Badges that prove your strength to everyone on the server.",
      image: "/images/features/realgysmandbages1.png"
    },
    {
      title: "Fun & Casino Games",
      desc: "Need a break from training? Head over to our vibrant Casino to try your luck with exciting mini-games! Bet your Pokecoins, interact with our interactive NPC dealers, and win massive payouts or rare prizes if you hit the jackpot.",
      image: "/images/features/funandcasiongames.png"
    },
    {
      title: "Server Crates",
      desc: "Unlock incredible rewards with our custom server crates! Participate in events, vote for the server, or conquer dungeons to earn Crate Keys. Spin to win legendary items, rare shiny Pokemon, and exclusive cosmetics that will make you stand out.",
      image: "/images/features/crates.png"
    },
    {
      title: "Global Trade System (GTS)",
      desc: "Trade your Pokemon and items with players across the entire server! List your Pokemon for a specific price or search for that rare shiny you've been looking for. The GTS makes economy and trading safe and easy.",
      image: "/images/features/gts.png"
    },
    {
      title: "Protection Stones (Land Claim)",
      desc: (
        <>
          Keep your builds and items safe! Use Protection Stones to claim land and protect your base from griefing or theft. You can manage who has access to your protected areas, so you can build safely with your friends.
          <br /><br />
          You can buy them from our <a href="/store" style={{ color: '#059669', textDecoration: 'underline', fontWeight: 'bold' }}>Paid Store</a> or with in-game currency for different radius protection stones on your demand. You also get them in your Starter Kit and Paid Rank Kits!
        </>
      ),
      image: "/images/features/landprotectionstones_landclaim.png"
    },
    {
      title: "Server Ranks & Support",
      desc: (
        <>
          Support the server and get amazing perks! Purchase Ranks to unlock exclusive kits, unique commands, custom titles, and other special benefits. Your support helps keep the server running and growing!
          <br /><br />
          You can buy them from our <a href="/store" style={{ color: '#059669', textDecoration: 'underline', fontWeight: 'bold' }}>Store</a>!
        </>
      ),
      image: "/images/features/ranks_buy_ranks_and_supportserver.png"
    },
    {
      title: "Leaderboards",
      desc: "Do you have what it takes to be the very best? Compete with other players across various categories and show off your skills. Climb to the top of the global leaderboards to earn special titles, respect from the community, and exclusive seasonal rewards!",
      image: "/images/features/leaderboards.png"
    },
    {
      title: "Server Menu & Essentials",
      desc: "Access the intuitive server menu for essential features! Manage your Warps, Claims, Bounties, Jobs, and Bank. Plus, easily check your Stats, redeem Codes, run Commands, visit the Pokefun Shop, and manage your Homes.",
      images: [
        "/images/features/servermenuessntialsandotherfeturs1.png", 
        "/images/features/servermenuessntialsandotherfeturs2.png"
      ]
    },
    {
      title: "Special Machines",
      desc: "Take your gameplay to the next level by utilizing our variety of special custom machines. Craft powerful unique items, automate your resource gathering, and train your Pokemon's abilities faster than ever before with state-of-the-art tech!",
      image: "/images/features/specialmachines.png"
    },
    {
      title: "Trading & TM Machine",
      desc: "Engage in a robust player economy! Trade Pokemon safely with other trainers using our secure trade menus to complete your Pokedex. Additionally, use specialized TM Machines to teach your Pokemon powerful new moves to optimize them for competitive battles.",
      image: "/images/features/tradingandtmmachine.png"
    },
    {
      title: "Custom Bagpacks",
      desc: "Running out of inventory space? We've got you covered! Expand your carrying capacity instantly with our functional, custom backpacks. Equip them to your chestplate slot to carry all your adventure essentials while still gaining armor protection.",
      image: "/images/features/bagpacks.png"
    },
    {
      title: "The Pokemon Center & Village",
      desc: "The Pokemon center will be the most important structure of your adventure. It appear in the plains and the desert, there you will find everything you need to improve your gaming experience.",
      image: "/images/features/thepokecenterandvillage.png",
    },
    {
      title: "Battle System Improvements",
      desc: "The battle system has many improvements, it is the same as the original games. It has mega evolutions, Dynamax and its own mechanic called \"boost\" that consumes experience to raise all stats by 3 turns!",
      image: "/images/features/thebattlesystem.jpg",
    },
    {
      title: "Start a Battle Anywhere",
      desc: "You can start a battle throwing your Pokemon (crouching and opening your menu) to a wild Pokemon or approaching a trainer.",
      images: ["/images/features/youcanstartbattle1.gif", "/images/features/youcanstartbattle2.gif"],
    },
    {
      title: "Basic Interactions",
      desc: "You can use your Pokedex to test your Pokemon's mount and evolutions. Some Pokemon evolve by item interaction or trading. ALL evolution methods are in the Pokedex, so check it regularly.",
      image: "/images/features/basicintraction.png",
    },
    {
      title: "Grazing Functions",
      desc: "The PC now has a new button that lets you send your Pokemon out to roam around. With this function, your Pokemon will heal a little HP, increase their friendship, and attack nearby monsters! Look for the new \"pasture\" PC box and choose an action between returning it to the party or the PC.",
      image: "/images/features/pcfeture.gif",
    },
    {
      title: "Pokeradar & Biome Detector",
      desc: "The Pokeradar is a new feature that lets you search for Pokemon near you. In addition, the Pokedex now includes a biome detector to help you find specific Pokemon.",
      image: "/images/features/pokeradar.png",
    },
    {
      title: "Berries & Apricorns",
      desc: "Berry plants will appear in Pokevillages. You can plant new berries with their seeds, there are some recipes you can make with them! Apricorn plants will appear over the world. With its fruit you can create some Pokeballs!",
      image: "/images/features/berrys.png",
    },
    {
      title: "Mining Ores",
      desc: "When mining you will find some ores that will contain evo stones, mega stones, key stones or wishing stars. It will help you progress in your adventure and get improvements.",
      image: "/images/features/ores.jpeg",
    },
    {
      title: "Bike and Ride Pager",
      desc: "Now the Bike and the Ride pager can be obtained in the Game corner. It will serve as transport to reach more difficult or high places, also to explore more easily.",
      image: "/images/features/bikeandridepagger.jpeg",
    },
    {
      title: "Backpacks & Painting",
      desc: "Now you can use backpacks! They function as a Bundle, but you can wear them in the chestplate slot and it give you armor. You can also paint your Pokedex and Backpack!",
      image: "/images/features/paintcolor.jpg",
    },
    {
      title: "GachaMon Machine",
      desc: "GachaMon machine allowing players to obtain items, Mega Stones, and even random Pokemon through capsule-based rewards with different rarity tiers.",
      image: "/images/features/gachamon.png",
    },
    {
      title: "Advanced Breeding System",
      desc: "A new breeding system has been created. With the new Day Care machine, you can store up to 6 Pokemon to breed. You can also add up to 2 other people to bring their Pokemon and create the perfect Pokemon. (To open the menu, you must have the Pokedex in your hand and press the action button.)",
      image: "/images/features/daycarebreeding.jpg",
    },
    {
      title: "More Equipables",
      desc: "Eight new equippable items have been added to Pokemon, along with the Shiny Charm (which increases the chance of encountering Shiny Pokemon both in the Day Care and in the wild when held in your inventory). These items will help train Pokemon's EVs more efficiently (in the Day Care, they will pass on a specific IV from the parent holding the item, and the Everstone will pass on the Pokemon's Nature). The Everstone will prevent the Pokemon from evolving, which is for those who like their Pokemon just as it is.",
      image: "/images/features/moreecupmanets.png",
    },
    {
      title: "Kitchen & Food",
      desc: "ðŸ³ Kitchen & Food\nðŸŽ¨ Edible dyes in 16 colors\n(Colors and designs adapted for best viewing with SERP Reworked)",
      image: "/images/features/kichenandfood.png",
    },
    {
      title: "Epic Builds",
      desc: "Open showcase for more builds viewers",
      image: "/images/features/epicbuidls.png"
    },
    {
      title: "Natural Wild Boss Battles",
      desc: "Encounter legendary and empowered wild Boss Pokémon spawning dynamically throughout the wilderness. Defeat them in challenging tactical battles to claim rare treasures, EV items, and crate keys!",
      image: "/images/features/image09_bosspokemons1.png"
    },
    {
      title: "Custom Team Raids",
      desc: "Rally your friends in our custom multiplayer Bedrock Raid Dens! Strategize against high-tier raid bosses with exclusive movesets and earn legendary rewards together.",
      image: "/images/features/image27_Team_Raids_Battle.png"
    },
    {
      title: "Mega Evolutions & Z-Moves",
      desc: "Unleash ultimate power! Equip custom Mega Stones and Z-Crystals to trigger real-time Mega Evolutions and screen-shattering Z-Moves during gym battles and competitive tournaments.",
      image: "/images/features/image29_Z_Mega1s.png"
    },
    {
      title: "DNA Pokémon Fusions",
      desc: "Fuse your favorite Pokémon through the server's advanced DNA splicing laboratory to create fearsome, one-of-a-kind hybrid battlers with merged typing and unique stats.",
      image: "/images/features/fusion_pokemons1.png"
    },
    {
      title: "Battle Tower & Ranked Arenas",
      desc: "Put your competitive team to the test! Ascend through challenging floors in the endless Battle Tower or queue into Ranked Battles to claim leaderboards status and BP rewards.",
      image: "/images/features/battletower.png"
    },
    {
      title: "Custom Fakemons & Regional Forms",
      desc: "Discover hundreds of handcrafted custom Fakemons and server-exclusive regional forms, complete with bespoke 3D models, animated textures, and custom learnsets.",
      image: "/images/features/coolfakemons.png"
    },
    {
      title: "Multi-Floor RPG Dungeons",
      desc: "Explore perilous custom dungeons filled with puzzles, elite mob guardians, and treasure vaults hidden across the darkest biomes of the server.",
      image: "/images/features/dungeon.png"
    },
    {
      title: "Safari Zone Expeditions",
      desc: "Enter the dedicated Safari Zone reserve to track rare shiny spawns, hidden ability specimens, and high-IV Pokémon with special safari capture balls.",
      image: "/images/features/safarizone.png"
    },
    {
      title: "Flying Taxi Fast Travel",
      desc: "Whistle for the Corviknight Flying Taxi from anywhere in the world for rapid, atmospheric transit between major cities, gym hubs, and custom points of interest.",
      image: "/images/features/Flying_Taxi-Photoroom.png"
    },
    {
      title: "Distortion World Dimension",
      desc: "Step through the dimensional rift into the mysterious Distortion World! Experience altered gravity, floating islands, and rare Giratina encounters.",
      image: "/images/features/DISTORTION_WORLD1.png"
    },
    {
      title: "More Coming Soon!",
      desc: "Many other features coming soon and under development: Raids, Dungeons, NPCs, Level Cap, and many more coming soon!",
      image: ""
    }
];

export default function FeaturesPage() {
  return (
    <div>
        <main id="site-main" className="site-main outer" style={{ background: '#f8fafc', margin: 0, padding: 0 }}>
            <div className="inner posts" style={{ width: '100%', maxWidth: 'none', padding: 0 }}>
                <div className="inner" style={{ marginTop: '40px', marginBottom: '60px', padding: '0 20px' }}>
                    <div className="section-title"
                        style={{ textAlign: 'center', marginBottom: '60px', fontSize: '36px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', color: '#059669' }}>
                        Server Features
                    </div>
                        
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', margin: '0 auto', maxWidth: '1000px', padding: '0 20px' }}>
                       {newFeatures.map((feature, i) => {
                           const isImageLeft = i % 2 !== 0;
                           
                           return (
                               <div key={i} style={{ 
                                   display: 'flex', 
                                   flexDirection: isImageLeft ? 'row-reverse' : 'row', 
                                   flexWrap: 'wrap',
                                   alignItems: 'center',
                                   gap: '40px'
                               }}>
                                   <div style={{ flex: '1 1 45%', minWidth: '300px' }}>
                                       <h3 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '15px', color: '#059669' }}>
                                           {feature.title}
                                       </h3>
                                       <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555', whiteSpace: 'pre-wrap' }}>
                                           {feature.desc}
                                       </p>
                                   </div>
                                   
                                   {(feature.image || feature.images) && (
                                       <div style={{ flex: '1 1 45%', minWidth: '300px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.15)', transition: 'transform 0.3s' }} className="hover:scale-105">
                                           {feature.images ? (
                                               <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'center' }}>
                                                   {feature.images.map((img, idx) => (
                                                       <img 
                                                           key={idx} 
                                                           src={img} 
                                                           style={{ width: 'calc(50% - 5px)', height: 'auto', display: 'block', objectFit: 'contain', borderRadius: '8px' }} 
                                                           alt={`${feature.title} ${idx+1}`} 
                                                           loading="lazy" 
                                                           decoding="async" 
                                                       />
                                                   ))}
                                               </div>
                                           ) : (
                                              <img 
                                                  src={feature.image} 
                                                  style={{ width: '100%', height: '300px', display: 'block', objectFit: 'contain', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }} 
                                                  alt={feature.title} 
                                                  loading="lazy" 
                                                  decoding="async" 
                                              />
                                           )}
                                       </div>
                                    )}
                               </div>
                           );
                       })}
                    </div>
                </div>
            </div>
        </main>
        
        <section id="footer">
            <div className="inner" style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", justifyContent: "space-between", padding: "0 20px" }}>
                <div className="footer-col" style={{ width: "100%" }}>
                    <div className="left">
                        <h1 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>2026 &copy; <strong>CobbleFun SMP (Powered by Pokefun)</strong></h1>
                        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                            We are not affiliated with or endorsed by Mojang AB or Pokemon.<br />
                            Server IP: mcpe.pokefun.in | Port: 19132
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

