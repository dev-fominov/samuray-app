import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import s from './App.module.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/page/Dialogs/Dialogs';
import Profile from './components/page/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className={s.App}>
        <Header />
        <div className={s.contentApp}>
          <Navbar />
          <div className={s.rightContent}>
            <Route path='/dialogs' component={Dialogs}/>
            <Route path='/profile' component={Profile}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
