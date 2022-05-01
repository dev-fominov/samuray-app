import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPost} from './redux/state';
import { StateType } from './Types';

export const renderTree = (state: StateType) => {
  ReactDOM.render(
      <App 
        state={state} 
        addPost={addPost}
        updateNewPost={updateNewPost}
        />,
    document.getElementById('root')
  );
}

