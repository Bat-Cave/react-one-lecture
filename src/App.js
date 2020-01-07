// App.js is the parent component of your React projects. All other components will be rendered through app in some way, either as direct children of App.js, or as children of App.js children components.
import React from 'react';
import './App.css';
import SmartComponent from './Components/SmartComponent';

function App() {
  return (
    <div className="App">
      <SmartComponent />
    </div>
  );
}

export default App;
