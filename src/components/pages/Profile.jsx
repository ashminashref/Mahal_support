import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { 
  User, House, FileBadge, Pen, CreditCard, ChevronRight, 
  LogOut, Bell, Newspaper, Calendar, Users 
} from "lucide-react";
import "../pages/css/Profile.css"; // Ensure you added the CSS above
import { Link } from "react-router-dom";



// Mock Data
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
    <Container className="py-5" style={{ maxWidth: "550px" }}>
      
      {/* 1. Main Profile Card */}
      <Card className="border-0 shadow-sm rounded-4 mb-4 overflow-hidden">
        {/* Decorative Background Header */}
        <div className="profile-header-bg"></div>
        
        <Card.Body className="text-center pt-0 pb-4">
          {/* Avatar - Negative margin pulls it up */}
          <div className="avatar-container d-inline-block mb-3">
            <div className="bg-white p-1 rounded-circle shadow-sm">
                <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{width: '90px', height: '90px'}}>
                     {/* Fallback to icon if img fails, or use img */}
                    {/* <img src={userIcon} alt="Profile" className="rounded-circle" style={{ width: '100%', height: '100%', objectFit: 'fill' }} /> */}
                <User className="user-icon"/>
                </div>
            </div>
          </div>

          {/* Identity */}
          <div className="mb-4">
            <h4 className="fw-bold text-dark mb-1">{user.name}</h4>
            <p className="text-muted small mb-0">{user.mail}</p>
          </div>

          {/* Quick Info Grid */}
          <div className="d-flex justify-content-center gap-4 px-3">
            <div className="d-flex align-items-center gap-2 text-start">
              <div className="bg-light p-2 rounded-circle text-primary">
                <House size={18} />
              </div>
              <div>
                <span className="d-block text-muted" style={{fontSize: '0.75rem'}}>House</span>
                <span className="fw-semibold text-dark small">{user.houseName}</span>
              </div>
            </div>

            <div className="vr opacity-25"></div>

            <div className="d-flex align-items-center gap-2 text-start">
              <div className="bg-light p-2 rounded-circle text-primary">
                <FileBadge size={18} />
              </div>
              <div>
                <span className="d-block text-muted" style={{fontSize: '0.75rem'}}>Mahal ID</span>
                <span className="fw-semibold text-dark small">{user.mahalId}</span>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* 2. Stats Section - Side by Side (Standard Layout) */}
      <Row className="g-3 mb-4">
        <Col lg={6}>
          <Card className="stat-card border-0 shadow-sm h-100 py-2 ">
            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
              <div className="mb-2 text-success bg-opacity-10 bg-success p-2 rounded-circle">
                <Calendar size={20} />
              </div>
              <h3 className="fw-bold mb-0">{user.monthsPaid}</h3>
              <p className="text-muted small mb-0">Months Paid</p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} >
          <Card className="stat-card border-0 shadow-sm h-100 py-2">
            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
              <div className="mb-2 text-primary bg-opacity-10 bg-primary p-2 rounded-circle">
                <Users size={20} />
              </div>
              <h3 className="fw-bold mb-0">{user.familyMembers}</h3>
              <p className="text-muted small mb-0">Members</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* 3. Menu / Settings Section */}
      <Card className="border-0 shadow-sm rounded-4 mb-4">
        <Card.Body className="p-2">
          
          <SettingsButton 
            icon={<Pen size={18} />} 
            label="Edit Profile" 
            onClick={() => console.log("Edit")} 
          />
          
          <Link to='/Payments' className="text-decoration-none">
            <SettingsButton 
              icon={<CreditCard size={18} />} 
              label="Payment History" 
            />
          </Link>

          {/* Mobile Only Links */}
          <div className="d-lg-none">
            <Link to='/notifications' className="text-decoration-none">
              <SettingsButton 
                icon={<Bell size={18} />} 
                label="Notifications" 
                badge={2} // Optional: Add a notification badge capability
              />
            </Link>

            <Link to='/certificates' className="text-decoration-none">
              <SettingsButton 
                icon={<Newspaper size={18} />} 
                label="Certificates" 
              />
            </Link>
          </div>

        </Card.Body>
      </Card>

      {/* 4. Logout */}
      <Button 
        variant="light" 
        className="w-100 py-3 text-danger fw-medium d-flex align-items-center justify-content-center gap-2 rounded-4 border-0 shadow-sm"
        style={{ backgroundColor: '#fff0f0' }} // Subtle red background
      >
        <LogOut size={18} />
        Sign Out
      </Button>

      {/* Footer copyright or version could go here */}
      <div className="text-center mt-4 text-muted small opacity-50">
        v1.0.2
      </div>

    </Container>
  );
}

// Improved Helper Component
const SettingsButton = ({ icon, label, onClick, badge }) => (
  <div 
    onClick={onClick}
    className="settings-btn d-flex align-items-center justify-content-between p-3 cursor-pointer"
    style={{ cursor: 'pointer' }}
  >
    <div className="d-flex align-items-center gap-3">
      <span className="text-secondary">{icon}</span>
      <span className="text-dark fw-medium" style={{ fontSize: '0.95rem' }}>{label}</span>
    </div>
    <div className="d-flex align-items-center gap-2">
      {badge && <span className="badge bg-danger rounded-pill">{badge}</span>}
      <ChevronRight size={16} className="text-muted opacity-50" />
    </div>
  </div>
);

export default Profile;