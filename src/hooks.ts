import { useMemo, useState } from "react";

type Theme = "light" | "dark";
type ThemePreference = Theme | null;

const STORAGE_KEY = "tldr_theme";

export function getThemePreference(): ThemePreference {
  const value = localStorage.getItem(STORAGE_KEY);
  return value === "light" || value === "dark" ? value : null;
}

export function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function getEffectiveTheme(): Theme {
  return getThemePreference() ?? getSystemTheme();
}

export function setStoredTheme(theme: Theme): void {
  if (theme === "light" || theme === "dark") {
    localStorage.setItem(STORAGE_KEY, theme);
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
}

export function applyTheme(theme: Theme): void {
  const root = document.documentElement;

  if (theme === "light" || theme === "dark") {
    root.setAttribute("data-theme", theme);
  } else {
    root.removeAttribute("data-theme");
  }
}

export function initTheme(): void {
  applyTheme(getEffectiveTheme());
}

export type ThemeProps = {
  theme: Theme;
  textColour: string;
  toggleTheme: () => void;
};

export const useTheme = (): ThemeProps => {
  const [theme, setTheme] = useState<Theme>(getEffectiveTheme());

  applyTheme(theme);

  const textColour = useMemo(() => {
    return getComputedStyle(document.body).getPropertyValue("--text-color").trim();
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setStoredTheme(newTheme);
  };

  return { theme, textColour, toggleTheme };
};
