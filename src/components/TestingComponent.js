
import { Button } from 'bootstrap';
import React from 'react'

function Square({ onClick: onSquareClick, value }) {
  return (
    <button className="square" onClick={onSquareClick} >
      {value}
    </button>
  );
}

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
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
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
        </div>
        <div className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
        </div>
      </div>
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


class TestingComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: this.defaultBoard
    }
  }

  defaultBoard = ['r', 'q', 'k', 'r',
    'v', 'v', 'v', 'v',
    '^', '^', '^', '^',
    'R', 'Q', 'K', 'R']

  resetTheBoard = () => {
    alert('board reset');
    this.setState({
      squares: this.defaultBoard
    });
  }

  handleClick=(i) => {
    const squares = this.state.squares.slice();
    squares[i] = 'x';
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

export default TestingComponent;