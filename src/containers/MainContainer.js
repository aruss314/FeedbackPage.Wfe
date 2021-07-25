import * as React from 'react';
import { toast } from 'react-toastify';

import {JobsApi} from '../apis/ExampleJobsApi';

import logo from '../logo.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
                        We're no strangers to love, 
                        <br /> you know the rules
                        <br /> and so do I
                    </p>
                </Col>
            </Row>
            <Row>
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

            </Row>
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
                We're no strangers to love, 
                <br /> you know the rules
                <br /> and so do I
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