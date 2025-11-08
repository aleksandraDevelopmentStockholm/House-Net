"use client";

import { Theme } from "@radix-ui/themes";
import { useTheme } from "@/contexts/ThemeContext";
import { Providers } from "./providers";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <Theme
      appearance={theme}
      accentColor="grass"
      scaling="110%"
      panelBackground="solid"
      radius="full"
      hasBackground={true}
    >
      <Providers>{children}</Providers>
    </Theme>
  );
}
