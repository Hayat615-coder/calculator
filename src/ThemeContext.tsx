import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

export type Theme = 1 | 2 | 3;
type ButtonStyle = {
  bg: string;
  text: string;
  shadow?: string;
};
type ThemeStyles = {
  page: string;
  foreground: string;
  panel: string;
  key: ButtonStyle;
  accent: ButtonStyle;
  equals: ButtonStyle;
  toggleThumb: string;
};

export const themeStyles: Record<Theme, ThemeStyles> = {
  1: {
    page: "bg-[hsl(222,26%,31%)]",
    foreground: "text-white",
    panel: "bg-[hsl(223,31%,20%)]",
    key: {
      bg: "bg-white",
      text: "text-[hsl(223,31%,20%)]",
      shadow: "shadow-[0_4px_0_hsl(28,16%,65%)]",
    },

    accent: {
      bg: "bg-[hsl(222,26%,31%)]",
      text: "text-white",
      shadow: "shadow-[0_4px_0_hsl(28,16%,65%)]",
    },

    equals: {
      bg: "bg-[hsl(25,98%,40%)]",
      text: "text-white",
      shadow: "shadow-[0_4px_0_hsl(6,70%,34%)]",
    },
    toggleThumb: "bg-[hsl(6,63%,50%)]",
  },
  2: {
    page: "bg-[hsl(0,0%,90%)]",
    foreground: "text-[hsl(60,10%,19%)]",
    panel: "bg-white",
    key: { bg: "bg-[hsl(45,7%,89%)]", text: "text-[hsl(60,10%,19%)]" },
    accent: { bg: "bg-[hsl(185,42%,37%)]", text: "text-white" },
    equals: { bg: "bg-[hsl(25,99%,40%)]", text: "text-white" },
    toggleThumb: "bg-[hsl(25,98%,40%)]",
  },
  3: {
    page: "bg-[hsl(268,75%,9%)]",
    foreground: "text-[hsl(52,100%,62%)]",
    panel: "bg-[hsl(268,71%,12%)]",
    key: {
      bg: "bg-[hsl(268,47%,21%)]",
      text: "text-[hsl(52,100%,62%)]",
      shadow: "shadow-[0_4px_0_hsl(281,89%,26%)]",
    },
    accent: { bg: "bg-[hsl(281,89%,26%)]", text: "text-white" },
    equals: { bg: "bg-[hsl(176,100%,44%)]", text: "text-[hsl(198,20%,13%)]" },
    toggleThumb: "bg-[hsl(176,100%,44%)]",
  },
};

type ThemeContextValue = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(1);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
