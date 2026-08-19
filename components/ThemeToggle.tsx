"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {  LuSun } from "react-icons/lu";
import { BsFillMoonStarsFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="flex h-10 items-center justify-center gap-2 rounded-full border border-gray-300 bg-gray-100 px-4"
        aria-label="Toggle theme"
      >
        <BsFillMoonStarsFill size={20} className="text-indigo-600" />
        <span className="text-sm font-medium">Dark</span>
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="
        flex h-10 items-center justify-center gap-2
        rounded-full px-4
        border border-gray-300
        bg-gray-100
        text-slate-800
        transition-all duration-300
        hover:scale-105
        hover:bg-gray-300
        dark:border-slate-600
        dark:bg-slate-900
        dark:text-white
        dark:hover:bg-slate-700
         cursor-pointer
      "
    >
      {isDark ? (
        <LuSun size={20} className="text-amber-400" />
      ) : (
        <BsFillMoonStarsFill size={20} className="text-indigo-600" />
      )}
      <span className="text-sm font-medium">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
};

export default ThemeToggle;