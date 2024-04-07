import React, {useEffect, useState} from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

import ListGroup from 'react-bootstrap/ListGroup';


import './style.css';

function List (props) {
    const [item, setItem] = useState();
    let [list, setList] = useState([]);

    const {currentList} = props;

    const getNew = () => {
        fetch('/api/bucket', {
            method: 'get',
            headers: { 'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(response => {setItem(response)})
    }

    useEffect(() => {
        getNew();
    },[])

    useEffect( () => {
        async function inner() {
            let response = await fetch('/api/list/' + "k@f.com", {
                method: 'get',
                headers: {'Content-Type': 'application/json'},
            })
            let res = await response.json()
            setList(list = res.map(element => element.listItem));
        }
        inner();
    },[])

    const removeNew = () => {
            setItem('');
    }

    const addToList = () => {
        fetch('/api/list', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: "k@f.com",
                listItem: item.item
            })
        })
            .then(response => response.json());

        setItem('');
    }

    return (
        <div
            className="dairy-container top-0 w-full h-full bg-gray-900"
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1610060325112-ebc7efc32a4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat"
            }}>

            <ListGroup as="ol">
                {list.length > 0 && list.map(element =>
                     <ListGroup.Item as="li">{element}</ListGroup.Item>
                )}
            </ListGroup>
            {item?.item && list.length < 10 &&
                <div className= "addItem">
                    <div className="newItem">
                        {`${item.item}`}
                        <CheckOutlined onClick={addToList} style={{ fontSize: '15px', color: 'green'}}/>
                        <CloseOutlined onClick={removeNew} style={{ fontSize: '15px', color: 'red'}}/>
                    </div>
                </div>
                }
            {/*
            jutro: ogarnac font awsome */}
            {/*  3. remove button albo zrobione button
                4. podzial listy na zrobione i  nie zrobione, te zrobione na rolce, ale pokazuje 10 najnowszych
            5. moze animacja ze jak zrobione to przesuwa sie do drugiej listy? i zmienia kolor
        */}

        </div>
    )
}

export default List;