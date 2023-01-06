import {React, useEffect, useState} from "react";
import "./Calculator.css";
import BillInput from "./BillInput";
import SelectTip from "./SelectTip"
import NumberOfPeople from "./NumberOfPeople"
import Totals from "./Totals";


function Calculator() {
    const [totalState, setTotalState] = useState({
        bill: "0.00",
        tip: 0,
        people: 0
    })
    const [billInput, setBillInput] = useState(<BillInput changeBill={changeBill} bill={totalState.bill}/>)
    const [selectTip, setSelectTip] = useState(<SelectTip changeTip={changeTip} values={[10, 15, 18, 20, 25]}/>)
    const [numberOfPeople, setNumberOfPeople] = useState(<NumberOfPeople changeNumberOfPeople={changeNumberOfPeople} num={0} />)
    const [totals, setTotals] = useState(<Totals reset={resetTotals} totals={totalState}/>)
    
    useEffect(() => {
        setTotals(<Totals reset={resetTotals} totals={totalState}/>)
        setBillInput(<BillInput changeBill={changeBill} bill={totalState.bill}/>)
        setSelectTip(<SelectTip changeTip={changeTip} currentTip={totalState.tip} values={[10, 15, 18, 20, 25]}/>)
        setNumberOfPeople(<NumberOfPeople changeNumberOfPeople={changeNumberOfPeople} num={totalState.people}/>)
    }, [totalState])

    function resetTotals() {
        setTotalState({
          bill: "0.00",
          tip: 0,
          people: 0
        });
      }

    function changeBill(e) {
        setTotalState(prevState => ({
            ...prevState,
            bill: e.target.value
        }))
        setBillInput(<BillInput changeBill={changeBill} bill={e.target.value}/>)
    }

    function changeTip(e) {
        setTotalState(prevState => ({
            ...prevState,
            tip: e.target.value,
        }))
        setSelectTip(<SelectTip changeTip={changeTip} currentTip={e.target.value} values={[10, 15, 18, 20, 25]}/>)
    }

    function changeNumberOfPeople(e) {
        setTotalState(prevState => ({
            ...prevState,
            people: e.target.value
        }))
        setNumberOfPeople(<NumberOfPeople changeNumberOfPeople={changeNumberOfPeople} num={e.target.value}/>)
    }

    return (
        <div className="Calculator">
            {billInput}
            {selectTip}
            {numberOfPeople}
            {totals}
        </div>
    )

}

export default Calculator;