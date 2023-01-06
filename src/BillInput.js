import {React} from "react";
import "./BillInput.css"
import dollar from "./images/icon-dollar.svg"
import SelectTip from "./SelectTip";

function BillInput(props) {
    return (
        <div className="BillInput">
            <p>Bill</p>
            <img src={dollar}></img>
            <input type="number" maxLength={5} value={props.bill} onChange={props.changeBill}></input>
        </div>
    )

}

export default BillInput;