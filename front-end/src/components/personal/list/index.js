import React, {useEffect, useState} from 'react';
import { CheckOutlined, CloseOutlined, PlusOutlined } from '@ant-design/icons';

import ListGroup from 'react-bootstrap/ListGroup';


import './style.css';

// do zrobienia: usuwanie elementu, inny styl guzika do dodawania, zeby nowy pomysl sie pokazyal, jakzronipmne to przekreslic


function List () {
    const [item, setItem] = useState();
    let [list, setList] = useState([]);

    const maxCapacity = 10;

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

    const inner = async () => {
        let response = await fetch('/api/list/' + "k@f.com", {
            method: 'get',
            headers: {'Content-Type': 'application/json'},
        })
        let res = await response.json()
        setList(list = res.map(element => element.listItem));
    }

    const addNew = async () => {
        let response = await fetch('/api/list', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: "k@f.com",
                listItem: item.item
            })
        })
        await response.json()
    }

    useEffect( () => {
        inner();
    },[])

    const removeNew = () => {
            setItem('');
    }

    const addToList = async () => {
        await addNew();

        await inner();

        setItem('');
    }

    const removeFromList = async (index) => {
        console.log(index)
        await inner();

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
                {list.length > 0 && list.map((element, index) =>
                     <ListGroup.Item as="li" className = "listItem" key ={index}>
                         {element}
                         <CheckOutlined onClick={() => removeFromList(index)} style={{ fontSize: '15px', color: 'green'}}/>
                     </ListGroup.Item>
                )}
            </ListGroup>
            {item?.item && list.length < maxCapacity &&
                <div className= "addItem">
                    <div className="newItem">
                        {`${item.item}`}
                        <div className = "buttonsNewItem">
                            <PlusOutlined onClick={addToList} style={{ fontSize: '15px', color: 'green'}}/>
                            <CloseOutlined onClick={removeNew} style={{ fontSize: '15px', color: 'red'}}/>
                        </div>
                    </div>
                </div>
                }
        </div>
    )
}

export default List;