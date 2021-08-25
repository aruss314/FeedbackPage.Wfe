import * as React from 'react';
import { toast } from 'react-toastify';

import { WeatherApi } from '../apis/WeatherApi';

import logo from '../logo.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import RecentVictories from '../components/RecentVictoriesComponent';
import DisplayWinHistory from '../components/DisplayWinHistoryComponent';

import TicTacToe3x3Component from '../components/TicTacToe3x3Component';
import TestingComponent from '../components/TestingComponent'

import Chess from '../components/ChessComponent';

import PostPlayerScore from '../components/PostPlayerScoreComponent';
import DeletePWinHistoryRecordByID from '../components/DeleteWinHistoryRecordComponent';

import { DadJokeApi } from '../apis/DadJokeApi';



export default function MainContainer() {

    const [weather, setWeather] = React.useState([]);

    const [dadJoke, setDadJoke] = React.useState();

    async function getDadJoke() {

        //    if (dadJoke) { return; }

        const { success, data: joke, errors } = await DadJokeApi.getDadJoke();

        if (!success) {
            toast.error("There was an error.");
            return;
        }

        toast.success('Refreshed Dad joke data.');
        setDadJoke(joke);
    };

    /** business desire: 
     * if (there isnt already a dad joke),
     *   { call api and get dad joke;
     *     if( GetDadJoke.ApiResonse == false ) 
     *    {
     *         toast(error);
     *    }
     *        saveDadJoke();
     *   }
     * 
     * 
     *  //if ( we already have a dad joke) 
     *  //   { don't call api}
     * 
     * 
     * if () the api response is failure),
     *    { don't save the dad joke}
     * 
     * 
     */

    /** 
     * 
     * bool apiResponse = false;
     * 
     * if ( dadJokeCOunt.Count === undefined ) { getDadJoke() }
     * 
     * if ( dadJokeCount > 0 ) {  }
     * 
     *  if ( success == false ) { return { success, false, data: null, errors: e.message } }
     */

    async function onClick() {
        const { success, data } = await WeatherApi.GetWeather();
        if (success && data) {
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
                  <TestingComponent />
                </Col>
            </Row>

            <Row>
                <Col>
                    <DeletePWinHistoryRecordByID />
                </Col>    
            </Row>
            <Row>
                <Col xs={{ span: 12 }} style={{display:'flex', justifyContent:'center'}}>
                    <Button onClick={getDadJoke}>
                        Click here to get Dad Joke
                    </Button>
                </Col>
                <Col xs={{ span: 12 }} style={{display:'flex', justifyContent:'center'}}>
                    <p>{dadJoke}</p>
                </Col>
                {/* { <Col> */}
                       {/* <DisplayWinHistory />  */}
                {/* </Col> }  */}
            </Row>

            <Row>
                <Col>
                    <Chess />
                </Col>
            </Row>

            <Row>
                <Col xs={{ span: 12 }} style={{display:'flex', justifyContent:'center'}}>
                    <Button onClick={getDadJoke}>
                        Click here to get Dad Joke
                    </Button>
                </Col>
                <Col xs={{ span: 12 }} style={{display:'flex', justifyContent:'center'}}>
                    <p>{dadJoke}</p>
                </Col>
            </Row>

            <Row>
                <Col xs={{ span: 12 }}>
                    <RecentVictories />
                </Col>
            </Row>
            <Row>
                <Col>
                    <p> Post Player Score Component </p>
                    <PostPlayerScore />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button>
                        Display the 5 Highest Scores by all players
                    </Button>
                    <Button>
                        Display the 5 Most Recent Victories by all players
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button>
                        Display All Available Player Names
                    </Button>
                    <Button>
                        Display All Available Record ID's
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button>
                        Log In
                    </Button>
                    <Button>
                        Play Tic Tac Toe
                    </Button>
                    <Button>
                        Delete a Record
                    </Button>
                </Col>
            </Row>
            {/* <Row>
                <Col xs={{ span: 12 }} sm={{ span: 6 }}>
                    <Button
                        variant="primary"
                        onClick={onClick}>Get the weather</Button>
                </Col>
                {<Col xs={{ span: 12 }}>
                    {getFormattedWeather(weather)}
                </Col> }
            </Row> */}
        </>
    )
}

// function getFormattedWeather(weather) {
//     const formattedWeather = weather.map((i, x) => {
//         return (
//             <div id={x}>
//                 <Row>
//                     <Col>
//                         <h2>
//                             {`${i.date}`}
//                         </h2>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col>
//                         <h3>
//                             {`${i.temperatureC} C`}
//                         </h3>
//                     </Col>
//                     <Col>
//                         <h3>
//                             {`${i.temperatureF} F`}
//                         </h3>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col>
//                         <p>
//                             {`${i.summary}`}
//                         </p>
//                     </Col>
//                 </Row>
//             </div>
//         )
//     });
//     return (formattedWeather);
// }
