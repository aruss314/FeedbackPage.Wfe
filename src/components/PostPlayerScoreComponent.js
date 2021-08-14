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


export default function PostPlayerNameAndScore() {

    const [playerName, setPlayerName] = React.useState("");
    const [playerScore, setPlayerScore] = React.useState(0);

    async function onClick() {
        // const { success, data } = await WinHistoryApi.GetRecentVictoriesByPlayerName({ playerName, count: 5 });     if (success && data) {         toast.success('Refreshed Post Player Name and Score data.');         return;     }
        toast.error('Error getting Post Player Name and Score data.');

    }

    async function onNameChange(e) {
        setPlayerName(e.target.value);
    }

    async function onScoreChange(e) {
        const value = Number.parseInt(e.target.value)
         if (Number.isInteger(value)){
                 setPlayerScore(value);
         }
    }

    return (
        <>
            <Row>
                <Col xs={{ span: 12 }}>
                    <p>----------------------------</p>
                    <p>Input a Player's Name  </p>
                    <InputGroup className="mb-3">
                        <FormControl
                            onChange={onNameChange}
                            placeholder="Player's Name"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                </Col>

                <Col xs={{ span: 12 }}>
                    <p>Input This Player's Score as a String:  </p>
                    <InputGroup className="mb-3">
                        <FormControl 
                            value={`${playerScore}`}  
                            onChange={onScoreChange}
                            
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button id="button-addon2" onClick={onClick} >
                        Click Here to Post Player's Name and Score.
                    </Button>
                </Col>

                <Col xs={{ span: 12 }}>
                    <p>----------------------------</p>
                </Col>
            </Row>
        </>);
}
