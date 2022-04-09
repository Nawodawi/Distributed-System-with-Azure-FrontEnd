import React from "react";
// Styles
import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
       <span> <a href="/" className="AppName">
          Student Management System
        </a></span>
        
        <span> <img className = "topImg" src="SMS.png" alt="" /></span>
        </div>
    </header>
  );
};

export default Header;
