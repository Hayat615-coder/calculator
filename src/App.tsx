import "./App.css";
import ButtonsComponent from "./components/ButtonsComponent";
import ThemeComponent from "./components/ThemeComponent";
import { ThemeProvider, themeStyles, useTheme } from "./ThemeContext";

function Calculator() {
  const { theme } = useTheme();
  const styles = themeStyles[theme];

  return (
    <main className={`min-h-screen w-full ${styles.page} ${styles.foreground}`}>
      <div className="mx-auto flex min-h-screen w-full max-w-sm flex-col justify-center px-4 py-8">
        <ThemeComponent />
        <ButtonsComponent />
      </div>
    </main>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Calculator />
    </ThemeProvider>
  );
}

export default App;
