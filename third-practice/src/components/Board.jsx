import { Cell } from './Cell.jsx';
import { TURNS } from '../constants.js';
import { UpdateTurn } from '../logic/board.js';

export function Board ({turn, board, updateBoard, updateTurn}) {
	const boardMap = board.map((_, index) => {
		return (
			<Cell key={index} index={index} updateFunction={updateBoard} shouldBeFilled={true}> 
				{board[index]}
			</Cell>
		)
	})
	
	const playerMap = [TURNS.X, TURNS.O].map((player) => (
		<Cell
			key={player}
			isSelected = {turn === player} 
			updateFunction={turn === player ? null : () => {
				updateTurn(turn)
			}}
		>
			{player}
		</Cell>
	))
	
	return (
		<>
			<section className='game'>
				{boardMap}
			</section>
			
			<section className='turn'>
				{playerMap}
			</section>
		</>
	)
};