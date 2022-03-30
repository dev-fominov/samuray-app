import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-app">
        <Navbar />
        <div className="right-content">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default App;
