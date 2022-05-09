import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/cryptocurrency.png";
import "./Sidebar.css";

import { MenuData } from "../../data/Data";

const Sidebar = () => {
  const menuItems = MenuData.map((item, index) => {
    return (
      <Link to={item.path} style={{ textDecoration: "none" }} key={index}>
        <div className="menu-button" key={index}>
          <item.icon />
          <h4>{item.text}</h4>
        </div>
      </Link>
    );
  });

  return (
    <div className="sidebar-container">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="sidebar-logo">
          <img src={Logo} alt="logo" className="logo" />
          <h2>Cryptoverse</h2>
        </div>
      </Link>

      {menuItems && <div className="sidebar-menu">{menuItems}</div>}

      <footer className="menu-footer">
        <h5>Cryptoverse</h5>
        <h5>All rights reserved &#174;</h5>
        <div className="menu-links">
          <Link
            to="/cryptocurrencie"
            style={{ textDecoration: "none", color: "grey" }}
          >
            Crypto
          </Link>
          <Link
            to="/exchange"
            style={{ textDecoration: "none", color: "grey" }}
          >
            Exchange
          </Link>
          <Link to="/news" style={{ textDecoration: "none", color: "grey" }}>
            News
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Sidebar;
