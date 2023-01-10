import playerOne from './images/player-one.svg'
import playerTwo from './images/player-two.svg'

import "./css/score.css";

const Score = ({ player, playerOneScore, playerTwoScore }) => {
  return (
    <div>
      <img src={player === 1 ? playerOne : playerTwo}
          alt={player === 1 ? "player-one" : "player-two"}
          className={player === 1 ? "player-one" : "player-two"} />
      <div className={player === 1 ? "scoreboard-one pt-5" : "scoreboard-two pt-5"}>
        <h5 className="fw-bold">PLAYER {player}</h5>
        <h1 className="fw-bold">{player === 1 ? playerOneScore : playerTwoScore}</h1>
      </div>
    </div>

  )
}

export default Score;
