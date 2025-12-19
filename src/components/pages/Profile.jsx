import { Row, Col, Container, Card, Button } from "react-bootstrap";
// Lucide icons
import { User, House, FileBadge, Pen, CreditCard, ChevronRight, LogOut, Bell, Newspaper } from "lucide-react";
import "../pages/css/Profile.css";
import { Link } from "react-router-dom";


// lottie user icon
const userIcon = '/Icons/avatar.gif'
// Mock Data (Single User)
const user = {
  name: "Ahmed Khan",
  mail: "ahmed.khan@gmail.com",
  houseName: "Baitul Izza",
  mahalId: "MHL-2025-002",
  monthsPaid: 12,
  familyMembers: 4,
};



function Profile() {

  return (
    <Container className="py-4" style={{ maxWidth: "600px" }}>
      {/* 1. Main Profile Card */}
      <div className="profile-wrapper bg-white rounded-4 shadow-sm p-4 mb-4 d-flex flex-column align-items-center">
        
        {/* Profile Icon */}
        <div className="icon-wrapper bg-light rounded-circle p-3 mb-3 d-flex align-items-center justify-content-center border">
          {/* <User size={40} className="text-primary" /> */}
          <img src={userIcon} 
          style={{width:'30px'}}
          alt="Profile-Image" />
        </div>

        {/* Name & Email */}
        <div className="text-center mb-4">
          <h5 className="username fw-bold mb-1">{user.name}</h5>
          <p className="user-mail text-muted mb-0">{user.mail}</p>
        </div>

        <hr className="w-100 text-muted opacity-25" />

        {/* User Details Grid */}
        <div className="d-flex w-100 justify-content-between mt-2">
          {/* House Section */}
          <div className="text-center flex-fill border-end">
            <div className="d-flex gap-2 mb-1 align-items-center justify-content-center text-secondary">
              <House size={16} />
              <span className="small">House Name</span>
            </div>
            <h6 className="fw-bold m-0">{user.houseName}</h6>
          </div>

          {/* Maha ID Section */}
          <div className="text-center flex-fill">
            <div className="d-flex gap-2 mb-1 align-items-center justify-content-center text-secondary">
              <FileBadge size={16} />
              <span className="small">Mahal ID</span>
            </div>
            <h6 className="fw-bold m-0">{user.mahalId}</h6>
          </div>
        </div>
      </div>

      {/* 2. Stats Section */}
      <Row className="g-3 mb-4">
        <Col  lg = {12} >
          <Card className="border-0 bg-white shadow-sm h-100 text-center py-3 bg-light">
            <h4 className="fw-bold text-success mb-1">{user.monthsPaid}</h4>
            <p className="text-muted small m-0">Months Paid</p>
          </Card>
        </Col>
        <Col  lg = {12}>
          <Card className="border-0 shadow-sm h-100 bg-white text-center py-3 bg-light">
            <h4 className="fw-bold text-primary mb-1">{user.familyMembers}</h4>
            <p className="text-muted small m-0">Family Members</p>
          </Card>
        </Col>
      </Row>

      {/* 3. Settings Section */}
      <div className="border-0 shadow-sm mb-5 overflow-hidden rounded-4">
        <div className="p-3">
          <SettingsButton 
            icon={<Pen size={20} />} 
            label="Edit Profile" 
            onClick={() => console.log("Edit")} 
          />
          <hr className=" opacity-10" />
          <Link to = '/Payments' className="text-decoration-none">
          <SettingsButton 
            icon={<CreditCard size={20} />} 
            label="Payment History" 
            onClick={() => console.log("Payment")} 
          />
          </Link>
          
          <hr className="d-lg-none"/>
          <Link to = '/notifications' className="text-decoration-none">
           <SettingsButton 
          className = 'd-lg-none'
          icon={<Bell/>}
          label={'Notifications'}
          />
          </Link>


            <hr className="d-lg-none"/>
          <Link to = '/certificates' className="text-decoration-none">
           <SettingsButton 
          className = 'd-lg-none'
          icon={<Newspaper/>}
          label={'Certificates'}
          />
          </Link>
         
        </div>
      </div>

      {/* 4. Logout Button */}
      <Button variant="outline-danger" className="w-100 py-2 d-flex align-items-center justify-content-center gap-2 rounded-3">
        <LogOut size={18} />
        Logout
      </Button>
    </Container>
  );
}

// Helper Component to avoid repetition
const SettingsButton = ({ icon, label, onClick, className}) => (
  <button 
    onClick={onClick}
    // className="btn w-100 d-flex align-items-center justify-content-between p-3 border-0"
  className={`btn w-100 d-flex align-items-center justify-content-between p-3 border-0 ${className}`}
  >
    <div className="d-flex align-items-center gap-3 text-dark">
      <span className="text-secondary">{icon}</span>
      <span className="fw-medium">{label}</span>
      
    </div>
    <ChevronRight size={18} className="text-muted" />
  </button>
);

export default Profile;