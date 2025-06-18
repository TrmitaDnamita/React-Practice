export const TURNS = {
  X: '⛌',
  O: '◯',
  EMPTY: '-'
};

export const PLAYERS_STATUS = {
  X: '⛌ WON! 🥳🎉',
  O: '◯ WON! 🥳🎉',    
  DRAW: 'Match Ended in Draw! 🤡',
  SKIP: 'Continue'  
}

export const WINNER_COMBOS = [
  //rows
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  //columns
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  //diagonals
  [0, 4, 8], [2, 4, 6]
];