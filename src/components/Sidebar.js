import React from "react";
import "../styles/Sidebar.css";

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <h2>Sidebar</h2>
      <p>This is some placeholder text for the sidebar.</p>
      {/* Aquí luego irán las opciones que mencionaste. */}
    </div>
  );
}

export default Sidebar;
