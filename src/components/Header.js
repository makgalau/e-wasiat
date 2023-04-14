import logo from '../assets/images/logo.png';

import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg';

const Header = () => (
  <header>
    <Navbar fixed="top" color="light"  light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>

      <Container>
        <Row noGutters className="position-relative w-200 align-items-center">
          <Col className="d-flex justify-content-xs-start justify-content-center">
            <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 100 }}>
            <img src={require('../assets/images/e-Wasiat.png')} alt='e-Wasiat' width='150%'/> 
            </NavbarBrand>
          </Col>
        </Row>
      </Container>

    </Navbar>
  </header>
);

export default Header;