import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';
import Feed from './Feed';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app_body">
        <Sidebar/>
        <Feed/>
      </div>
    </div>
  );
}

export default App;
