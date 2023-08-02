import Navbar from './Navbar'
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
                                <div style = {{backgroundColor: '#957fef'}} className = "stat-box"></div>
                                <div style = {{backgroundColor: '#2a2b2e'}} className = "stat-box"></div>
                                <div style = {{backgroundColor: '#dcdcdc'}} className = "stat-box"></div>
                            </div>
                            <div className="cash-status-box-container">
                                <div style = {{backgroundColor: '#ffffff', border: 'solid 3px #dcdcdc'}} className = "cash-status-box"></div>
                                <div style = {{backgroundColor: '#ffffff', border: 'solid 3px #dcdcdc'}} className = "cash-status-box"></div>
                            </div>
                            <div className = "revOverview-container">
                                <div className = "revOverview-chart-container"></div>
                            </div>
                            <div className = "outletWise-overview-container">
                            <div className = "outletwise-overview-chart-container"></div>
                            </div>
                            <div className = "yearlyRev-overview-container">
                            <div className = "yearlyRev-overview-chart-container"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="side-container">
                    <div className="dateNotif-section">
                        <p>2/08/2023 -notif-</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;