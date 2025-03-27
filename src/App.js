import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AiAssistant from "./components/AIAssistant";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Navbar */}
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        toggleSidebar={toggleSidebar}
      />

      {/* Sidebar (condicional) */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Aquí puedes colocar el contenido de tu Landing Page */}
      <div className="main-content">
        <h1>Welcome to MarielaAI Website</h1>
        <p>This is your landing page content...</p>

        {/* AI Assistant */}
        <AiAssistant />
      </div>
    </div>
  );
}

export default App;
