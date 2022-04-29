import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import s from './App.module.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { DialogType } from './components/page/Dialogs/Dialog';
import Dialogs from './components/page/Dialogs/Dialogs';
import { PostType } from './components/page/Profile/MyPosts/Post/Post';
import Profile from './components/page/Profile/Profile';


export type PageType = {
  posts: PostType[]
  dialogsData: DialogType[]
}

function App(props: PageType) {
  return (
    <BrowserRouter>
      <div className={s.App}>
        <Header />
        <div className={s.contentApp}>
          <Navbar />
          <div className={s.rightContent}>
            <Route path='/dialogs' render={()=> <Dialogs dialogsData={props.dialogsData} />}/>
            <Route path='/profile' render={()=> <Profile posts={props.posts} />}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
