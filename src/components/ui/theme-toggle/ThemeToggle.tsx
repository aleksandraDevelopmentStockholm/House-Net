"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { IconButton } from "@radix-ui/themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <IconButton
      variant="ghost"
      size="3"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      style={{ cursor: "pointer" }}
    >
      {theme === "light" ? (
        <MoonIcon width="24" height="24" style={{ color: "var(--accent-9)" }} />
      ) : (
        <SunIcon width="24" height="24" style={{ color: "var(--accent-9)" }} />
      )}
    </IconButton>
  );
}
