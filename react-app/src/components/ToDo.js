import React from 'react';

function ToDo(props) {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{textDecoration: props.todo.complete ? "line-through" : ""}} onClick={props.toggleComplete}>
                {props.todo.text}
            </div>
            <button onClick={props.onDelete}>x</button>
        </div>
)};

export default ToDo;