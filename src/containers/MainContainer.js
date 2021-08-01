import * as React from 'react';
import { toast } from 'react-toastify';

import {JobsApi} from '../apis/ExampleJobsApi';

import logo from '../logo.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


// class ShoppingList extends React.Component {
//     render() {
//       return (
//         <div className="shopping-list">
//           <h1>Shopping List for {this.props.name}</h1>
//           <ul>
//             <li>Instagram</li>
//             <li>WhatsApp</li>
//             <li>Oculus</li>
//           </ul>
//         </div>
//       );
//     }
//   }



/* testing out the tic tac toe components */

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [
          {
            squares: Array(9).fill(null)
          }
        ],
        stepNumber: 0,
        xIsNext: true
      };
    }
  
    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        history: history.concat([
          {
            squares: squares
          }
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
    }
  
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });
    }
  
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
  
      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });
  
      let status;
      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }
  
      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
/** end of Testing out the tic tac toe components **/
/*************************************/
/*************************************/
/*************************************/
/* testing ticTacToe2x2 */

function Square2x2(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  
/************************************************/

  class Board2x2 extends React.Component {

    constructor(props){
        super(props);
        this.state = { squares: Array(4).fill(null),
         xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();

        if ( calculateWinner2x2(squares) || squares[i] )
           { return; }

        squares[i] = this.state.xIsNext ? 'X' : 'O' ;
        this.setState({squares: squares,
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
  
      const winner = calculateWinner2x2( this.state.squares );

      let status;

      if (winner) { status = 'Winner: ' + winner; }

      else { status = 'Next Player: ' +
            ( this.state.xIsNext ? 'X' : 'O' );
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





export default function MainContainer(){

    const [weather, setWeather] = React.useState([]);

    async function onClick () {
        const {success, data} = await JobsApi.GetWeather();
        if(success && data){
            setWeather(data);
            toast.success('Refreshed weather data.');
            return;
        }
        toast.error('Error getting weather data.');
    }

    return (
        <>
            <Row>
                <Col>
                    <img src={logo} className="App-logo" alt="logo" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                      testing out the tic-tac-toe component
                    </p>

                  {/* <ShoppingList /> */}

                  {/* <Square />
                  <Board /> */}
                  <Game />
                    <br />
                  <p>Testing out TicTacToe 2x2 </p>
                  <Game2x2 />

                  <p>
                  Games won by Andy:
                  </p>

                  <p>
                  High Score:

                  <br /><br />
                  Andy: 17
                  <br />Jimmy: 12
                  <br />Timmy: 09
                  <br />Tammy: 07 
                  <br />Hammy: 03
                  </p>

                </Col>
            </Row>
            {/**/ <Row>
                <Col xs={{span:12}} sm={{ span: 6}}>
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn React
                    </a>
                </Col>
                <Col xs={{span:12}} sm={{ span: 6}}>
                <Button
                variant="primary"
                onClick={onClick}>Get the weather</Button>
                </Col>
                <Col xs={{span:12}}>
                    {getFormattedWeather(weather)}
                </Col>

            </Row> }
            {/* <Row>
                <Col>
                    <GetDefaultContent />
                </Col>
            </Row> */}
        </>
    )
}

function getFormattedWeather(weather){
    const formattedWeather = weather.map((i,x) => {return(
        <div id={x}>
            <Row>
                <Col>
                    <h2>
                        {`${i.date}`}
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>
                        {`${i.temperatureC} C`}
                    </h3>
                </Col>
                <Col>
                    <h3>
                        {`${i.temperatureF} F`}
                    </h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        {`${i.summary}`}
                    </p>
                </Col>
            </Row>
        </div>
    )});
    return(formattedWeather);
}

function GetDefaultContent(){
    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                 Hello, World. Let's test the tic tac toe component.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
        </div>
    )
}