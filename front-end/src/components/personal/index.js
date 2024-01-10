import React from 'react';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import Diary from './diary';
import Movie from './movie';
import Calendar from './calendar';
import List from './list';

function Personal () {

    return (
        <div className='container-main'>
            <div className ='menu'>menu</div>
            <div className='main'><Diary/></div>

        </div>
        // <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        //     <Row>
        //         <Col sm={2}>
        //             <Nav variant="pills" className="flex-column">
        //                 <Nav.Item>
        //                     <Nav.Link eventKey="first">Calendar</Nav.Link>
        //                 </Nav.Item>
        //                 <Nav.Item>
        //                     <Nav.Link eventKey="second">Diary</Nav.Link>
        //                 </Nav.Item>
        //                 <Nav.Item>
        //                     <Nav.Link eventKey="third">Bucket List</Nav.Link>
        //                 </Nav.Item>
        //                 <Nav.Item>
        //                     <Nav.Link eventKey="fourth">Get random movie</Nav.Link>
        //                 </Nav.Item>
        //             </Nav>
        //         </Col>
        //         <Col sm={9}>
        //             <Tab.Content>
        //                 <Tab.Pane eventKey="first">
        //                     <Calendar/>
        //                 </Tab.Pane>
        //                 <Tab.Pane eventKey="second">
        //                     <Diary/>
        //                 </Tab.Pane>
        //                 <Tab.Pane eventKey="third">
        //                     <List/>
        //                 </Tab.Pane>
        //                 <Tab.Pane eventKey="fourth">
        //                     <Movie/>
        //                 </Tab.Pane>
        //             </Tab.Content>
        //         </Col>
        //     </Row>
        // </Tab.Container>

    )
}

export default Personal