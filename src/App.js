import React, { useState } from 'react';
import Header from './components/header/Header'
import Home from './Home/Home';
import Login from './LoginForm/Login';
import Signup from './SignupForm/Signup';
import AthleticsJudging from './judge/AthleticsJudging';
import cssApp from'./App.module.css'
import './style.css'
import AthleteList from './AthleteList/AthleteList';

function App() {
  const [page, setPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(true);  // Хэрэглэгчийн нэвтрэх эсэх
  const [userRole, setUserRole] = useState('admin'); 
  const [isViewer, setIsViewer] = useState(true); 

  const handleLoginClick = () => {
    setUserRole('Coach');
    setPage('login');
  };

  const handleLogoClick = () => {
    setPage('home');
  };

  const handleSignupClick = () => {
    setPage('signup');
  };

  const handleProfileClick = () => {
    setPage('athleticsJudging');
  };
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setUserRole('Coach');
    setPage('home');
  };

  return (
    <div className={cssApp.appContainer}>
      <Header 
        onLoginClick={handleLoginClick} 
        onLogoClick={handleLogoClick} 
        onProfileClick={handleProfileClick} 
        onLogoutClick={handleLogoutClick} 
        onScoreClick={handleProfileClick}
        isLoggedIn={false} 
        userRole={userRole} 
      />
      
      <main className={isLoggedIn ? cssApp.mainContent : cssApp.mainContents}>
        {page === 'home' && <Home />}
        {page === 'login' && <Login onSignupClick={handleSignupClick}/>}
        {page === 'signup' && <Signup />}
        {page === 'athleticsJudging' && <AthleticsJudging />}
        {page === 'athleteList' && <AthleteList isViewer={isViewer} />}
      </main>
    </div>
  );
}

export default App;
