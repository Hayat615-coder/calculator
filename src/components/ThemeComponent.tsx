import { useState } from "react";
const ThemeComponent = () => {
  const [theme, setTheme] = useState(1);
  const ToogleHundler = () => {
    setTheme((prev) => (prev % 3) + 1);
  };
  const ThemeBg = {
    1: "bg-[hsl(222,26%,31%)] text-white",
    2: "bg-[hsl(0,0%,90%)] text-[hsl(60,10%,19%)]",
    3: "bg-[hsl(268,75%,9%)] text-[hsl(52,100%,62%)]",
  };
  const togglePosition = {
    1: "justify-start",
    2: "justify-center",
    3: "justify-end",
  };

  return (
    <>
      <body
        className={`min-h-screen flex items-center justify-center transition-colors duration-300 w-sm ${ThemeBg[theme]}`}
      >
        <div className="flex flex-row justify-end gap-3 mr-2 text-white">
          <span
            className={`cursor-pointer ${theme === 1 ? "opacity-100" : "opacity-60"}`}
            onClick={() => setTheme(1)}
          >
            1
          </span>
          <span
            className={`cursor-pointer ${theme === 2 ? "opacity-100" : "opacity-60"}`}
            onClick={() => setTheme(2)}
          >
            2
          </span>
          <span
            className={`cursor-pointer ${theme === 3 ? "opacity-100" : "opacity-60"}`}
            onClick={() => setTheme(3)}
          >
            3
          </span>
        </div>
        <div className="flex flex-row justify-between w-sm text-white">
          <h1 className="text-2xl">calc</h1>
          <div className="flex flex-row gap-4">
            <p>THEME</p>

            <div
              onClick={ToogleHundler}
              className={`bg-[hsl(223,31%,20%)] w-16 h-6 p-1 rounded-full flex items-center cursor-pointer ${togglePosition[theme]}`}
            >
              <div className="bg-[hsl(6,63%,50%)] w-4 h-4 rounded-full"></div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default ThemeComponent;
