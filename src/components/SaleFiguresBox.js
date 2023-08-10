const SaleFiguresBox = (props) => {
    return (
        <div id="sale-figures-box">
            <div className="sale-figures-box-id">
                <p className="sale-figures-box-date">{props.date}</p>
            </div>
            <div className="sale-figures-container">
                <div className="single-sale-figure-container">
                    <div className="left-sale-figures">
                        <p className="sale-cash-sale">Cash Sale - {props.cash_sale}</p>
                        <p className="sale-card-sale">Card Sale - {props.card_sale}</p>
                        <p className="sale-upi-sale">UPI Sale - {props.upi_sale}</p>
                    </div>
                    <div className="right-sale-figures">
                        <p>Partner Sales</p>
                        <p className="sale-swiggy-sale">Swiggy Sale - {props.swiggy_sale}</p>
                        <p className="sale-zomato-sale">Zomato Sale - {props.zomato_sale}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SaleFiguresBox;