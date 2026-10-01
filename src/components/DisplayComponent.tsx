import { themeStyles, useTheme } from "../ThemeContext";

type DisplayComponentProps = {
  value: string;
};

const DisplayComponent = ({ value }: DisplayComponentProps) => {
  const { theme } = useTheme();
  const styles = themeStyles[theme];

  return (
    <div className={`${styles.panel} rounded-lg`}>
      <h1
        className={`overflow-x-auto p-4 text-right text-3xl ${styles.foreground}`}
      >
        {value || "0"}
      </h1>
    </div>
  );
};

export default DisplayComponent;
