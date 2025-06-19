import { useState, useEffect } from 'react';
import './App.css';

import { Follower } from './components/Follower.jsx';

function App() {
  const [enabled, setEnabled] = useState(false);
  const [mousePos, setMousePos] = useState({x: 0, y: 0});
	
	useEffect(() => {
		const handleMove = (event) => {
			setMousePos({x: event.clientX, y: event.clientY});
		};
		
		window.addEventListener('mousemove', handleMove);
		return () => window.removeEventListener('mousemove', handleMove);
	}, []);
  
  const handleClick = () => {
    setEnabled(!enabled);
  };
  
  return (
    <>
      <h3>Project 3</h3>
      <button onClick={handleClick} aria-pressed={enabled}>
        {enabled ? 'Disable' : 'Enable'}
      </button>
      
      {enabled && <Follower mousePos={mousePos} />}
    </>
  );
}

export default App;
