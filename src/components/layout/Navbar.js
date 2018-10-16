import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper light-blue darken-4">
      <div className="container">
        <Link to="/" className="brand-logo center">
          NFL Hall of Fame Inductees
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
