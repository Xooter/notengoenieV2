import { useEffect, useState } from "react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

enum Themes {
  dark,
  light,
}

export const ThemeButton = () => {
  const [currentTheme, setCurrentTeam] = useState<Themes>(localStorage.theme);

  useEffect(() => {
    ApplyTheme();
  }, []);

  const ChangeTheme = () => {
    if (Themes.dark == localStorage.theme) {
      localStorage.theme = Themes.light;
    } else {
      localStorage.theme = Themes.dark;
    }

    ApplyTheme();
  };

  const ApplyTheme = () => {
    if (
      localStorage.theme == Themes.dark ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setCurrentTeam(Themes.dark);
    } else {
      document.documentElement.classList.remove("dark");
      setCurrentTeam(Themes.light);
    }
  };

  return (
    <button
      className="dark:border-primary-dark dark:bg-background-dark
      border-primary bg-primary
      transition-transform 
      hover:-translate-y-1
      shadow-md shadow-primary-dark/20
      p-2 border-2 rounded-full"
      onClick={ChangeTheme}
    >
      {currentTheme != Themes.dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};
