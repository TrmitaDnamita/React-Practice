import { useState } from 'react'

import { Board } from './components/Board.jsx'
import { ResetButton } from './components/ResetButton.jsx'
import { WinModal } from './components/WinModal.jsx'

import { PLAYERS_STATUS, TURNS } from './constants.js'
import { UpdateGame, UpdateTurn } from './logic/board.js'

import './styles/App.css'

export function App() {  
  const [board, boardState] = useState(Array(9).fill(TURNS.EMPTY));
  const [turn, turnState] = useState(TURNS.X);
  const [emptyBoard, emptyBoardState] = useState(true);
  const [winnerState, winnerStateCheck] = useState(PLAYERS_STATUS.SKIP);
  
  const updateBoard = (index = null) => {
    if (board[index] !== TURNS.EMPTY || winnerState !== PLAYERS_STATUS.SKIP) return;
    if (emptyBoard) emptyBoardState(false);
    
    const newBoard = [...board];
    newBoard[index] = turn;
    
    boardState(newBoard);
    updateTurnState(turn);
    winnerStateCheck( UpdateGame(newBoard) );
  };
  
  const resetBoard = () => {
    boardState(Array(9).fill(TURNS.EMPTY));
    turnState(TURNS.X);
    emptyBoardState(true);
    winnerStateCheck(PLAYERS_STATUS.SKIP);
  };
  
  const updateTurnState = (turn) => { 
    turnState( UpdateTurn(turn) ); 
  };
  
  return (
    <main className='board'>
      <h1 className='game-title'>Tic Tac Toe</h1> {/* TODO: add some cool animation of each word falling */}
      <section className='board-grid'>
        <Board turn={turn} board={board} 
          updateBoard={updateBoard} updateTurn={updateTurnState}
        />
      </section>
      <>
        <ResetButton isBoardEmpty={emptyBoard} resetBoard={resetBoard}/>
      </>
      <>
        <WinModal winState={winnerState} resetBoard={resetBoard}/>
      </>
    </main>
  );
};
