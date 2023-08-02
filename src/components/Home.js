const Home = () => {
    return (
        <div id="home">
            <div className="home-container">
                <div className="main-container">
                    <div className="top-section">
                        <div className="greeting-section">
                            <p>Dashboard</p>
                            <p>Hello Navjyot! Here are your updates for today</p>
                        </div>
                    </div>
                    <div className="body-section">
                        <div className="body-container">
                            <div className="stat-box-container">
                                <div style={{ backgroundColor: '#957fef' }} className="stat-box"></div>
                                <div style={{ backgroundColor: '#2a2b2e' }} className="stat-box"></div>
                                <div style={{ backgroundColor: '#dcdcdc' }} className="stat-box"></div>
                            </div>
                            <div className="cash-status-box-container">
                                <div style={{ backgroundColor: '#ffffff', border: 'solid 3px #dcdcdc' }} className="cash-status-box"></div>
                                <div style={{ backgroundColor: '#ffffff', border: 'solid 3px #dcdcdc' }} className="cash-status-box"></div>
                            </div>
                            <div className="revOverview-container">
                                <div className="revOverview-chart-container"></div>
                            </div>
                            <div className="outletWise-overview-container">
                                <div className="outletwise-overview-chart-container"></div>
                            </div>
                            <div className="yearlyRev-overview-container">
                                <div className="yearlyRev-overview-chart-container"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top-side-container">
                    <div className="dateNotif-section">
                        <p>2/08/2023 -notif-</p>
                    </div>
                    <div className="body-side-container">
                        <div className="survey-title">
                            <p>Restaurant Survey</p>
                            <p>Daily checks and visit updates</p>
                        </div>
                        <div className="survey-section-container">
                            <div className="btm-survey">
                                <p className="survey-shop-title">BTM</p>
                                <p className="survey-shop-date-status">last visited - 02/08/2023</p>
                            </div>
                            <div className="ec2-survey">
                                <p className="survey-shop-title">EC2</p>
                                <p className="survey-shop-date-status">supervising</p>
                            </div>
                            <div className="ddk-survey">
                                <p className="survey-shop-title">DDK</p>
                                <p className="survey-shop-date-status">supervising</p>
                            </div>
                            <div className="mll-survey">
                                <p className="survey-shop-title">MLL</p>
                                <p className="survey-shop-date-status">supervising</p>
                            </div>
                            <div className="vtr-survey">
                                <p className="survey-shop-title">VTR</p>
                                <p className="survey-shop-date-status">supervising</p>
                            </div>
                            <div className="jbn-survey">
                                <p className="survey-shop-title">JBN</p>
                                <p className="survey-shop-date-status">supervising</p>
                            </div>
                            <div className="orr-survey">
                                <p className="survey-shop-title">ORR</p>
                                <p className="survey-shop-date-status">supervising</p>
                            </div>
                            <div className="knr-survey">
                                <p className="survey-shop-title">KNR</p>
                                <p className="survey-shop-date-status">supervising</p>
                            </div>
                            <div className="hmu-survey">
                                <p className="survey-shop-title">HMU</p>
                                <p className="survey-shop-date-status">supervising</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;