import { TURNS, PLAYERS_STATUS, WINNER_COMBOS } from "../constants.js";

export const UpdateGame = (board) => {
	for (const [a, b, c] of WINNER_COMBOS) {
		if ( board[a] !== TURNS.EMPTY &&
			board[a] === board[b] &&
			board[b] === board[c]
		) {
			const winner = board[a] === TURNS.X ? PLAYERS_STATUS.X : PLAYERS_STATUS.O;
			return winner;
		}
	}
	
	const playerCanWin = (player) => {
		return WINNER_COMBOS.some(([a,b,c]) => {
			const values = [board[a], board[b], board[c]];
			//checking if each player can still win through empty or same player cells.
			return values.filter(v => v === player || v === TURNS.EMPTY).length === 3 &&
				values.includes(TURNS.EMPTY);
		});
	};
	
	const xCanWin = playerCanWin(TURNS.X);
	const oCanWin = playerCanWin(TURNS.O);
	
	if (xCanWin || oCanWin) return PLAYERS_STATUS.SKIP;
	
	return PLAYERS_STATUS.DRAW;
};

export const GetNextTurn = (turn) => {
	const nextTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
	return nextTurn;
};