import gameBoard from './images/board-layer-white-large.svg'
import backgroundGameBoard from './images/board-layer-black-large.svg'

import "./css/game-board.css";

const GameBoard = ({ children }) => {
  return (
    <div>
      <img src={gameBoard} alt="gameboard"
            className="game-board"/>
      <img src={backgroundGameBoard} alt="gameboard"
            className="background-gameboard"/>
      <div className="container">
        {children}
      </div>

    </div>

  )
}

export default GameBoard;
