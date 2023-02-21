import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link,useNavigate} from 'react-router-dom';
export default function Header() {
  const navigate = useNavigate();
  const handlelogout = ()=>{
       localStorage.removeItem("authToken");
       navigate("/login")
  }
 return(
<div>
<Navbar bg="success" expand="lg">
      <Container>
        <Navbar.Brand to="/" className='fst-italic fst-bold fs-1'>Shree Silks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mb-2">
            <Nav.Link className="fs-5" to="/home">Home</Nav.Link>
            <Nav.Link className="fs-5" to="/link">Shop</Nav.Link>
            {(localStorage.getItem("authToken"))?
            <Nav.Link className="fs-5" to="/home">my favorites</Nav.Link>
            :""}
            {(!localStorage.getItem("authToken"))?
            <div className='d-flex '>
            <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
            <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
            </div>
            :
            <div>
            <div className='btn bg-white text-success mx-1'>my Fav
            </div>
            <div className='btn bg-white text-success mx-1' onClick={handlelogout}>logout
            </div>
            </div>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
 );

}
