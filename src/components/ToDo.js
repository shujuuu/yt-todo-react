import React from "react";
export default (props) => (
    // 4. whenever the div is click, call the prop,  
    // if cross off, update state.isComplete to true
    // <div onClick={props.toggleComplete}>{props.text}</div>
    //dislpay style base on whether or not completed
    <div style={{ display: "flex", justifyContent: "center" }}>
        <div
            className={props.todo.isComplete ? "todo-complete" : "todo-incomplete"}
            onClick={props.toggleComplete}>
            {props.todo.text}
        </div>
        <button onClick={props.onDelete}>x</button>
    </div>
)