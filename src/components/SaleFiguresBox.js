const SaleFiguresBox = (props) => {
    return (
        <div id="sale-figures-box">
            <div className = "sale-figures-box-id">
                <p className="sale-figures-box-shopname">{props.shopname}BTM</p>
                <p className="sale-figures-box-date">{props.saleDate}</p>
            </div>
            <div className="sale-figures-container">
                <p className="sale-cash-sale">{props.cashSale}</p>
                <p className="sale-card-sale">{props.cardSale}</p>
                <p className="sale-upi-sale">{props.upiSale}</p>
            </div>
        </div>
    );
}

export default SaleFiguresBox;