import React from 'react';
import logo from '../../assets/image.png';
import { FaSearch } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';  // Import the user icon for logged-in users
import cssHeader from './Header.module.css';

function Header({ onLoginClick, onLogoClick, isLoggedIn, onProfileClick }) {
  return (
    <header className={cssHeader.header}>
      <div className={cssHeader.logo} onClick={onLogoClick}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={cssHeader.searchContainer}>
        <div className={cssHeader.searchBox}>
          <input
            type="text"
            placeholder="Хайх..."
            className={cssHeader.searchInput}
          />
          <button type="submit" className={cssHeader.searchButton}>
            <FaSearch className={cssHeader.searchIcon} />
          </button>
        </div>
        {isLoggedIn ? (
          <button onClick={onProfileClick} className={cssHeader.profileButton}>
            <FaUser className={cssHeader.profileIcon}/>
          </button>
        ) : (
          <button onClick={onLoginClick} className={cssHeader.loginButton}>Нэвтрэх</button>
        )}
      </div>
    </header>
  );
}

export default Header;
