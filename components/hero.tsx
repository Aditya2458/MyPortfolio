"use client";

import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { useEffect, useRef } from "react";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";

const STACK = [
  { label: "Python",         color: "#3b82f6" },
  { label: "FastAPI",        color: "#10b981" },
  { label: "Django",         color: "#84cc16" },
  { label: "Docker",         color: "#0ea5e9" },
  { label: "GitHub Actions", color: "#a78bfa" },
  { label: "WebSockets",     color: "#f59e0b" },
  { label: "Redis",          color: "#ef4444" },
  { label: "MySQL",          color: "#06b6d4" },
  { label: "Pytest",         color: "#c084fc" },
  { label: "REST APIs",      color: "#34d399" },
  { label: "Microservices",  color: "#fb923c" },
  { label: "CI/CD",          color: "#818cf8" },
];

export const Hero = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // Clone items for seamless loop
    const clone = track.innerHTML;
    track.innerHTML += clone;
  }, []);

  return (
    <div className="pb-20 pt-36">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.8; }
          100% { transform: scale(2.8); opacity: 0;   }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .h-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: rgba(139,92,246,0.9);
          display: inline-flex;
          align-items: center;
          gap: 10px;
          animation: fadeUp 0.5s ease both 0.1s;
          opacity: 0;
        }
        .h-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #22c55e;
          position: relative; flex-shrink: 0;
        }
        .h-dot::after {
          content: '';
          position: absolute; inset: 0;
          border-radius: 50%;
          background: #22c55e;
          animation: pulse-ring 2s ease-out infinite;
        }

        .h-name {
          font-size: clamp(36px, 6vw, 72px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: #fff;
          white-space: nowrap;
          animation: fadeUp 0.5s ease both 0.25s;
          opacity: 0;
          text-align: center;
        }
        .h-name-accent {
          background: linear-gradient(90deg, #a78bfa 0%, #60a5fa 50%, #a78bfa 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeUp 0.5s ease both 0.25s;
          opacity: 0;
        }

        .h-divider {
          width: 40px; height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, #a78bfa, #60a5fa);
          animation: fadeUp 0.5s ease both 0.4s;
          opacity: 0;
        }

        .h-tagline {
          animation: fadeUp 0.5s ease both 0.5s;
          opacity: 0;
        }

        /* Marquee strip */
        .h-marquee-outer {
          width: 100%;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
          animation: fadeUp 0.5s ease both 0.65s;
          opacity: 0;
        }
        .h-marquee-track {
          display: flex;
          gap: 10px;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .h-marquee-track:hover { animation-play-state: paused; }
        .h-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.04em;
          white-space: nowrap;
          background: rgba(15, 15, 30, 0.7);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(6px);
          color: rgba(226,232,240,0.85);
          transition: border-color 0.2s, background 0.2s;
        }
        .h-pill:hover {
          background: rgba(25,25,50,0.9);
        }
        .h-pill-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .h-cta {
          animation: fadeUp 0.5s ease both 0.8s;
          opacity: 0;
        }
      `}</style>

      {/* Spotlights */}
      <div>
        <Spotlight className="-left-10 -top-40 h-screen md:-left-32 md:-top-20" fill="white" />
        <Spotlight className="left-full top-10 h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid bg */}
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex w-full max-w-[89vw] flex-col items-center justify-center gap-5 md:max-w-2xl lg:max-w-[60vw]">

          {/* Eyebrow */}
          <p className="h-eyebrow">
            <span className="h-dot" />
            Backend Engineer &nbsp;·&nbsp; Open to work
          </p>

          {/* Name — single line */}
          <h1 className="h-name">
            Hi, I&apos;m{" "}
            <span className="h-name-accent">{links.ownerName}</span>
          </h1>

          {/* Divider */}
          <div className="h-divider" />

          {/* Tagline */}
          <div className="h-tagline w-full">
            <TextGenerateEffect
              className="text-center text-[18px] font-medium leading-snug md:text-[22px] lg:text-[26px]"
              words="I build APIs that scale, systems that ship, and backends that never quit."
            />
          </div>

          {/* ✨ Animated tech stack marquee */}
          <div className="h-marquee-outer py-1">
            <div className="h-marquee-track" ref={trackRef}>
              {STACK.map((s) => (
                <span key={s.label} className="h-pill">
                  <span className="h-pill-dot" style={{ background: s.color, boxShadow: `0 0 6px ${s.color}` }} />
                  {s.label}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="h-cta mt-2">
            <Link href="#about">
              <MagicButton
                title="See my work"
                icon={<FaLocationArrow />}
                position="right"
                asChild
              />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};