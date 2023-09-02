import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export function Body() {
    const [count, setCount] = useState(0)

    function adjustCount(amount) {
        setCount(currentCount => {
            return currentCount + amount
        })
    }

    return (
        <>
            <h3>this is body with counter</h3>
            <Container>
                <Row>
                    <Col>
                        <Button variant="secondary" onClick={() => adjustCount(-1)}>-</Button>{' '}
                    </Col>
                    <Col>
                        <h2>{count}</h2>
                    </Col>
                    <Col>
                        <Button variant="secondary" onClick={() => adjustCount(1)}>+</Button>{' '}
                    </Col>
                </Row>
            </Container>
        </>
    );
}
