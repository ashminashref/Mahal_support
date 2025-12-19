import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Bell, CheckCheck } from "lucide-react";
import "../pages/css/Notifications.css";

// Mock Data
const initialNotifications = [
  {
    id: 1,
    title: "Payment Reminder",
    description: "Your monthly contribution for December 2025 is pending. Please pay before the due date.",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    title: "New Announcement",
    description: "Eid Prayer Timings have been posted. Check the announcements for details.",
    time: "1 day ago",
    unread: true,
  },
  {
    id: 3,
    title: "Payment Received",
    description: "Your payment of ₹500 for November 2025 has been successfully received. Thank you!",
    time: "3 days ago",
    unread: false,
  },
  {
    id: 4,
    title: "Community Meeting",
    description: "Monthly community meeting is scheduled for Sunday at 4 PM. Your presence is requested.",
    time: "5 days ago",
    unread: false,
  },
];

function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);

  // Simple handler to "mark all as read" visually
  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <Container fluid className="p-4 bg-light" style={{ minHeight: "100vh" }}>
      
      {/* Header Section */}
      <div className="d-flex align-items-end justify-content-between mb-4">
        <div>
          <h3 className="fw-bold mb-1">Notifications</h3>
          <p className="text-muted mb-0">
            {unreadCount > 0 ? `${unreadCount} unread notifications` : "No new notifications"}
          </p>
        </div>
        
        {/* Mark All Read Button */}
        <Button 
          variant="link" 
          className="text-decoration-none text-success fw-medium d-flex align-items-center gap-2 p-0"
          onClick={markAllRead}
        >
          <CheckCheck size={18} />
          Mark all read
        </Button>
      </div>

      {/* Notifications List */}
      <div className="d-flex flex-column gap-3" style={{ maxWidth: "800px" }}>
        {notifications.map((notif) => (
          <Card 
            key={notif.id} 
            className={`border-0 shadow-sm rounded-3 ${notif.unread ? "bg-success-subtle-custom" : "bg-white"}`}
          >
            <Card.Body className="p-3">
              <div className="d-flex gap-3">
                
                {/* Icon Wrapper */}
                <div className="flex-shrink-0">
                  <div className="icon-circle rounded-circle d-flex align-items-center justify-content-center">
                    <Bell size={20} className="text-success" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-start">
                    <h6 className={`mb-1 ${notif.unread ? "fw-bold text-success-dark" : "fw-bold text-dark"}`}>
                      {notif.title}
                    </h6>
                    
                    {/* Unread Dot Indicator */}
                    {notif.unread && (
                      <span className="unread-dot rounded-circle bg-success"></span>
                    )}
                  </div>
                  
                  <p className="text-secondary small mb-2 text-truncate-2">
                    {notif.description}
                  </p>
                  <p className="text-muted extra-small m-0">
                    {notif.time}
                  </p>
                </div>

              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

    </Container>
  );
}

export default Notifications;