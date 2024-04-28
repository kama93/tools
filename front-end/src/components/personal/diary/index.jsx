import React, {useEffect, useState} from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';

import './style.css';
import dayjs from "dayjs";

// zapisz co jakis czas, bez guzika
function Diary() {
    const today = new Date().toJSON().split("T")[0];
    let [diary, setDiary] = useState('');
    const [value, setValue] = useState(dayjs(new Date().toJSON().slice(0, 10)));

    let timeoutId = [];

    const handleChange = (e) => {
        const {value} = e.target;

        setDiary(value);

        if (timeoutId.length) {
            timeoutId.forEach(value => clearTimeout(value));
        }

        timeoutId.push(
            setTimeout(
            () => {
                fetch('/api/diary', {
                    method: 'put',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: "k@f.com",
                        text: value,
                        date: today
                    })
                })
        }, 3000)
    );


    }

    useEffect(() => {
        fetch('/api/getDiary/' + "k@f.com/" + value.format("YYYY-MM-DD"), {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(response => {
                if (response.length) {
                    setDiary(diary = response[0].add_text)
                } else setDiary(diary = '');
    });
    }, [value])

    return (
        <div
            className="dairy-container w-full h-full bg-gray-900"
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1619260288316-1dc66c32b718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat"
            }}>
            <div className = "diary-content">
                <div className= "date-container">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            className="date-element"
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                            formatDate={(date) => date.format('MM-DD-YYYY')}
                        />
                    </LocalizationProvider>
                </div>
                <div className= "textarea-container">
                <textarea type="text" id="name" onChange={handleChange} className="text-diary" required minLength="4"
                      cols="90" placeholder="My diary..." value={diary}
                      disabled={value.format("YYYY-MM-DD") !== today}/>
                </div>
            </div>
        </div>
    )
}

export default Diary;