import React, {useEffect, useState, useRef} from 'react';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

import './style.css';

function Calendar () {
    const [value, setValue] = React.useState(dayjs(new Date().toJSON().slice(0, 10)));
    const [show, setShow] = useState(false);
    const [isChange, setIsChange] = useState(false);
    const [event, setEvent] = useState('');
    const [currentEvents, setCurrentEvents] = useState({});

    const inputRef = useRef(null);

    const handleClose = () => setShow(false);
    const updateEvent = (e) => setEvent(e.target.value);

    const getCalendar = () => {
        fetch('/api/getCalendar/' + "k@f.com/" + value.format("YYYY-MM-DD"), {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(response => {
                setCurrentEvents(response)
            })
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
        setIsChange(!isChange);
    };

    const removeEvent = (e) => {
        fetch('/api/deleteEvent', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: "k@f.com",
                id: e.target.id,
            })
        })
            .then(response => response.json())
            .then(response => console.log(response))

        setIsChange(!isChange);
    }

    const getDate = (e) => {
        setValue(e);
        setShow(true)

    };

    useEffect(() => {
        getCalendar();
    }, [isChange, value])

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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                        value={value}
                        onChange={getDate}
                        dayOfWeekFormatter={(day) => `${day}.`}
                        slotProps={{ textField: { fullWidth: true } }}
                    />
                </LocalizationProvider>
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
                {/*<Modal.Body>*/}
                {/*    {currentEvents.length > 0 && currentEvents.map((item) =>*/}
                {/*    <ListGroup.Item key={item.id} id = {item.id} action onClick={removeEvent}>*/}
                {/*        {item.information}*/}
                {/*    </ListGroup.Item>*/}
                {/*    )}*/}
                {/*</Modal.Body>*/}
                <Form.Control className="input-event" size="sm" type="text" placeholder="Event" ref={inputRef} onChange={updateEvent}/>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={updateCalendar}>Add</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Calendar