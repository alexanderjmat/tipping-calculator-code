import {React} from "react";
import "./SelectTip.css"

function SelectTip(props) {
    console.log(props.currentTip)
    return (
        <div className="SelectTip">
            <p>Select Tip %</p>
            <div className="SelectTip__Buttons">
                {props.values.map((val, idx) => {
                    if (val == props.currentTip) {
                        return (<button value={val} onClick={props.changeTip} id={`btn-${idx + 1}`} className="SelectTip__Buttons-btn--checked">{val}%</button>)
                    }
                    else return (<button value={val} onClick={props.changeTip} id={`btn-${idx + 1}`} className="SelectTip__Buttons-btn">{val}%</button>)

                })}
                <input onChange={props.changeTip} value={props.currentTip} type="number" placeholder="Custom" className="SelectTip__Buttons-btn" id="btn-6"/>
            </div>
        </div>
    )
}

export default SelectTip;