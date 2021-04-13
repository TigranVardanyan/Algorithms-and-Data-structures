import React from 'react';
import HeaderMenu from './containers/header-menu/header-menu';
import './App.css';
// import MainContent from "./containers/main-content/main-content";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Algorithms And Data Structures</h2>
          <HeaderMenu/>
          {/*<MainContent/>*/}
      </header>
    </div>
  );
}

export default App;
