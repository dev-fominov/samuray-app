import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { PageType } from './App';
import { v1 } from 'uuid';
import { PostType } from './components/page/Profile/MyPosts/Post/Post';
import { DialogType } from './components/page/Dialogs/Dialog';
import { MessageType } from './components/page/Dialogs/Message';



let posts: any = [
  {id: v1(), message: 'First Message 1', likesCount: 12 },
  {id: v1(), message: 'First Message 2', likesCount: 14 },
  {id: v1(), message: 'First Message 3', likesCount: 16 },
  {id: v1(), message: 'First Message 4', likesCount: 18 }
]

let dialogsData: any = [
  { id: '1', name: 'Dmitriy' },
  { id: '2', name: 'Anastasiya' },
  { id: '3', name: 'Aleksandr' },
  { id: '4', name: 'Pavel' }
]
// let messagesData: MessageType[] = [
//   { id: '1', message: 'message 1' },
//   { id: '2', message: 'message 2' },
//   { id: '3', message: 'message 3' },
//   { id: '4', message: 'message 4' },
//   { id: '5', message: 'message 5' }
// ]

ReactDOM.render(
    <App posts={posts} dialogsData={dialogsData} />,
  document.getElementById('root')
);