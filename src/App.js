import './App.css';
import Wrapper from './components/wrapper.jsx';
import Score from './components/score.jsx';
import GameBoard from './components/game-board.jsx';
import GameStatus from './components/game-status.jsx';
import Token from './components/token.jsx';
import Selector from './components/selector.jsx';
import Header from './components/header.jsx';

import React, { useState } from 'react'
import { useTimer } from  "reactjs-countdown-hook";

const players = [ 1, 2 ]

const App = () => {
  const selectorValuesArray = [ null, null, null, null, null, null, null ];

  const [game, setGame] = useState({
    playerTurn: 1,
    playerOneScore: 0,
    playerTwoScore: 0,
    gridValues: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
      ],
    selectorValues: selectorValuesArray,
    winnerExists: false,
  });

  const handleSelectorHover = (column) => {
    const array = selectorValuesArray;
    array[column] = game.playerTurn;
    setGame({
      ...game,
      selectorValues: array
    });
  }

  const handleSelectorClick = (event, column) => {
    event.preventDefault();
    const array = game.gridValues;
    const row = !array[5][column] ? 5
              : !array[4][column] ? 4
              : !array[3][column] ? 3
              : !array[2][column] ? 2
              : !array[1][column] ? 1
              : !array[0][column] ? 0
              : null
    array[row][column] = game.playerTurn;
    if (array[row][column]) {
      setGame({
        ...game,
        playerTurn: game.playerTurn === 1 ? 2 : 1,
        gridValues: array
      });
      checkForWin(row, column);
    }
  }

   const checkForWin = (row, column) => {
    if (checkForWinHorizontal(row)
        || checkForWinVertical(row, column)
        || checkforWinDiagonalRight(row, column)
        || checkforWinDiagonalLeft(row, column)) {
      setGame({
        ...game,
        winnerExists: true
      });
      reset();
    }
  }

  const checkForWinHorizontal = (row) => {
    const four = [game.playerTurn, game.playerTurn, game.playerTurn, game.playerTurn];
    if (game.gridValues[row].toString().indexOf(four.toString()) > -1) {
      return true
    };
  }

  const checkForWinVertical = (row, column) => {
    if (row < 3) {
      if ((game.gridValues[row + 1][column] === game.playerTurn) &&
          (game.gridValues[row + 2][column] === game.playerTurn) &&
          (game.gridValues[row + 3][column] === game.playerTurn)) {
        return true
      }
    }
  }

  const checkforWinDiagonalRight = (row, column) => {
    const currRow = row;
    const currCol = column;

    let counterRight = 0;
    while (row < 6 && column < 7 && game.gridValues[row][column] === game.playerTurn) {
      counterRight += 1;
      row += 1;
      column += 1;
    }
    row = currRow;
    column = currCol;
    while (row >=0 && column >= 0 && game.gridValues[row][column] === game.playerTurn) {
      counterRight -= 1;
      row -= 1;
      column -= 1;
    }
    if (counterRight >= 3) {
      return true
    } else {
      return false
    }
  }

  const checkforWinDiagonalLeft = (row, column) => {
    const currRow = row;
    const currCol = column;

    let counterLeft = 0
    while (row < 6 && column >= 0 && game.gridValues[row][column] === game.playerTurn) {
      counterLeft += 1;
      row += 1;
      column -= 1;
    }
    row = currRow;
    column = currCol;
    while (row >= 0 && column < 7 && game.gridValues[row][column] === game.playerTurn) {
      counterLeft -= 1;
      row -= 1;
      column += 1;
    }
    if (counterLeft >= 3) {
      return true
    } else {
      return false
    }
  }

  const restartHandleClick = (event) => {
    event.preventDefault();
    setGame({
      ...game,
      playerTurn: 1,
      playerOneScore: 0,
      playerTwoScore: 0,
      gridValues: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
      ],
      winnerExists: false
  });
  }

  const playAgainHandleClick = (event) => {
    event.preventDefault();
    if (game.playerTurn === 1) {
      setGame({
        ...game,
        playerOneScore: game.playerOneScore + 1,
        gridValues: [
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null]
        ],
        winnerExists: false
      });
    } else {
      setGame({
        ...game,
        playerTwoScore: game.playerTwoScore + 1,
        gridValues: [
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null]
        ],
        winnerExists: false
    });
  }
  }

  const handleTimerFinish = () => {
    setGame({
      ...game,
      playerTurn: game.playerTurn === 1 ? 2 : 1,
    });
    reset();
  };

  const {
    isActive,
    counter,
    reset,
    } = useTimer(15, handleTimerFinish);


  return (
    <div className="App">
      <Wrapper>
        <Header
          onClickRestart={restartHandleClick}/>
        <Score
          player={players[0]}
          playerOneScore={game.playerOneScore}
          playerTwoScore={game.playerTwoScore} />
        <div className="selector-container">
          {
            game.selectorValues.map((column, i) => {
              return (
                  <Selector
                    column={column}
                    key={i}
                    onMouseOver={(event) => handleSelectorHover(i)}
                    onClick={(event) => handleSelectorClick(event, i)}/>
              )
            })
          }
        </div>
        <GameBoard>
          {
            game.gridValues.flat().map((slot, i) => {
              return (
                <Token
                  source={slot}
                  key={i}
                  place={i}/>
              )
            })
          }
        </GameBoard>
        <GameStatus
          winnerExists={game.winnerExists}
          playerTurn={game.playerTurn}
          timer={counter}
          timerActive={isActive}
          onClick={playAgainHandleClick}/>
      <Score
        player={players[1]}
        playerOneScore={game.playerOneScore}
        playerTwoScore={game.playerTwoScore} />
      </Wrapper>
    </div>
  );
}

export default App;
