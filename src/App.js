import React from 'react';
import './style.css';
// import lab from '../api/lab.js';
import Main from './pages/Main.js';
export default function App() {
  const [rack, setRack] = React.useState('1');
  return (
    <div>
      <Main />
    </div>
  );
}
