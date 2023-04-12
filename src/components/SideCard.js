import { Button, UncontrolledAlert, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  import { NavLink } from 'react-router-dom';
  import { BrowserRouter as Router } from 'react-router-dom';



const BANNER = "https://i.imgur.com/CaKdFMq.jpg";
const SideCard = () => (
  <>

    <Card>
      <CardImg top width="50%" src={BANNER} alt="banner" />
      <CardBody>
        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">
          (Nama USer)
        </CardTitle>
    
    {/* <Router> */}
    <CDBSidebar textColor="#000" backgroundColor="#fff" width="100%">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
            >
            My Menu
            </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
                <NavLink exact to="/" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="columns">Wasiatku</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/tables" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="table">Wasiat Untukku</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/profile" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
                </NavLink>
                <NavLink
                    exact
                    to="/hero404"
                    target="_blank"
                    activeClassName="activeClicked"
                >
                    <CDBSidebarMenuItem icon="exclamation-circle">
                        Logout
                    </CDBSidebarMenuItem>
                </NavLink>
            </CDBSidebarMenu>
        </CDBSidebarContent>
        
        </CDBSidebar>  
    {/* </Router> */}

      </CardBody>
    </Card>
  </>
);
export default SideCard;