"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-bg-700 bg-backdrop text-text-primary backdrop-blur-md transition-all active:scale-90 sm:border-none sm:bg-transparent sm:backdrop-blur-none"
      >
        <span className="h-4 w-4" />
      </button>
    );
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-bg-700 bg-backdrop text-text-primary backdrop-blur-md transition-all hover:bg-bg-800 active:scale-90 sm:border-none sm:bg-transparent sm:backdrop-blur-none"
    >
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
      >
        <Sun className="h-4 w-4" />
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
      >
        <Moon className="h-4 w-4" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
