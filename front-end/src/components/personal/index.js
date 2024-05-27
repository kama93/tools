import React from 'react';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import Diary from './diary';
import Movie from './movie';
import CalendarComponent from './calendar';
import List from './list';

import { useLocation } from "react-router-dom";

function Personal () {
    const location = useLocation();

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey={location.pathname}>
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="/personal/calendar" href={"/personal/calendar"}>CALENDAR</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/personal/diary" href={"/personal/diary"}>DIARY</Nav.Link>
                            </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/personal/list" href={"/personal/list"}>BUCKET LIST</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/personal/movie" href={"/personal/movie"}>MOVIE IDEA</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="/personal/calendar">
                            <CalendarComponent/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="/personal/diary">
                            <Diary/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="/personal/list">
                            <List/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="/personal/movie">
                            <Movie/>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default Personal