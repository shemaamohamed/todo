import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/section.css';
import planner  from '../assets/pexels-tara-winstead-8386681.jpg'
import { Link } from 'react-router-dom';
const Section = () => {
  return (
    <Container fluid className="hero-section " >
      <Row  className="align-items-center align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <Col md={6} className="hero-content">
          <h1 className="hero-title">Plan Your Time Effectively with YourTimePlanner</h1>
          <p className="hero-subtitle">
            Plan your day and stay on top of your tasks with our easy-to-use time planner.
          </p>
          <div className="hero-buttons">
            <Button as={Link} to="/todolist" variant="primary" size="lg" className="me-3">
              Get Started for Free
            </Button>
           
          </div>
        </Col>

        {/* Right Side: Image */}
        <Col md={5} className="text-center hero-image">
          <img src={planner}
           alt="Hero Image" 
           className="img-fluid" 
             style={{
              borderRadius: '10px',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
