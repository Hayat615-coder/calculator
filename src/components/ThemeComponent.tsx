import { themeStyles, useTheme } from "../ThemeContext";

const ThemeComponent = () => {
  const { theme, setTheme } = useTheme();
  const styles = themeStyles[theme];
  const togglePosition = {
    1: "justify-start",
    2: "justify-center",
    3: "justify-end",
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 3 ? 1 : ((prev + 1) as 1 | 2 | 3)));
  };

  return (
    <header className={`mb-6 flex items-center justify-between ${styles.foreground}`}>
      <h1 className="text-2xl font-bold">calc</h1>
      <div className="flex items-end gap-4">
        <p className="text-xs font-bold tracking-widest">THEME</p>
        <div>
          <div className="mb-1 flex justify-around text-xs">
            {[1, 2, 3].map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={theme === option}
                onClick={() => setTheme(option as 1 | 2 | 3)}
                className="min-w-5 cursor-pointer"
              >
                {option}
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label="Change theme"
            onClick={toggleTheme}
            className={`${styles.panel} flex h-6 w-16 cursor-pointer items-center rounded-full p-1 ${togglePosition[theme]}`}
          >
            <span className={`${styles.toggleThumb} h-4 w-4 rounded-full`} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default ThemeComponent;
