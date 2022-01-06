const RecapContainer = () => {
    return (
        <div className="recap-container">

            <div className="recap-top">
                <div className="tip-container">
                    <h2>Tip Amount</h2>
                    <p>/ person</p>
                </div>
                <div className="tip-amount">
                    <p>$4.27</p>
                </div>
            </div>

            <div className="recap-bottom">
                <div className="total-container">
                    <h2>Total</h2>
                    <p>/ person</p>
                </div>
                <div className="total-amount">
                    <p>$32.79</p>
                </div>
            </div>

            <div className="btn-reset-form">
                <button type="reset">Reset</button>
            </div>
        </div>
    )
}

export default RecapContainer;