"use client";

import React, { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

export default function WelcomeLoginModal() {
  const { data: session, status } = useSession();
  const [showModal, setShowModal] = useState(false);

  // Listen for manual trigger events from header / mobile nav
  useEffect(() => {
    const handleOpen = () => setShowModal(true);
    window.addEventListener("openLoginModal", handleOpen);
    window.addEventListener("open-login-modal", handleOpen);
    return () => {
      window.removeEventListener("openLoginModal", handleOpen);
      window.removeEventListener("open-login-modal", handleOpen);
    };
  }, []);

  // Auto-prompt on join if unauthenticated
  useEffect(() => {
    if (session) {
      setShowModal(false);
      return;
    }

    // Check if user is unauthenticated or initial guest
    if (status === "unauthenticated" || status === "loading") {
      const hasDismissedInSession = sessionStorage.getItem("cobblefun_guest_session");
      if (!hasDismissedInSession && !session) {
        // Show smoothly after page loads (800ms)
        const timer = setTimeout(() => {
          if (!session) {
            setShowModal(true);
          }
        }, 800);
        return () => clearTimeout(timer);
      }
    }
  }, [status, session]);

  const handleDismiss = () => {
    sessionStorage.setItem("cobblefun_guest_session", "true");
    setShowModal(false);
  };

  if (!showModal || session) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(3, 14, 10, 0.85)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        zIndex: 9999999,
        animation: "cobblefunFadeIn 0.25s ease-out",
      }}
      onClick={handleDismiss}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "440px",
          backgroundColor: "#061A14",
          backgroundImage: "radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.22) 0%, rgba(6, 26, 20, 0.98) 75%)",
          border: "1.5px solid rgba(16, 185, 129, 0.45)",
          borderRadius: "24px",
          padding: "36px 28px 28px",
          boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(16, 185, 129, 0.25)",
          textAlign: "center",
          color: "#FFFFFF",
          fontFamily: "'Karla', sans-serif",
          animation: "cobblefunScaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Glow Ambient Orb */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "220px",
            height: "120px",
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)",
            filter: "blur(30px)",
            pointerEvents: "none",
          }}
        />

        {/* Close Button */}
        <button
          onClick={handleDismiss}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "#94A3B8",
            fontSize: "14px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#FFFFFF";
            e.currentTarget.style.background = "rgba(239, 68, 68, 0.3)";
            e.currentTarget.style.borderColor = "#EF4444";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#94A3B8";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
          }}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Brand Icon & Tag */}
        <div style={{ marginBottom: "22px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              width: "68px",
              height: "68px",
              borderRadius: "18px",
              background: "linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(5, 150, 105, 0.15))",
              border: "2px solid #10B981",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "14px",
              boxShadow: "0 0 25px rgba(16, 185, 129, 0.4)",
            }}
          >
            <img
              src="/images/cobblefun_icon_small.png"
              alt="CobbleFun"
              style={{ width: "44px", height: "44px", objectFit: "contain" }}
              onError={(e) => {
                // Fallback to Pokefun icon if small icon not found
                e.currentTarget.src = "/images/pokefun_icon_32.png";
              }}
            />
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 12px",
              borderRadius: "20px",
              background: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              color: "#34D399",
              fontSize: "0.74rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            <i className="fa-solid fa-crown" style={{ fontSize: "0.7rem" }}></i>
            <span>CobbleFun Bedrock • Cobblemon</span>
          </div>

          <h2
            style={{
              fontFamily: "'Righteous', sans-serif",
              fontSize: "1.9rem",
              color: "#FFFFFF",
              margin: "12px 0 6px 0",
              letterSpacing: "0.5px",
            }}
          >
            Join CobbleFun
          </h2>

          <p
            style={{
              color: "#94A3B8",
              fontSize: "0.92rem",
              margin: 0,
              lineHeight: 1.55,
              maxWidth: "340px",
            }}
          >
            Apna trainer profile access karein, community doston se juden, aur in-game rewards &amp; kits claim karein!
          </p>
        </div>

        {/* OAuth Buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "22px" }}>
          {/* Discord Button */}
          <button
            onClick={() => signIn("discord")}
            style={{
              width: "100%",
              padding: "13px 18px",
              borderRadius: "14px",
              fontWeight: 800,
              fontSize: "0.98rem",
              color: "#FFFFFF",
              background: "#5865F2",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              boxShadow: "0 6px 20px rgba(88, 101, 242, 0.35)",
              transition: "transform 0.15s ease, filter 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.filter = "brightness(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.filter = "brightness(1)";
            }}
          >
            <i className="fa-brands fa-discord" style={{ fontSize: "1.3rem" }}></i>
            <span>Continue with Discord</span>
          </button>

          {/* Google Button */}
          <button
            onClick={() => signIn("google")}
            style={{
              width: "100%",
              padding: "13px 18px",
              borderRadius: "14px",
              fontWeight: 800,
              fontSize: "0.98rem",
              color: "#FFFFFF",
              background: "#EA4335",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              boxShadow: "0 6px 20px rgba(234, 67, 53, 0.3)",
              transition: "transform 0.15s ease, filter 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.filter = "brightness(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.filter = "brightness(1)";
            }}
          >
            <i className="fa-brands fa-google" style={{ fontSize: "1.1rem" }}></i>
            <span>Continue with Google</span>
          </button>
        </div>

        {/* Footer Actions */}
        <div
          style={{
            paddingTop: "16px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "0.82rem",
          }}
        >
          <a
            href="/login"
            style={{
              color: "#34D399",
              textDecoration: "none",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <i className="fa-solid fa-lock" style={{ fontSize: "0.72rem" }}></i>
            <span>Staff Login</span>
          </a>

          <button
            onClick={handleDismiss}
            style={{
              background: "transparent",
              border: "none",
              color: "#94A3B8",
              cursor: "pointer",
              fontWeight: 700,
              fontSize: "0.82rem",
              padding: 0,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
          >
            Explore as Guest &rarr;
          </button>
        </div>
      </div>

      {/* Modal Keyframe Animations */}
      <style>{`
        @keyframes cobblefunFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes cobblefunScaleIn {
          from { transform: scale(0.92); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
