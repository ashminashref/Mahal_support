import React from "react";
import { useNavigate } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./css/Payments.css";

function Payments() {
  const navigate = useNavigate();

  return (
    <div className="payments-container">
      <h2>Payments</h2>
      <p className="subtitle">Manage your monthly Contributions</p>

      {/* Current Month */}
      <div className="current-card">
        <div className="card-header">
          <CalendarMonthIcon className="icon" />
          <div>
            <h4>Current Month</h4>
            <span>December 2025</span>
          </div>
        </div>

        <div className="amount-row">
          <div>
            <p>Amount Due</p>
            <h3>₹500</h3>
          </div>

          <div className="due-info">
            <span>Due: Dec 31, 2025</span>
            <span className="pending">Pending</span>
          </div>
        </div>

        {/* NAVIGATE TO PAYMENT MODEL PAGE */}
        <button
          className="pay-btn"
          onClick={() => navigate("/payment-method")}
        >
          Pay Now
        </button>
      </div>

      {/* History */}
      <h3 className="history-title">Payment History</h3>

      <div className="history-card">
        <div>
          <h4>December 2025</h4>
          <span>Due: Dec 31</span>
        </div>
        <div className="right">
          <strong>₹500</strong>
          <span className="pending">Pending</span>
        </div>
      </div>

      <div className="history-card">
        <div>
          <h4>November 2025</h4>
          <span>Paid: Nov 15</span>
        </div>
        <div className="right">
          <strong>₹500</strong>
          <span className="paid">Paid</span>
        </div>
      </div>

      <div className="history-card">
        <div>
          <h4>October 2025</h4>
          <span>Paid: Oct 12</span>
        </div>
        <div className="right">
          <strong>₹500</strong>
          <span className="paid">Paid</span>
        </div>
      </div>
    </div>
  );
}

export default Payments;
