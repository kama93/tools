import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';

import './style.css';

function Movie () {
    const [image, setImage] = useState("")
    const [data, setData] = useState({})

    const fetchData = async () => {
        let current;

        do {
            const x = Math.floor(Math.random() * 70000) + 1;
            await fetch('/api/joker', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: x
                })
            })
                .then(response => response.json())
                .then(response => {
                    current = response.poster_path
                    setImage(response.poster_path && response.poster_path.length > 0 ?'https://image.tmdb.org/t/p/w500' + response.poster_path : "")
                    setData(response)
                })
        } while(current === undefined);
    }

    useEffect( () => {
        fetchData();
    },[])

    return (
        <div
            className="dairy-container top-0 w-full h-full bg-gray-900"
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=1728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat"
            }}
        >

            {data && <Card style={{ width: '50vw' }}>
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