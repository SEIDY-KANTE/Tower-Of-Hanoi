interface ThemeToggleProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle = ({ darkMode, toggleTheme }: ThemeToggleProps) => {
  return (
    <button onClick={toggleTheme} className="p-2">
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
