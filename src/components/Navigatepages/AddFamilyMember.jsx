import React, { useState } from 'react';
import { Container, Card, Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap';
import { UserPlus, X, User, Users, Calendar, LeafyGreen } from 'lucide-react';
import { Link } from 'react-router-dom';

function AddFamilyMember() {
  const [validated, setValidated] = useState(false);

  // Handle Form Submission
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    // Add your API call here
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 py-4">
      
      {/* Main Card Container */}
      <Card className="border-0 shadow-lg rounded-4 w-100 overflow-hidden" style={{ maxWidth: '600px' }}>
        
        {/* Header with Gradient */}
        <div className="bg-primary p-4 text-white text-center position-relative" 
             style={{ background: 'linear-gradient(135deg, #00874fff 0%, #078b43ff 100%)' }}>
          
          <div className="mb-2 bg-white bg-opacity-25 rounded-circle d-inline-flex p-3">
            <UserPlus size={32} className="text-white" />
          </div>
          <h4 className="fw-bold mb-1">Add Family Member</h4>
          <p className="small mb-0 opacity-75">Enter details to update your Mahal census</p>

          {/* Close Button (Optional) */}
          <Link to="/Family" className="position-absolute top-0 end-0 p-4 text-white">
            <X size={24} />
          </Link>
        </div>

        <Card.Body className="p-4 p-md-5">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            
            {/* 1. Name Field */}
            <Form.Group className="mb-4">
              <div className="d-flex align-items-center gap-2 mb-2 text-secondary">
                <User size={16} />
                <span className="small fw-bold text-uppercase">Full Name</span>
              </div>
              <FloatingLabel controlId="floatingName" label="Enter full name">
                <Form.Control 
                  type="text" 
                  placeholder="Enter full name" 
                  className="rounded-3 border-light bg-light"
                  required 
                />
                <Form.Control.Feedback type="invalid">Name is required</Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>

            <Row className="g-3 mb-4">
              {/* 2. Relation Field */}
              <Col md={6}>
                <div className="d-flex align-items-center gap-2 mb-2 text-secondary">
                  <Users size={16} />
                  <span className="small fw-bold text-uppercase">Relationship</span>
                </div>
                <FloatingLabel controlId="floatingSelect" label="Select relation"><br />
                  <Form.Select aria-label="Relation" className="rounded-3 border-light bg-light" required>
                    <option value="">Select...</option>
                    <option value="father">Father</option>
                    <option value="mother">Mother</option>
                    <option value="spouse">Spouse (Wife/Husband)</option>
                    <option value="son">Son</option>
                    <option value="daughter">Daughter</option>
                    <option value="brother">Brother</option>
                    <option value="sister">Sister</option>
                    <option value="other">Other</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">Please select a relation</Form.Control.Feedback>
                </FloatingLabel>
              </Col>

              {/* 3. Age Field */}
              <Col md={6}>
                <div className="d-flex align-items-center gap-2 mb-2 text-secondary">
                  <Calendar size={16} />
                  <span className="small fw-bold text-uppercase">Age</span>
                </div>
                <FloatingLabel controlId="floatingAge" label="Years">
                  <Form.Control 
                    type="number" 
                    placeholder="Age" 
                    min="0" 
                    max="120" 
                    className="rounded-3 border-light bg-light"
                    required 
                  />
                  <Form.Control.Feedback type="invalid">Valid age required</Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>

            <hr className="my-4 opacity-10" />

            {/* Action Buttons */}
            <div className="d-flex gap-3">
              <Button 
                variant="light" 
                className="w-100 py-3 rounded-3 text-secondary border fw-medium"
                as={Link} to="/Family"
              >
                Cancel
              </Button>
              <Button 
                variant="primary" 
                type="submit" 
                className="w-100 py-3 rounded-3 fw-bold shadow-sm"
                style={{ background: 'Green', border: 'none' }}
              >
                Save Member
              </Button>
            </div>

          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AddFamilyMember;