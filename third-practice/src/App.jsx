import { useState } from 'react'

import { Board } from './components/Board.jsx'
import { WinnerPOPUP } from './components/WinnerPOPUP.jsx'

import { PLAYERS_STATUS, TURNS } from './constants.js'
import { UpdateGame, UpdateTurn } from './logic/board.js'

import './styles/App.css'


export function App() {  
  const [board, boardState] = useState(Array(9).fill(TURNS.EMPTY));
  const [turn, turnState] = useState(TURNS.X);
  const [winnerState, winnerStateCheck] = useState(PLAYERS_STATUS.SKIP);
  
  const updateBoard = (index) => {
    if (board[index] !== TURNS.EMPTY || winnerState !== PLAYERS_STATUS.SKIP) return;
    
    const newBoard = [...board];
    newBoard[index] = turn;
    
    boardState(newBoard);
    
    updateTurnState(turn);
    
    winnerStateCheck( UpdateGame(newBoard) );
  };
  
  const resetBoard = () => {
    boardState(Array(9).fill(TURNS.EMPTY));
    turnState(TURNS.X);
    winnerStateCheck(PLAYERS_STATUS.SKIP);
  };
  
  const updateTurnState = (turn) => { 
    turnState( UpdateTurn(turn) ); 
  };
  
  return (
    <main className='board'>
      
      <h1 className='game-title'>Tic Tac Toe</h1>
      <section>
        <Board turn={turn} board={board} updateBoard={updateBoard} updateTurn={updateTurnState}/>
      </section>
      <section>
        <WinnerPOPUP winState={winnerState} resBoard={resetBoard}/>
      </section>
    </main>
  );
};
