import { useState } from 'react'

import { Cell } from './components/Cell.jsx'
import { WinnerPOPUP } from './components/WinnerPOPUP.jsx'

import { PLAYERS_STATUS, TURNS, WINNER_COMBOS } from './constants.js'
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
    
    turnState( UpdateTurn(turn) );
    
    winnerStateCheck( UpdateGame(newBoard) );
  };
  
  const resetBoard = () => {
    boardState(Array(9).fill(TURNS.EMPTY));
    turnState(TURNS.X);
    winnerStateCheck(PLAYERS_STATUS.SKIP);
  };
  
  return (
    <main className='board'>
      
      <h1 className='game-title'>Tic Tac Toe</h1>
      
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Cell key={index} index={index} updateFunction={updateBoard} shouldBeFilled={true}> 
                {board[index]}
              </Cell>
            )
          })
        }
      </section>
      
      <section className='turn'>
        {[TURNS.X, TURNS.O].map((player) => (
            <Cell
              key={player}
              isSelected = {turn === player} 
              updateFunction={turn === player ? null : () => {
                const newTurn = UpdateTurn(turn);
                turnState( newTurn );
                return newTurn;
              }}
            >
              {player}
            </Cell>
        ))}
      </section>
      
      <section>
        <WinnerPOPUP winState={winnerState} resBoard={resetBoard}/>
      </section>
    </main>
  );
};
