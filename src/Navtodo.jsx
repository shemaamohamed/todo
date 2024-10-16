import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles/Navtodo.css'
import Logo from "./assets/reshot-icon-wedding-planner-GUY54S937F.svg"
import { NavLink } from "react-router-dom";



function Navtodo() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navtodo "  sticky='top' >
    <Container>
      <Navbar.Brand  className='brand d-inline-block align-top'>
      <img
         src={Logo}
          width="30"
          height="30"
          alt="logo"
          style={{ marginRight: '5px' }}
          
        
        />
        YourTimePlanner
        
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to='/todolist' activeClassName="active">ToDoList</Nav.Link>
          {/* <Nav.Link  href="#link" activeClassName="active">Sticky</Nav.Link> */}
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
  )
}

export default Navtodo