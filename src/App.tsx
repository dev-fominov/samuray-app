import React from 'react';

import { Route } from 'react-router-dom';
import s from './App.module.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/page/Dialogs/DialogsContainer';
import ProfileContainer from './components/page/Profile/ProfileContainer';
import UsersContainer from './components/page/Users/UsersContainer';

function App() {

  return (
    <div className={s.App}>
      <Header />
      <div className={s.contentApp}>
        <Navbar />
        <div className={s.rightContent}>
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />
        </div>
      </div>
    </div>
  );
}

export default App;
