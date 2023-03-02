import React, {useEffect, useState} from "react";

import './main.css';

function Main() {
    const [joke, setJoke] = useState();

    useEffect(() => {
        console.log('bla')
        fetch('/api/joke', {
            method: 'get',
            headers: { 'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(response => {setJoke(response[0].joke)})
    },[])


    return (
        <>
            <main>
                <section className="relative">
                    <div
                        className="absolute w-full h-full bg-gray-900"
                        style={{
                            backgroundImage:
                                "url(https://images.unsplash.com/photo-1528460033278-a6ba57020470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
                            backgroundSize: "100%",
                            backgroundRepeat: "no-repeat"
                        }}
                    ></div>
                    <div className="container">

                        <div className="bird-container bird-container--one">
                            <div className="bird bird--one"></div>
                        </div>

                        <div className="bird-container bird-container--two">
                            <div className="bird bird--two"></div>
                        </div>

                        <div className="bird-container bird-container--three">
                            <div className="bird bird--three"></div>
                        </div>

                        <div className="bird-container bird-container--four">
                            <div className="bird bird--four"></div>
                        </div>

                    </div>
                    <div className="menu-container absolute">
                        <div className="image-container"
                             style={{
                                 backgroundImage:
                                     "url(https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)",
                                 backgroundSize: "100%",
                                 backgroundRepeat: "no-repeat"}}>
                            <p className="image-text">News</p>
                        </div>
                        <div className="image-container"
                             style={{
                                 backgroundImage:
                                     "url(https://images.unsplash.com/photo-1579017308347-e53e0d2fc5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)",
                                 backgroundSize: "100%",
                                 backgroundRepeat: "no-repeat"}}>
                            <p className="image-text">Diary</p>
                        </div>
                        <div className="image-container"
                             style={{
                                 backgroundImage:
                                     "url(https://images.unsplash.com/photo-1541795795328-f073b763494e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)",
                                 backgroundSize: "100%",
                                 backgroundRepeat: "no-repeat"}}>
                            <p className="image-text">Diet</p>
                        </div>
                        <div className="image-container"
                             style={{
                                 backgroundImage:
                                     "url(https://images.unsplash.com/photo-1623160850502-9bd1bfeec545?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)",
                                 backgroundSize: "100%",
                                 backgroundRepeat: "no-repeat"}}>
                            <p className="image-text">Tools</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Main;