import React, { useState } from "react";
import "../pages/css/Certificate.css";
import UploadIcon from "@mui/icons-material/Upload";
import DescriptionIcon from "@mui/icons-material/Description";

function Certificates() {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Marriage Certificate",
      date: "Oct 15, 2024",
      status: "verified",
    },
    {
      id: 2,
      name: "Birth Certificate (Ibrahim)",
      date: "Nov 20, 2024",
      status: "pending",
    },
    {
      id: 3,
      name: "Birth Certificate (Aisha)",
      date: "Nov 22, 2024",
      status: "rejected",
      reason: "Document unclear",
    },
  ]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = ["application/pdf", "image/png", "image/jpeg"];
    if (!allowedTypes.includes(file.type)) {
      alert("Only PDF, JPG, PNG allowed");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB");
      return;
    }

    const newDoc = {
      id: Date.now(),
      name: file.name,
      date: new Date().toLocaleDateString(),
      status: "pending",
    };

    setDocuments([newDoc, ...documents]);
  };

  return (
    <div className="cert-page">

      {/* Header */}
      <div className="cert-header">
        <h2>Certificates</h2>
        <p>Manage your family documents</p>
      </div>

      {/* Upload Box */}
      <div className="upload-box">
        <div className="upload-icon">
          <UploadIcon />
        </div>
        <h4>Upload Certificate</h4>
        <p>Supported formats: PDF, JPG, PNG (Max 5MB)</p>

        <label className="upload-btn">
          Choose File
          <input type="file" hidden onChange={handleFileUpload} />
        </label>
      </div>

      {/* Uploaded Documents */}
      <h4 className="section-title">Uploaded Documents</h4>

      <div className="doc-list">
        {documents.map((doc) => (
          <div className="doc-card" key={doc.id}>
            <div className="doc-left">
              <DescriptionIcon />
              <div>
                <h5>{doc.name}</h5>
                <span>Uploaded: {doc.date}</span>
                {doc.status === "rejected" && (
                  <p className="reject-reason">
                    Reason: {doc.reason}
                  </p>
                )}
              </div>
            </div>

            <div className={`status ${doc.status}`}>
              {doc.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
