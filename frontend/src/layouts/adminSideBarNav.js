import React from "react";
import SideNav, {
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from 'react-router-dom';
import { logout, getName,getRole } from '../components/login/helpers';

export const SideBar = ({ sideNavExpanded, setSideNavExpanded }) => {
  let navigate = useNavigate();


  return (
    <>
      <SideNav
      style={{ background: '#EF3A47',fontWeight: "bold", color:"#fff" }}
      onToggle={() => {
        setSideNavExpanded(!sideNavExpanded);
      }}
        expanded={sideNavExpanded}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="none">
        <NavItem eventKey="profile">
            <NavIcon>
              <i className="fa fa-fw fa-user" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            {/* <NavText>{getName().toUpperCase()}</NavText> */}
          </NavItem>

          <hr/>
          <NavItem eventKey="Dashboard" onClick={()  => navigate('/admin/dashboard')}>
            <NavIcon>
              <i className="fas fa-th-large" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Dashboard</NavText>
          </NavItem>
          <NavItem eventKey="Attendees" onClick={()  => navigate('/admin/attendees')}>
            <NavIcon>
              <i className="fas fa-calendar-alt" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Attendees</NavText>
          </NavItem>
          <NavItem eventKey="Applicant" onClick={()  => navigate('/admin/applicant')}>
            <NavIcon>
              <i className="fas fa-user-tie" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Applicant</NavText>
          </NavItem>
          <NavItem eventKey="Announcement" onClick={()  => navigate('/admin/announcement')}>
            <NavIcon>
              <i className="fas fa-bullhorn" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Announcement</NavText>
          </NavItem>
          <NavItem eventKey="Health" onClick={()  => navigate('/admin/health')}>
            <NavIcon>
              <i className="fas fa-heartbeat" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Health</NavText>
          </NavItem>

            {/* {getRole() === 'admin' &&  */}
            <NavItem eventKey="User" onClick={()  => navigate('/admin/user')}>
                        <NavIcon>
                          <i className="fas fa-users" style={{ fontSize: "1.75em" }} />
                        </NavIcon>
                        <NavText>User</NavText>
                      </NavItem>
                      {/* } */}
        

        
        <hr/>
          <NavItem eventKey="logout" onClick={() => logout(() => navigate('/'))}>
            <NavIcon >
              <i className="fa  fa-sign-out-alt" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Logout</NavText>
          </NavItem><hr/>
          {/* <NavItem eventKey="charts">
            <NavIcon>
              <i
                className="fa fa-fw fa-clinic-medical"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>Illness</NavText>
            <NavItem eventKey="charts/linechart">
              <NavText> <i
                className="fa fa-fw fa-crutch"
                style={{ fontSize: "1.75em" }}/> 
                <Link to="/disease">Disease</Link></NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavText><i
                className="fa fa-fw fa-disease"
                style={{ fontSize: "1.75em" }}/> Injury</NavText>
            </NavItem>
          </NavItem> */}
        </SideNav.Nav>
      </SideNav>

      <style>
        {`
    
        
        `}
      </style>
    </>
  );
};

export default SideBar;
