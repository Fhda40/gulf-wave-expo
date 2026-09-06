"use client";
import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const element = video.current;
    if (!preference.matches) element?.play().catch(() => setPlaying(false));
    const stop = () => { if (preference.matches) element?.pause(); };
    preference.addEventListener("change", stop);
    return () => preference.removeEventListener("change", stop);
  }, []);
  async function toggle() {
    const element = video.current;
    if (!element) return;
    if (element.paused) {
      try { await element.play(); } catch { setPlaying(false); }
    } else element.pause();
  }
  return <>
    <video ref={video} className="hero-film" muted loop playsInline preload="metadata"
      poster="/video/hero-poster.jpg" aria-hidden="true"
      onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
      <source src="/video/hero-event.mp4" type="video/mp4" />
    </video>
    <button type="button" className="video-toggle" onClick={toggle}
      aria-label={playing ? "إيقاف حركة خلفية الفيديو" : "تشغيل خلفية الفيديو"}>
      <span aria-hidden="true">{playing ? "Ⅱ" : "▷"}</span>
      {playing ? "إيقاف الفيديو" : "تشغيل الفيديو"}
    </button>
  </>;
}
