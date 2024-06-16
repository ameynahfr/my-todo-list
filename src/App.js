import { useState } from "react";
import { BsBrightnessHigh, BsBrightnessHighFill } from "react-icons/bs";
import Header from "./components/Header";
import Task from "./components/Task";

function App() {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`${theme === "light" ? "bg-white" : "bg-gray-800"} h-screen`}
    >
      <Header />
      <button
        onClick={handleThemeChange}
        className="fixed top-4 right-4 p-2 rounded-full bg-cyan-800 text-white flex items-center"
      >
        {theme === "light" ? <BsBrightnessHigh /> : <BsBrightnessHighFill />}
      </button>
      <Task />
    </div>
  );
}

export default App;
