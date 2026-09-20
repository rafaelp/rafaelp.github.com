"use client";

import { useEffect, useState } from "react";

export type Theme = "system" | "light" | "dark";

const ORDER: Theme[] = ["system", "light", "dark"];

const LABEL: Record<Theme, string> = {
  system: "sistema",
  light: "claro",
  dark: "escuro",
};

export const THEME_STORAGE_KEY = "tema";

function apply(theme: Theme) {
  const root = document.documentElement;
  if (theme === "system") {
    delete root.dataset.theme;
  } else {
    root.dataset.theme = theme;
  }
  try {
    if (theme === "system") {
      localStorage.removeItem(THEME_STORAGE_KEY);
    } else {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    }
  } catch {
    // Navegação privada ou storage bloqueado: o tema vale só para esta página.
  }
}

export function ThemeToggle() {
  // O ícone certo já vem do CSS, via data-theme no <html>. Este estado existe
  // só para o rótulo acessível, então começa indefinido e se acerta na montagem.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    setTheme(current === "light" || current === "dark" ? current : "system");
  }, []);

  const next = ORDER[(ORDER.indexOf(theme ?? "system") + 1) % ORDER.length];

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => {
        apply(next);
        setTheme(next);
      }}
      aria-label={
        theme
          ? `Tema: ${LABEL[theme]}. Mudar para ${LABEL[next]}.`
          : "Alternar tema"
      }
      title={theme ? `Tema: ${LABEL[theme]}` : "Alternar tema"}
    >
      <svg className="theme-icon-system" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2.5" y="4" width="19" height="12.5" rx="2" />
        <path d="M8.5 20.5h7" />
      </svg>
      <svg className="theme-icon-light" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7" />
      </svg>
      <svg className="theme-icon-dark" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 14.3A8.8 8.8 0 0 1 9.7 3.5a8.8 8.8 0 1 0 10.8 10.8Z" />
      </svg>
    </button>
  );
}
