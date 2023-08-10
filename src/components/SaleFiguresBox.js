const SaleFiguresBox = (props) => {
    return (
        <div id="sale-figures-box">
            <div className = "sale-figures-box-id">
                <p className="sale-figures-box-shopname">{props.shop_name}</p>
                <p className="sale-figures-box-date">{props.date}</p>
            </div>
            <div className="sale-figures-container">
                <p className="sale-cash-sale">{props.cash_sale}</p>
                <p className="sale-card-sale">{props.card_sale}</p>
                <p className="sale-upi-sale">{props.upi_sale}</p>
            </div>
        </div>
    );
}

export default SaleFiguresBox;