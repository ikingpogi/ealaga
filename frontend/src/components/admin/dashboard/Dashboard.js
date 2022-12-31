import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import SideBar from "../../../layouts/adminSideBarNav";
import { Card} from 'react-bootstrap';
import moment from 'moment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";

function Dashboard() {
 
  let navigate = useNavigate();

const [sideNavExpanded, setSideNavExpanded] = React.useState(true);

function handleResize() {

  if (window.innerWidth <= 375) {
    setSideNavExpanded(false);

  }
}

React.useEffect(() => {
  window.addEventListener("resize", handleResize);

  handleResize(); // on-component-mount, check already to see if user has a small device

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []); // initialize event listeners on-mount & clean on-unmount

const contentStyle = {
  marginLeft: sideNavExpanded ? "250px" : "70px", // arbitrary values
  transition: "margin 0.2s ease"
};

//================================================================================================================

          const [getTotalAttendees, setTotalAttendees] = useState([]); 
          const [getAllAttendees, setAllAttendees] = useState([]); 
          const [getTotalApplicant, setTotalApplicant] = useState([]); 
          const [getTotalUser, setTotalUser] = useState([]); 
          const [getTotalReview, setTotalReview] = useState([]); 

            const fetchAttendees= () => {
              axios({
              method: "get",
              url: `/api/dashboard/total`,
              headers: {
                  "Content-Type" : "application/json",
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Headers': '*',
              },
              }).then(response => {

                // console.log(response)
                setTotalAttendees(response.data.totalAttendees);
                setAllAttendees(response.data.allAttendees);
                setTotalApplicant(response.data.totalApplicant);
                setTotalUser(response.data.totalUser);
                setTotalReview(response.data.totalReviews);
            }).catch((err) => console.log(err));
            };
            // console.log(AllHealthProblem)
            useEffect(() => {
              fetchAttendees();
              const interval = setInterval(fetchAttendees, 2000);

            // Clean up the interval when the component unmounts
            return () => clearInterval(interval);
            },[]);

           console.log(getAllAttendees)
    return (
        <div style={contentStyle}>
        <br />
        <h1 style={{color:"rgb(239, 58, 71)"}}>DASHBOARD</h1>
        <h5>{moment(new Date()).format("MMMM DD, YYYY dddd ")}</h5>
        <hr style={{opacity:1}} />
        <SideBar  setSideNavExpanded={setSideNavExpanded} sideNavExpanded={sideNavExpanded} /> 

  
  
    
        <div class="container-fluid">
          
                <div class="row g-6 mb-6">
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-2">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Total Attendees Today</span>
                                        <span class="h3 font-bold mb-0"> <CountUp end={getTotalAttendees == 0 ? 0 : getTotalAttendees} duration={0.5} delay={0.5} /></span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                        <i className="fas fa-calendar-alt"  />
                                        </div>
                                    </div>
                                </div>
                                <a href="javascript:void(0)" onClick={()  => navigate('/admin/attendees')} class="mt-2 mb-0 text-sm">
                                <span class="badge badge-pill bg-soft-secondary text-danger me-1">
                                    <i class="fas fa-info-circle me-1"></i>View Details</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card shadow border-2">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Total Applicant</span>
                                        <span class="h3 font-bold mb-0"> <CountUp end={getTotalApplicant == 0 ? 0 : getTotalApplicant} duration={0.5} delay={0.5} /></span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                        <i className="fas fa-user-tie" />
                                        </div>
                                    </div>
                                </div>
                                <a href="javascript:void(0)" onClick={()  => navigate('/admin/applicant')} class="mt-2 mb-0 text-sm">
                                <span class="badge badge-pill bg-soft-secondary text-danger me-1">
                                    <i class="fas fa-info-circle me-1"></i>View Details</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card shadow border-2">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Total Review</span>
                                        <span class="h3 font-bold mb-0"> <CountUp end={getTotalReview == 0 ? 0 : getTotalReview} duration={0.5} delay={0.5} /></span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                                            <i class="bi bi-clock-history"></i>
                                        </div>
                                    </div>
                                </div>
                                <a href="javascript:void(0)" class="mt-2 mb-0 text-sm">
                                <span class="badge badge-pill bg-soft-secondary  text-danger me-1">
                                    <i class="fas fa-info-circle me-1"></i>View Details</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card shadow border-2">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Total Users</span>
                                        <span class="h3 font-bold mb-0"> <CountUp end={getTotalUser == 0 ? 0 : getTotalUser} duration={0.5} delay={0.5} /></span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                        <i className="fas fa-users" />
                                        </div>
                                    </div>
                                </div>
                                <a href="javascript:void(0)" onClick={()  => navigate('/admin/user')} class="mt-2 mb-0 text-sm">
                                <span class="badge badge-pill bg-soft-secondary text-danger me-1">
                                    <i class="fas fa-info-circle me-1"></i>View Details</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
      <br></br>
      <div class="container-fluid">
          
          <div class="row g-6 mb-6">
            
      <Row>
        <Col sm={8}><TableContainer component={Paper}>
        <h4 class="px-3 mt-3 mb-3" >Today Attendees</h4>
      <Table aria-label="caption table">
        <caption>View Details</caption>
        <TableHead>
        </TableHead>
        <TableHead>
          <TableRow>
          <TableCell>ID</TableCell>
            <TableCell>Full Name</TableCell>
            <TableCell>Barangay</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
              getAllAttendees?.map(user => { 
                return <><TableRow>
                       <TableCell component="th" scope="row">
                        {user._id}
                        </TableCell>
                        <TableCell component="th" scope="row">
                        { [user.user_id?.last_name,", ",user.user_id?.first_name,", ",user.user_id?.middle_name]}
                        </TableCell>
                        <TableCell component="th" scope="row">
                        {user.user_id?.address?.barangay ? user.user_id?.address?.barangay : "none"}
                        </TableCell>
                        <TableCell component="th" scope="row">
                        {user.category }
                        </TableCell>
                        <TableCell component="th" scope="row">
                        {user.user_id?.email}
                        </TableCell>
                        <TableCell component="th" scope="row">
                        {user.status == "not attended" ? <div className="redBg">
                            <span>to attend</span>
                          </div> : <div className="greenBg">
                            <span>attended</span>
                          </div>}
                        </TableCell>
                        
                        
                      </TableRow>  
                      </>
        })
            }
          
            
     
        </TableBody>
      </Table>
    </TableContainer></Col>
        <Col sm={4}><TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="caption table">
        <caption>View Details</caption>
        <TableHead>
          <TableRow>
            <TableCell >Calories</TableCell>
            <TableCell >Fat&nbsp;(g)</TableCell>
            <TableCell >Fat&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
     
            <TableRow>
              <TableCell >dwa</TableCell>
              <TableCell >dwad</TableCell>
              <TableCell >dwad</TableCell>
            </TableRow>
     
        </TableBody>
      </Table>
    </TableContainer></Col>
      </Row>
   
                    </div>
                </div>
  

      <style>
        {`
        @import url(https://unpkg.com/@webpixels/css@1.1.5/dist/index.css);

        /* Bootstrap Icons */
        @import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.4.0/font/bootstrap-icons.min.css");

        hr {
          opacity: 0.4
      }
      .colStyle{
        margin-right: -115px;
      }

      @media screen and (max-width : 1500px) {
        .colStyle{
          margin-right: 0px;
        
        }
    }
    
    @media screen and (min-width : 768px) and (max-width : 1024px) {
      .colStyle{
        margin-right: 0px;
      
      }
    }

      
      .vl {
        border-left: 2px solid #EF3A47;
        height: 50px;
      }

      .redBg {
          background-color: rgba(255, 0, 0, 0.2);
          color: red;
          padding: 0.3em 0.5em;
          margin: 0.5em;
          display: flex;
          text-decoration: none;
          border-radius: 2em;
          font-weight: bolder;
          justify-content: center;
        }
        .greenBgButton {
          background-color: rgba(0, 255, 0, 0.2);
          color: green;
          padding: 10px;
          margin: 0.5em;
          display: flex;
          text-decoration: none;
          border-radius: 2em;
          font-weight: bolder;
          justify-content: center;
          box-shadow: 0 5px 10px rgba(100, 100, 100, 0.6);
          
        }
        .greenBgButton:hover {
          text-decoration: none;
          color: white;
          background-color: green;
          box-shadow: 0 5px 10px rgba(0, 255, 0, 0.6);
        }

        .DisablegreenBgButton {
          background-color: rgba(0, 255, 0, 0.2);
          opacity: 0.2;
          color: green;
          padding: 10px;
          margin: 0.5em;
          display: flex;
          text-decoration: none;
          border-radius: 2em;
          font-weight: bolder;
          justify-content: center;
          box-shadow: 0 5px 10px rgba(100, 100, 100, 0.6);
          
        }

      .greenBg {
          background-color: green;
          color: white;
          padding: 0.3em 0.5em;
          margin: 0.5em;
          display: flex;
          text-decoration: none;
          border-radius: 2em;
          font-weight: bolder;
          justify-content: center;
        }

      .yellowBg {
          background-color: orange;
          color: white;
          padding: 0.3em 0.5em;
          margin: 0.5em;
          display: flex;
          text-decoration: none;
          border-radius: 2em;
          font-weight: bolder;
          justify-content: center;
        }
        `}
      </style>

        </div>
    );

}

export default Dashboard;