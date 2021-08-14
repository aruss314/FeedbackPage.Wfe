import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function DisplayWinHistory({ winHistoryData }) {
    const formatPlayer = winHistoryData.map((i, x) => {
        return (
            <div id={x}>
                <Row>
                    <Col>
                        <p>
                            {`Player Name: ${i.playerName}`}
                            <br />
                            {`ID: ${i.id}`}
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            {`Player Score: ${i.playerScore}`}
                            <br /><br />
                            {`Most Recent Victory: ${i.timeOfVictoryUtc}`}
                        </p>
                    </Col>
                </Row>
            </div>
        );
    });
    return (formatPlayer);
}