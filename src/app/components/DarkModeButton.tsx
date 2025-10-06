import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      onClick={changeTheme}
      className="w-full cursor-pointer bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-700 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </Button>
  );
};

export default DarkModeButton;
