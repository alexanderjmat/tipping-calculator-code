import {React, useState} from "react";
import "./NumberOfPeople.css"
import person from "./images/icon-person.svg"
import Totals from "./Totals";

function NumberOfPeople(props) {
    const [num, setNum] = useState(props.num)
    
    return (
        <div className="NumberOfPeople">
            <p>Number of People</p>
            <img src={person}></img>
            <input type="number" min={0} value={props.num} onChange={props.changeNumberOfPeople}></input>
        </div>
    )

}

export default NumberOfPeople; 