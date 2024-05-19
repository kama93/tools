import React, {useEffect, useRef, useState} from 'react';
import {CloseOutlined} from '@ant-design/icons';

import dayjs from 'dayjs';

import ListGroup from 'react-bootstrap/ListGroup';

import {Calendar, Modal, TimePicker} from 'antd';

import './style.css';
import {forEach} from "react-bootstrap/ElementChildren";

// zserver i nadpisywal jesli ta sama godzina- plus style na timeline
// nie mozna dodac zdarzenia w przeszlosci


function CalendarComponent () {
    const [value, setValue] = useState(() => dayjs(new Date().toJSON().slice(0, 10)));
    const [time, setTime] = useState();
    const [show, setShow] = useState(false);
    const [event, setEvent] = useState('');
    let [currentEvents, setCurrentEvents] = useState([]);

    const inputRef = useRef(null);
    const format = 'HH:mm';
    const currentDay = dayjs(new Date().toJSON().slice(0, 10)).format("YYYY-MM-DD");
    const regExp = /(\d{1,2})\:(\d{1,2})\:(\d{1,2})/;
    const currentTime = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;

    const updateEvent = (e) => setEvent(e.target.value);
    const updateTime = (time, timeString) => setTime(timeString);

    const getCalendar = () => {
        fetch('/api/getCalendar/' + "k@f.com/" + value.format("YYYY-MM-DD"), {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(response => {
                setCurrentEvents(currentEvents = response);
            })
    };

    const updateCalendar = async () => {
        await fetch('/api/calendar', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: "k@f.com",
                date: value.format("YYYY-MM-DD"),
                time,
                info: event
            })
        })

        inputRef.current.value = "";
        getCalendar();
    };

    const removeEvent = async (id) => {
        await fetch('/api/deleteEvent', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: "k@f.com",
                id,
            })
        })
            .then(response => response.json());

        getCalendar();
    }


    useEffect(() => {
        getCalendar();
    }, [value])

    const onSelect = (newValue) => {
        setValue(newValue);
        setShow(true)
    };

    function dateCellRender(value) {
        fetch('/api/getCalendar/' + "k@f.com/" + value.format("YYYY-MM-DD"), {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(response => {
                return (
                    <ul className="events">
                        {
                            response.map((item, index) => (
                                <li key={index}>
                                    <span className={'event-normal'}>●</span>
                                    {item.information}
                                </li>
                            ))
                        }
                    </ul>
                );
            });

    }


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
                    dateCellRender={dateCellRender}
                />
            </div>

            <Modal
                title={value.format("YYYY-MM-DD")}
                style={{ top: 20 }}
                visible={show}
                onOk={() => updateCalendar()}
                onCancel={() => setShow(!show)}
                wrapClassName="vertical-center-modal"
            >
                <hr/>
                {currentEvents.length > 0 && currentEvents.map((item) =>
                    <ListGroup.Item key={item.id} id={item.id} action className="listTimes" style={{opacity: value.format("YYYY-MM-DD") === currentDay && parseInt(item.save_time.replace(regExp, "$1$2$3")) > parseInt(currentTime.replace(regExp, "$1$2$3")) ? 1 : 0.5}}>
                        <p>{item.save_time.substring(0, 5)}</p>
                        <p>{item.information}</p>
                        {value.format("YYYY-MM-DD") === currentDay &&
                            parseInt(item.save_time.replace(regExp, "$1$2$3")) > parseInt(currentTime.replace(regExp, "$1$2$3")) &&
                            <CloseOutlined onClick={() => removeEvent(item.id)} style={{fontSize: '15px', color: 'red'}}/>}
                        </ListGroup.Item>
                )}
                <TimePicker format={format} onChange={updateTime}/>
                <input className="popup-input" type="text" id="event" size="30" onChange={updateEvent} ref={inputRef}/>
            </Modal>
        </div>
    )
}

export default CalendarComponent