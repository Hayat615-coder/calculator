import { useState } from "react";
import { themeStyles, useTheme } from "../ThemeContext";
import DisplayComponent from "./DisplayComponent";

const ButtonsComponent = () => {
  const [display, setDisplay] = useState<string>("");
  const { theme } = useTheme();
  const styles = themeStyles[theme];
  const BtnArray = [
    7,
    8,
    9,
    "DEL",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    "-",
    ".",
    0,
    "/",
    "X",
  ];
  const handlePress = (value: number | string) => {
    if (value === "DEL") {
      setDisplay((prev) => prev.slice(0, -1));
    } else if (value === "x") {
      setDisplay((prev) => prev + "*");
    } else {
      setDisplay((prev) => prev + value);
    }
  };
  const resetPress = () => {
    setDisplay("");
  };
  const handleCalculate = () => {
    try {
      if (!display) return;
      const sanitized = display.replace(/X/g, "*");
      const result = Function(`"use strict"; return (${sanitized})`)();
      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <DisplayComponent value={display} />
      <div className={`${styles.panel} grid grid-cols-4 gap-6 rounded-lg p-6`}>
        {BtnArray.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => handlePress(item)}
            className={`rounded-lg p-3 text-xl cursor-pointer font-bold transition hover:brightness-110 ${
              item === "DEL"
                ? `${styles.accent.bg} ${styles.accent.text} ${styles.accent.shadow ?? ""}`
                : `${styles.key.bg} ${styles.key.text} ${styles.key.shadow ?? ""}`
            }`}
          >
            {item}
          </button>
        ))}

        <button
          type="button"
          onClick={resetPress}
          className={`col-span-2 rounded-lg p-2 ${styles.accent.bg} ${styles.accent.text}`}
        >
          RESET
        </button>
        <button
          type="button"
          onClick={handleCalculate}
          className={`col-span-2 rounded-lg p-2 text-2xl ${styles.equals.bg} ${styles.equals.text}`}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default ButtonsComponent;
