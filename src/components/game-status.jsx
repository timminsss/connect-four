import gameStatusPlayerOne from './images/turn-background-red.svg'
import gameStatusPlayerTwo from './images/turn-background-yellow.svg'

import "./css/game-status.css";

const GameStatus = ( { winnerExists, playerTurn, timer, timerActive, onClick }) => {
  if (!winnerExists) {
    return (
      <div className="game">
        <img src={playerTurn === 1 ? gameStatusPlayerOne : gameStatusPlayerTwo}
              alt="game-status" className="status" />
        <div className="player-timer">
          <h5 className="fw-bold">PLAYER {playerTurn}</h5>
          <h1 className="fw-bold">{timer} s</h1>
        </div>
      </div>
    )
  } else {
    return (
      <div className="game-over">
          <h5 className="fw-bold pt-3">PLAYER {playerTurn}</h5>
          <h1 className="fw-bold">WINS</h1>
          <button type="button"
                  className="play-again-button fw-bold px-3 py-1"
                  onClick={onClick}>PLAY AGAIN</button>
      </div>
    )
  }
}

export default GameStatus;
