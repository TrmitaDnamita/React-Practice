import { useState } from 'react'
import { useEffect } from 'react'

import { ThrowConfetti } from '../../logic/utils.js'

import { Board } from './components/Board.jsx'
import { ResetButton } from './components/ResetButton.jsx'
import { WinModal } from './components/WinModal.jsx'

import { PLAYERS_STATUS, TURNS } from './constants.js'
import { UpdateGame, GetNextTurn } from './logic/board.js'
import { GetStoredItem, SaveState, ClearState } from '../../logic/utils.js'

import './TicTacToeGame.css'

export function TicTacToeGame () {
  
	const [board, boardState] = useState(
    GetStoredItem('board', Array(9).fill(TURNS.EMPTY))
  );
  const [turn, turnState] = useState(
    GetStoredItem('turn', TURNS.X)
  );
  const [emptyBoard, emptyBoardState] = useState(
    GetStoredItem('emptyBoard', true)
  );
  const [winnerState, winnerStateCheck] = useState(
    GetStoredItem('winnerState', PLAYERS_STATUS.SKIP)
  );
  
  const updateBoard = (index = null) => {
    if (board[index] !== TURNS.EMPTY || winnerState !== PLAYERS_STATUS.SKIP) return;
    let isBoardEmpty = emptyBoard ? false : emptyBoard;
    emptyBoardState(isBoardEmpty);
    
    const newBoard = [...board];
    newBoard[index] = turn;
    boardState(newBoard);
    
    const newTurn = updateTurn(turn, true);
    const newWinnerState = UpdateGame(newBoard);
    
    winnerStateCheck( newWinnerState );
    
    SaveState({
      'board': newBoard, 
      'turn': newTurn, 
      'emptyBoard': isBoardEmpty, 
      'winnerState': newWinnerState}
    );
  };
  
  const resetBoard = () => {
    boardState(Array(9).fill(TURNS.EMPTY));
    turnState(TURNS.X);
    emptyBoardState(true);
    winnerStateCheck(PLAYERS_STATUS.SKIP);
    
    ClearState([
      'board',
      'turn',
      'emptyBoard',
      'winnerState']
    );
  };
  
  const updateTurn = (turn, shouldReturn = false) => { 
    let nextTurn = GetNextTurn(turn);
    turnState( nextTurn );
    return nextTurn; 
  };
  
  return (
    <article className='board'>
      <h1 className='game-title'>Tic Tac Toe</h1> {/* TODO: add some cool animation of each word falling */}
      <section className='board-grid'>
        <Board turn={turn} board={board} 
          updateBoard={updateBoard} changeTurn={updateTurn}
        />
      </section>
      <>
        <ResetButton isBoardEmpty={emptyBoard} resetGame={resetBoard}/>
      </>
      <>
        <WinModal winState={winnerState} resetGame={resetBoard}/>
      </>
    </article>
  );
}