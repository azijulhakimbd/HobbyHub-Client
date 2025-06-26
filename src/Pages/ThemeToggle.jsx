import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or system preference
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  // Apply theme on mount and when theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      className="btn btn-sm btn-ghost flex items-center gap-2"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <MdDarkMode size={24} />
      ) : (
        <MdLightMode size={24} />
      )}
    </button>
  );
}
