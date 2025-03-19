"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  console.log("theme", theme)

  return (
    theme === "dark" ?
      <Button
        className={"bg-transparent hover:bg-transparent"}
        onClick={() => setTheme("light")}>
        <Moon className="absolute h-[1.2rem] w-[1.2rem] text-white hover:rotate-90" />
      </Button >
      : <Button  className={"hover:bg-transparent bg-transparent"} onClick={() => setTheme("dark")}>
        <Sun className="absolute h-[1.2rem] w-[1.2rem] text-orange-400 dark:-rotate-90" />
      </Button>
  );
}
