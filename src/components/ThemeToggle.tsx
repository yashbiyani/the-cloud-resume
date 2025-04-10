
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Switch } from "./ui/switch";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Sun className="h-4 w-4 transition-all" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      />
      <Moon className="h-4 w-4 transition-all" />
    </div>
  );
}
