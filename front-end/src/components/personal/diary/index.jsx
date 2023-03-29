import React from 'react';

import './style.css';

function Diary() {
    return (
        <div
            className="dairy-container absolute top-0 w-full h-full bg-gray-900"
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1619260288316-1dc66c32b718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat"
            }}>

            <textarea type="text" id="name" className="text-diary" required minLength="4" cols="90" placeholder="My diary...">
            </textarea>

        </div>
    )
}

export default Diary;