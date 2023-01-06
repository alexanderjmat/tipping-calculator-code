import {React, useState} from "react";

function Button(props) {

    return (
        <div className="Button">
            <button onClick={props.onClick} name={props.num} className="SelectTip__Buttons-btn" id={props.id}>{props.num}%</button>
        </div>
    )
}

export default Button;