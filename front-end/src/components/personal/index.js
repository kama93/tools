import React, {useEffect, useState} from 'react';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import Diary from './diary';
import Movie from './movie';
import CalendarComponent from './calendar';
import List from './list';

function Personal () {


    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">CALENDAR</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">DIARY</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">BUCKET LIST</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fourth">MOVIE IDEA</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <CalendarComponent/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Diary/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <List/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                            <Movie/>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default Personal