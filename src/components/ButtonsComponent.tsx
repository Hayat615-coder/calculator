import { useState } from "react";
const ButtonsComponent = () => {
  const [display, setDisplay] = useState<string>("");
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
    <>
      <div className="flex flex-col gap-4 ">
        <div className="bg-[hsl(223,31%,20%)] rounded-lg">
          <h1 className="text-3xl text-right p-4 text-white">
            {display || "0"}
          </h1>
        </div>
        <div className="bg-[hsl(223,31%,20%)] grid gap-6 p-6 grid-cols-4 rounded-lg">
          {BtnArray.map((item) => (
            <button
              key={item}
              onClick={() => handlePress(item)}
              className={`p-3 rounded-lg text-xl font-bold transition-opacity hover:opacity-90 ${
                item === "DEL"
                  ? "bg-[hsl(176,100%,44%)] text-white"
                  : "bg-white text-[hsl(223,31%,20%)]"
              }`}
            >
              {item}
            </button>
          ))}

          <button
            onClick={resetPress}
            className="col-span-2 bg-[hsl(176,100%,44%)] text-white rounded-lg p-2"
          >
            RESET
          </button>
          <button
            onClick={handleCalculate}
            className="col-span-2 bg-[hsl(25,98%,40%)] text-white text-2xl p-2 rounded-lg"
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default ButtonsComponent;
