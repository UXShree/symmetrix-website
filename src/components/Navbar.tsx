import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "15px 0",
    backgroundColor: "#282c34",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    borderRadius: "0 0 15px 15px",
    fontFamily: "Arial, sans-serif"
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: "8px",
    fontWeight: "bold",
    transition: "all 0.3s ease"
  };

  const activeStyle = {
    backgroundColor: "#20506bff",
    color: "white",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
  };

  return (
    <nav style={navStyle}>
      <NavLink to="/" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Home</NavLink>
      <NavLink to="/about" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>About</NavLink>
      <NavLink to="/services" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Services</NavLink>
      <NavLink to="/careers" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Careers</NavLink>
      <NavLink to="/contact" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Contact</NavLink>
    </nav>
  );
};

export default Navbar;
