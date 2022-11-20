import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavItem,
  MobileIcon,
  NavLinks,
  NavMenu,
  NavLinkR
} from "./NavbarElements";
import { IconContext } from "react-icons/lib";
import Logo from "../images/logos.png";
import { useNavigate } from "react-router-dom";
import { logout} from '../components/login/helpers';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  let navigate = useNavigate();
  return (
    
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/client/dashboard"  onClick={toggleHome}>
            <img src={Logo} style={{width: "60%", height: "auto"}} alt="Agrigators Earth" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu className="justify-content-end">
            <NavItem >
              <NavLinkR
                to="/client/dashboard" 
              
              >
                Dashboard
              </NavLinkR>
            </NavItem>
            <NavItem >
              <NavLinkR
                to="/client/profile/information"
               
              >
                Profile
              </NavLinkR>
            </NavItem>
            <NavItem>
              <a href="#" onClick={() => logout(() => navigate('/'))} style={{"text-decoration": "none"}}><NavLinkR to="/logout">Logout</NavLinkR></a>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
