import React from "react";
import "../pages/css/Profile.css";
import {Row, Col, Container} from 'react-bootstrap'
// Lucid icons
import { User, House, FileBadge, Pen, CreditCard, ChevronRight } from "lucide-react";

const userData = [
  {
    name: "Ahmed Khan",
    mail: "ahmed.khan@gmail.com",
    houseName: "Baitul Izza",
    mahalId: "MHL-2025-002",
  },
];

function Profile() {
  return (
    <div className="container">
      {userData.map((user, index) => (
        <div 
          key={index} 
          className="profile-wrapper rounded-3 d-flex flex-column align-items-center justify-content-center mb-4"
        >
          <div className="user-section w-100">
            {/* Profile Icon */}
            <div className="d-flex justify-content-center">
              <span className="icon-wrapper rounded-circle d-flex align-items-center justify-content-center">
                <User size={32} />
              </span>
            </div>

            {/* Name & Email */}
            <div className="text-center mt-4">
              <h6 className="username">{user.name}</h6>
              <p className="user-mail">{user.mail}</p>
            </div>
            
            <hr />

            {/* User Details Grid */}
            <div className="user-details d-flex align-items-center justify-content-between gap-4 px-3">
              
              {/* House Section */}
              <div className="home text-center  p-3 flex-fill">
                <div className="d-flex gap-2 mb-2 align-items-center justify-content-center text-secondary">
                  <House size={18} />
                  <p className="m-0 p-0 small">House Name</p>
                </div>
                <h6 className="fw-bold">{user.houseName}</h6>
              </div>

              {/* Maha ID Section */}
              <div className="maha-id text-center p-3 flex-fill">
                <div className="d-flex gap-2 mb-2 align-items-center justify-content-center text-secondary">
                  <FileBadge size={18} />
                  <p className="m-0 p-0 small">Maha ID</p>
                </div>
                <h6 className="fw-bold">{user.mahalId}</h6>
              </div>

            </div>
          </div>
        </div>
      ))}


      {/* shorten-data-section */}
      <Container>
<Row className="gy-2">
        <Col lg = {6} className="card rounded-3 text-center">
        <h6 className="months-paid fw-bold">12</h6>
        <p className="months-txt">Months Paid</p>
        </Col>
        <Col lg = {6} className="card text-center">
        <h6 className="family-num fw-bold">4</h6>
        <p className="family-txt ">Family members</p>
        </Col>
      </Row>
      </Container>

      {/* setting section */}
      <div className="card-mine hover-none mt-5 mb-5">
<ul className="setting-ul">
  <li className="setting-li ">
    <button className="btn w-100 d-flex align-items-center justify-content-between gap-3 text-start px-3 py-2">
<div className="left gap-2 d-flex">
  <Pen/>
  Edit
</div>
<div className="right">
  <ChevronRight/>
</div>
    </button>
  </li>


  {/* payment btn */}
 <li className="setting-li ">
    <button className="btn w-100 d-flex align-items-center justify-content-between gap-3 text-start px-3 py-2">
<div className="left gap-2 d-flex">
  <Pen/>
  Edit
</div>
<div className="right">
  <ChevronRight/>
</div>
    </button>
  </li>
</ul>
      </div>
      

      <button className="btn btn-outline-danger w-100">Logout</button>
    </div>
  );
}

export default Profile;