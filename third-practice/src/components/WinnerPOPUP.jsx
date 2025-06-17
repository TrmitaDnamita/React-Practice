import { ThrowConfetti } from '../logic/utils.js';
import { PLAYERS_STATUS } from '../constants.js';

import '../styles/WinnerModal.css';

/**@param {string} winState @param {function} resBoard */
export function WinnerPOPUP ({ winState, resBoard }) {
	console.log(winState);
	if (winState === PLAYERS_STATUS.SKIP) return null;
	
	const text = (winState === PLAYERS_STATUS.DRAW)
			? winState
			: <>
					<span className='winner'>{winState.at(0)}</span>
					{winState.slice(1)}
				</>
	;
	
	return (
		<div className='game-ended'>
			<section className='modal-replay' onAnimationEnd={ThrowConfetti}>
				<h2 className='modal-title'>
					{text}
				</h2>
				<footer>
					<button id="play-again" onClick={resBoard}>
						Play Again
					</button>
				</footer>
			</section>
		</div>
	);
}