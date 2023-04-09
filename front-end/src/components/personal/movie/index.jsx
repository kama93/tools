import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';

import './style.css';

function Movie () {
    const [image, setImage] = useState("")
    const [data, setData] = useState({})

    useEffect(() => {
        let x = Math.floor(Math.random() * 70000) + 1;
        fetch('/api/joker', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: x
            })
        })
            .then(response => response.json())
            .then(response => {
                setImage(response.poster_path && response.poster_path.length > 0 ?'https://image.tmdb.org/t/p/w500' + response.poster_path : "")
                setData(response)
            })
    },[])

    return (
        <div
            className="dairy-container absolute top-0 w-full h-full bg-gray-900"
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat"
            }}
        >

            {data && <Card style={{ width: '70vw' }}>
                { image.length > 0 && <Card.Img variant="top" src={image}/>}
                <Card.Body>
                    <Card.Title>{data.original_title}</Card.Title>

                    <Card.Text>{data.overview}</Card.Text>
                </Card.Body>
            </Card> }

        </div>
    )
}

export default Movie