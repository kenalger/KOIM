import "../ManagementCss/HeaderManage.css";

const HeaderManage = () => {
    return(
        <header className="dashboard-header">
    <h1>Management Dashboard</h1>
    <div className="header-actions">
      <button className="action-button">Add Koi</button>
      <button className="action-button">Generate Report</button>
    </div>
  </header>
    );
};

export default HeaderManage;