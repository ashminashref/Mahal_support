import React from "react";
import { Card, Badge, Button, Container } from "react-bootstrap";
import { User, Plus } from "lucide-react";
import "../pages/css/Family.css";

const familyData = [
  { name: "Ahmed Khan", role: "Head", age: "45 years" },
  { name: "Fatima Khan", role: "Wife", age: "40 years" },
  { name: "Ibrahim Khan", role: "Son", age: "18 years" },
  { name: "Aisha Khan", role: "Daughter", age: "14 years" },
];

function Family() {
  return (
    <Container fluid className="p-4 position-relative" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      
      {/* Page Header */}
      <div className="mb-4">
        <h3 className="fw-bold mb-1">Family Members</h3>
        <p className="text-muted">{familyData.length} members registered</p>
      </div>

      {/* Members List */}
      <div className="d-flex flex-column gap-3" style={{ maxWidth: "800px" }}>
        {familyData.map((member, index) => (
          <Card key={index} className="border-0 shadow-sm p-2 rounded-3 bg-white">
            <Card.Body className="d-flex align-items-center gap-3">
              
              {/* Avatar Circle */}
              <div className="avatar-circle rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                <User size={24} className="text-success" />
              </div>

              {/* Member Details */}
              <div className="d-flex flex-column">
                <h6 className="fw-bold mb-1 text-dark">{member.name}</h6>
                <div className="d-flex align-items-center gap-2 text-muted small">
                  <span className="fw-medium text-secondary">{member.role}</span>
                  {/* Age Badge */}
                  <Badge bg="light" text="dark" className="border fw-normal rounded-pill px-2">
                    {member.age}
                  </Badge>
                </div>
              </div>

            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Floating Action Button (FAB) */}
      <Button 
        variant="success" 
        className="position-fixed rounded-circle d-flex align-items-center justify-content-center shadow-lg hover-scale"
        style={{ 
          bottom: "40px", 
          right: "40px", 
          width: "56px", 
          height: "56px",
          zIndex: 100 
        }}
      >
        <Plus size={28} color="white" />
      </Button>

    </Container>
  );
}

export default Family;