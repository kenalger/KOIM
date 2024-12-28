import "../ManagementCss/ManagementDashboad.css";
import HeaderManage from "./HeaderManage";

const ManagementDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <HeaderManage />

      {/* Side Panel */}
      <aside className="dashboard-side-panel">
        <nav className="side-panel-nav">
          <button className="side-panel-button">Overview</button>
          <button className="side-panel-button">Manage Koi</button>
          <button className="side-panel-button">Manage Pond</button>
          <button className="side-panel-button">Koi Sales</button>
        </nav>
      </aside>

      {/* Main Section */}
      <main className="dashboard-main">
        <section className="main-overview">
          <div className="overview-card">
            <h3>Koi Details</h3>
            <div className="koi-image">
              <img src="koi-image.png" alt="Koi Fish" />
            </div>
            <p>Details about this koi fish...</p>
          </div>
          <div className="overview-card">
            <h3>Sales Summary</h3>
            <p>Total Sales: $10,000</p>
            <p>Top Pond: Pond A</p>
          </div>
        </section>

        <section className="main-details">
          <h2>Detailed Information</h2>
          <div className="details-table">
            <table>
              <thead>
                <tr>
                  <th>Koi Name</th>
                  <th>Pond</th>
                  <th>Status</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Koi #1</td>
                  <td>Pond A</td>
                  <td>Available</td>
                  <td>$500</td>
                </tr>
                <tr>
                  <td>Koi #2</td>
                  <td>Pond B</td>
                  <td>Sold</td>
                  <td>$700</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ManagementDashboard;
