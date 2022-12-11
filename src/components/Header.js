import React from "react";

const Header = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="header">
      <ul className="ulofheader">
        <li className="pointer"></li>
        <li className="pointer">help</li>
        <li className="pointer">return</li>
        <button
          className="registrationbutton"
          onClick={() => openInNewTab("http://localhost:3000/login")}
        >
          Registration / Login
        </button>
      </ul>
    </div>
  );
};

export default Header;
