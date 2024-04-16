import React, {useEffect, useState} from 'react';
import {CheckOutlined, CloseOutlined, PlusOutlined} from '@ant-design/icons';

import ListGroup from 'react-bootstrap/ListGroup';


import './style.css';

function List() {
    const [item, setItem] = useState({});
    let [list, setList] = useState([]);
    const [privateItem, setPrivateItem] = useState([]);
    const [isFull, setIsFull] = useState(false);

    const maxCapacity = 10;
    const emptyObject = {
        'listItem': '',
        'id': null,
        'isActive': true
    };

    const getNew = () => {
        fetch('/api/bucket', {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(response => {
                setItem(response)
            });
    };

    const removeItem = async ({id}) => {
        if (id === null) {
            return;
        }

        let response = await fetch('/api/deleteList', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: "k@f.com",
                id
            })
        });
        await response.json();
    };

    const addNew = async (element) => {
        let response = await fetch('/api/list', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: "k@f.com",
                listItem: element
            })
        });
        await response.json();
    };

    const addPersonalIdea = async () => {
        if (privateItem.length > 0) {
            await addNew(privateItem);

            await inner();
        }
    };

    const inner = async () => {
        let response = await fetch('/api/list/' + "k@f.com", {
            method: 'get',
            headers: {'Content-Type': 'application/json'},
        })
        let res = await response.json();

        if (res.length >= maxCapacity) setIsFull(true);

        while (res.length < maxCapacity) {
            res.push(emptyObject);
        }

        setList(list = res);
    };

    const addToList = async () => {
        getNew();

        await addNew(item.item);

        await inner();
    };

    const removeFromList = async (element) => {
        await removeItem(element);
        await inner();
    }

    const removeNew = () => {
        getNew();
    };

    const addInput = (event) => {
        setPrivateItem(event.target.value)
    };

    useEffect(() => {
        getNew();
    }, []);

    useEffect(() => {
        inner();
    }, []);

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
                {list.length > 0 && list.map((element, index) =>
                    <ListGroup.Item as="li" className="listItem" key={index} style={{
                        textDecoration: element.isActive ? 'none' : 'line-through',
                        opacity: element.isActive ? 1 : 0.5
                    }}>
                        {element.listItem ? element.listItem :
                            <div className="privateItem">
                                <input type="text" className="textArea" minLength={1} onChange={(event) => addInput(event)}/>
                                <PlusOutlined onClick={addPersonalIdea} style={{fontSize: '15px', color: 'green'}}/>
                            </div>}
                        {element.isActive && element.id !== null &&
                            <CheckOutlined onClick={() => removeFromList(element)} style={{fontSize: '15px', color: 'green'}}/>}
                    </ListGroup.Item>
                )}
            </ListGroup>
            {item?.item && !isFull &&
                <div className="addItem">
                    <div className="newItem">
                        {`${item.item}`}
                        <div className="buttonsNewItem">
                            <PlusOutlined onClick={addToList} style={{fontSize: '15px', color: 'green'}}/>
                            <CloseOutlined onClick={removeNew} style={{fontSize: '15px', color: 'red'}}/>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default List;