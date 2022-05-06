import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import s from './App.module.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/page/Dialogs/Dialogs';
import Profile from './components/page/Profile/Profile';
import { StoreType } from './Types';


type AppStoreType = {
  store: StoreType
}

function App(props: AppStoreType) {
  const state = props.store.getState()
  return (
    <BrowserRouter>
      <div className={s.App}>
        <Header />
        <div className={s.contentApp}>
          <Navbar />
          <div className={s.rightContent}>
            <Route path='/dialogs' render={()=> <Dialogs state={state.dialogsPage} />}/>
            <Route path='/profile' render={()=> <Profile state={state.profilePage} dispath={props.store.dispatch.bind(props.store)} addPost={props.store.addPost.bind(props.store)} updateNewPost={props.store.updateNewPost.bind(props.store)}  />}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
