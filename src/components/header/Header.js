import React from 'react';
import logo from '../../assets/image.png';
import { FaSearch, FaUser, FaSignOutAlt } from 'react-icons/fa';
import cssDefault from './Header.module.css';
import cssLoggedIn from './LoggedInHeader.module.css';

function Header({ onLoginClick, onLogoClick, isLoggedIn, onProfileClick, onLogoutClick, userRole }) {
  const cssHeader = isLoggedIn ? cssLoggedIn : cssDefault;

  return (
    <header className={cssHeader.header}>
      <div className={cssHeader.logo} onClick={onLogoClick}>
        {isLoggedIn ? (
          <span className={cssHeader.userRole}>{userRole}</span>
        ) : (
          <img src={logo} alt="Logo" />
        )}
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
          <>
            <button onClick={onProfileClick} className={cssHeader.profileButton}>
              <FaUser className={cssHeader.profileIcon} />
            </button>
            <button onClick={onLogoutClick} className={cssHeader.logoutButton}>
              <FaSignOutAlt className={cssHeader.logoutIcon} />
              Гарах
            </button>
          </>
        ) : (
          <button onClick={onLoginClick} className={cssHeader.loginButton}>
            Нэвтрэх
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
