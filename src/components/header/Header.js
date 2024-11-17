import React from 'react';
import logo from '../../assets/image.png';
import { FaSearch, FaUser, FaSignOutAlt } from 'react-icons/fa';
import cssDefault from './Header.module.css';
import cssLoggedIn from './LoggedInHeader.module.css';

function Header({ onLoginClick, onLogoClick, isLoggedIn, onLogoutClick, userRole, onScoreClick, onViewScoresClick, onRegisterAthleteClick }) {
  const cssHeader = isLoggedIn ? cssLoggedIn : cssDefault;

  return (
    <header className={cssHeader.header}>
      <div className={cssHeader.logoContainer} onClick={onLogoClick}>
        {isLoggedIn ? (
          <span className={cssHeader.userRole}>{userRole}</span>
        ) : (
         <p>hi</p>
        )}
      </div>

      <div className={cssHeader.searchContainer}>
        <input
          type="text"
          placeholder="Хайх..."
          className={cssHeader.searchInput}
        />
        <button type="submit" className={cssHeader.searchButton}>
          <FaSearch className={cssHeader.searchIcon} />
        </button>
      </div>

      {/* Хэрэглэгчийн рольд суурилсан линкүүд */}
      {isLoggedIn && userRole === 'Coach' && (
        <div className={cssHeader.profileContainer}>
          <a href='#'><p onClick={onScoreClick}>Оноо оруулах</p></a>
          <a href='#'><p onClick={onViewScoresClick}>Оноо харах</p></a>
          <a href='#'><p onClick={onRegisterAthleteClick}>Тамирчин бүртгэх</p></a>
        </div>
      )}

      {isLoggedIn && userRole === 'Admin' && (
        <div className={cssHeader.profileContainer}>
          <a href='#'><p onClick={onScoreClick}>Оноо оруулах</p></a>
        </div>
      )}

      {/* Логин/Гарах товч */}
      <div className={cssHeader.footerContainer}>
        {isLoggedIn ? (
          <button onClick={onLogoutClick} className={cssHeader.logoutButton}>
            <FaSignOutAlt className={cssHeader.logoutIcon} />
            Гарах
          </button>
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
