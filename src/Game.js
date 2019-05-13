import React from 'react';
import useInterval from './hooks/useInterval'

import generate from './logic/generate_board';

import Square from './Square'

const Game = ({ size }) => {
  if (size > 8 || size < 1) {
    throw new Error('Game size must be an integer, 0 to 8.')
  }
  const [ board, setBoard ] = React.useState(generate(size));
  const [ selected, selectSquare ] = React.useState([]);
  const [ completed, setCompleted ] = React.useState([]);
  const [ showingResult, setShowingResult ] = React.useState(false);
  
  useInterval(() => {
    next();
  }, showingResult ? 500 : null);
  
  const restart = () => {
    setBoard(generate(size));
    selectSquare([]);
    setCompleted([]);
  }

  const next = () => {
    selectSquare([]);
    setShowingResult(false);
  }

  const select = (id) => {
    if(showingResult) // Currently in timeout to show result. Ignore action
      return;
    if(selected.length === 0){
      selectSquare([id]);
    }
    else if(selected[0] !== id){
      // two elements selected, show both elements and check if they're equal
      if(board[id] === board[selected[0]]) {
        setCompleted([board[id], ...completed]);
        next();
      } else { // not a matching pair, set timeout to display result and make the player wait 500ms before next move
        selectSquare([id, ...selected]);
        setShowingResult(true);
      }
    }
  }
  
  const gameIsComplete = completed.length === size;
  const message = gameIsComplete
    ? <span>Congratulations! <button onClick={restart}>Restart?</button></span>
    : <span>Select squares and find matching elements!</span>

  return (
    <div>
      <h1>Memory</h1>
      <p>{message}</p>
      <div className="memory-grid">
        {board.map((element, index) => (
          <Square
            key={index}
            click={() => select(index)}
            selected={selected.includes(index)}
            completed={completed.includes(element)}
            element={element}
          />
        ))}
      </div>
    </div>
  );
}

export default Game;