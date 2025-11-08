"use client";

import { useEffect } from "react";
import { initAmplitude } from "@/lib/amplitude";

export function ClientInit() {
  useEffect(() => {
    initAmplitude();
  }, []);

  return null;
}
