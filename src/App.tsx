import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import s from './App.module.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/page/Dialogs/Dialogs';
import Profile from './components/page/Profile/Profile';
import { StateType } from './Types';


type AppStateType = {
  state: StateType
  addPost: ()=>void
  updateNewPost: (newPostText: string)=>void
}

function App(props: AppStateType) {
  return (
    <BrowserRouter>
      <div className={s.App}>
        <Header />
        <div className={s.contentApp}>
          <Navbar />
          <div className={s.rightContent}>
            <Route path='/dialogs' render={()=> <Dialogs state={props.state.dialogsPage} />}/>
            <Route path='/profile' render={()=> <Profile state={props.state.profilePage} addPost={props.addPost} updateNewPost={props.updateNewPost}  />}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
