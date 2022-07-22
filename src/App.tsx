import React from 'react';

import { Route, Routes } from 'react-router-dom';
import s from './App.module.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import { Navbar } from './components/Navbar/Navbar';
import DialogsContainer from './components/page/Dialogs/DialogsContainer';
import { Login } from './components/page/Login/Login';
import ProfileContainer from './components/page/Profile/ProfileContainer';
import UsersContainer from './components/page/Users/UsersContainer';

function App() {

  return (
    <div className={s.App}>
      <HeaderContainer />
      <div className={s.contentApp}>
        <Navbar />
        <div className={s.rightContent}>
          <Routes>
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/profile/*' element={<ProfileContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<Login />} />
          </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;
