import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css'

const Header = ({handleSearch}) => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand className='main' as={Link} to='/'>
                {/* <img className='image' src='logo.jpg' width={45} alt="" /> */}
                <p>Inventory Management System</p>
            </Navbar.Brand>
           
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"/>
            
                <Nav className=''>
                <Nav.Link  as={Link} to='/products'>Products</Nav.Link>
                
                <Nav.Link  as={Link} to='/registration'>registration</Nav.Link>

                { user ? (<button className='header-logut-btn' onClick={()=>signOut(auth)}>Log out</button>)
                        : 
                            (<Nav.Link as={Link} to='/login'>Log in</Nav.Link>)
                        }
                        {
                         user ?
                        (<span className='header-d-name'>{user?.displayName}</span>) : ''
                        } 
               
                </Nav>
                <form className="d-flex" onSubmit={handleSearch}>

<input
  className="form-control me-2"
  type="search"
  name="searchText"
  placeholder="Search"
  aria-label="Search"
/>
<button className="btn btn-outline-success" type="submit">
  Search
</button>
</form>

            </Navbar.Collapse>
        </Container>

    </Navbar>
    );
};

export default Header;