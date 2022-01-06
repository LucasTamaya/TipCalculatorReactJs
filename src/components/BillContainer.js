import {useState} from "react";

const BillContainer = () => {

    const [bill, setBill] = useState(0);

    return (
        <div className="bill-container">
            <label htmlFor="bill">Bill</label>
            <input type="number" id="bill" name="bill" placeholder="0" required onChange={(e) => setBill(parseInt(e.target.value))}/>
            <p>{bill}</p>
        </div>
    )
}

export default BillContainer;