import React, {useEffect} from 'react';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import './style.css';

function Calendar () {
    const [value, setValue] = React.useState(dayjs(new Date().toJSON().slice(0, 10)));

    useEffect(() => {

        console.log(value)
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
        </div>
    )
}

export default Calendar