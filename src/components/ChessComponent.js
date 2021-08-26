import { Button } from 'bootstrap';
import React from 'react'

import { toast } from 'react-toastify';

function Square({ onClick: onSquareClick, value }) {
  return (
    <button className="square" onClick={onSquareClick} >
      {value}
    </button>
  );
}

let currentlySelectedPiece = "";
let hasApieceBeenSelected = new Boolean(false);

class Board extends React.Component {

  constructor(props) {
    super(props);
  }

  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.handleSquareClick(i)} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>

        <div className="board-row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
        </div>

        <div className="board-row">
          {this.renderSquare(16)}
          {this.renderSquare(17)}
          {this.renderSquare(18)}
          {this.renderSquare(19)}
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
        </div>

        <div className="board-row">
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
          {this.renderSquare(27)}
          {this.renderSquare(28)}
          {this.renderSquare(29)}
          {this.renderSquare(30)}
          {this.renderSquare(31)}
        </div>

        <div className="board-row">
          {this.renderSquare(32)}
          {this.renderSquare(33)}
          {this.renderSquare(34)}
          {this.renderSquare(35)}
          {this.renderSquare(36)}
          {this.renderSquare(37)}
          {this.renderSquare(38)}
          {this.renderSquare(39)}
          </div>

          <div className="board-row">
          {this.renderSquare(40)}
          {this.renderSquare(41)}
          {this.renderSquare(42)}
          {this.renderSquare(43)}
          {this.renderSquare(44)}
          {this.renderSquare(45)}
          {this.renderSquare(46)}
          {this.renderSquare(47)}
        </div>

        <div className="board-row">
          {this.renderSquare(48)}
          {this.renderSquare(49)}
          {this.renderSquare(50)}
          {this.renderSquare(51)}
          {this.renderSquare(52)}
          {this.renderSquare(53)}
          {this.renderSquare(54)}
          {this.renderSquare(55)}
        </div>

        <div className="board-row">
          {this.renderSquare(56)}
          {this.renderSquare(57)}
          {this.renderSquare(58)}
          {this.renderSquare(59)}
          {this.renderSquare(60)}
          {this.renderSquare(61)}
          {this.renderSquare(62)}
          {this.renderSquare(63)}
        </div>
      </>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


class Chess extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: this.defaultBoard
    }
  }

  defaultBoard = [
    'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r',
    'v', 'v', 'v', 'v','v', 'v', 'v', 'v',
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    '^', '^', '^', '^','^', '^', '^', '^',
    'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'
     ]

  resetTheBoard = () => {
   // alert('board reset');
   toast.success("The board has been reset.");
    this.setState({
      squares: this.defaultBoard
    });
  }

  handleClick=(i) => {
    const squares = this.state.squares.slice();

    if (hasApieceBeenSelected == true) {
        squares[i] = currentlySelectedPiece;
        currentlySelectedPiece = null;
        hasApieceBeenSelected = false;
    }

    else {
        currentlySelectedPiece = squares[i];
        hasApieceBeenSelected = true;
        squares[i] = null;
    }

    this.setState({ squares: squares });
  }

  render() {
    const { squares } = this.state;
    return (
      <>
        <Board squares={squares} handleSquareClick={this.handleClick}  />

        <button
          onClick=  /* {() => alert('Resetting the board.')} */
          {this.resetTheBoard}
        >
          Click here to reset the board.
        </button>

      </>
    );
  }
}

export default Chess;