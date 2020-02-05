import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {NavDropdown,Form,FormControl,Button,Nav} from 'react-bootstrap'
import {Link, withRouter} from 'react-router-dom'
import $ from 'jquery'

const NavigateBar = (props)=>{
    
    return(
        <div>
   <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
  <Navbar.Brand  className="brand-logo center"><Link to="/" className="link">Eyez</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
        <Nav.Link><Link to="/" className="link"><i className="material-icons">home </i></Link></Nav.Link>
        <div className="container info">
      
      <NavDropdown id="collasible-nav-dropdown" bg="info">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      </div>
    </Nav>
    
    <Nav>
    <Nav.Link><Link to="/about" className="link"><i className="material-icons">business_center </i></Link></Nav.Link>
        <Nav.Link><Link to="/contact" className="link"><i className="material-icons">call </i></Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
    )
            
}
export default withRouter(NavigateBar)