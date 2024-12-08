import React from "react";
import { FiSearch, FiSettings } from "react-icons/fi";
import { MdFilterList } from "react-icons/md";
import { AiOutlineBell } from "react-icons/ai";

const Header = () => {
  return (
    <header className="header">
      {/* Left Section */}
      <div className="header-left">
        {/* Logo */}
        <h1 className="logo">MORENT</h1>

        {/* Search Bar */}
        <div className="search-bar">
          <FiSearch size={20} className="icon-search" />
          <input
            type="text"
            placeholder="Search something here"
            className="search-input"
          />
          <button className="filter-button">
            <MdFilterList size={20} className="icon-filter" />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="header-right">
        <FiSettings size={20} className="icon" /> {/* Settings Icon */}
        <div className="notification">
          <AiOutlineBell size={20} className="icon" />
          <span className="notification-dot"></span>
        </div>
        <div className="profile">
          <div className="profile-placeholder"><img src="Profil.png"/></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
