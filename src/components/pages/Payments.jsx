import React from "react";
import { useNavigate } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./css/Payments.css";

function Payments() {
  const navigate = useNavigate();

  // 1. Array of objects holding  history data
  const paymentHistory = [
    {
      month: "December 2025",
      dateInfo: "Due: Dec 31",
      amount: "₹500",
      status: "Pending",
    },
    {
      month: "November 2025",
      dateInfo: "Paid: Nov 15",
      amount: "₹500",
      status: "Paid",
    },
    {
      month: "October 2025",
      dateInfo: "Paid: Oct 12",
      amount: "₹500",
      status: "Paid",
    },
  ];

  return (
    <div className="payments-container">
      <h2 className="text-start header-size">Payments</h2>
      <p className="subtitle mb-4 header-sub-txt-size">
        Manage your monthly Contributions
      </p>

      {/* Current Month - Kept as is */}
      <div className="current-card">
        <div className="card-header">
          <div className="icon-holder d-flex align-items-center justify-content-center">
            <CalendarMonthIcon className="icon" />
          </div>
          <div>
            <h4 className="m-0 card-h4">Current Month</h4>
            <span className="card-span">December 2025</span>
          </div>
        </div>

        <div className="amount-row">
          <div >
            <p className="amount-p">Amount Due</p>
            <h3 className="amount">₹500</h3>
          </div>

          <div className="due-info d-flex align-items-center gap-3">
            <span className="due-date">Due: Dec 31, 2025</span>
            <span className="pending">Pending</span>
          </div>
        </div>

        <button
          className="pay-btn"
          onClick={() => navigate("/payment-method")}
        >
          Pay Now
        </button>
      </div>

      {/* History Section */}
      <h3 className="history-title">Payment History</h3>

      {/* 2. Mapping through the array */}
      {paymentHistory.map((item, index) => (
        <div className="history-card" key={index}>
          <div>
            <h4 className="item-month">{item.month}</h4>
            <span className="item-date">{item.dateInfo}</span>
          </div>
          <div className="right d-block d-lg-flex align-items-center justify-content-center gap-3">
  <strong className="d-block d-lg-inline mb-2 mb-lg-0">
    {item.amount}
  </strong>

  <span className={`${item.status.toLowerCase()} m-0`}>
    {item.status}
  </span>
</div>
        </div>
      ))}
      
    </div>
  );
}

export default Payments;