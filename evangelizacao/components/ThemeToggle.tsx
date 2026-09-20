"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "tema";
const DARK_QUERY = "(prefers-color-scheme: dark)";

const LABEL: Record<Theme, string> = { light: "claro", dark: "escuro" };

/** O tema em vigor: a escolha do leitor, ou o que o sistema pede. */
function effectiveTheme(): Theme {
  const chosen = document.documentElement.dataset.theme;
  if (chosen === "light" || chosen === "dark") return chosen;
  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
}

export function ThemeToggle() {
  // O ícone certo já vem do CSS, a partir do data-theme no <html> e do
  // prefers-color-scheme. Este estado existe só para o rótulo acessível, então
  // começa indefinido e se acerta na montagem.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(effectiveTheme());

    // Enquanto o leitor não escolheu nada, o site acompanha o sistema — e o
    // rótulo precisa acompanhar junto.
    const media = window.matchMedia(DARK_QUERY);
    const sync = () => {
      if (!document.documentElement.dataset.theme) {
        setTheme(media.matches ? "dark" : "light");
      }
    };
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const next: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => {
        const target = effectiveTheme() === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = target;
        setTheme(target);
        try {
          localStorage.setItem(STORAGE_KEY, target);
        } catch {
          // Navegação privada ou storage bloqueado: vale só para esta visita.
        }
      }}
      aria-label={theme ? `Mudar para o modo ${LABEL[next]}` : "Alternar tema"}
      title={theme ? `Mudar para o modo ${LABEL[next]}` : "Alternar tema"}
    >
      <svg className="theme-icon-to-dark" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 14.3A8.8 8.8 0 0 1 9.7 3.5a8.8 8.8 0 1 0 10.8 10.8Z" />
      </svg>
      <svg className="theme-icon-to-light" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7" />
      </svg>
    </button>
  );
}
