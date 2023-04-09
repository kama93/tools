import React, {useEffect, useState} from 'react';

import ListGroup from 'react-bootstrap/ListGroup';


function List () {
    const [list, setList] = useState();

        const getList = () => {
            fetch('/api/bucket', {
                method: 'get',
                headers: { 'Content-Type': 'application/json'}
            })
                .then(response => response.json())
                .then(response => {setList(response)})
        }

    useEffect(() => {
        getList();
    },[])

    return (
        <div
            className="dairy-container absolute top-0 w-full h-full bg-gray-900"
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1610060325112-ebc7efc32a4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat"
            }}>

            <ListGroup as="ol">
                {list?.item && <ListGroup.Item as="li">{list.item}</ListGroup.Item>}
            </ListGroup>

        </div>
    )
}

export default List;