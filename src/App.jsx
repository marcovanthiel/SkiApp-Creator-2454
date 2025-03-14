import React from 'react';
import Mountain from './components/Mountain';
import SnowEffect from './components/SnowEffect';
import DateCheck from './components/DateCheck';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-400 to-blue-600">
      <SnowEffect />
      <Mountain />
      <DateCheck />
    </div>
  );
}

export default App;