import React, { useState } from 'react';
import Header from './components/header/Header'
import Home from './Home/Home';
import Login from './LoginForm/Login';
import Signup from './SignupForm/Signup';
import AthleticsJudging from './judge/AthleticsJudging';
import cssApp from'./App.css'

function App() {
  const [page, setPage] = useState('home');

  const handleLoginClick = () => {
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

  return (
    <div className={cssApp.appContainer}>
      <Header 
        onLoginClick={handleLoginClick} 
        onLogoClick={handleLogoClick} 
        onProfileClick={handleProfileClick} 
        isLoggedIn={false} 
        groupID ={1}
      />
      
      <main className={cssApp.mainContent}>
        {page === 'home' && <Home />}
        {page === 'login' && <Login onSignupClick={handleSignupClick}/>}
        {page === 'signup' && <Signup />}
        {page === 'athleticsJudging' && <AthleticsJudging />}
      </main>
    </div>
  );
}

export default App;
