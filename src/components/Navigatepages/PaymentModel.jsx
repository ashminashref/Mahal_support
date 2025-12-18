import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import QrCodeIcon from "@mui/icons-material/QrCode";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./PayNow.css";

function PaymentModel() {
  const [method, setMethod] = useState("upi");
  const navigate = useNavigate();

  // Unified function for back/close actions
  const goBack = () => navigate("/payments");

  return (
    <div className="payment-page">
      <div className="modal-box">
        {/* Header */}
        <div className="modal-header">
          <div className="header-left">
            <button className="icon-btn" onClick={goBack} title="Back">
              <ArrowBackIcon className="back-icon" />
            </button>
          </div>

          <h3>Select Payment Method</h3>

          <div className="header-right">
            <button className="icon-btn" onClick={goBack} title="Close">
              <CloseIcon className="close-icon" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="method-tabs">
          <button
            className={method === "upi" ? "active" : ""}
            onClick={() => setMethod("upi")}
          >
            <AccountBalanceWalletIcon /> UPI
          </button>

          <button
            className={method === "qr" ? "active" : ""}
            onClick={() => setMethod("qr")}
          >
            <QrCodeIcon /> QR Code
          </button>
        </div>

        {/* UPI Section */}
        {method === "upi" && (
          <div className="upi-box">
            <p className="amount">Pay ₹500</p>
            <input
              type="text"
              placeholder="Enter UPI ID (example@upi)"
              className="upi-input"
            />
            <div className="upi-apps">
              <button className="app-btn">GPay</button>
              <button className="app-btn">PhonePe</button>
              <button className="app-btn">Paytm</button>
            </div>
            <button className="confirm-btn">Proceed to Pay</button>
          </div>
        )}

        {/* QR Section */}
        {method === "qr" && (
          <div className="qr-box">
            <p className="amount">Scan & Pay ₹500</p>
            <div className="qr-container">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=example@upi&am=500"
                alt="QR Code"
              />
            </div>
            <p className="note">Scan using any UPI app</p>
          </div>
        )}

        {/* Footer Back Link */}
        <button className="footer-back-link" onClick={goBack}>
          Cancel and go back
        </button>
      </div>
    </div>
  );
}

export default PaymentModel;