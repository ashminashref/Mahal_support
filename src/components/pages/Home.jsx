import React from "react";
import "./css/Home.css";
import CampaignIcon from "@mui/icons-material/Campaign";

function Home() {
  const userName = localStorage.getItem("userName") || "Ahmed";

  return (
    <div className="home-container">
      {/* Header */}
      <div className="home-header mb-4 ">
        <h2 className="greeting-txt text-start header-size">
          السلام عليكم <span>{userName}</span>
        </h2>
        <p className="header-sub-txt-size">Welcome to your Mahal community</p>
      </div>

      {/* Status Cards */}
      <div className="status-cards">
        <div className="card">
          <p className="card-title">Payment Status</p>
          <h3 className="paid fw-bold mt-2 p-0">Paid</h3>
        </div>

        <div className="card">
          <p className="card-title">Pending Dues</p>
          <h3 className="fw-bold mt-2 p-0">₹0</h3>
        </div>
      </div>

      {/* Announcements */}
      <div className="announcements">
        <div className="announcement-header">
          <div className="announcement-title">
            <CampaignIcon className="announce-icon" />
            <h3>Announcements</h3>
          </div>
          <span className="view-all">View all</span>
        </div>

        <div className="announcement-card">
          <h4>
            Eid Prayer Timings <span className="new-badge">New</span>
          </h4>
          <p>
            Eid prayers will be held at 7:30 AM at the main Mahal ground.
            Please arrive early.
          </p>
          <span className="date">Dec 14, 2025</span>
        </div>

        <div className="announcement-card">
          <h4>
            Monthly Meeting Notice <span className="new-badge">New</span>
          </h4>
          <p>
            Monthly community meeting scheduled for Sunday at 4 PM.
            All members are requested to attend.
          </p>
          <span className="date">Dec 10, 2025</span>
        </div>

        <div className="announcement-card">
          <h4>Water Supply Schedule</h4>
          <p>
            Updated water supply timings for the winter season.
            Morning: 6–8 AM, Evening: 5–7 PM.
          </p>
          <span className="date">Dec 5, 2025</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
