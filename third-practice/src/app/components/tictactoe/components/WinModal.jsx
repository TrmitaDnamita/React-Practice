import { ThrowConfetti } from '../../../logic/utils.js';
import { PLAYERS_STATUS } from '../constants.js';

import { ResetButton } from './ResetButton.jsx';

import '../styles/WinModal.css';

export function WinModal ({ winState, resetGame }) {
	
	if (winState === PLAYERS_STATUS.SKIP) return null;
	
	const text = (winState === PLAYERS_STATUS.DRAW)
			? winState
			: <>
					<span className='winner'>{winState.at(0)}</span>
					{winState.slice(1)}
				</>
	;
	
	return (
		<section className='game-ended'>
			<div className='modal-window' onAnimationEnd={ThrowConfetti}>
				<h2 className='modal-title'>{text}</h2>
				<ResetButton resetGame={resetGame} />
			</div>
		</section>
	);
}