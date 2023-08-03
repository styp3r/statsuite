import SaleFiguresBox from './SaleFiguresBox'

const Sales = () => {
    return (
        <div className="home-container">
            <div className="sales-main-container">
                <div className="top-section">
                    <div className="greeting-section">
                        <p>Sales</p>
                        <p>Sale figures of each outlet by</p>
                        <p>payment type and partner sale figures</p>
                    </div>
                </div>

                <div className = "sales-body-container">
                    <SaleFiguresBox />
                    <SaleFiguresBox />
                    <SaleFiguresBox />
                    <SaleFiguresBox />
                    <SaleFiguresBox />
                    <SaleFiguresBox />
                    <SaleFiguresBox />
                    <SaleFiguresBox />
                    <SaleFiguresBox />
                </div>
            </div>
        </div>
    );
}

export default Sales;