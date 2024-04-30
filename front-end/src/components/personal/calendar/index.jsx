import React, {useEffect, useState, useRef} from 'react';
import {CloseOutlined} from '@ant-design/icons';

import dayjs from 'dayjs';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';


import { Calendar } from "antd";

import './style.css';

// zrobic popover z chmurka, moze uzyc timeline

function CalendarComponent () {
    const [value, setValue] = useState(() => dayjs(new Date().toJSON().slice(0, 10)));
    const [show, setShow] = useState(false);
    const [event, setEvent] = useState('');
    let [currentEvents, setCurrentEvents] = useState({});

    const inputRef = useRef(null);

    const handleClose = () => setShow(false);
    const updateEvent = (e) => setEvent(e.target.value);

    const getCalendar = () => {
        fetch('/api/getCalendar/' + "k@f.com/" + value.format("YYYY-MM-DD"), {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(response => setCurrentEvents(currentEvents = response));
    };

    const updateCalendar = () => {
        fetch('/api/calendar', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: "k@f.com",
                date: value.format("YYYY-MM-DD"),
                info: event
            })
        })

        inputRef.current.value = "";
    };

    const removeEvent = (id) => {
        fetch('/api/deleteEvent', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: "k@f.com",
                id,
            })
        })
            .then(response => response.json());
    }


    useEffect(() => {
        getCalendar();
    }, [value])

    const onSelect = (newValue) => {
        setValue(newValue);
        setShow(true)
    };

    return (
        <div
            className="dairy-container top-0 w-full bg-gray-900"
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1616198814651-e71f960c3180?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat"
            }}>

            <div className="data-container">
                <Calendar
                    value={value}
                    onSelect={onSelect}
                    fullscreen={false}
                />
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{value.format("YYYY-MM-DD")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {currentEvents.length > 0 && currentEvents.map((item) =>
                    <ListGroup.Item key={item.id} id = {item.id} action>
                        {item.information}
                        <CloseOutlined onClick={() => removeEvent(item.id)} style={{fontSize: '15px', color: 'red'}}/>
                    </ListGroup.Item>
                    )}
                </Modal.Body>
                <Form.Control className="input-event" size="sm" type="text" placeholder="Event" ref={inputRef} onChange={updateEvent}/>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={updateCalendar}>Add</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CalendarComponent