import { useState } from "react";

const SelectTip = () => {

    // Ouverture de l'input pour saisit du pourcentage custom
    const handleCustomInput = () => {
        document.getElementById("custom").style.display = "initial";
        document.getElementById("custom").focus();
        document.getElementById("label-custom").style.display = "none";
    }

    // Si perte de focus sur l'input, le faire disparaitres
    // document.getElementById("custom").onblur = () => {
    //     document.getElementById("custom").style.display = "none";
    //     document.getElementById("label-custom").style.display = "block";
    // };

    const [tipPercentage, setTipPercentage] = useState(0);

    return (
        <div className="select-tip-container">
            <label htmlFor="select-tip">Select Tip %</label>
            <div className="tip-input">
                <div>
                    <input type="radio" id="five" name="tip-percentage" value="5" required onChange={(e) => setTipPercentage(parseInt(e.target.value))}/>
                    <label htmlFor="five">5%</label>
                </div>
                <div>
                    <input type="radio" id="ten" name="tip-percentage" value="10" onChange={(e) => setTipPercentage(parseInt(e.target.value))}/>
                    <label htmlFor="ten">10%</label>
                </div>
                <div>
                    <input type="radio" id="fifteen" name="tip-percentage" value="15" onChange={(e) => setTipPercentage(parseInt(e.target.value))}/>
                    <label htmlFor="fifteen">15%</label>
                </div>
                <div>
                    <input type="radio" id="twenty-five" name="tip-percentage" value="25" onChange={(e) => setTipPercentage(parseInt(e.target.value))}/>
                    <label htmlFor="twenty-five">25%</label>
                </div>
                <div>
                    <input type="radio" id="fifty" name="tip-percentage" value="50" onChange={(e) => setTipPercentage(parseInt(e.target.value))}/>
                    <label htmlFor="fifty">50%</label>
                </div>
                <div>
                    <input type="number" id="custom" name="tip-percentage" onChange={(e) => setTipPercentage(parseInt(e.target.value))} onClick={handleCustomInput}/>
                    <label htmlFor="custom" id="label-custom">Custom</label>
                </div>
            </div>
            <p>{tipPercentage}</p>
        </div>
    )
}

export default SelectTip;