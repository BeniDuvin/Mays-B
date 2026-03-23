"use client";

import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";

type LoaderPhase = "visible" | "leaving" | "hidden";

export function IntroLoader() {
  const [phase, setPhase] = useState<LoaderPhase>("visible");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const leaveDelay = prefersReducedMotion ? 450 : 1650;
    const hideDelay = prefersReducedMotion ? 700 : 2300;

    const leaveTimer = window.setTimeout(() => {
      setPhase("leaving");
    }, leaveDelay);

    const hideTimer = window.setTimeout(() => {
      setPhase("hidden");
    }, hideDelay);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (phase === "hidden") {
    return null;
  }

  return (
    <LoadingScreen
      className={phase === "leaving" ? "pointer-events-none loader-exit" : ""}
    />
  );
}
