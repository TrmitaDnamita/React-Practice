import { useEffect, useState } from 'react';
import { FOLLOWER_TYPE } from '../Constants.jsx';

import '../styles/Follower.css'

export function Follower ({
	mousePos = { x: 0, y: 0 }, 
	followerType = FOLLOWER_TYPE.CIRCLE
}){
	const [clickEvent, setClickEvent] = useState(false);
	const [visible, setVisible] = useState(false);
	
	useEffect(() => {
		if (!visible) {
			setVisible(true);
			return;
		}
		
		const handleClick = () => {
			setClickEvent(true);
			setVisible(false);
			setTimeout(() => {
				setClickEvent(false);
			}, 300);
		};
		
		window.addEventListener('click', handleClick);
		return () => window.removeEventListener('click', handleClick);
	}, [visible]);
	
	const _className = `follower${clickEvent ? ' clicked' : ''}`;
	
	return (
		<figure
			className={_className}
			style={
				{
					left: mousePos.x - 12,
					top: mousePos.y - 12
				}
			}
		>
			{followerType}
		</figure>
	);
}