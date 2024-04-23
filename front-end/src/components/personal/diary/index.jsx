import React, {useState, useRef, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import './style.css';
import dayjs from "dayjs";

// co jesli pusty dzxien, zmiana koloru textarea jak sie na nia najedzie,dodac linie, blokowac niedzisiejsze wpisy

function Diary() {
    const [diary, setDiary] = useState('');
    const [value, setValue] = useState(dayjs(new Date().toJSON().slice(0, 10)));

    const handleChange = (e) => setDiary(e.target.value)

    const handleSend = () => {
        fetch('/api/diary', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: "k@f.com",
                text: diary,
                date: new Date().toJSON().split("T")[0]
            })
        })
    }

    useEffect(() => {
        fetch('/api/getDiary/' + "k@f.com/" + value.format("YYYY-MM-DD"), {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(response => {setDiary(response[0].add_text)})
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

            <textarea type="text" id="name" onChange={handleChange} className="text-diary" required minLength="4" cols="90" placeholder="My diary..." value={diary}/>
            <div className="button-container">
                <button type="button" className= "diaryUpdating" onClick={handleSend}>ADD</button>
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    className="date-element"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    formatDate={(date) => date.format('MM-DD-YYYY')}
                />
            </LocalizationProvider>
        </div>
    )
}

export default Diary;