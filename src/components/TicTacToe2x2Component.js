import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import ReactDOM from 'react-dom'

export default TicTacToe2x2Component;

function TicTacToe2x2Component() {
    return (
<Game2x2 />
    );
}

function Square2x2(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

/************************************************/

class Board2x2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(4).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();

        if (calculateWinner2x2(squares) || squares[i]) { return; }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return <Square2x2 value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />;
    }

    render() {
        //   const status = 'Next player: ' + ( this.state.xIsNext ? 'X' : 'O' );

        const winner = calculateWinner2x2(this.state.squares);

        let status;

        if (winner) { status = 'Winner: ' + winner; }

        else {
            status = 'Next Player: ' +
                (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                </div>

                <div className="board-row">
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
            </div>
        );
    }
}

/********************************************/

class Game2x2 extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board2x2 />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

/********************/

function calculateWinner2x2(squares) {
    const lines = [
        [0, 1],
        [0, 2],
        [0, 3],
        [1, 3],
        [2, 3],
        [1, 2]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b] = lines[i];
        if (squares[a] && squares[a] === squares[b]) {
            return squares[a];
        }
    }
    return null;
}

/************************ */
/** end of testing out TicTacToe 2x2 **/