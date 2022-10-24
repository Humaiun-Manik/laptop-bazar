import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container text-center py-3">
      <h1>Confused Buyer</h1>
      <h2>
        Choose <span className="text-success">4</span> Laptop
      </h2>
    </div>
  );
};

export default Header;
