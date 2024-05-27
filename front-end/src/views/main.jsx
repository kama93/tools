import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';

import Birds from "../components/birdsAnim/index";

import './main.css';

function Main() {
    const [joke, setJoke] = useState('');
    const [quote, setQuote] = useState('');

    const navArray = [
        {
            'image': 'https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            'link': './personal/calendar',
            'text': 'NEWS'

        },
        {
            'image': 'https://images.unsplash.com/photo-1579017308347-e53e0d2fc5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            'link': './personal/calendar',
            'text': 'PERSONAL'

        },
        {
            'image': 'https://images.unsplash.com/photo-1541795795328-f073b763494e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            'link': './calendar',
            'text': 'DIET'
        },
        {
            'image': 'https://images.unsplash.com/photo-1623160850502-9bd1bfeec545?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            'link': './calendar',
            'text': 'TOOLS'

        }
    ]

    const checkJoke = () => {
        fetch('/api/joke', {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(response => {
                setJoke(response[0].joke)
            });
    }

    const checkQuotes = () => {
        fetch('/api/quotes', {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(response => {
                setQuote(response[0].quote)
            });
    }

    useEffect(() => {
        checkQuotes();
    }, [])

    return (
        <>
            <article className="page">
                <header className="menu-container">
                    {navArray.map((element) =>
                        <div className="image-container">
                            <div className="image"
                                 style={{
                                     backgroundImage: `url(${element.image})`
                                 }}
                            >
                            </div>
                            <Link to={element.link} className="link" >
                                <p className="image-text">{element.text}</p>
                            </Link>
                        </div>
                    )}
                </header>
                <section>
                    <div
                        className="w-full h-full bg-gray-900"
                        style={{
                            backgroundImage:
                                "url(https://images.unsplash.com/photo-1528460033278-a6ba57020470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
                            backgroundSize: "100%",
                            backgroundRepeat: "no-repeat"
                        }}
                    >
                        <div className="quote-container">
                        <div className="words">
                            {quote}
                        </div>
                        </div>
                        <Birds/>
                    </div>
                </section>
                <footer>
                        <button className="button-footer" role="button" onClick={checkJoke}>Joke</button>
                        <div className="joke-container">
                            <h2 className="joke">
                                {joke}
                            </h2>
                        </div>
                </footer>
            </article>
        </>
    );
}

export default Main;