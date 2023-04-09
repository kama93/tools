import React, {useEffect, useState} from 'react';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import './style.css';

function Calendar () {
    const [value, setValue] = React.useState(dayjs(new Date().toJSON().slice(0, 10)));
    const [show, setShow] = useState(false);
    const [event, setEvent] = useState('');

    const handleClose = () => setShow(false);
    const updateEvent = (e) => setEvent(e.target.value);
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
            .then(response => response.json())
            .then(response => console.log(response))
    };

    useEffect(() => {
        setShow(true)
        setValue(value);
    }, [value])

    return (
        <div
            className="dairy-container absolute top-0 w-full h-full bg-gray-900"
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
                        onChange={(newValue) => setValue(newValue)}
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
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.s
                </Modal.Body>
                <Form.Control className="input-event" size="sm" type="text" placeholder="Event" onChange={updateEvent}/>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={updateCalendar}>Add</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Calendar