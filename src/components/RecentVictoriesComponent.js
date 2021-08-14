import React, { useState } from 'react';

import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { WinHistoryApi } from '../apis/WinHistoryApi';

import { toast } from 'react-toastify';
import { IsConstructor } from 'es-abstract';
import DisplayWinHistory from './DisplayWinHistoryComponent';


export default function RecentVictories() {
    
    const [playerName, setPlayerName] = React.useState("");

    // const [weather, setWeather] = React.useState([]);

    const [winHistory, setWinHistory] = React.useState([]);

    async function onClick() {
        const { success, data } = await WinHistoryApi.GetRecentVictoriesByPlayerName({ playerName, count: 5 });
        if (success && data) {
            setWinHistory(data);
            toast.success('Refreshed Recent Victories data.');
            return;
        }
        toast.error('Error getting Recent Victories data.');
    }

    async function onChange(e) {
        setPlayerName(e.target.value);
    }

    return (
        <>
            <Row>
                <Col xs={{ span: 12 }}>
                    <p>Get a player's 5 most recent victories:  </p>
                    <InputGroup className="mb-3">
                        <FormControl
                            onChange={onChange}
                            placeholder="Player Name"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        
                        <Button id="button-addon2" onClick={onClick} >
                            Please Click Here.
                        </Button>
                    </InputGroup>
                </Col>
                <Col xs={{ span: 12 }}>
                    <ul>
                        {/* <li> Player Score </li>
                        <li> Time of Victory </li> */}
                    </ul>
                </Col>
            </Row>
            <DisplayWinHistory winHistoryData={winHistory} />
        </>);
}