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


export default function DeletePWinHistoryRecordByID() {

    const [winHistoryRecordId, setWinHistoryRecordId] = React.useState("");

    async function onClick() {

        const { success, errors } = await WinHistoryApi.DeleteWinHistoryRecordById({ winHistoryRecordId });

        if (success) {
            toast.success("Successfully deleted this win history record.");
            setWinHistoryRecordId("");
            return;
        }

        toast.error(`An error occurred while attempting to delete this win history record: ${errors}`);

    }

    async function onIdChange(e) {
        const value = Number.parseInt(e.target.value)
        if (Number.isInteger(value)) {
            setWinHistoryRecordId(value);
        }
    }

    return (
        <>
            <Row>
                <Col xs={{ span: 12 }}>
                    <p>Input This Win History Record's Id:  </p>
                    <InputGroup className="mb-3">
                        <FormControl
                            value={`${winHistoryRecordId}`}
                            onChange={onIdChange}

                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button id="button-addon2" onClick={onClick} >
                        Click Here to delete this Win History Record.
                    </Button>
                </Col>

                <Col xs={{ span: 12 }}>
                    <p>----------------------------</p>
                </Col>
            </Row>
        </>);
}