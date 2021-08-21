
import React from 'react'

export default Chess;

function Chess() {
    return(<Board />)
  }

  function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  

/* let's set up an array of squares */ 
 //   const arrayOfSquares = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'k' ];



  class Board extends React.Component {



    constructor(props){
        super(props);
        this.state = {
             squares: Array(8).fill("a"),
         xIsNext: true };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'x' : 'o';
        this.setState({squares: squares, xIsNext: !this.state.xIsNext});
    }

    renderSquare(i) {
      return <Square value={this.state.squares[i]} 
      onClick={() => this.handleClick(i)}
      />;
    }
  
    render() {
      const status = 'Player Move: White. Selected Piece: ';
  
      return (
        <div>
          <div className="status">{status}</div>

          <div className="board-row">
            {this.renderSquare("r")}
            {this.renderSquare("n")}
            {this.renderSquare("b")}
            {this.renderSquare("q")}
            {this.renderSquare("k")}
            {this.renderSquare("b")}
            {this.renderSquare("n")}
            {this.renderSquare("r")}
          </div>

          <div className="board-row">
            {this.renderSquare("p")}
            {this.renderSquare("p")}
            {this.renderSquare("p")}
            {this.renderSquare("p")}
            {this.renderSquare("p")}
            {this.renderSquare("p")}
            {this.renderSquare("p")}
            {this.renderSquare("p")}
          </div>

          <div className="board-row">
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
          </div>

          <div className="board-row">
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
          </div>
          
          <div className="board-row">
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
          </div>

          <div className="board-row">
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
            {this.renderSquare(" ")}
          </div>

          <div className="board-row">
            {this.renderSquare("P")}
            {this.renderSquare("P")}
            {this.renderSquare("P")}
            {this.renderSquare("P")}
            {this.renderSquare("P")}
            {this.renderSquare("P")}
            {this.renderSquare("P")}
            {this.renderSquare("P")}
          </div>

          <div className="board-row">
            {this.renderSquare("R")}
            {this.renderSquare("N")}
            {this.renderSquare("B")}
            {this.renderSquare("Q")}
            {this.renderSquare("K")}
            {this.renderSquare("B")}
            {this.renderSquare("N")}
            {this.renderSquare("R")}
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