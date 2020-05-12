import React from 'react'
import {Alert, Row, Col} from 'react-bootstrap'

const ErrorAlert = () => {
    return (
        <Row>
            <Col md={{ span: 6, offset: 3 }}>
                <Alert variant="danger"> City not found, please try again</Alert>
            </Col>
        </Row>
    )
}

export default ErrorAlert
