import {React, useEffect, useState} from "react";
import "./Totals.css"

function Totals(props) {
    console.log(props)
    const bill = parseFloat(props.totals.bill)
    const tip = parseFloat(props.totals.tip) / 100
    const people = parseFloat(props.totals.people)

    const totalTip = tip * bill
    const [totalPerPerson, setTotalPerPerson] = useState(((bill + totalTip) / people).toFixed(2))
    const [tipPerPerson, setTipPerPerson] = useState((totalTip / people).toFixed(2))

    console.log(props.totals, bill, tip, people)

    useEffect(() => {
        const newTotalPerPerson = ((bill + totalTip) / people).toFixed(2);
        if (newTotalPerPerson != 'NaN' && newTotalPerPerson != 'Infinity') {
            setTotalPerPerson(newTotalPerPerson);
        } else {
            setTotalPerPerson("0.00");
        }
    }, [bill, totalTip, people]);

    useEffect(() => {
        const newTipPerPerson = (totalTip / people).toFixed(2);
        if (newTipPerPerson != 'NaN' && newTipPerPerson != 'Infinity') {
            setTipPerPerson(newTipPerPerson);
        } else {
            setTipPerPerson("0.00");
        }
    }, [totalTip, people]);

    return (
        <div className="Totals">
            <p id="tip__amount">Tip Amount</p>
            <p id="tip__person">//person</p>
            <p id="person__amount">${tipPerPerson}</p>
             
            <p id="total__tip">Total</p>
            <p id="total__person">//person</p>
            <p id="total">${totalPerPerson}</p>

            <button className="Totals__reset" onClick={props.reset}>RESET</button>
        </div>
    )

}

export default Totals;
