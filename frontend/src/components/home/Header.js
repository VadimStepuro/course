import React, { useContext } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button, ButtonGroup} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar/Searchbar';
import { useNavigate } from 'react-router-dom';
import isAuthorised from '../Authorisation/IsAuthorised';
import Logout from '../Authorisation/Logout';

const Header = () => {
  const history = useNavigate()
  const handleRegister = () => {
    history("/register")
  }
  const handleLogIn = (e) => {
    history("/login");
  }


  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">PC Accessories</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
        { isAuthorised() ? 
        <div>
          <Button outline href="/cart">Cart</Button>
          &nbsp;
          <Logout/> 
        </div>:
        
        <ButtonGroup>
          <Button outline color='success' onClick={handleLogIn}>Log In</Button>
          &nbsp;
          <Button outline color='warning' onClick={handleRegister}>Register</Button>
        </ButtonGroup>}
        
        </NavItem>
      </Nav>
    </Navbar>
  );
}
export default Header;