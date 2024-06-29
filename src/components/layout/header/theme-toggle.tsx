"use client";

import { useTheme } from "next-themes";
import { Button, buttonVariants } from "@/components/ui/button";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, theme, systemTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  console.log(theme);

  if (currentTheme === undefined) {
    return null;
  }

  return (
    <Button
      size="sm"
      className={buttonVariants({
        size: "sm",
        variant: "secondary",
      })}
      onClick={() => {
        currentTheme === "light" ? setTheme("dark") : setTheme("light");
      }}
    >
      <BiSolidSun className="h-[1.2rem] w-[1rem] scale-100 transition-none dark:scale-0" />
      <BiSolidMoon className="absolute h-[1.2rem] w-[1rem] scale-0 transition-none dark:scale-100" />
    </Button>
  );
}
